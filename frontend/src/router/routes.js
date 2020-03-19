
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
        component: () => import('pages/Subscription.vue'),
        children: [
          {
            path: '/subscription/:id',
            name: 'SubscriptionFill',
            component: () => import('pages/Subscription.vue')
          }
        ]
      },
      {
        path: '/validate',
        name: 'validate',
        component: () => import('pages/Validate.vue')
      },
      {
        path: '/validate/resend',
        name: 'validateResend',
        component: () => import('pages/ValidateResend.vue')
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
