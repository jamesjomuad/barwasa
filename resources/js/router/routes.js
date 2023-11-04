import store from '../store'

const routes = [
    {
        path: "/auth",
        component: () => import("../layouts/BlankLayout.vue"),
        children: [
            {
                name: "Login",
                path: "/login",
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
        path: "/",
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

            // Consumers
            {
                path: "/consumers",
                children: [
                    {
                        path: "",
                        component: () => import("../pages/Consumer/IndexPage.vue"),
                        meta: {
                            title: "Consumers",
                            requiresAuth: true
                        }
                    },
                    {
                        path: "create",
                        component: () => import("../pages/Consumer/CreatePage.vue"),
                        meta: {
                            title: "New Consumer",
                            requiresAuth: true
                        }
                    },
                    {
                        path: ":id",
                        component: () => import("../pages/Consumer/UpdatePage.vue"),
                        meta: {
                            title: "Update Consumer",
                            requiresAuth: true
                        }
                    },
                ]
            },

            // Consumptions
            {
                path: "/consumptions",
                component: () => import("../pages/Consumption/IndexPage.vue"),
                meta: {
                    title: "Consumptions",
                    requiresAuth: true
                }
            },


            // Users
            {
                path: "/system/users",
                children: [
                    {
                        path: "",
                        component: () => import("../pages/User/IndexPage.vue"),
                        meta: {
                            title: "Users",
                            requiresAuth: true
                        },
                    },
                    {
                        path: ":id",
                        component: () => import("../pages/User/UpdatePage.vue"),
                        meta: {
                            title: "Update User",
                            requiresAuth: true
                        }
                    }
                ]
            },

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
