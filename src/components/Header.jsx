import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Icon} from 'antd'

import './Header.scss'
import logoImg from '../assets/blog.png'
import iconfont from '../assets/font/iconfont.js'
const IconFont = Icon.createFromIconfontCN({
    scriptUrl:iconfont
})
class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="header">
            <nav>
            <div className="logo">
                <Link to="/"><img src={logoImg} alt="首页"></img></Link>
            </div>
            <div className="menu">
                <div className="dropdown">
                    <Button className="dropbtn"><IconFont type="icon-guanli"/>管理</Button>
                    <div className="dropdown-content">
                        <Link to="/user/userManager" ><IconFont type="icon-jiaosefenzu"/>用户管理</Link>
                        <Link to="/user/roleManager" ><IconFont type="icon-jiaoseguanli"/>角色管理</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Button className="dropbtn">管理</Button>
                    <div className="dropdown-content">
                        <Link to="/user/userManager" >用户管理</Link>
                        <Link to="/user/roleManager" >角色管理</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Button className="dropbtn">管理</Button>
                    <div className="dropdown-content">
                        <Link to="/user/userManager" >用户管理</Link>
                        <Link to="/user/roleManager" >角色管理</Link>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="dropdown userInfo">
                    <Button className="dropbtn">{this.user}1111111</Button>
                    <div className="dropdown-content">
                        <Link to="/user/userManager" >个人中心</Link>
                        <Link to="/user/roleManager" >修改密码</Link>
                        <Link to="/user/roleManager" >退出登录</Link>
                    </div>
                </div>
                <div><Button className="dropbtn"><Link to="/help">帮助</Link></Button></div>
            </div>
            </nav>
        </div>
    }
}

export default HeaderComponent
