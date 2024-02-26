import { Dropdown, MenuProps, Button } from 'antd';
import { MessagersInfo } from '../../../../common/components/MessagersInfo';
import { SocialInfo } from '../../../../common/components/SocialInfo';
import { DownOutlined } from '@ant-design/icons';
import './DropdownMenu.css'

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
          Время работы: ПН-ВС<br/>с 09:00 до 21:00
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
      label: <MessagersInfo/>,
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
      label: <SocialInfo />,
      style: {
        cursor: 'default',
        backgroundColor: '#fff'
      }
    },
  ];

export const DropdownMenu = () => {
    return <div className='dropdown__menu'>
                <Dropdown menu={{ items }} placement="bottom" arrow>
                    <Button>
                        +375 (29) 655-45-45
                        <DownOutlined />
                    </Button>
                </Dropdown> 
            </div>
}