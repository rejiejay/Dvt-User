/**
 * Created by rejiejay on 2018/03/16.
 */
import cookies from './../../utils/cookies';
import config from './../../config';

export default {
    verifyLogIn: ({commit}, param) => {
        fetch(`${config.URLversion}/user/getUserInfo.do`, {
            'method': 'GET',
            'contentType': "application/json; charset=utf-8",
            'headers': {
                'token': cookies.getItem('token'),
                'digest': cookies.getItem('digest')
            }
        }).then(
            response => response.json(),
            error => error
        ).then(val => {
            if (val.result === "0") {
                commit('initUserInfo', {userInfo: val.data});
            }
        }).catch(
            error => console.log('向服务器获取用户信息发生错误!')
        );
    },
}
