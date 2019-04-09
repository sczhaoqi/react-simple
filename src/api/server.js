import axios from 'axios';
import {message} from 'antd';

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
//取消请求
let CancelToken = axios.CancelToken
 
//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
    //得到参数中的requestname字段，用于决定下次发起请求，取消相应的  相同字段的请求
    //post和get请求方式的不同，使用三木运算处理
    let requestName = config.method === 'post'?config.data.requestName :config.params.requestName
    //判断，如果这里拿到上一次的requestName，就取消上一次的请求
    if(requestName) {
        if(axios[requestName]&&axios[requestName].cancel){
            axios[requestName].cancel()
        }
        config.cancelToken = new CancelToken(c => {
            axios[requestName] = {}
            axios[requestName].cancel = c
        })
    }
    config.headers = {
        'X-Custom-Header': 'foobar',
    }
    return config
}, error => {
    return Promise.reject(error)
})
// respone拦截器
axios.interceptors.response.use(
    response => {
        const res = response.data;

        //这里根据后台返回来设置
        if (res.status) {
            return response.data;
        } else {
            return Promise.reject(error);
        }
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误(400)';
                    break;
                case 401:
                    err.message = '未授权，请重新登录(401)';
                    message.error(err.response.headers.msg ? decodeURI(err.response.headers.msg) : "未登录，请重新登录");
                    break;
                case 403:
                    err.message = '拒绝访问(403)';
                    break;
                case 404:
                    err.message = '请求出错(404)';
                    break;
                case 408:
                    err.message = '请求超时(408)';
                    break;
                case 500:
                    err.message = '服务器错误(500)';
                    break;
                case 501:
                    err.message = '服务未实现(501)';
                    break;
                case 502:
                    err.message = '网络错误(502)';
                    break;
                case 503:
                    err.message = '服务不可用(503)';
                    break;
                case 504:
                    err.message = '网络超时(504)';
                    break;
                case 505:
                    err.message = 'HTTP版本不受支持(505)';
                    break;
                default:
                    err.message = `连接出错(${err.response.status})!`;
            }
        } else {
            console.log(err)
            err.message = '连接服务器失败!'
        }
        return Promise.reject(err);
    }
)
 
export default axios;