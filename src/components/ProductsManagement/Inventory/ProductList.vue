<script>
 import ReusableTable from '@/components/Reusables/ReusableTable.vue';
  export default {
  components: { ReusableTable },

  
   
    data () {

      
      return {
        
      }
    },
  }
</script>

<template>

    <v-container>
         <reusable-table :tableHeader="price"/>
      </v-container>
   
</template>