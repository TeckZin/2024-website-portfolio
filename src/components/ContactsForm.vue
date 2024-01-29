<template>
  <main class="main-form-content">

    <form class="form-label" @submit.prevent="handleSubmit" >

      <div class="name-input">

        <label>Name: </label> <br>
        <input type="text" placeholder="John Doe" required v-model="posts.name" >
      </div>


      <div class="message-input">

        <label>Content: </label><br>
        <textarea rows="4" :cols=" number "  placeholder="What your message to me" v-model="posts.message"> </textarea>


      </div>

      <div class="contact-info-input">

        <fieldset >
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
        <input type="text" placeholder="xxxxxx@xxxx.xxx" required v-model="posts.emailContact">

      </div>

      <div class="number-contact-input" v-if="showPhoneNumber" >


        <label class="number-contact-info" >Phone Number: </label><br>
        <input type="tel" pattern="+[0-9]2-[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+xx-xxx-xxx-xxxx" required v-model="posts.phoneNumber">

      </div>

      <button class="submit-but"> Submit</button>
    </form>





<!--    <button @click="testFunc"> test func</button>-->


  </main>

</template>

<script>
import SubmissionSuccess from "@/components/SubmissionSucess.vue";


export default {
  components: {SubmissionSuccess},
  data() {
    return {
      posts: {


        name: "",
        message: "",
        contactInfo: "",
        inputType: "",

        emailContact: "",
        phoneNumber: "",


      },


      showEmail: false,
      showPhoneNumber: false,

      number: 0,

      width: 0,

      now: null,


    }
  },methods: {
    handleSubmit(){
      if(this.showEmail || this.showPhoneNumber) {

        // this.$router.push({
        //   name: "submition-info",
        //   params: this.posts
        // });
        const now = this.getDate();


        this.$emit('submitFunc', this.posts, now);











        console.log(this.posts)


      } else{

        alert("Pick at least on choice of contact method")
      }





    }, getDate() {
      const now = new Date();
      return now.toString();


    }


    // }, testFunc(){
    //
    //   const now = new Date();
    //   return now.toString();
    //
    //
    // }


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