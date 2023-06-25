<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
import InvoiceModal from "./InvoiceModal.vue";
import CreateNewInvoice from './CreateNewInvoice.vue';
 
export default {
  components: { ReusableTableHeader, InvoiceModal, CreateNewInvoice },
 
     
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