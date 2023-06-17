<script>
import CustomerListVue from '../Customers/CustomerList.vue';
export default {
  name: "craeteNewInvocie",
  data:()=>{ 
     
   },

   methods: {
     
   },
};
</script>

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <v-row>
            <v-col>
                <v-text-field label="Bill to:" placeholder="Select Customer"  variant="underlined"></v-text-field>
                <v-autocomplete
                ref="customerList"
                label="Select Customer"
                placeholder="Select..."
                required
              ></v-autocomplete>
            </v-col>
            <v-col>
                <v-btn>Add</v-btn>
            </v-col>
          </v-row>
           
        </v-col>
 
        <v-col cols="12" md="2">
           <v-input aria-placeholder="input" ></v-input>
        </v-col>
        <v-col cols="12" md="2">
          col1
        </v-col>
        <v-col cols="12" md="2">
          col1
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field label="First name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field label="Last name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style></style>
