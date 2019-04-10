import server from './server'
import api from './api'

export function userList(data){
    return server({
        url: api.userlist,
        method: 'get',
        dataType: "json",
        contentType: "charset=UTF-8",
        params: data
    })
}

export function roleList(data){
    return server({
        url: api.rolelist,
        method: 'post',
        dataType: "json",
        contentType: "charset=UTF-8",
        data: data
    })
}