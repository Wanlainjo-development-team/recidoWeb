<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
     
    </v-layout>
   
    <InvoiceModal />
  </v-container>
</template>
  

<script>
// import widget from "../Reusables/widget.vue";
import InvoiceModal from "../ProductsManagement/Sales/InvoiceModal.vue";
export default {
  components: {
    // widget,
    InvoiceModal,
  },
  name: "Dashboard",
};
</script>

<style>
</style>