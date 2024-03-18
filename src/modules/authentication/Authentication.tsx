import { Button, Form, Input, ConfigProvider } from 'antd'
import './Authentication.css'
import { useLocation } from 'react-router-dom';

export const Authentication = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/login'

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };

    return <div className="auth__wrapper">
                <h2 className="auth__title">
                    {isLogin ? 'Войти в личный кабинет' : 'Зарегистрируйтесь'}
                </h2>
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
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{width: '100%'}}
                    >
                        {isLogin ? 
                            <div>
                                <Form.Item
                                    className='login-form__item'
                                    name="username"
                                    rules={[{ required: true, message: 'Пожалуйста, введите свое имя!' }]}
                                >
                                    <Input placeholder="Имя" />
                                </Form.Item>
                                <Form.Item
                                    className='login-form__item'
                                    name="password"
                                    rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
                                >
                                    <Input.Password
                                        type="password"
                                        placeholder="Пароль"
                                    />
                                </Form.Item>
                            </div>
                            : 
                            <div>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Пожалуйста, введите свой E-mail!'}]}
                                >
                                    <Input type='email' placeholder="E-mail"/>
                                </Form.Item>
                                <Form.Item
                                    className='login-form__item'
                                    name="password"
                                    rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
                                    hasFeedback
                                >
                                    <Input.Password type="password" placeholder="Пароль"/>
                                </Form.Item>
                                <Form.Item
                                    className='login-form__item'
                                    name="confirm"       
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[{required: true, message: 'Пожалуйста, повторите пароль!'},
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Неправильный ввод пароля!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password placeholder="Повторите пароль" />
                                </Form.Item>
                            </div>                    
                        }
                        <Form.Item className='login-form__item'>
                            <Button htmlType="submit" className="login-form-button">
                                {isLogin ? 'Войти на сайт' : 'Зарегистрироваться'}
                            </Button>
                        </Form.Item>
                        <Form.Item className='login-form__item'>
                            {isLogin ?
                                <div className='login-form_linck'>
                                    Нет аккаунта? <a href="/registration" >Зарегистрируйтесь</a>
                                </div>   
                                : 
                                <div className='login-form_linck'>
                                    Есть аккаунт? <a href="/login">Войдите</a>
                                </div>  
                            }                          
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
}