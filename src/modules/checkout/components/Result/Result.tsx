import { Button, Result as ResultAntd } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export type userDataType = {
    lastname: string,
    firstname: string,
    middlename?: string
    email: string,
    tel: string,
}

export const Result = () => {
    const location = useLocation();
    const state = location?.state
    const userData = state?.userData as userDataType | undefined
    const navigate = useNavigate();

    useEffect(()=>{
        if(!state){
            navigate('/cart')
        }
    },[state])

    const goToCatalog = () => {
        navigate('/')
    }

    return <>
                {userData && 
                    <ResultAntd
                        status="success"
                        className="resuit__info"
                        title={`${userData.lastname} ${userData.firstname} ${userData.middlename}`} 
                        subTitle={`Ваш заказ отправлен на e-mail: ${userData.email}`}
                        extra={[
                            <Button key="buy" onClick={goToCatalog} style={{backgroundColor: '#fad89d'}}>
                              Вернуться на главную
                            </Button>
                          ]}
                    />
                }
            </>
}