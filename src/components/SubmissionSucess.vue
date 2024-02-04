<template>


  <h1>Submission Success</h1>

  <div class="buttons">
    <button @click="goBack">Go Back</button>
    <router-link class="directory-link" to="/directory"><button>Navigation</button> </router-link>


  </div>


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

</style>