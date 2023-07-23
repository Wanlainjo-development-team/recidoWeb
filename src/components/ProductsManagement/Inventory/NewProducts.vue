<script>

import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
import { ref } from 'vue'
import { useInventorystore } from '@/store/inventory'
 const product = ref(useInventorystore())

</script>
<template>
<v-dialog v-model="product.dialog" persistent width="800">
  <template  v-slot:activator="{ props }">
    <v-btn color="primary" v-bind="props">Add Producs</v-btn>
  </template>
  <v-card>
    <v-toolbar>
       <v-toolbar-title>NEW PRODUCTS</v-toolbar-title>
    <v-btn @click="product.dialog = false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    </v-toolbar>
  <v-card-text>
  </v-card-text>
  <v-row>
    <v-col cols="12">
      <v-text-field
        label="Name*"
        v-model="customer.customerName"
        variant="underlined"
        color="blue"
        required
      />
      </v-col>
  </v-row>
  </v-card>
</v-dialog>
</template>