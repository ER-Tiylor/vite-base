export const routes = [
  // { path: '', name: 'home0', component:() => import("@/views/home/home1.vue") },
  // { path: '/home1', name: 'home1', component:() => import("@/views/home/home1.vue") },
  // { path: '/about1', name: 'about1', component: () => import("@/views/about/about1.vue") },
  // { path: '/homesub1', name: 'homesub1', component: () => import("@/views/home/homepage.vue") },
  {
    path:'/home',
    name:'home',
    children:[{
      path:'high',
      name:'high-performance',
      component:() => import("@/views/highPerformance/highPerformance.vue")
    }],
    component:() => import("@/views/home/home.vue")
  },
  {
    path:'/selectPage',
    name:'selectPage',
    component:() => import("@/views/selectPage/selectPage.vue")
  },
  // {
  //   path:'/product',
  //   name:'product',
  //   component:() => import("@/views/product/product.vue")
  // },
  // {
  //   path:'/labelIndustry',
  //   name:'labelIndustry',
  //   component:() => import("@/views/labelIndustry/labelIndustry.vue")
  // },
  // {
  //   path:'/equipmentIndustry',
  //   name:'equipmentIndustry',
  //   component:() => import("@/views/equipmentIndustry/equipmentIndustry.vue")
  // },
  // {
  //   path:'/support',
  //   name:'support',
  //   component:() => import("@/views/support/support.vue")
  // },
  // {
  //   path:'/news',
  //   name:'news',
  //   component:() => import("@/views/news/news.vue")
  // },
  // {
  //   path:'/about',
  //   name:'about',
  //   component:() => import("@/views/about/about.vue")
  // },
]