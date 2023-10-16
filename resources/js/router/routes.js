const routes = [
    {
        path: "/",
        component: () => import("../layouts/BlankLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("../pages/Auth/LoginPage.vue")
            }
        ]
    },

    // {
    //     path: "/",
    //     component: () => import("../layouts/BlankLayout.vue"),
    //     children: [
    //         {
    //             name: "Login",
    //             path: "login",
    //             component: () => import("../pages/Auth/LoginPage.vue")
    //         },
    //         {
    //             name: "Register",
    //             path: "register",
    //             component: () => import("../pages/Auth/RegisterPage.vue")
    //         }
    //     ]
    // },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("../pages/ErrorNotFound.vue"),
    },
];

export default routes;
