export const routes = {
  path: '',
  component: () => import('@/layouts/app-layout.vue'),
  meta: {
    shortcut: 'main',
  },
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/home.vue'),
        },
        {
          path: 'terms',
          component: () => import('./views/terms.vue'),
        },
        {
          path: 'privacy',
          component: () => import('./views/privacy.vue'),
        },
        {
          path: 'products/merlion',
          component: () => import('./views/merlion.vue'),
        },
      ],
    },
  ],
}
