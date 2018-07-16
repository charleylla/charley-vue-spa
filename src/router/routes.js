const LoginPage = () => import("@/page/login");
const NotFoundPage = () => import("@/page/404");

export const routes = [
  {
    path: "/",
    component: LoginPage,
  },{
    path: "/login",
    component: LoginPage,
  },{
    path: "/404",
    component: NotFoundPage,
  },{
    path: "*",
    component: NotFoundPage,
  },
];
