<script>

import { useCustomerStore } from "@/store/customers";
const cust = useCustomerStore()
export default {

}
</script>

<template>
    <v-container> 
        
            <reusable-table-header
              :tableTitle="'Customers'"
              :buttonTitle="'New Customer'"
            />
        <v-table>
          <thead>
            <tr>
              <th class="text-left ">S/n</th>
              <th class="text-left ">Invoice #</th>
              <th class="text-left">Customer</th>
              <th class="text-left">Date</th>
              <th class="text-left">Items Count</th>
              <th class="text-left">status</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
           <tr>1</tr>
           <tr>2225</tr>
          </tbody>
        </v-table>
      </v-container>
</template>



<style>

</style>