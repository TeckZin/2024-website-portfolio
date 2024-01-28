<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">


<!--  <transition name="fade">-->


<!--      <router-view/>-->


<!--  </transition>-->

<!--  <transition name="fade">-->

    <router-view />

<!--    <h1>hello world</h1>-->

<!--  </transition>-->
</template>

<script>

import HomeView from "@/views/HomeView.vue";

export default {
  components: {HomeView},
  data(){
   return{
     showNav:true,
     currentRoute: ""

   }
  },
  mounted (){
    console.log("Mounted")

  },


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
