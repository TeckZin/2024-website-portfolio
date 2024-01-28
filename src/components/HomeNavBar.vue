<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

  <div class="nav-bar-content">
  <IconBar class="icon-bar" v-if="showIconFlag" />
    <nav class="nav-bar">
<!--      <transition name="slide-fade" appear>-->
        <ul>
          <transition-group tag="ul" name="slide-fade" >
            <li class="nav-section"  v-if="showTag" v-for="(route, page) in pageNumbers"><p class="page-num">pg<br>{{page}}</p><router-link class="non-active-bar" :to="{name: route}" @click="showNavBar">{{route}}</router-link></li>
          </transition-group>
        </ul>
<!--      </transition>-->
    </nav>
  </div>

</template>

<script>
import IconBar from "@/components/IconTab.vue";

export default {

  props: ['showIconFlag'],
  components: {IconBar},
  data() {
    return {
      showNav: true,
      pageNumbers: {"01": "Home", "02": "About","03": "Projects","04": "Contacts"},
      showTag: false,

    }
  },
  methods: {

    showNavBar(){
      this.showNav = true
      this.$emit('showNavBar')
    }


  },
  mounted() {
    this.showTag = true
  }
}
</script>


<style scoped lang="scss">

$borderLine: 0.1rem solid;

.slide-fade-enter-from{
  opacity: 0;
  transform: translateY(-50px);
}

.slide-fade-enter-active {
  transition: all 2s ease;

}


.nav-bar-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}




.top-box{
  .vert-box {
    width: 20rem;
    height: 1rem;
    margin: 0;
    padding: 0;
  }
}
.icon-bar{
  align-items: flex-end;
  position: relative;
  right: 0;
  margin-top: 15%;


}





.nav-bar {
  display: flex;
  //box-sizing: content-box;
  justify-content: flex-end;
  padding: 0;
  ul{
    margin-top: 20%;
    padding: 0;
    list-style: none;
    li{
      display: flex;
      margin-top: 1rem;
      margin-bottom: 1rem;
      .page-num{
        font-size: 1rem;
        letter-spacing: 1px;
        margin-left: 1rem;
        margin-top: auto;
       }
      .non-active-bar {
        justify-content: center;
        margin: 0rem 1rem 0 1rem;
        text-decoration: none;
        font-size: 2rem;
      }
      .non-active-bar:hover {
        transform: scale(1.1);
      }
    }
  }
}

</style>