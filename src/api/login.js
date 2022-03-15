import request from './../utils/request'
export default {
    login(params) {
        return request({
            url: '/users/login',
            method: 'post',
            data: params
        })
    },
    loginTwo(params) {
        return request.post('/users/login', params)
    }
}