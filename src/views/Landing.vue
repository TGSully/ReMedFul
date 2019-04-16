<template>
  <div class="landing">
      <div class="home">
        <img alt="ReMedFul logo" src="../assets/logo.png">
      </div>
    <div class="section">

      <!-- <h1>ReMedFul</h1> -->
      <input type="email" v-model="email" class="form-control form-control-sml" placeholder="Enter email">
      <input type="password" v-model="password" class="form-control form-control-sml" placeholder="Enter password">
      <a href="#"><button  class="button" @click="onPatientSignUp">Patient Sign Up</button></a>
      <a href="#"><button class="button" @click="onDoctorSignUp">Doctor Sign Up</button></a>
      <button class="button" @click="onLogin">Sign in</button>

      <div class="video-container">
        <div class="color-overlay"></div>
        <video autoplay loop muted>
          <source src="videos/pills.mp4" type="video/mp4">
        </video>
      </div>

    </div>

    <div class="row">
      <div class="col s12 m4">
        <div class="icon-block">

          <h2><i class="material-icons">star</i></h2>
          <h2>Our Mission</h2>

          <p class="dark"> Making life easier for the modern senior. The elderly need assistance with tracking their
            medical history, whether its pills that need to be taken or pill refills.</p>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="icon-block">
          <h3><i class="material-icons">person</i></h3>
          <h2>Patient</h2>

          <p class="dark"> Do you have issues remembering to refill your medication? Would you like someone to organzie
            and help you? Would you like to spend less time to worring about these aspects? So join us on our website
            and we will help you out with that!</p>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="icon-block">
          <h3><i class="material-icons">supervisor_account</i></h3>
          <h2>Doctor</h2>

          <p class="dark"> Are you tired of patients not sticking to their pill schdules? Would you like to closely
            monitor your patients and their pill consumption patterns? Would you like all of this to be centralized to
            one system? Then join us with other medical professionals by signing up.</p>
        </div>
      </div>
    </div>

    <br><br>

    <section class="call-to-action text white text center">

      <div class="overlay"></div>
      <div class="container">
        <div class="row">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onLogin() {
      console.log(this.email, this.password)
      if(this.mln){  // if a Medical liscense number exists, then its a doctor
        this.$router.push("/DoctorDashboard")
      }else {
        this.$router.push("/PatientDashboard")
      }
    },
    onPatientSignUp() {
      console.log("email:" + this.email + "password:" + this.password)
      this.$router.push("/patient-onboarding")
    },
    onDoctorSignUp() {
      console.log("email:" + this.email + "password:" + this.password)
      this.$router.push("/doctor-onboarding")
    }
  }
}
</script>

