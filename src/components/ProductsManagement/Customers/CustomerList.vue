<script>
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
export default {
  components: { ReusableTableHeader },

  name: "CustomerList",
  data: () => ({
    loaded: false,
    loading: false,
  }),
};
</script>
<template>
  <v-container>
    <div>
      <reusable-table-header
        :tableTitle="'Customers'"
        :buttonTitle="'Add New'"
      />
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
        <tr v-for="customer in customers.customerList" :key="customer.id">
          <td > {{count ++}}</td>
          <td>{{ customer.name }}</td>
           
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
