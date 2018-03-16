/**
 * Created by linxin on 2017/3/11.
 */

export default {
    getIsLogin(states) {
        return states.userInfo ? true : false;
    },
};
