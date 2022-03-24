import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
  },
  {
    path: '/couple',
    name: 'Couple',
    component: () => import(/* webpackChunkName: "Couple" */ '@/views/Couple.vue'),
  },
  {
    path: '/couple-advance',
    name: 'CoupleAdvance',
    component: () => import(/* webpackChunkName: "CoupleAdvance" */ '@/views/CoupleAdvance.vue'),
  },
];

export default routes;
