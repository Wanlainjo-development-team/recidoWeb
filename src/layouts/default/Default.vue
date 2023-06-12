<template>
  <v-app>
    <default-bar />
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import { useInvoicesStore } from "@/store/invoices";
import { useCustomerStore } from "@/store/customers";
import { onMounted } from "vue";

const invoices = useInvoicesStore();
const customers = useCustomerStore();

onMounted(() => {
  invoices.GET_INVOICES(),
  customers.GET_CUSTOMERS()
});
 
</script>
