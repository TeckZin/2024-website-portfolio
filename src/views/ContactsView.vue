<template>
<main class="contact-content">

    <div class="header-content">


    </div>

    <ContactsForm class="contact-main" />

</main>



</template>

<script>
import ContactsForm from "@/components/ContactsForm.vue";

export default {
  components: {ContactsForm},
  data() {
    return {}
  },
}
</script>


<style scoped lang="scss">


main{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>