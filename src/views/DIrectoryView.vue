<template>
  <main class="directory-content">
    <home-nav-bar />

  </main>


</template>

<script>
import HomeNavBar from "@/components/HomeNavBar.vue";

export default {
  components: {HomeNavBar},
  data() {
    return {}
  },
}
</script>


<style scoped lang="scss">
.directory-content{
  display: flex;
  //font-size: 10rem;
  justify-content: center;
  align-items: center;
  transform:scale(2);

}




</style>