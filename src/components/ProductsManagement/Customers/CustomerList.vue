<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
export default {
  components: { ReusableTableHeader },
 
     
    name: "CustomerList",
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }

</script>
<template>
     <v-container>
        <div>
        <reusable-table-header :tableTitle="'Customers'" :buttonTitle="'Add New'"/>
        </div>
     </v-container>
</template>