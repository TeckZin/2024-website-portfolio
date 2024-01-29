<template>
<main class="contact-content">

<!--    <div class="header-content">-->

<!--      <SelectNavBar/>-->


<!--    </div>-->



    <ContactsForm class="contact-main" @submitFunc="handleSubmit" v-if="!submit" />


    <SubmissionSucess v-if="submit"/>
</main>



</template>

<script>
import ContactsForm from "@/components/ContactsForm.vue";
import SelectNavBar from "@/components/SelectNavBar.vue";
import SubmissionSucess from "@/components/SubmissionSucess.vue";

export default {
  components: {SubmissionSucess, SelectNavBar, ContactsForm},
  data() {
    return {
      submit: false,

    }
  },methods: {
    handleSubmit(){
      console.log("here")
      this.submit = true;

    }


  }
}
</script>


<style scoped lang="scss">


main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>