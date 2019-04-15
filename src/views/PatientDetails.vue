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
        
        <a href="addprescription.html" class = "waves-effect waves-light btn-large">Add Prescription<i class="material-icons">add_box</i></a>
        
        </div>
        <br>
        <div>
        
        <a href="modifyprescription.html" class = "waves-effect waves-light btn-large">Edit Prescription<i class="material-icons">build</i></a>
        
        </div>
        <br>
        <div>
            
        <a href="#" class = "waves-effect waves-light btn-large"><i class="material-icons">arrow_back</i>Back to Profile</a>
            
        </div>
  </div>
</template>
