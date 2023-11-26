import store from '../store'

let isCustomer = store.getters['auth/isCustomer']


const layout = !isCustomer ? () => import('../layouts/MainLayout.vue') : () => import('../layouts/CustomerLayout.vue')

const adminRoute = [
    // Dashboard
    {
        path: "",
        component: () => import("../pages/Dashboard/IndexPage.vue"),
        meta: {
            title: "Dashboard",
            requiresAuth: true
        }
    },

    // Billing
    {
        path: "/billing",
        children: [{
                path: "",
                component: () => import("../pages/Billing/IndexPage.vue"),
                meta: {
                    title: "Billing",
                    requiresAuth: true
                },
            },
            {
                path: ":id",
                component: () => import("../pages/Consumption/CreatePage.vue"),
                meta: {
                    title: "Billing Update",
                    requiresAuth: true
                },
            },
        ]
    },

    // Transactions
    {
        path: "/transactions",
        children: [{
            path: "",
            component: () => import("../pages/Transaction/IndexPage.vue"),
            meta: {
                title: "Transactions",
                requiresAuth: true
            },
        }, ]
    },

    // Consumers
    {
        path: "/consumers",
        children: [{
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
        children: [{
                path: "",
                component: () => import("../pages/Consumption/IndexPage.vue"),
                meta: {
                    title: "Consumptions",
                    requiresAuth: true
                }
            },
            {
                path: "create/:id",
                component: () => import("../pages/Consumption/CreatePage.vue"),
                meta: {
                    title: "Create",
                    requiresAuth: true
                }
            }
        ]
    },

    // Users
    {
        path: "/system/users",
        children: [{
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

    // Roles
    {
        path: "/system/roles",
        children: [
            {
                path: "",
                component: () => import("../pages/Role/IndexPage.vue"),
                meta: {
                    title: "Roles",
                    requiresAuth: true
                },
            },
            {
                path: "create",
                component: () => import("../pages/Role/CreatePage.vue"),
                meta: {
                    title: "Roles",
                    requiresAuth: true
                },
            }
        ]
    },
];

const customerRoute = [
    // Dashboard
    {
        path: "",
        component: () => import("../pages/Announcement/IndexPage.vue"),
        meta: {
            title: "Dashboard",
            requiresAuth: true
        }
    },
    // Billing
    {
        path: "/billing",
        children: [{
                path: "",
                component: () => import("../pages/Billing/IndexPage.vue"),
                meta: {
                    title: "Billing",
                    requiresAuth: true
                },
            },
            {
                path: ":id",
                component: () => import("../pages/Consumption/CreatePage.vue"),
                meta: {
                    title: "Billing Update",
                    requiresAuth: true
                },
            },
        ]
    },
]

const routes = [
    // BlankLayout
    {
        path: "/auth",
        component: () => import("../layouts/BlankLayout.vue"),
        children: [{
                name: "Login",
                path: "/login",
                component: () => import("../pages/Auth/LoginPage.vue"),
            },
            {
                name: "Register",
                path: "/register",
                component: () => import("../pages/Auth/RegisterPage.vue"),
                beforeEnter: (to, from) => {
                    if (store.getters['auth/isAuthenticated']) {
                        return false;
                    }
                }
            }
        ]
    },

    // MainLayout
    {
        path: "/",
        component: layout,
        children: isCustomer ? customerRoute : adminRoute
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("../pages/ErrorNotFound.vue"),
    },
];

export default routes;
