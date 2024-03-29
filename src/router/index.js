import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/Projects/ProjectsView.vue'
import ContactsView from '../views/ContactsView.vue'
import DirectoryView from "../views/DirectoryView.vue";
import ProjectInfo from "../views/Projects/ProjectInfo.vue"

import NotFound from "../views/NotFoundView.vue"
const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomeView

  },
  {

    path: '/about',
    name: 'About',
    component: AboutView



  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView

  },
  {

    path: '/contacts',
    name: 'Contacts',
    component: ContactsView,

  },

  {
    path: '/directory',
    name: 'Directory',
    component: DirectoryView

  }, {
    path: '/projects/:projectName',
    name: 'projectInfo',
    component: ProjectInfo,
    props: true,

  }, {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound



  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
