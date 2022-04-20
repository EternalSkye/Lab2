import {Layout, Menu, Breadcrumb, Card} from 'antd';
import {CustomForm} from './components/CustomForm';
import {IUser} from './components/interfaces';
// import SiderNav from "./components/SiderNav";

const {Header, Content, Footer} = Layout;

const tabs: Array<String> = ['First', 'Second', 'Third'];

export const HeaderLayout = () => {
    return (
        <Header>
          <div className="logo" />
          <Menu
            mode="horizontal"
            theme="dark"
            defaultSelectedKeys={['0']}
            style={{ justifyContent: 'center' }}
          >
            {tabs.map((tab, index) => (
              <Menu.Item key={index}>{tab}</Menu.Item>
            ))}
          </Menu>
        </Header>
        // <SiderNav/>
    );
};

let user: IUser = {
    id: '1',
    nickname: 'test',
    password: 'pass',
    email: 'email@list.ru',
    phone: '+24234435',
    comment: 'test',

    address: 'studentilor 5'
};

export const MainLayout = () => {
    console.log(user);
    return (
        <Content style={{padding: '0 50px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Card bordered={false}>
                <CustomForm/>
            </Card>
        </Content>
    );
};

export const FooterLayout = () => {
    return (
        <Footer style={{textAlign: 'center', position: 'sticky', bottom: '0'}}>
            Laborator 4
            <a href=""> </a>
        </Footer>
    );
};
