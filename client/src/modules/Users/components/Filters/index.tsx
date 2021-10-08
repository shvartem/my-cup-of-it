import React from 'react';
import {
  Layout, Menu, Breadcrumb, Select,
} from 'antd';
import { useSelector } from 'react-redux';
import { IInitialAllUsersState, IUser } from '../../../../redux/allUsersTypes';
import store, { StateInterface } from '../../../../redux/store';

// import CardUser from '../CardUser';
// import user from '../../../../redux/slices/user';

const { Option } = Select;

const {
  Header, Content, Footer, Sider,
} = Layout;

const { SubMenu } = Menu;

interface MyUser {
 id: number,
    firstname: string,
    lastname: string,
    isMentor: boolean,
    company: string,

    // technology: {}
}
interface userProps{
  users: MyUser[]
}

const Filters: React.FC<userProps> = () => {
  const users = useSelector((state: StateInterface) => state.allUsers.data);
  console.log(users);
  const company = Array.from(new Set(users.map((el) => {
    if (el.company === null || el.company === '') { return 'no conmpany'; }
    return el.company;
  })));
  console.log(company);

  function handleChange(value:string) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      Компании:
      <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>

        {/* {company.map((el) => <Option key={el} value={el}>{el}</Option>)} */}
        {/* {users.map((f) => <Option key={f.company} value={f.firstname}>{f.company}</Option>)} */}
      </Select>
      Технологии:
      <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>

        {users.map((f) => <Option key={f.firstname} value={f.firstname}>{f.company}</Option>)}
      </Select>
      Пользователи:
      <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
        <Option value="Студенты">Студенты</Option>
        <Option value="Менторы">Менторы</Option>
      </Select>

    </div>
  );

  // <Layout style={{ minHeight: '100vh' }}>
  //   <Sider collapsible>
  //     <div className="logo" />
  //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
  //       <SubMenu key="sub1" title="Filters">
  //         {users.map((f) => <Menu.Item key={f.id}>{f.company}</Menu.Item>)}

  //       </SubMenu>
  //     </Menu>
  //   </Sider>
  //   <Layout className="site-layout">
  //     <Header className="site-layout-background" style={{ padding: 0 }} />
  //     <Content style={{ margin: '0 16px' }}>
  //       {/* {users.map((user) => <CardUser key={user.id}>{user.firstname}</CardUser>)} */}
  //       <CardUser users={users} />
  //     </Content>
  //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  //   </Layout>
  // </Layout>
};
export default Filters;
