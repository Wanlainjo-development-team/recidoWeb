
<script > 
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
import { useInvoicesStore } from '@/store/invoices';
 export default{  
  name: "incvoiceModal",
  setup(){  
    const invoices = useInvoicesStore

    return{invoices}
  }
 }
 
</script>
  
<template>
  <v-container>
     
<div>
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
         
        >New Invocie</v-btn>
      </v-sheet>
    </v-sheet>
  </div>
</div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left ">S/N</th>
          <th class="text-left ">Invoice #</th>
          <th class="text-left">Customer</th>
          <th class="text-left">Date</th>
          <th class="text-left">Items Count</th>
          <th class="text-left">status</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
         
        <tr v-for="item in invoices.invoiceList" :key="item.id">
            <td > {{count ++}}</td>
            <td>SO-{{ item.invoiceId }}</td>
            <td>{{ item.invoiceContact?.name }}</td>
            <td>{{ new Date(item?.date).toDateString() }}</td>
            <td>{{ item.items?.name }}</td>
            <td>{{ item.invoiceState  }}</td>
            <td>
                <v-btn class="ma-1"
                prependIcon="mdi-pencil"
                color="success"
                variant="outlined"
                >
                Upate</v-btn>
                <v-btn class="ma-1"
                color="primary"
                variant="outlined"
                >View Details</v-btn>
            </td>
           
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>