<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
import InvoiceModal from "./InvoiceModal.vue";
 
export default {
  components: { ReusableTableHeader, InvoiceModal },
 
     
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
           <invoice-modal/>
         </div>
     </v-container>
</template>