import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/About.vue'
import CarDetails from '../pages/CarDetailsPage.vue'
import Cars from '../pages/CarsPage.vue'
import HouseDetails from '../pages/HouseDetailsPage.vue'
import Houses from '../pages/HousesPage.vue'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    // NOTE the parameter name is distinguished by the ':'
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    // NOTE the parameter name is distinguished by the ':'
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetails
  },
  {
    path: '/jobs',
    name: 'Houses',
    component: Houses
  },
  {
    // NOTE the parameter name is distinguished by the ':'
    path: '/jobs/:id',
    name: 'HouseDetails',
    component: HouseDetails
  },

  {
    path: '/profile',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
