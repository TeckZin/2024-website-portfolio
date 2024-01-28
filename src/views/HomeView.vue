<template>

  <transition name="fade" appear>


  <div class="content">
    <div class="welcome-page">
      <WelcomePage :showIconFlag="navBarTopFlag"/>
    </div>
    <div class="homeNavBar">
      <HomeNavBar :showIconFlag="navBarTopFlag" />
    </div>
  </div>

  </transition>
</template>

<script>
import WelcomePage from "@/components/WelcomePage.vue";
import HomeNavBar from "@/components/HomeNavBar.vue";

export default {
  components: {HomeNavBar, WelcomePage},
  data() {
    return {
      navBarTopFlag: true,
      windowHeight: 0,
      windowWidth: 0,
    }
  },
  mounted() {
   this.navBarTopFlag = window.innerWidth >= 890;
  },
  updated() {
      console.log("updated")
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {

    myEventHandler(e) {
      this.navBarTopFlag = window.innerWidth >= 890;


    }
  }

}
</script>


<style scoped lang="scss">
.content{
  margin: auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 60rem;

}
.homeNavBar{
  height: 40%;

}

.welcome-page {
  height: 50%;


}



.fade-enter-from{
  opacity: 0;
}

.fade-enter-active{
  transition: all 2s ease;
}

</style>