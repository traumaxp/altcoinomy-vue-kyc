
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
      },
      {
        path: '/subscription',
        name: 'Subscription',
        props: true,
        component: () => import('pages/Subscription.vue')
      },
      {
        path: '/subscription/new',
        name: 'NewSubscription',
        props: true,
        component: () => import('pages/NewSubscription.vue')
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
