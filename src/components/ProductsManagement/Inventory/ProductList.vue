<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
export default {
  components: { ReusableTableHeader },
 
     
    name: "Productlist",
    
    }
  

</script>
<template>
     <v-container>
        <div>
          <reusable-table-header :button-title="Products" :tableTitle="Inventory"/>
        </div>
     </v-container>
</template>