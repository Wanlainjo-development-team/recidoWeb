<script>
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
import CreateNewInvoice from '../Sales/CreateNewInvoice.vue';
export default {
  components: { ReusableTableHeader, CreateNewInvoice },

  name: "Productlist",
  data(){
    return{  
       
    
    }
  },
  props : { 
      // item:{  
      //    type:String,
      //    required:true,
      // },
      // Description:{  
      //   type:String,
      //   required:false,
      // },
      // quantiy:{
      //   type:String,
      //   required:true
      // },
      // unitPrice:{
      //   type:String,
      //   required:true
      // },
  },
};
</script>
<template>
  <v-container>
    <div>
      <reusable-table-header :buttonTitle="'Add Products'" :tableTitle="'Inventory'" />
    </div>
    <create-new-invoice/>
  </v-container>
</template>