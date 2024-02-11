import { Layout as AntdLayout, Button } from 'antd';
import { Outlet } from 'react-router-dom';
import { Menu } from './components/menu';
import logo from '../../common/images/logo.png';
import { SearchOutlined,
        HeartOutlined,
        ShoppingCartOutlined,
        LoginOutlined 
} from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';

const { Header, Content, Footer } = AntdLayout;

export const Layout = () => {
   
  return (<AntdLayout style={{ height: '100vh' }}>
            <Header
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff'
              }}
            >
              <img className="logo" src={logo} style={{ width: '70px'}}/>
              <ButtonGroup>
                <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><SearchOutlined /> Поиск</Button> 
                <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><LoginOutlined /> Войти</Button>
                <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><HeartOutlined /> Избранное</Button>
                <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="link"><ShoppingCartOutlined /> Корзина</Button>
              </ButtonGroup>
            </Header>
            <Menu />
            <Content style={{ padding: '0 48px' }}>
              <div
                style={{
                  padding: 24,
                   minHeight: 380,
                }}
              >
                <Outlet/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </AntdLayout>
          )
}