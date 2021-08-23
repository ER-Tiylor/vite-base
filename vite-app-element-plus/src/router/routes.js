export const routes = [
  { path: '/home', name: 'home', component:() => import("@/views/home/home.vue") },
  { path: '/about', name: 'about', component: () => import("@/views/about/about.vue") },
  { path: '/homesub1', name: 'homesub1', component: () => import("@/views/home/homepage.vue") }
]