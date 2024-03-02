import { Layout as AntdLayout } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import logo from '../../common/images/logo.png';
import { Container } from './components/Container';
import './Layout.css'
import { DrawerMenu } from './components/DrawerMenu';
import { DropdownMenu } from './components/DropdownMenu';
import { HeaderBtns } from './components/HeaderBtns';

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
                  
                  <HeaderBtns/>
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