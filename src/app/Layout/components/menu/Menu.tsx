import { NavLink } from "react-router-dom"
import { Button, Dropdown, MenuProps} from 'antd';
import './Menu.css';
import { DownOutlined} from '@ant-design/icons';
import { CategoriesData } from "../../../../common/components/CategoriesData";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (<NavLink className='menu__item' to="dostavka">Доставка</NavLink>),
        style: {
            cursor: 'default',
            backgroundColor: '#fff'
        }
    },
    {
        type: 'divider',
      },
    {
        key: '2',
        label: (<NavLink className='menu__item' to="oplata">Оплата</NavLink>),
        style: {
            cursor: 'default',
            backgroundColor: '#fff'
        }
    },
    {
        type: 'divider',
      },
    {
        key: '3',
        label: (<NavLink className='menu__item' to="vozvrat">Возврат</NavLink>),
        style: {
            cursor: 'default',
            backgroundColor: '#fff'
        }
    },
    {
        type: 'divider',
      },
    {
        key: '4',
        label: (<NavLink className='menu__item' to="news">Новости</NavLink>),
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
        label: (<NavLink className='menu__item' to="about_us">О нас</NavLink>),
        style: {
            cursor: 'default',
            backgroundColor: '#fff'
        }
    }
];

export const Menu = () => {
    
    return <div className="menu__items">
                <NavLink className='menu__item' to="/">Главная</NavLink>
                <CategoriesData/>
                <Dropdown menu={{ items }}>
                    <Button style={{ fontSize: 18, fontWeight: 600, lineHeight: '130%', backgroundColor: '#fad89d'}}>
                        Инфо-центр <DownOutlined/>
                    </Button>
                </Dropdown>
            </div>
}