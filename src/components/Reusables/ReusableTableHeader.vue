<script>
export default {
  name: "TableHeader",
  data: () => ({
    loaded: false,
    loading: false,
  }),
  props: {
    tableTitle:{
      type: String,
       reqiured: true
      },
    buttonTitle:{
      type: String,
      reqiured: false,
    },
    
  },
   
};
</script>
<template>
    <div>
      <v-sheet class="d-flex flex-wrap">
        <v-sheet class="flex-1-0 ma-2 pa-2">
          <h1>{{ tableTitle }}</h1>
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
          <v-btn class="bg-primary">{{ buttonTitle }}</v-btn>
        </v-sheet>
      </v-sheet>
    </div>
 
</template>
