<template>

  <body>


  <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      >

  <header>



    <p class="title-header">Project Info</p>

    <SelectNavBar class="nav-bar"/>

  </header>
  </transition>
  <main>

    <aside>

      <ProjectsDictionary @changeImage="changeImageFunc"/>


    </aside>

    <section>
      <transition
        appear
        @before-enter="imageBeforeEnter"
        @enter="imageEnter"
        @before-leave="imageBeforeLeave"
        @leave="imageLeave"
        @beforeLeave="imageBeforeLeave"
        @after-leave="imageAfterLeave"

      >
<!--         <div class="image-box" style="background-image:url({{imageUrl}})"></div>-->
        <div class="image-box" :style="imageStyle" v-if="showImage"></div>

<!--        <div class="image-box" v-if="showImage"></div>-->
      </transition>

    </section>


  </main>
  </body>



</template>

<script>
import ProjectsDictionary from "@/components/ProjectsDictionary.vue";
import SelectNavBar from "@/components/SelectNavBar.vue";

import gsap from 'gsap'

export default {
  components: {SelectNavBar, ProjectsDictionary}, data() {
    return {
      imageColor: "blue",
      imageUrl: "#",
      projectsColor: ["white", "blue", "red", "yellow", "green", "purple", "gray"],
      projectsImage: ["#1","#2","#3","#4","#5","#6","#7"],
      showImage: true,
      count: true,
      stay: false,
      lastEl: null,

    }
  },
  computed: {
      imageStyle(){
        return{
          "background": this.imageColor
        }


      }

  },
  methods: {
    changeImageFunc(id){
      if(id !== undefined){

        // console.log(id);
        let src = this.projectsImage[id-1];
        // console.log(this.imageColor);
        // console.log(this.projectsColor);
        if(this.imageColor !== this.projectsColor[id-1]){
          // console.log("here")
          this.stay = false;

          this.showImage = false;
          setTimeout(() => {this.showImage = true;}, 2)
        } else {
          this.stay = true;
        }
        this.imageColor = this.projectsColor[id - 1];
        // console.log(src)
      }



    },


    beforeEnter(el){

      // pass element
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0


    },
    enter(el, done){

      // use gsap to animted from 0 to 1
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        onComplete: done

        // let after enter know u eneter
        // ease: 'bounce.out',


      })



    },
    leave(el){
      console.log("leave")



    },
    beforeLeave(el){
      console.log("boutleave")





    },

    afterLeave(){

      console.log("afterLeave")
    },
    imageBeforeEnter(el){
      if(this.stay === false){


        if(this.count === true ){

          el.style.transform = 'translateX(120px)'

        }
        el.style.opacity = 0;

      }

    },
    imageEnter(el){

      if(this.stay === false){
        // console.log(this.count)

        if(this.count === true ){


          gsap.to(el, {
            duration: 3,
            x: 0,
            opacity: 1,


          })

        } else{


          gsap.to(el, {
            duration: 2,
            // x: 0,
            opacity: 1,


          })

          gsap.to(this.lastEl,  {
            duration: 1,
            opacity: 0,

          })
          this.lastEl = el;
        }
      }




      this.count = false;

    }, imageBeforeLeave(el){

      // console.log("imageBeforeLeave")

    }, imageLeave(el){


      // console.log("imageLeave")

    }, imageAfterLeave(el){
      // console.log("imageAfterLeave")
    }

  }, updated() {


  }

}
</script>


<style scoped lang="scss">

body{

  display: flex;
  width:70% ;
  flex-direction: column;
  justify-content: center;

  //flex-wrap:wrap;
  header{
    display: flex;
    justify-content: space-between;
    .nav-bar{
      transform: scale(0.5);

    }
    .title-header{
      display: flex;
      align-items: center;

      font-size: 3rem;

    }



  }



  main{
    width: 100%;
    //height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;


    aside {

      width: 38%;



    }

    section{
      width: 50%;
      height: 100%;
      //overflow-wrap: normal;
      .image-box{

        border-radius: 4rem;

        background: white;

        width:100%;
        height: 100%;
      }

    }

  }

}

@media only screen and (max-width: 1656px){
  body{
    overflow: scroll;
    main{
      //height: 100%;
      //flex-direction: column;
      section{
        width: 40%;


      }
      aside{
        width: 45%;
      }

    }
  }

}
@media only screen and (max-height: 450px){
  body{

    flex-wrap: wrap;
    flex-direction: row;

    main{
      //height: 100%;
      //flex-direction: column;
      section{
        width: 40%;


      }
      aside{
        width: 45%;
      }

    }
  }

}
@media only screen and (max-width: 1300px){
  body::-webkit-scrollbar {
    display: none;

  }
  body{
    overflow: scroll;
    justify-content: center;
    align-items: center;
    //margin-bottom: 10rem;
    header{
      width: 60%;
    }
    main{
      height: 100%;
      //overflow: scroll;
      //height: 100%;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 10rem;

      section{
        //margin-bottom: 5rem;
        margin-top: 3rem;
        width: 60%;
        //height: 50%;


      }
      aside{
        width: 60%;
      }

    }
  }

}
@media only screen and (max-width: 800px){

  body{
    flex-wrap: wrap;
    flex-direction: row;

    //margin-bottom: 10rem;
    header{
      width: 100%;
    }
    main{
      height: 100%;
      //overflow: scroll;
      //height: 100%;


      section{
        //margin-bottom: 5rem;
        width: 100%;
        height: 70%;


      }
      aside{
        width: 100%;
      }

    }
  }

}

@media only screen and (max-width: 600px){

  body{
    flex-wrap: wrap;
    flex-direction: row;

    //margin-bottom: 10rem;
    header{
      width: 100%;
      .title-header{
        font-size: 2.5rem;
      }
    }
    main{
      height: 100%;
      //overflow: scroll;
      //height: 100%;


      section{
        //margin-bottom: 5rem;
        width: 100%;
        height: 50%;


      }
      aside{
        width: 100%;
      }

    }
  }

}


@media only screen and (max-width: 600px){

  body{
    flex-wrap: wrap;
    flex-direction: row;

    //margin-bottom: 10rem;
    header{
      width: 100%;
      .title-header{
        font-size: 2rem;
      }
    }
    main{
      height: 100%;
      //overflow: scroll;
      //height: 100%;


      section{
        //margin-bottom: 5rem;
        width: 100%;
        height: 50%;


      }
      aside{
        width: 100%;
      }

    }
  }

}

</style>