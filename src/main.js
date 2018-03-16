// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index';
import router from './router';
import Index from './index.vue';

// Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(ElementUI);

// 取消首屏加载动画
document.getElementById('loading').innerHTML = '';

/* eslint-disable no-new */
new Vue({
  'el': '#app',
  'store': store,
  'components': { Index },
  'template': '<Index/>',
  router,
});
