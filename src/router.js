import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/login.vue"),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/signup.vue"),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "product" */ "./views/user.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/newTask",
      name: "newTask",
      // route level code-splitting
      // this generates a separate chunk (product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "product" */ "./views/newTask.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () =>
        import(/* webpackChunkName: "orders" */ "./views/tasks.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
