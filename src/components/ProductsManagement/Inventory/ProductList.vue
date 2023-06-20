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
      <v-sheet class="d-flex flex-wrap">
        <v-sheet class="flex-1-0 ma-2 pa-2">
          <h1>INVOICES</h1>
        </v-sheet>
        <v-sheet class="flex-1-0 ma-2 pa-2">
          <v-text-field
            density="compact"
            variant="solo"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            label="Search"
          >
        </v-text-field>
        </v-sheet>
  
        <v-sheet class="ma-2 pa-2">
          <v-btn class="bg-primary"
          @click="buttonClicking"
          >New Invocie</v-btn>
        </v-sheet>
      </v-sheet>
    </div>
    <div class="d-flex flex-wrap">
         <v-table>
          <thead>
            <tr>
              <th class="text-left">S/N</th>
              <th class="text-left">Name</th>
              <th class="text-left">Number</th>
              <th class="text-left">Email</th>
            </tr>
          </thead>
         </v-table>
    </div>
  </v-container>
</template>