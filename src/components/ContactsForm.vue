<template>
  <main class="main-form-content">

    <form class="form-label">

      <div class="name-input">

        <label>Name: </label> <br>
        <input type="text" required v-model="name" >
      </div>


      <div class="message-input">

        <label>Content: </label><br>
        <textarea rows="4" :cols=" number " required v-model="message"> </textarea>


      </div>

      <div class="contact-info-input">

        <fieldset>
          <legend>   Contact Method   </legend>
          <div class="number-input">
            <label class="number-info"> Phone Number </label>
            <input type="checkbox" @click="showPhoneNumber = !showPhoneNumber" >

          </div>

          <div class="email-input">


            <label class="email-info"> Email </label>
            <input type="checkbox" @click="showEmail = !showEmail" >

          </div>


        </fieldset>
      </div>

      <div class="email-contact-input" v-if="showEmail">
        <label class="email-contact-info" >Contact Email: </label><br>
        <input type="text" required v-model="emailContact">

      </div>

      <div class="number-contact-input" v-if="showPhoneNumber" >


        <label class="number-contact-info" >Phone Number: </label><br>
        <input type="tel" required v-model="phoneNumber">

      </div>

      <button class="submit-but"> Submit</button>
    </form>




  </main>

</template>

<script>
import SubmissionSuccess from "@/components/SubmissionSucess.vue";

export default {
  components: {SubmissionSuccess},
  data() {
    return {
      name: "",
      message: "",
      contactInfo: "",
      inputType: "",

      emailContact: "",
      phoneNumber: "",

      showEmail: false,
      showPhoneNumber: false,

      number: 0,

      width: 0,


    }
  },

  mounted() {

    this.number = window.innerWidth / 25;


  }



}
</script>


<style scoped lang="scss">



main{

  width: 100%;
  .form-label{

    margin-left: 1rem;
    width: 100%;


    display: flex;
    flex-direction: column;
    text-align: left;


    label {


      font-size: 1.3rem;
      text-transform: uppercase;
      //display: inline-block;

    }



    .name-input, .message-input,  .email-contact-input, .number-contact-input {
      margin-top: 2rem;

      input, textarea {

        margin-top: 0.5rem;

        background: none;

        //border: none;

        border: none;
        border-bottom: 1px solid white;


        font-size: 1rem;
        box-sizing: border-box;

        width: 100%;

        margin-bottom: 1rem;

        //margin-left: 2rem;

      }

    }

    fieldset {
      display: flex;
      flex-direction: column;

      legend {
        font-size: 1.3rem;
        border-radius: 20px;


      }

      label {
        margin-left: 1rem;

      }

      .number-contact-input, .email-contact-input {
        margin-top: 1rem;
        margin-bottom: 1rem;

      }
    }





  }

  .submit-but {
      border-radius: 19px;
      font-size: 1.5rem;
      margin-top: 2rem;
      height: 3rem;



  }

  .submit-but:hover{
      background: green;
      border: 2px white solid;
      font-size: 1.7rem;
  }

}

</style>