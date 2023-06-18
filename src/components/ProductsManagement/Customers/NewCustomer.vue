<script setup>
import { useCustomerStore } from "@/store/customers";
import { ref } from "vue";

const customer = ref(useCustomerStore());
</script>

<template>
  <v-dialog v-model="customer.dialog" persistent width="800">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Add </v-btn>
    </template>
    <v-card rounded="lg">
      <v-toolbar density="compact" color="transparent">
        <v-toolbar-title>New Customer</v-toolbar-title>
        <v-spacer />

        <v-btn icon @click="customer.dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
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
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Address*"
              required
              type="address"
              v-model="customer.address"
              color="blue"
              variant="underlined"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Contact*"
              required
              type="contact"
              v-model="customer.contact"
              color="blue"
              variant="underlined"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Email*"
              required
              v-model="customer.email"
              color="blue"
              variant="underlined"
            />
          </v-col>

          <v-col cols="12" sm="6"> </v-col>
        </v-row>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          @click="customer.NEW_CUSTOMER"
          class="bg-blue px-5 text-capitalize"
          rounded="lg"
          variant="text"
          :loading="customer.loading"
        >
          Save customer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>