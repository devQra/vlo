const account = [
  {
    path: 'login',
    component: () => import('@/views/account/LoginForm.vue'),
  },
  {
    path: 'register',
    component: () => import('@/views/account/RegisterForm.vue'),
  },
  {
    path: 'myVlo',
    component: () => import('@/views/account/UserPage.vue'),
  },
]

export default account
