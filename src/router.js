import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'
import PatientOnboarding from './views/PatientOnboarding.vue'
import DoctorOnboarding from './views/DoctorOnboarding.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    }
  ]
})
