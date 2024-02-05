<template>

  <main>



    <h1>Submission Success</h1>

    <div class="buttons">
      <button class="goBack" @click="goBack">Go Back</button>
     <router-link class="link" to="/directory"> <button class="directory-link">Navigation</button></router-link>


    </div>

  </main>


</template>

<script>
export default {
  data() {
    return {}
  },methods: {
      goBack(){
        location.reload();

      }

  }
}
</script>


<style scoped lang="scss">

main {
  display: flex;

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .directory-link, .goBack {
        width: 100%;


        margin-top: 1rem;


        font-size: 2rem;
        border-radius: 3rem;





    }

    .link{
      width: 100%;
    }

    .directory-link:hover, .goBack:hover,  {
      background: green;
      transform: scale(1.05);

    }
  }
}

</style>