<script>
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
export default {
  components: { ReusableTableHeader },

  name: "CustomerList",
  data: () => ({
    loaded: false,
    loading: false,
  }),
};
</script>
<template>
  <v-container>
    <div>
      <reusable-table-header
        :tableTitle="'Customers'"
        :buttonTitle="'Add New'"
      />
    </div>
  </v-container>
</template>
