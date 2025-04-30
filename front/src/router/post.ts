const post = [
  {
    path: 'detail',
    name: 'postDetail',
    component: () => import('@/views/post/PostDetail.vue'),
  },
  {
    path: 'write',
    component: () => import('@/views/post/PostWrite.vue'),
  },
]

export default post
