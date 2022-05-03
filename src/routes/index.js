import Vue from "vue";
import VueRouter from "vue-router";

// VueRouter 플러그인을 실행, 초기화 하기 위해서 사용 하는 코드
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
