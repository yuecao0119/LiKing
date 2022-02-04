// 工具代码，处理api然后返回响应，统一处理不需要每个组件都实现
import axios from 'axios'
// 因为这部分代码不是在组件中写的，所以this.调用message不可使用，需要单独引用
import { ElMessage } from 'element-plus';
import router from '../router'

// 请求拦截器   主要监测用户是否登录，有无tokenStr
axios.interceptors.request.use(config=>{
    // 如果存在token，则请求中携带token
    if(window.sessionStorage.getItem('tokenStr')){
        config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
    }
    return config;
}, error=>{
    console.log(error);
    ElMessage.error({ showClose: true, center: true, message: '未知错误，请联系管理员Σ(っ °Д °;)っ' });
})


// 响应拦截器，对请求失败/成功的响应进行预先处理
axios.interceptors.response.use(success => {  // success不是请求成功（业务逻辑不一定成功），而是访问api接口成功
    // 业务逻辑状态
    if (success.status && success.status == 200) {
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            ElMessage.error({ showClose: true, center: true, message: success.data.message });
            return;
        }
        if (success.data.message) {
            ElMessage.success({ showClose: true, center: true, message: success.data.message });
        }
    }
    return success.data;
}, error => { // 调用api错误  此时访问不到后端，没有data
    if (error.response.code == 504 || error.response.code == 404) {
        ElMessage.error({ showClose: true, center: true, message: '服务器资源被吃掉了<( ╯□╰ )>' });
        router.replace('/404')
    } else if (error.response.code == 403) {
        ElMessage.error({ showClose: true, center: true, message: '尊敬的用户不需要这样的权限┗|"O"|┛ 嗷~~' });
    } else if (error.response.code == 401) {
        ElMessage.error({ showClose: true, center: true, message: '尚未登录，请您出示通行证(●ˇ∀ˇ●)' });
        router.replace('/login');
    } else {
        if (error.response.data.message) {
            ElMessage.error({ showClose: true, center: true, message: error.response.data.message });
        } else {
            ElMessage.error({ showClose: true, center: true, message: '未知错误，请联系管理员Σ(っ °Д °;)っ' });
        }
    }
    return;
});


// 对请求进行处理
let base = '';  // 为了之后统一修改前后缀格式使用
// 传递json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: '${base}${url}',
        data: params,
    })
}

// put请求
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: '${base}${url}',
        data: params,
    })
}

// get请求
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: '${base}${url}',
        data: params,
    })
}

// delete请求
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: '${base}${url}',
        data: params,
    })
}