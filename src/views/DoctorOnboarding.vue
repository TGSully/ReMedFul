<template>
  <div style="height:700px;width:100%">

    <p>
      <center><strong>Please enter in proper doctor login information</strong></center>
    </p>

    <center>

      <p>First Name:</p> <input type="text" v-model="firstName" name="fname" placeholder="enter firstname" required>

      <br /><br />
      <p>Last Name:</p> <input type="text" v-model="lastName" name="lname" placeholder="last name" required>

      <br /><br />
      <p> Social Security Number:</p> <input type="text" v-model="ssn" name="SSN" placeholder="enter SSN" required>

      <br /><br />
      <p>Date of Birth:</p> <input type="text" v-model="dob" name="DOB" placeholder="month/date/year" required>
      <br /><br />
      <p>Sex:</p> <input type="text" v-model="sex" name="sex" placeholder="male, female or neither" required>

      <br /><br />
      <p>Medical License Number:</p> <input type="text" v-model="mln" name="lnumber" placeholder="********" required>


      <br /><br />
      <a class="waves-effect waves-light btn modal-trigger" @click="onSubmitInfo" href="#hippa2">Save Details</a>
    </center>

  </div>
</template>


<script>
export default {
  name: 'DoctorOnboarding',
  data() {
    return {
      firstName: "",
      lastName: "",
      ssn: "",
      dob: "",
      sex: "",
      mln: ""
    }
  },
  methods: {
    onSubmitInfo() {
      console.log(this.firstName + this.lastName + this.ssn + this.dob + this.sex + this.mln)
      this.$router.push("/doctor-hippa")
    }  
  }
}
</script>
