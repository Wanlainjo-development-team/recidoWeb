<script>
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
export default {
  components: { ReusableTableHeader },

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
  </v-container>
</template>