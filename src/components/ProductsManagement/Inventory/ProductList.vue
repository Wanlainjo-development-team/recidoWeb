<script>
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
export default {
  components: { ReusableTableHeader },

  name: "Productlist",
};
</script>
<template>
  <v-container>
    <div>
      <reusable-table-header :buttonTitle="'Add Products'" :tableTitle="'Inventory'" />
    </div>
  </v-container>
</template>