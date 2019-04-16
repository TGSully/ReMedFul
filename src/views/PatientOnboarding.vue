<template>
  <div style="height:700px;width:100%">
    <p>
      <center><strong>Please enter in proper patient login information</strong></center>
    </p>

    <center>

      <p>First Name:</p> <input type="text" v-model="firstName" name="fname" placeholder="enter first name" required>

      <br /><br />

      <p> Last Name: </p><input type="text" v-model="lastName" name="lname" placeholder="enter last name" required>

      <br /><br />

      <p>Social Security Number:</p> <input type="text" v-model="ssn" name="SSN" placeholder="enter SSN" required>

      <br /><br />

      <p> Date of Birth:</p> <input type="text" v-model="dob" name="DOB" placeholder="month/date/year" required>
      <br /><br />
      <p>Sex:</p><input type="text" name="sex" v-model="sex" placeholder="male, female or neither" required>


      <br /><br />

      <a class="waves-effect waves-light btn modal-trigger" @click="onSubmitInfo" href="#hippa1">Save Details</a>

    </center>

    

  </div>

</template>

<script>
export default {
  name: 'PatientOnboarding',
  data() {
    return {
      firstName: "",
      lastName: "",
      ssn: "",
      dob: "",
      sex: ""
    }
  },
  methods: {
    onSubmitInfo() {
      console.log(this.firstName + this.lastName + this.ssn + this.dob + this.sex)
      this.$router.push("/PatientHippa")
    }
    
  }
}
</script>


