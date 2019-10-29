import Vue from 'vue'
import VueRouter from 'vue-router'

import Doctor from '../components/doctor/Index';
import DoctorsCaregivers from '../components/doctor/views/Caregivers';
import DoctorsPatients from '../components/doctor/views/Patients';
import DoctorsMedications from '../components/doctor/views/Medications';
import Patient from '../components/patient/Index';
import Caregiver from '../components/caregiver/Index';
Vue.use(VueRouter)

const routes = [
  {
    path: '/doctor',
    component: Doctor,
    children: [
      {
        path: 'caregivers',
        name: 'doctorsCaregivers',
        component: DoctorsCaregivers
      },
      {
        path: 'patients',
        name: 'doctorsPatients',
        component: DoctorsPatients
      },
      {
        path: 'medications',
        name: 'doctorsMedications',
        component: DoctorsMedications
      },
    ]
  },
  {
    path: '/patient/:id',
    component: Patient
  },
  {
    path: '/caregiver/:id',
    component: Caregiver
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
