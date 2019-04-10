import '../api';
import { userList } from '../api';
import {message} from 'antd';

export function searchPageUsers(param){
    return (dispatch, getState) => {
            userList(param).then((data) => {
            dispatch({ type: 'Current_Page_User', users: data })
        }).catch(err =>{
            dispatch({ type: 'Current_Page_User', users: [
                {"userName":"unknow"}
            ]})
            message.error(err.message,1)
        })
    }
}


export function nextPageUsers(param){
    return (dispatch, getState) => {
            param = {...param, "pageNum": param.pageNum +1}
            console.log(param)
            userList(param).then((data) => {
            dispatch({ type: 'Next_Page_User', users: data, ...param})
        }).catch(err =>{
            console.log("error"+ JSON.stringify(param))
            dispatch({ type: 'Next_Page_User', pageNum: param.pageNum-1, users: [
                {"userName":"unknow"}
            ]})
            message.error(err.message,1)
        })
    }
}