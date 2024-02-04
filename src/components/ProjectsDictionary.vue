<template>


  <div class="main-project-dict-content">


    <div class="head">
<!--      <p>Projects Info</p>-->


    </div>
    <transition-group
        tag="ul"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
    >
       <li  v-for="(project, index) in projects" :key="project.id" :data-index="index" @mouseenter="changeImage(project.id)">
        <router-link class="dict-section" :to="{name: 'projectInfo', params: {projectName: project.projectName}}">
         <p class="title">{{project.title}}</p> <p class="sub-title">{{project.details}}</p>
        </router-link>
       </li>


    </transition-group>




  </div>


</template>

<script>

import { ref } from 'vue'
import gsap from 'gsap'
export default {
  methods: {
    changeImage(id){
      // console.log("test")
      this.$emit('changeImage', id);


    },
    beforeEnter(el){
      el.style.opacity = 0;
      el.style.transform = 'translateY(-70px)'




    },
    afterEnter(){

      // setTimeout(() => this.showProjectName = false, 2000)

    },
    enter(el, done){

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: done,

        // stage animation

        delay: 0.3 * (el.dataset.index),


      })

    }


  },
  data() {

    return {
      showProjectName: ref(true),

      projects: [

        {title: "Port Webpage", details: "Vue Js, Firebase", projectName: "port-webpage", id: 1},
        {title: "School Personal API", details: "Go, GinSocket", projectName: "school-api", id: 2},
        {title: "LAN BlackJack", details: "TCP, Python3", projectName: "python3-blackjack", id: 3},
        {title: "Local Chess", details: "Java FX GUI", projectName: "javafx-chess", id: 4},
        {title: "Todo Page", details: "Vue Js, Firebase", projectName: "todo-page", id: 5},
        {title: "DataStructure", details: "Java", projectName: "datastructure-examples", id: 6},
        {title: "Arduino RFID", details: "arduino rfid reader",projectName: "arduino-rfid", id: 7},
      ]



    }
  },

}
</script>


<style scoped lang="scss">


.main-project-dict-content {


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  .head{
    margin-bottom: 1rem;
    p{
      font-size: 3rem;
    }


  }
  ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;

    //border: 0.1rem white solid;
    li:hover{
      //list-style: circle;


      p.title::before{
        margin: 0;


        //overflow: hidden;
        content: '⪢ ';

      }

      p.title:hover{

        transform: scale(1.2);
      }
    }

    li {
      a{


        margin: 0;

      }


    }
    .dict-section {
      list-style: none;
      text-decoration: none;
      //margin-top: 1rem;
      //margin-bottom: 1rem;
      display: flex;
      padding-bottom: 1rem;
      margin-top: 1rem;
      justify-content: space-between;
      border-bottom: 0.1rem white solid;

      p{
        text-decoration: none;
        text-align: center;
      }



      .title {

        font-size: 1.7em;
        //font-size: inherit;

      }

      .sub-title{

        display: flex;
        align-items: center;



        font-size: 1.3em;

      }



    }

  }

}
@media only screen and (max-width: 600px){
  .main-project-dict-content{
    //font-size: 1rem;
    //background: red;

    ul {

      .dict-section {
      //background: red;
        .title {
          //background: red;
          font-size: 1.5em;
        }

        .sub-title {
          font-size: 1em;
        }

      }

    }

  }



}

@media only screen and (max-width: 500px){
  .main-project-dict-content{
    //font-size: 1rem;
    //background: red;

    ul {

      .dict-section {
        //background: red;
        .title {
          //background: red;
          font-size: 1em;
        }

        .sub-title {
          font-size: .6em;
        }

      }

    }

  }



}


</style>