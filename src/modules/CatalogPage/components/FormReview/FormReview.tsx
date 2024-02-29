import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import '../../CatalogPage.css'
import './FormReview.css'
import TextArea from 'antd/es/input/TextArea';

type FieldsType = {
    advantages?: string,
    defects?: string,
    review?: string,
    username: string
}

export const FormReview = () => {
    
    const handleReviewFinish = (values: FieldsType) => {
        notification.success({
            message: `Спасибо, ${values.username}! Ваш отзыв важен для нас`,
            duration: 1.5
        })
    }

    return <div>
                <div className='formReview__title'>Оставьте свой отзыв</div>
                <ConfigProvider
                    theme={{
                        components: {
                            Input: {
                                colorPrimary: '#fad89d',
                                colorPrimaryActive: '#fad89d',
                                colorPrimaryHover: '#fad89d',
                                colorTextPlaceholder: '#728eae',
                                colorText:'#172542',
                                colorBorder: '#d9e4f1'
                            },
                        },
                    }}
                >
                    <Form className='formReview__form__items' onFinish={(values: FieldsType)=>handleReviewFinish(values)}>
                        <div className='formReview__form__top'>
                            <Form.Item className='formReview__form__item' name="advantages">
                                <TextArea className='formReview__item__advantages'placeholder="Достоинства" maxLength={200} rows={4}/>
                            </Form.Item>

                            <Form.Item className='formReview__form__item' name="defects">
                                <TextArea className='formReview__item__defects' placeholder="Недостатки" maxLength={200} rows={4}/>
                            </Form.Item>
                        </div>
                    
                        <Form.Item className='formReview__form__item' name="review">
                            <TextArea className='formReview__item__review' placeholder="Ваш отзыв" maxLength={200} rows={4}/>
                        </Form.Item>
                
                        <Form.Item
                            className='formReview__form__item'
                            name="username"
                            rules={[{ required: true, message: 'Напешите Ваше ФИО' }]}
                        >
                            <Input className='formReview__item__name' placeholder="Ваше ФИО" prefix={'*'} maxLength={50}/>
                        </Form.Item>

                        <Form.Item className='formReview__form__item'>
                            <Button className='formReview__btn__send' htmlType="submit">
                                Отправить отзыв
                            </Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
                
            </div>
}