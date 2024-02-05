<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">



  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>




  </router-view>



</template>

<script>

import HomeView from "@/views/HomeView.vue";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_qkGEmCc-uV25We7UlSw7s-fK700dYPE",
  authDomain: "web-portfolio-8e44c.firebaseapp.com",
  databaseURL: "https://web-portfolio-8e44c-default-rtdb.firebaseio.com",
  projectId: "web-portfolio-8e44c",
  storageBucket: "web-portfolio-8e44c.appspot.com",
  messagingSenderId: "533115756484",
  appId: "1:533115756484:web:dba0dc52d5f13ad9c7ce91",
  measurementId: "G-4J6HHR2LX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default {
  components: {HomeView},
  data(){
   return{
     showNav:true,
     currentRoute: ""


   }
  }, methods: {




  },
  mounted (){
    console.log("Mounted")

  }, updated() {

    console.log("app updated 1")
  }, created() {

    console.log("app updated")

  }


}

</script>

<style lang="scss">
  $backgroundColorDefault: #27272b;
  $fontColor:  #F5F5F5;
  * {

    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: $fontColor;

    background-color: $backgroundColorDefault;




  }




  #app {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-content: center;





  }
  .route-enter-from{
    opacity: 0;
    transform: translateX(-100px);



  }
  .route-enter-active{
    transition: all 1s ease-out;


  }
  .router-leave-to{
    opacity: 0;
    transform: translateX(100px);
  }


  //@media only screen and (max-width: 850px){
  //  #app{
  //    //margin: 0;
  //    width: 100vw;
  //
  //
  //  }
  //
  //
  //}


</style>
