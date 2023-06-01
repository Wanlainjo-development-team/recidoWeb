<script>
export default {
 
     
    name: "newProducts",
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
        <v-sheet class="d-flex flex-wrap " elevation="2">
            <v-sheet class="flex-1-0 ma-2 pa-2">
               <h1>Invoices</h1>
            </v-sheet>
            <v-sheet class="flex-1-0 ma-2 pa-2">
                <v-text-field
                    :loading="loading"
                    density="compact"
                    variant="solo"
                    label="Search Invoice"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onClick"
                ></v-text-field>  
            </v-sheet>
          
             
            <v-sheet class="ma-2 pa-2 ">
               <v-btn class="bg-primary">New Invoice</v-btn>
            </v-sheet>

          </v-sheet>
        </div>
     </v-container>
</template>