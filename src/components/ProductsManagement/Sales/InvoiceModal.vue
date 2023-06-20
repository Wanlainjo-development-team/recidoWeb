
<script setup> 
import ReusableTableHeader from "@/components/Reusables/ReusableTableHeader.vue";
 




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

  // methods: {
  //   addNewinvoiceItem() {
  //     this.invoiceItemList.push({
  //       // id: uid(),
  //       itemName: "",
  //       itemQuantity: "",
  //       itemPrice: "",
  //       toTalprice: "",
  //     });
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
        @click="buttonClicking"
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
         
        <tr v-for="item in invoices.invoiceList" :key="item.id"
         :class="[ index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
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