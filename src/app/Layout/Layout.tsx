import { Layout as AntdLayout, Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import logo from '../../common/images/logo.png';
import { SearchOutlined,
        HeartOutlined,
        ShoppingCartOutlined,
        LoginOutlined
} from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';
import { Container } from './components/Container';
import './Layout.css'
import { DrawerMenu } from './components/DrawerMenu';
import { DropdownMenu } from './components/DropdownMenu';

const { Header, Content, Footer } = AntdLayout;

export const Layout = () => {

  return (<AntdLayout style={{ backgroundColor: '#fff', height:'100vh'}}>
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
                    <DrawerMenu/>
                    <DropdownMenu />
                  </div>

                  <Link to="/" className='header__logo'>
                    <img className="logo__img" alt="логотип" src={logo}/>
                    <div className='logo__title'>VD</div>
                  </Link>
                  
                  <ButtonGroup className='header__btn'>
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><SearchOutlined style={{ fontWeight: 'bold' }}/>Поиск</Button> 
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><LoginOutlined />Войти</Button>
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><HeartOutlined />Избранное</Button>
                    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><ShoppingCartOutlined />Корзина</Button>
                  </ButtonGroup>
                </div>
              </Container>
            </Header>
            
            <Content className='content'style={{}}>
              <Container>
                <Menu />
                <div
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <Outlet />
                </div>
              </Container>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              <Container>Тут будет footer ^_^</Container>
            </Footer>
          </AntdLayout>
          )
}