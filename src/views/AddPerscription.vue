<template>
  <div class="AddPerscription">
    <h1>Add Prescription</h1>
        
       <form>
           Prescription Name: <input type="text" v-model="perscriptionName" name="pname"><br>
           Dose: <input type="text" v-model="dose" name="dose"><br>
           Refill Date: <input type="date" v-model="refillDate" name="refilldate"><br>
           Notes: <input type="text" v-model="notes" name="notes"><br>
        </form>
        
        <br><br><br>
        <div>
        
        <a href="#" class = "waves-effect waves-light btn-large" @click="addNewPerscription"><i class="material-icons">arrow_back</i>Submit Perscription</a>
        
        </div>
  </div>
</template>


<script>
export default {
  name: 'AddPerscription',
  data() {
    return {
      perscriptionName: "",
      dose: "",
      refillDate: "",
      notes: ""    
    }
  },
  methods: {
    addNewPerscription() {
      console.log(this.perscriptionName + this.dose + this.refillDate + this.notes)
      this.$router.push("/PatientDetails")
    }
    
  }
}
</script>