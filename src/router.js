import Vue from 'vue';
import Router from 'vue-router';

import Error from './pages/Error'
import Filme from './pages/Filme'
import Home from './pages/Home'
import MeusFilmes from './pages/MeusFilmes'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/filme/:id',
      component: Filme,
      props: true
    },
    {
      path: '/salvos',
      component: MeusFilmes
    }, 
    {
      path: '*',
      component: Error
    }
  ]
})

export default router;

