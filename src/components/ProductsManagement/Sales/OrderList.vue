<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
export default {
  components: { ReusableTableHeader },
 
     
    name: "OrderList",
    data: () => ({
      loaded: false,
      loading: false,
    }),

    
  }

</script>
<template>
     <v-container>
         <div>
          <reusable-table-header :tableTitle="'Invoices'" :buttonTitle="'New Invoice'"/>
         </div>
     </v-container>
</template>