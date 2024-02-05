<template>

  <div class="main-content">

    <p> 404 </p>
    <p> Page not found </p>

    <router-link class="directory-link" to="/"><button>Return</button> </router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>


<style scoped lang="scss">

.main-content{
  display: flex;
  font-size: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .directory-link {
    width: 50%;
    button{
      font-size: 2rem;
      border-radius: 3rem;
      width: 100%;
      height: 60%;


    }


  }

}

</style>
