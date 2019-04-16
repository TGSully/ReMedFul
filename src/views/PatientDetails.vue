<template>
  <div class="Patient Details Page">
    <h1>Details</h1>
    <h1>Patient Profile</h1>
        
        <!-- display the selected patient's name  -->
        
        <h2>Prescriptions</h2>
        
        <!-- Basic Select. Needs to be updated with javascript so that it displays options from the database -->
        <select>
            <option value = "0">Prescription 1</option>
            <option value = "1">Prescription 2</option>
            <option value = "2">Prescription 3</option>
        </select>
        
        <br>
        <div>
        
        <a href="#" class = "waves-effect waves-light btn-large" @click="addPerscription">Add Prescription<i class="material-icons">add_box</i></a>
        
        </div>
        <br>
        <div>
        
        <a href="modifyprescription.html" class = "waves-effect waves-light btn-large" @click="removePerscription">Remove Prescription<i class="material-icons">build</i></a>
        
        </div>
        <br>
        <div>
            
        <!-- <a href="#" class = "waves-effect waves-light btn-large"><i class="material-icons">arrow_back</i>Back to Profile</a> -->
        <a class="waves-effect waves-light btn" @click="backToPatients"><i class="material-icons">arrow_back</i>Back to Patient List</a>
        </div>
  </div>
</template>


<script>
export default {
  name: 'PatientDetails',
  data() {
    return {
    }
  },
  methods: {
    addPerscription() {
      console.log("add Perscript")
      this.$router.push("/AddPerscription")
    },
    removePerscription() {
      console.log("remove perscript")
      this.$router.push("/PatientDetails")
    },
    backToPatients() {
      console.log("Back to patient list")
      this.$router.push("/DoctorDashboard")
    }
    
  }
}
</script>