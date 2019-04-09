import React from 'react';
import {userList} from '../../api';
import {message} from 'antd';

class UserAdd extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            users:[],
            initParam:{
                pageSize:10,
                pageNum: 1,
            }
        }
    }
    render(){
        return <h1>用户管理</h1>
    }
    componentDidMount(){
        userList(this.state.initParam).then(
            data =>{
                this.setState({
                    users: data
                })
                consonle.log(data)
            }
        ).catch(err => {
            console.log(err);
            message.error(err.message,1)
        })
    }
}

export default UserAdd