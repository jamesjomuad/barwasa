import store from '../store'

const routes = [
    {
        path: "/",
        component: () => import("../layouts/BlankLayout.vue"),
        children: [
            {
                name: "Login",
                path: "",
                component: () => import("../pages/Auth/LoginPage.vue"),
                beforeEnter: (to, from) => {
                    if(store.getters['auth/isAuthenticated']){
                        return false;
                    }
                }
            },
            {
                name: "Register",
                path: "/register",
                component: () => import("../pages/Auth/RegisterPage.vue"),
                beforeEnter: (to, from) => {
                    if(store.getters['auth/isAuthenticated']){
                        return false;
                    }
                }
            }
        ]
    },

    {
        path: "/dashboard",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("../pages/Dashboard/IndexPage.vue"),
                meta: {
                    title: "Dashboard",
                    requiresAuth: true
                }
            },
            {
                path: "/consumers",
                component: () => import("../pages/Consumer/IndexPage.vue"),
                meta: {
                    title: "Consumers",
                    requiresAuth: true
                }
            },
            {
                path: "/consumers/create",
                component: () => import("../pages/Consumer/CreatePage.vue"),
                meta: {
                    title: "New Consumer",
                    requiresAuth: true
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
