<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/PatientDetails">Patient Detail</router-link> |
      <router-link to="/AddPerscription">Add Perscription</router-link> |
      <router-link to="/PatientDashboard">Patient Dashboard</router-link> |
      <router-link to="/DoctorDashboard">Doctor Dashboard</router-link> |
      <router-link to="/landing">Landing</router-link> |
      <router-link to="/patient-onboarding">Patient Onboarding</router-link> |
      <router-link to="/doctor-onboarding">Doctor Onboarding</router-link> |
      <router-link to="/PatientHippa">Patient Hippa</router-link> |
      <router-link to="/doctor-hippa">Doctor Hippa</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
