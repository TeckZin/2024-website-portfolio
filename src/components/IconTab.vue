<template>

  <div class="icon-content">

    <a href="mailto: tant1@wit.edu" target="_blank" class="icon-link" ><img src="../assets/images/SocialMediaIcons/icons8-gmail.svg" alt="gmail-icon" id="gmail"></a>
    <a href="https://linkedin.com/in/teckzintan" target="_blank" class="icon-link"><img src="../assets/images/SocialMediaIcons/linkedin.svg" alt="linkedln-icon" id="linkedln"></a>
    <a href="https://github.com/TeckZin" target="_blank" class="icon-link"><img src="../assets/images/SocialMediaIcons/github.svg" alt="github" id="github"></a>

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




.icon-content {
  display: flex;
  #gmail, #linkedln, #github{
    height: 2rem;
    width: 2rem;
    margin-left: 1rem;


  }


  .icon-link:hover{
    transform: translate(3px) scale(1.2);



  }



}

</style>