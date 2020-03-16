
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      {
        path: '/',
        name: 'HomePage',
        props: true,
        component: () => import('pages/HomePage.vue')
      },
      {
        path: '/register',
        name: 'RegisterUser',
        component: () => import('pages/UserRegistration.vue')
      },
      {
        path: '/login',
        name: 'Login',
        props: true,
        component: () => import('pages/Login.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
