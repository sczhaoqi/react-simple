import React from 'react';
import UserRouter from '../router/user';
import HeaderComponent from '../components/Header.jsx'


class User extends React.Component{
    render(){
        return <div>
        <HeaderComponent {...this.props}></HeaderComponent>
        <div>用户界面</div>
        <UserRouter/>
    </div>
    }
}
export default User;