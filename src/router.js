import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PatientDetails from './views/PatientDetails.vue'
import AddPerscription from './views/AddPerscription.vue'
import PatientDashboard from './views/PatientDashboard.vue'
import DoctorDashboard from './views/DoctorDashboard.vue'
import Landing from './views/Landing.vue'
import PatientOnboarding from './views/PatientOnboarding.vue'
import DoctorOnboarding from './views/DoctorOnboarding.vue'
import PatientHippa from './views/PatientHippa.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {

      path: '/PatientDetails',
      name: 'PatientDetails',
      component: PatientDetails
    },
    {
      path: '/AddPerscription',
      name: 'AddPerscription',
      component: AddPerscription
    },
    {
      path: '/PatientDashboard',
      name: 'PatientDashboard',
      component: PatientDashboard
    },
    {
      path: '/DoctorDashboard',
      name: 'DoctorDashboard',
      component: DoctorDashboard
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/patient-onboarding',
      name: 'patient-onboarding',
      component: PatientOnboarding
    },
    {
      path: '/doctor-onboarding',
      name: 'doctor-onboarding',
      component: DoctorOnboarding
    },
    {
      path: '/PatientHippa',
      name: 'PatientHippa',
      component: PatientHippa
    }
  ]
})
