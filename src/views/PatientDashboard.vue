<template>
  <div class="PatientDashboard">
    <form class="myForm" method="get" enctype="application/x-www-form-urlencoded" action="/html/codes/html_form_handler.cfm">

<img src="logo.jpg"  class="center">
    
<p>
<label>Patient Name: 
<input type="text" name="patient" required>
</label> 
</p>

<p>
<label>Phone Number:
<input type="tel" name="phone_number">
</label>
</p>

    <br>
    <br>
<p>
<label>Perscriptions: 
<select id="pickup_place" name="pickup_place">
<option value="" selected="selected">Select One</option>
<option value="Amlodiphine" >Amlodiphine</option>
<option value="Amoxicillin" >Amoxicillin</option>
<option value="Azithromycin" >Azithromycin</option>
<option value="Hydrochlorothiazide" >Hydrochlorothiazide</option>
<option value="Levothyroxine" >Levothyroxine</option>
<option value="Lipitor" >Lipitor</option>
<option value="Lisinoprilr" >Lisinopril</option>    
<option value="Metformin" >Metformin</option>
<option value="Simvastatin" >Simvastatin</option>
<option value="Vicodin</" >Vicodin</option>
<option value="Other" >Other</option>    

    
</select>
</label> 
</p>

<p>
<label>If Chosen Other, Please Specify:
<input type="text" name="other">
</label>
</p>

<p>
<label>Special Instructions Requested by Doctor:
<textarea name="comments" maxlength="500"></textarea>
</label>
</p>

<p><button>Took 1 Pill</button></p>

</form>

  </div>
</template>


<!-- CSS -->
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;    
  width: 50%;
}    

body {
    display: inline-block;
    margin: 50px auto;
    text-align: left;
}
    
    html {
  text-align: center;
}
    
.myForm {
width: 70em;
padding: 4em;
border: 7px solid navy;
}

.myForm * {
box-sizing: border-box;
}

.myForm fieldset {
border: none;
padding: 0;
}

.myForm legend,
.myForm label {
padding: 0;
font-weight: bold;
}

.myForm label.choice {
font-size: 0.9em;
font-weight: normal;
}

.myForm input[type="text"],
.myForm input[type="tel"],
.myForm select,
.myForm textarea {
display: block;
width: 100%;
border: 1px solid #ccc;
font-size: 0.9em;
padding: 0.5em;
}

.myForm textarea {
height: 100px;
}

.myForm button {
padding: 2em;
font-size: 1em;
border-radius: 5em;
background: lavender;
border: solid navy;
font-weight: bold;
margin-left: 90%;
margin-top: 1em;
}

.myForm button:hover {
background: lavender;
cursor: pointer;
}
</style>
