import { Layout as AntdLayout, Button, Drawer, Dropdown, MenuProps } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import burger_icon from '../../common/images/burger_icon.png';
import icon_viber from '../../common/images/icon_viber.png';
import icon_telegram from '../../common/images/icon_telegram.png';
import icon_whatsapp from '../../common/images/icon_whatsapp.png';
import icons_instagram from '../../common/images/icons_instagram.png';
import icons_facebook from '../../common/images/icons_facebook.png';
import icons_pinterest from '../../common/images/icons_pinterest.png';
import { SearchOutlined,
        HeartOutlined,
        ShoppingCartOutlined,
        LoginOutlined,
        DownOutlined,
} from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';
import { Container } from './components/Container';
import { useState } from 'react';
import './Layout.css'

const { Header, Content, Footer } = AntdLayout;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a href="tel:+375296554545" className="contact-us__tel">
        +375 (29) 655-45-45
      </a>
    ),
    style: {
      cursor: 'default',
      backgroundColor: '#fff'
    }
  },
  {
    key: '2',
    label: (
      <p className="working__hours">
        Время работы: пн-вс,<br/>с 09:00 до 21:00
      </p>
    ),
    disabled: true,
    style: {
      cursor: 'default',
      padding:'0 20 0 20'
    }
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: (
      <span className="messagers__title">Свяжитесь с нами</span>
    ),
    disabled: true,
    style: {
      cursor: 'default'
    }
  },
  {
    key: '4',
    label: (
      <div className="contact-us__messagers">
        <a className="messager__viber" href="#">
          <img className="icon__viber" src={icon_viber} style={{ width: '30px'}}/>
        </a>
        <a className="messager__telegram" href="#">
          <img className="icon__telegram" src={icon_telegram} style={{ width: '30px'}}/>
        </a>
        <a className="messager__whatsapp" href="#">
          <img className="icon__whatsapp" src={icon_whatsapp} style={{ width: '30px'}}/>
        </a>
      </div>
    ),
    style: {
      cursor: 'default',
      backgroundColor: '#fff'
    }
  },
  {
    type: 'divider',
  },
  {
    key: '5',
    label: (
      <span className="social__title">Мы в социальных сетях</span>
    ),
    disabled: true,
    style: {
      cursor: 'default'
    }
  },
  {
    key: '6',
    label: (
      <div className="contact-us__social">
        <a className="social__instagram" href="#">
          <img className="icons__instagram" src={icons_instagram} style={{ width: '30px'}}/>
        </a>
        <a className="social__facebook" href="#">
          <img className="icons__facebook" src={icons_facebook} style={{ width: '30px'}}/>
        </a>
        <a className="icons__pinterest" href="#">
          <img className="icons__pinterest" src={icons_pinterest} style={{ width: '30px'}}/>
        </a>
      </div>
    ),
    style: {
      cursor: 'default',
      backgroundColor: '#fff'
    }
  },
];

export const Layout = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (<AntdLayout style={{ height: '100vh', backgroundColor: '#fff'}}>
            <Header
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                width: '100%',
                backgroundColor: '#fff'
              }}
            >
              <Container >
                <div className="header__wrapper">
                  <div className='header__menu'>
                    <div className='vertical__menu'>
                      <Button type="primary" onClick={showDrawer}>
                        <img className="burger_icon" src={burger_icon} style={{ width: '30px'}}/> 
                        <span>Каталог</span>
                      </Button>
                      <Drawer 
                        title="VD" 
                        onClose={onClose} 
                        open={open} 
                        placement={'left'}
                      >
                        <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                        > 
                          <Link to="/" onClick={onClose}>Главная</Link>
                          <Link to="/promotion" onClick={onClose}>Акции</Link>
                          <Link to="/catalog" onClick={onClose}>Каталог</Link>
                          <Link to="/brands" onClick={onClose}>Бренды</Link>
                        </div>
                      </Drawer>
                    </div>

                    <div className='dropdown__menu'>
                      <Dropdown menu={{ items }} placement="bottom" arrow>
                        <Button>
                          +375 (29) 655-45-45
                          <DownOutlined />
                        </Button>
                      </Dropdown> 
                    </div>
                  </div>

                  <Link to="/" className='header__logo'>VD</Link>
                  
                  <ButtonGroup className='header__btn'>
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><SearchOutlined />Поиск</Button> 
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><LoginOutlined />Войти</Button>
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><HeartOutlined />Избранное</Button>
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><ShoppingCartOutlined />Корзина</Button>
                  </ButtonGroup>
                  
                </div>
              </Container>
            </Header>
            <Container>
              <Menu />
            </Container>
            <Content>
              <Container>
                <div
                  style={{
                    padding: 20,
                    minHeight: 380,
                  }}
                >
                  <Outlet/>
                </div>
              </Container>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <Container>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Container>
            </Footer>
          </AntdLayout>
          )
}