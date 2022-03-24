import { createRouter, createWebHistory } from "vue-router";

const asyncComponent = (route) => () => import(`@/views/${route}.vue`);

const PATH = {
  HOME: '/',
  AREA: '/area',
};

const ROUTE = {
  HOME: 'Home',
  AREA: 'Area',
};

const routes = [
  {
    path: PATH.HOME,
    name: ROUTE.HOME,
    component: asyncComponent(ROUTE.HOME),
  },
  {
    path: PATH.AREA,
    name: ROUTE.AREA,
    component: asyncComponent(ROUTE.AREA),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export { PATH, ROUTE };
export default router;
