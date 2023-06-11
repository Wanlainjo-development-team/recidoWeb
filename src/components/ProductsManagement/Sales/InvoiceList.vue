<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
 
export default {
  components: { ReusableTableHeader },
 
     
    name: "InvoicesList",
    data () {
      return {
        
      }
    },
     

  }

</script>
<template>
     <v-container id="order-list" fluid tag="section">
         <div>
          <reusable-table-header :tableTitle="'Invoices'" :buttonTitle="'New Invoice'"/>
         </div>
     </v-container>
</template>