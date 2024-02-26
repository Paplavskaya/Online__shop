import { Breadcrumb } from "antd";
import { NavLink, useLocation} from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';

export const BreadCrumb = () => {
    const location = useLocation();
    const capitalizeChar = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    const breadCrumbView = () => {
        const {pathname} = location;
        
        console.log(pathname)
        const pathnames = pathname.split('/').filter((item)=>item);
        console.log(pathnames)
        return(
            <div>
                <Breadcrumb>
                    {pathnames.length > 0 ? (
                        <Breadcrumb.Item>
                            <NavLink to="/"><HomeOutlined /></NavLink>
                        </Breadcrumb.Item>
                    ):(
                        <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index+1).join('/')}`;
                        const title = name.replace(/-/g, " ");
                        const isLast = index === pathnames.length - 1;

                        return isLast ? (
                            <Breadcrumb.Item>{capitalizeChar(title)}</Breadcrumb.Item>
                        ):(
                            <Breadcrumb.Item>
                                <NavLink to={`${routeTo}`}>{capitalizeChar(title)}</NavLink>
                            </Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
            </div>
        )
    }

    return <>{breadCrumbView()}</>
}