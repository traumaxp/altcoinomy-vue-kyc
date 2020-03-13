
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      {
        path: '',
        name: 'Intro',
        component: () => import('pages/Intro.vue')
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
        path: '/homePage',
        name: 'HomePage',
        props: true,
        component: () => import('pages/HomePage.vue')
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
