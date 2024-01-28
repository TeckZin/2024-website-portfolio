<template>

  <section class="main-content">

    <div class="top-box">
      <div class="hort-box"></div>
      <div class="vert-box"></div>

    </div>
    <div class="image-ttz-logo">
      <img class="myLogo" src="../assets/images/MyLogo/White-logo-no-background.svg" alt="myLogo">
    </div>



    <div class="welcome-text">

      <p>Hi :), </p>
      <p>I'm Teck,</p>
      <p>Software Engineer,</p>
      <p>Student</p>

    </div>

    <div class="icon-tab" v-if="!showIconFlag">
      <icon-tab />
    </div>
  </section>
</template>



<script>

import IconTab from "@/components/IconTab.vue"


export default {
  props: ['showIconFlag'],
  components: {IconTab} ,
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
$borderLine: 0.1rem solid;
.main-content {
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: 0.7fr repeat(3, 1fr);
  grid-template-rows: 0.7fr 1fr;

    .top-box {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
      .hort-box{
        width: 20vh;
        height: 2vh;
        background: white;
        clip-path: polygon(0 0, 100% 0, 94% 100%, 0% 100%);
        border-top-left-radius: 20px;
      }
      .vert-box{
        height: 25vh;
        width: 2vh;
        background: white;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
      }
    }
  .image-ttz-logo{
    margin-top: 2rem;
    margin-left: 2rem;
    grid-column-start: 1;
    grid-row-start: 1;
    .myLogo{
      width: 5rem;
      height: 5rem;
    }
  }

  .image-ttz-logo:hover{
    transform: translate(7px, 7px) scale(1.1);

  }
  .welcome-text {
    font-size: 2.5rem;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  .icon-tab {
    margin-top: 15%;
    margin-right:  2rem;
    grid-row-start: 1;
    grid-column-start: 5;
  }
}

</style>