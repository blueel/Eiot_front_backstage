/** 
 * mutations业务层代码提交
*/

import storage from './../utils/storage'

export default {
    saveUserInfo(state, userInfo) {
        state.userInfo = userInfo
        storage.setItem('userInfo', userInfo)
    }
}