<template>
<main class="contact-content">

<!--    <div class="header-content">-->

<!--      <SelectNavBar/>-->


<!--    </div>-->



    <ContactsForm class="contact-main" v-if="!submit" @submitFunc="handleSubmit"/>


    <SubmissionSucess v-if="submit"/>
</main>



</template>

<script>
import ContactsForm from "@/components/ContactsForm.vue";
import SelectNavBar from "@/components/SelectNavBar.vue";
import SubmissionSuccess from "@/components/SubmissionSucess.vue";

export default {
  components: {SubmissionSuccess, SelectNavBar, ContactsForm},
  data() {
    return {
      submit: false,

    }
  },methods: {
    handleSubmit(posts, now){


      console.log("here")
      this.submit = true;
      // this.$emit('submitFunc', now, posts)

      this.$emit('submitFunc', posts, now)




    }


  },
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