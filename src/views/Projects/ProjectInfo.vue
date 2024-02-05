<template>

 <main>

   <div v-if="flag" class="main-content">

     <header>

       <button v-if="beforeFlag" @click="goBefore" class="before"> <<<< </button>
       <a v-bind:href="this.mainProject.link" target="_blank"> {{this.mainProject.titleName}}</a>

       <button v-if="afterPath" @click="goAfter" class="next"> >>>> </button>
     </header>
     <div class="main-text">

       <section class="about-project">

         <p class="title">Intro</p>
         <p class="desc"> {{ this.mainProject.about }}</p>

       </section>

       <section class="how-project">

         <p class="title">How?</p>
         <p class="desc"> {{ this.mainProject.how }}</p>

       </section>


     </div>
     <footer>

       <router-link class="directory-link" to="/projects"><button>Return</button> </router-link>
     </footer>



   </div>

   <div v-if="!flag" class="notFound">
     <NotFoundModal />
   </div>


 </main>




</template>
<script>
import NotFoundModal from "@/components/NotFoundModal.vue";

export default {
  components: {NotFoundModal},

  props: [ 'projectName'],
  data() {
    return {
      mainProject: null,
      projects: [

        {title: "Port Webpage",
          about: "Explore my portfolio, a curated collection of projects showcasing my passion for innovative solutions and expertise in web development. Powered by Vue.js and seamlessly integrated with Firebase, this dynamic space reflects my commitment to creating adaptable and visually engaging digital experiences. Join me on this journey of exploration and innovation.",
          how: "In crafting my portfolio, I harnessed the power of Vue.js to create a seamless and dynamic user experience. Leveraging the versatility of Vue Router, I implemented an organized navigation structure, ensuring a smooth transition between project showcases. Group transitions added a touch of elegance to the interface, providing a visually pleasing journey through each section. For responsiveness, I relied on the flexibility of Flexbox, ensuring that the layout adapts seamlessly to various screen sizes.",
          result: "",
          link: "https://github.com/TeckZin/2024-website-portfolio",



          details: "Vue Js, Firebase", projectName: "port-webpage", titleName: "Webpage Portfolio",id: 1},
        {title: "School Personal API",
          about: "Introducing the School Management API, a robust system meticulously crafted to streamline the administration of staff, students, teachers, courses, and majors. Designed with efficiency in mind, this API serves as the backbone for maintaining organized and accurate records within the educational ecosystem. Seamlessly managing the intricate web of educational entities, it empowers institutions to navigate through staff profiles, student records, teacher assignments, and detailed information on courses and majors. Built for precision and scalability, this API stands as a testament to my commitment to enhancing educational processes through technological innovation.",
          how: "The School Management API is crafted with precision and efficiency, utilizing the Go programming language and the Gin Gonic framework. The synergy of Go's performance and simplicity, coupled with Gin Gonic's expressive and fast HTTP web framework, ensures a robust foundation for seamless data management. As the architect of this system, I prioritize the scalability and speed inherent to Go, delivering a responsive and reliable API for educational institutions. Looking ahead, I am in the planning stages of integrating a real-time database like MySQL, enhancing the API's capabilities and paving the way for dynamic and data-driven educational administration.",
          result: "",
          link: "https://github.com/TeckZin/SchoolPersonalAPI",

          details: "Go, GinSocket", projectName: "school-api",titleName: "Go School Personal API", id: 2},
        {title: "LAN BlackJack",

          about: "Welcome to the heart-pounding world of LAN Blackjack, a multiplayer gaming experience designed for up to seven players. Immerse yourself in the excitement of this dynamic card game, where strategic decisions and a bit of luck can lead to victory. This project showcases my prowess in networking and game development, as each player engages in the thrill of Blackjack across a local area network. Whether you're aiming for 21 or strategizing against opponents, LAN Blackjack offers an interactive and entertaining gaming environment, bringing the classic casino experience directly to your fingertips.\n",
          how: "Embark on a gaming odyssey with LAN Blackjack, a multiplayer sensation meticulously crafted using the object-oriented programming (OOP) paradigm in Python3. This project immerses players in the strategic realm of Blackjack across a local area network, where OOP principles enhance code organization and maintainability. Through TCP connections, up to seven players engage in the thrill of the game, showcasing my adeptness in networking. As the architect behind this endeavor, I envision future enhancements like the addition of in-game currency or the implementation of a graphical user interface (GUI), promising an even more immersive and feature-rich Blackjack experience.",
          result: "",
          link: "https://github.com/TeckZin/NetworkingBlackJack",

          details: "TCP, Python3", projectName: "python3-blackjack",titleName: "LAN Blackjack", id: 3},
        {title: "Local Chess",

          about: "Local Chess offers an immersive chess-playing experience on the same computer, boasting a fully functional graphical user interface (GUI). Players can engage in strategic battles, make moves, reset the game, and even import custom positions effortlessly using the FEN (Forsyth-Edwards Notation) system. The intuitive GUI enhances the gameplay, providing a visually appealing and user-friendly interface for both beginners and seasoned chess enthusiasts. This project not only showcases my proficiency in game development but also emphasizes the importance of user interaction, making the age-old game of chess a captivating and accessible experience right at your fingertips.",
          how: "Powered by Java and leveraging the versatility of JavaFX, Local Chess delivers a captivating chess-playing experience with a rich graphical user interface (GUI). The game unfolds through meticulously designed classes for each chess piece, ensuring intricate movements and interactions on the board. Whether resetting the game, making strategic moves, or importing custom positions using FEN, the intuitive JavaFX GUI enhances every aspect of gameplay. The project stands as a testament to my proficiency in Java and JavaFX, showcasing the fusion of elegant design and seamless functionality in the timeless game of chess.\n",
          result: "",
          link:"https://github.com/TeckZin/ChessFxFinalPorjectVersion2",
          details: "Java FX GUI", projectName: "javafx-chess",titleName: "Chess JavaFX", id: 4},
        {title: "Todo Page",

          about: "Introducing the Todo List, a dynamic and interactive software designed to effortlessly keep track of your tasks. With the added convenience of cloud storage, this application ensures that your to-do list is accessible anywhere, anytime. Seamlessly manage and prioritize your tasks, mark completed items, and stay organized with ease. The cloud integration not only enhances accessibility but also guarantees that your tasks are securely stored. Elevate your task management experience with this intuitive and efficient Todo List, making productivity a seamless part of your day.",
          how: "Experience the future of task management with the Vue.js-powered Todo App. This application combines the reactivity of Vue.js with the robust cloud capabilities of Firebase, ensuring an interactive and efficient task-tracking experience. Your to-do list is securely stored in the cloud, allowing access from any device, anywhere. With Firebase authentication seamlessly integrated, user login ensures personalized access to the database. Stay organized, boost productivity, and enjoy the flexibility of managing your tasks with Vue.js and the cloud-powered efficiency of Firebase.",
          result: "",

          details: "Vue Js, Firebase", projectName: "todo-page",titleName: "Todo List", id: 5},
        {title: "DataStructure",

          about: "Dive into the heart of computer science with the DataStructure folder—an amalgamation of structures meticulously crafted to represent a comprehensive understanding of the field. Each file within this repository is a testament to my exploration and mastery of various data structures. From foundational concepts to advanced implementations, the DataStructure showcase encapsulates the breadth of my knowledge in this fundamental aspect of computer science. This collection stands as a dynamic representation of my commitment to continuous learning and proficiency in handling diverse data structures.",
          how: "All coded in Java, each data structure within this repository is meticulously designed and, at times, interwoven to form a cohesive foundation for advanced applications. This repository reflects not only my proficiency in Java programming but also the systematic approach to constructing and utilizing data structures to tackle diverse computational challenges. It stands as a testament to my commitment to excellence in code architecture and the strategic use of data structures in software development.",
          result: "",
          link: "https://github.com/TeckZin/DataStructures2023",

          details: "Java", projectName: "datastructure-examples",titleName: "Data Structures", id: 6},
        {title: "Arduino RFID",

          about: "Dive into the intersection of software and hardware with the Arduino RFID project—an embodiment of my understanding of computer engineering. This project seamlessly integrates Arduino programming to facilitate the reading and writing of data onto RFID cards. Beyond the lines of code, it represents a fusion of software intricacies and hardware capabilities. As I navigate the Arduino environment, this project showcases not only my proficiency in coding but also my adeptness in the realm of computer engineering, where software seamlessly interacts with physical components to create innovative solutions.\n" +
              "\n",
          how: "The Arduino RFID project is a testament to the synergy of C and C++ languages in the realm of hardware interaction. Utilizing a breadboard setup, this project seamlessly bridges the gap between software and physical components. The Arduino language, a derivative of C and C++, serves as the coding foundation, showcasing my proficiency in these languages. This project not only reads and writes data onto RFID cards but also demonstrates my ability to harness the power of low-level languages for effective communication with hardware. It stands as a tangible example of my prowess in computer engineering, where code comes to life on a breadboard.",
          result: "",

          details: "arduino rfid reader",projectName: "arduino-rfid", titleName: "Arduino RFID", id: 7},
      ],
      flag: false,
      beforePath: null,
      afterPath: null,
      beforeFlag: true,
      afterFlag: true,

    }
  },
  methods: {
      goAfter(){
       // console.log(this.afterPath)
        if(this.afterFlag){

          console.log(this.afterPath.projectName)
          this.$router.push("/projects/" + this.afterPath.projectName);
          setTimeout(() => {location.reload()}, 1)



        }

      },
      goBefore(){

        // console.log(this.beforePath)
        if(this.beforeFlag){

          console.log(this.beforePath.projectName)
          this.$router.push("/projects/" + this.beforePath.projectName);
          setTimeout(() => {location.reload()}, 1)



        }
      }


  },
  mounted(){
// 1 2 3 4 5 6 7
// 0 1 2 3 4 5 6

    this.projects.forEach((project) => {
      if(project.projectName === this.projectName){
        this.flag = true;
        this.mainProject = project;
        let id = project.id;
        // if(id === 1){
        //   this.beforePath = null;
        //   this.afterPath = this.projects[1].projectName
        // } else {
        this.beforePath = this.projects[id-2]
        this.afterPath = this.projects[id]

        // }
      }


    })

    if(this.beforePath === null || this.beforePath === undefined){
      this.beforeFlag = false;
    }

    if(this.afterPath === null || this.afterPath === undefined){
      this.afterFlag = false;
    }

    if(this.flag === false){

      // location.reload()
    }
    console.log(this.flag)



  },
}
</script>


<style scoped lang="scss">
main{
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .main-content{

    margin-top: 2rem;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    footer {
      width: 15%;
      .directory-link {
        width: 100%;
        button{
          font-size: 2rem;
          border-radius: 3rem;
          width: 100%;
          height: 60%;


        }

        button:hover{
          background: green;
          transform: scale(1.1);
        }


      }
    }
    header{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 1rem;
      a{
        font-size: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
      }

      .before, .next {
        border-radius: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;

      }

      .before:hover, .next:hover{
        background: green;
      }
      .before:hover{
        animation: bounceLeft .7s infinite;

      }
      .next:hover{
        animation: bounceRight .7s infinite;

      }


    }
    .main-text{
      section{
        .title{
          font-size: 1.7rem;

        }
        .desc{
          font-size: 1.4rem;
        }

        .title, .desc{
          margin-bottom: 1rem;
        }

      }



    }


  }
  .notFound{
    width: 100%;


  }
}

@keyframes bounceLeft {
  0%{
    transform: translateX(5px);
  }
  50%{
    transform: translateX(-5px);
  }

  100%{
    transform: translateX(5px);
  }
}
@keyframes bounceRight {
  0%{
    transform: translateX(-5px);
  }
  50%{
    transform: translateX(5px);
  }

  100%{
    transform: translateX(-5px);
  }
}

</style>