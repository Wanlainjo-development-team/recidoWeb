
<script setup>
import { db } from "@/plugins/firebase";
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
import { useInvoicesStore } from "@/store/invoices";

const invoices = useInvoicesStore()

// invoiceId: String,
// date: String,
// invoiceContact: Object,
// city: String,
// state: String,
// zip: String,
// country: String,
// shippingCity: String,
// shippingState: String,
// shippingZip: String,
// shippingCountry: String,
// items: [],
// note: String,
// vat: String,
// invoiceTotalPrice: String,
// invoiceItemList: [],

// invoiceList: [],

// mounted() {
//   this.pullInvoices();
// },

//   methods: {
//     addNewinvoiceItem() {
//       this.invoiceItemList.push({
//         // id: uid(),
//         itemName: "",
//         itemQuantity: "",
//         itemPrice: "",
//         toTalprice: "",
//       });
//     },
//     deleteInvoiceItem(id) {
//       this.invoiceItemList = this.items.filter((item) => item.id !== id);
//     },
//     publishInvoiceItem() {
//       this.items = true;
//     },
//     saveDraftInvoiceItem() {
//       this.date = true;
//     },
//     calculateInvoiceTotal() {
//       this.invoiceTotalPrice = 0;
//       this.invoiceItemList.forEach((item) => {
//         this.invoiceTotalPrice += item.total;
//       });
//     },
//     //uploading a new invoice
//     async uploadInvoiceItem() {
//       if (this.invoiceItemList.length <= 0) {
//         alert("Please make sure you field the required fields");
//         return;
//       }
//       this.calculateInvoiceTotal();
//     },
//     submitForm() {
//       this.uploadInvoiceItem = true;
//     },

//     async pullInvoices() {

//     },
//   },
// };
</script>
  
<template>
  <v-container>
    <reusable-table-header
      :tableTitle="'Invoices'"
      :buttonTitle="'New Invoice'"
    />

    <v-table>
      <thead>
        <tr>
          <th class="text-left ">Invoice</th>
          <th class="text-left">Name</th>
          <th class="text-left">Date</th>
          <th class="text-left">Items Count</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in invoices.invoiceList" :key="item.id">
          <td>SO-{{ item.invoiceId }}</td>
          <td>{{ item.invoiceContact?.name }}</td>
          <td>{{ new Date(item?.date).toDateString() }}</td>
          <td>{{ item.items.length }}</td>
          <td>
              <v-btn class="ma-1"
              prependIcon="mdi-pencil"
              color="success"
              >
              Upate</v-btn>
              <v-btn class="ma-1">View</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>