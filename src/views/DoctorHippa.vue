<template>
  <div class="doctor-hippa">
    <h1 style="font-size:200%;">HIPAA</h1>

    <div class=mystyle_2>
      <p style="font-family:monospace;">The notice contains a Doctor’s rights section describing your rights under the
        law. You ascertain that by your signature that you
        have reviewed our notice before signing this consent.
        The terms of the notice may change, if so, you will be notified at your next visit to update your
        signature/date.
        You have the right to restrict how your protected health information is used and disclosed for treatment,
        payment or healthcare
        operations. We are not required to agree with this restriction, but if we do, we shall honor this agreement. The
        HIPAA (Health
        Insurance Portability and Accountability Act of 1996) law allows for the use of the information for treatment,
        payment, or
        healthcare operations.
        By agreeing this form, you consent to our use and disclosure of your protected healthcare information and
        potentially anonymous
        usage in a publication. You have the right to revoke this consent in writing, signed by you. However, such a
        revocation will not
        be retroactive.
      </p>
    </div>

    <button class="button" @click="agree">Agree</button>
  </div>
</template>


<script>
export default {
  name: 'DoctorHippa',
  data() {
    return {
    }
  },
  methods: {
    agree() {
      console.log("agreed to hippa")
      this.$router.push("/DoctorDashboard")
    }
    
  }
}
</script>
