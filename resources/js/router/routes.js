import store from '../store'

const routes = [
    {
        path: "/",
        component: () => import("../layouts/BlankLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("../pages/Dashboard/IndexPage.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "Login",
                path: "login",
                component: () => import("../pages/Auth/LoginPage.vue"),
                beforeEnter: (to, from) => {
                    if(store.getters['auth/isAuthenticated']){
                        return false;
                    }
                }
            },
            {
                name: "Register",
                path: "register",
                component: () => import("../pages/Auth/RegisterPage.vue"),
                meta: {
                    requiresAuth: false
                }
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("../pages/ErrorNotFound.vue"),
    },
];

export default routes;
