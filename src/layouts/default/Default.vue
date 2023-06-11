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
import { onMounted } from "vue";

const invoices = useInvoicesStore();

onMounted(() => {
  invoices.GET_INVOICES()
});
</script>
