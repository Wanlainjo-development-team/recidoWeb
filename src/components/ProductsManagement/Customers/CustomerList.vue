<script>
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
import { useCustomerStore } from "@/store/customers";
import NewCustomer from "./NewCustomer.vue";
export default {
  components: { ReusableTableHeader, NewCustomer },

  name: "CustomerList",
  data: () => ({
    loaded: false,
    loading: false,
  }),

  setup() {
    const customers = useCustomerStore();

    return { customers };
  },
};
</script>

<template>
  <v-container>
    <div>
      <reusable-table-header
        :tableTitle="'Customers'"
        :buttonTitle="'Add New'"
      />
      <div>
        <new-customer />
      </div>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">S/N</th>
          <th class="text-left">Name</th>
          <th class="text-left">Number</th>
          <th class="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(customer, count) in customers.customerList"
          :key="customer.id"
        >
          <td>{{ count }}</td>
          <td>{{ customer.name }}</td>
           
          <td>
            <span v-for="(digit, i) in customer?.phoneNumbers" :key="i">{{
              digit.digits
            }}</span>
          </td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.location }}</td>

          <td>
            <v-btn
              class="ma-1"
              prependIcon="mdi-pencil"
              color="success"
              variant="outlined"
            >
              Upate</v-btn
            >
            <v-btn class="ma-1" color="primary" variant="outlined"
              >View Details</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
