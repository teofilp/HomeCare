import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminCaregivers from '../components/admin/Caregivers';

Vue.use(VueRouter)

const routes = [
  {
    path: '/caregivers',
    name: 'adminCaregivers',
    component: AdminCaregivers
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
