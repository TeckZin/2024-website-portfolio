<template>
  <main class="main-form-content">

    <form class="form-label" @submit.prevent.stop="handleSubmit" >

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
            <input type="checkbox" @click="this.showPhoneNumber = !showPhoneNumber" >

          </div>

          <div class="email-input">


            <label class="email-info"> Email </label>
            <input type="checkbox" @click="this.showEmail = !showEmail" >

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

import {getDatabase, ref, set, get, child, onValue} from "firebase/database";
import async from "async";

export default {
  components: {SubmissionSuccess},
  data() {
    return {
      posts: {


        name: "",
        message: "",
        emailContact: null,
        phoneNumber: null,

        time_hour: "",
        time_s: "",
        time_min: "",

        date: "",

        userIp: "",


      },


      showEmail: false,
      showPhoneNumber: false,

      number: 0,

      width: 0,

      now: null,

      ip: "",
      allowSubmitFlag: true,

      handleCount: 0,

      allowCount: 0,

      dbRef: ref(getDatabase()),






    }
  },methods: {

    getData(){
     //
     //  console.log("run")
     //
     //  const db = getDatabase()
     //
     //
     //
     //  console.log(this.ip)
     //  const path = "contactsUsers/" + this.ip + "/";
     //
     //
     //
     // return onValue( ref(db, path ), (snapshot) => {
     //      // console.log(path)
     //      // console.log(snapshot.exists())
     //      // // console.log(snapshot.key)
     //      // console.log("for each")
     //      console.log(snapshot.hasChildren());
     //      snapshot.forEach((user) => {
     //        // console.log("for each loop")
     //        //   console.log("key: " + e.key)
     //          // console.log("value: " +  e.val().toString())
     //        console.log(user.val())
     //        return onValue(ref (db, path + user.key), (snapshot2) => {
     //          let value = snapshot2.val()
     //          // console.log(value)
     //          // console.log(value.time_s)
     //          const temp_time_s = parseInt(value.time_s)
     //          const temp_time_m = parseInt(value.time_min)
     //          const temp_time_h = parseInt(value.time_hour)
     //
     //          console.log(temp_time_s)
     //          console.log(temp_time_m)
     //          console.log(temp_time_h)
     //
     //          console.log(this.posts.time_s)
     //          console.log(this.posts.time_min)
     //          console.log(this.posts.time_hour)
     //          if(temp_time_m === parseInt(this.posts.time_min) || temp_time_h === parseInt(this.posts.time_hour)){
     //             if(Math.abs(temp_time_s - parseInt(this.posts.time_s)) < 20){
     //               console.log("dont allowed")
     //               this.allowSubmitFlag = false;
     //
     //
     //             }
     //
     //          }
     //
     //        })
     //
     //
     //      })
     //
     //    console.log(this.allowSubmitFlag)
     //    console.log("end")
     //  });



    },

    // get dated when mounted
    handleSubmit(){

      console.log("run")
      if(this.allowSubmitFlag){
        const db = getDatabase();
        set(ref(db, 'contactsUsers/' + this.ip + "/" + this.now), this.posts);
        this.$emit('submitFunc');
      }

      console.log("end")







    },
    allowSubmit() {
      //
      // this.allowCount = this.allowCount + 1;
      // console.log("allow: " + this.allowCount + " handle: " + this.handleCount)
      // console.log("allow flag: " + this.allowSubmitFlag)
      //
      // if(this.allowSubmitFlag){
      //   console.log("submited")
      //   const db = getDatabase()
      //    set(ref(db, 'contactsUsers/' + this.ip + "/" + this.now), this.posts);
      //   this.$emit('submitFunc');
      //   console.log('submit')
      //
      // }
      // this.allowSubmitFlag = true;

    },


    getDate() {
      const now = new Date();
      this.posts.time_hour = now.getHours().toString();
      this.posts.time_s = now.getSeconds().toString();
      this.posts.time_min = now.getMinutes().toString();
      this.posts.date = now.toString();




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

    return fetch('https://api.ipify.org?format=json')

        .then(x => x.json())
        .then(({ ip }) => {

          console.log("run ip")
          this.posts.userIp = ip
          ip = ip.replaceAll(".", "_")
          this.ip = ip;



          console.log("run date")
          this.getDate();

          console.log("run data")
          this.getData();

          console.log("end of mounted")

        });





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