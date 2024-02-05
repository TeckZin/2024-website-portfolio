<template>

  <main>



<!--  <div class="top-box">-->
<!--    <div class="hort-box"></div>-->
<!--    <div class="vert-box"></div>-->

<!--  </div>-->
  <div class="about-content">



    <section>

      <div class="header-title">

        <p class="title">About Me</p>

        <SelectNavBar />
      </div>

      <div class="content-section">

        <div class="decorations">
          <div class="circle" id="circle-1"></div>
          <div class="line" id="line-1"></div>


        </div>

        <div class="information">
          <p class="heading" id="my-self-heading">My Self</p>
          <p class="text" id="my-self">Navigating the digital landscape at 20 years old, I'm a computer science undergraduate deeply immersed in a diverse array of projects. Proficient in languages such as C, C++, Java, Python, JavaScript, TypeScript, and Go, with an ongoing exploration of Rust, my projects span from dynamic web applications using Vue.js and GSAP to Linux command line scripting. Well-versed in various IDEs like Eclipse, VSCode, JetBrains, and nvim, I've cultivated a multifaceted skill set. This website serves as a showcase for my journey, offering a glimpse into my projects and the evolving technological landscape I explore and contribute to passionately.</p>
          <p class="heading">Projects</p>
          <p class="text" id="projects">Teck's Project Showcase succinctly captures my technical versatility and innovation. The Vue.js-powered Portfolio Webpage demonstrates adaptability, while the robust School Personal API showcases efficiency in data communication. LAN Blackjack reflects networking and game development skills, and the visually engaging Local Chess project underscores commitment to interactive design. The responsive Todo Page, crafted with Vue.js and Firebase, highlights proficiency in dynamic web applications. Implementation of various data structures in Java showcases a solid grasp of core computer science concepts. These projects collectively depict my expertise in web development, networking, game design, and fundamental computer science, emphasizing dedication to innovative solutions with technical excellence..</p>

        </div>

      </div>





    </section>







  </div>

  </main>
</template>

<script>
import HomeNavBar from "@/components/HomeNavBar.vue";
import SelectNavBar from "@/components/SelectNavBar.vue";

export default {
  components: {SelectNavBar, HomeNavBar},
  data() {
    return {}
  },
}
</script>


<style scoped lang="scss">
$borderColor: white 0.1rem solid;
main{

  //overflow-y: scroll;
  padding: 1rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  //height: 60vh;
  width: 50vw;
}
.about-content::-webkit-scrollbar {
  display: none;

}
.about-content{
  //margin-right: 10rem;
  //box-sizing: content-box;
  //margin: auto;
  //width: 100%;
  overflow: scroll;
  display: flex;

  //border: $borderColor;


  section{
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .header-title{
      //flex-grow: 2;
      padding: 0;
      box-sizing: content-box;
      margin-left: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      //height: 20%;
      //width: 55%;
      .title{
        //height: 40%;
        //width: 70%;
        font-size: 4rem;

      }



    }


    .content-section{
      //width: 50%;
      display: flex;
      margin-bottom: 2rem;
      .decorations{
        margin-left: 2rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

        .circle{
          background: white;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          display: inline-block;

        }
        .line{

          background: white;
          height: 100%;
          width: 0.2rem;


        }




      }

      .information{
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        margin-left: 2rem;
        //width: 50%;
        overflow-wrap: normal;
        .text{



          font-size: 1.5rem;


        }


        .heading {
          margin-top: 2rem;

          font-size: 2rem;

        }




      }


    }


  }





  #my-self-heading{
    margin-top: 0;

  }


}

.top-box {
  .hort-box{
    background: white;
    height: 1rem;
    width: 10rem;

  }

  .vert-box {

    background: white;
    height: 10rem;
    width: 1rem;
  }


}

@media only screen and (max-width: 850px){
  main{
    //margin: 0;
    width: 100%;

    .header-title{


    }

  }


}

@media only screen and (max-width: 580px){
  main{
    height: 100%;


  }
  .about-content{
    height: 100%;
    .title{
      //transform: scale(0.8);
      font-size: 20rem;
      //width: 20%;
    }
    .menu-icon{
      //transform: scale(3);
    }


  }


}
@media only screen and (max-height: 670px) {
  main{

    height: 100%;
  }
}



</style>