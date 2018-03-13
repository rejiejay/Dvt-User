import Vue from 'vue';
import Router from 'vue-router';
import Personal from '@/router/Personal/index';

Vue.use(Router);

export default new Router({
  'routes': [
    {
      'path': '/',
      'name': 'Personal',
      'component': Personal
    }
  ]
});
