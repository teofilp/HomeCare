import Vue from 'vue'
import VueRouter from 'vue-router'

import DoctorsCaregivers from '../components/doctor/views/Caregivers';
import DoctorsPatients from '../components/doctor/views/Patients';
import DoctorsMedications from '../components/doctor/views/Medications';
Vue.use(VueRouter)

const routes = [
  {
    path: '/caregivers',
    name: 'doctorsCaregivers',
    component: DoctorsCaregivers
  },
  {
    path: '/patients',
    name: 'doctorsPatients',
    component: DoctorsPatients
  },
  {
    path: '/medications',
    name: 'doctorsMedications',
    component: DoctorsMedications
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
