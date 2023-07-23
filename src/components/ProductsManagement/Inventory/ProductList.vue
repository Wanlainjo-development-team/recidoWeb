<script>
import { useInventorystore } from "@/store/inventory";
import CreateNewInvoice from "../Sales/CreateNewInvoice.vue";
export default {
  components: { CreateNewInvoice },

  name: "Productlist",

  setup() {
    const inventory = useInventorystore();
    return { inventory };
  },
  mounted() {
    this.inventory.GET_INVENTORY();
  },
};
</script>
<template>
  <v-container>
    <div>
      <v-sheet class="d-flex flex-wrap">
        <v-sheet class="flex-1-0 ma-2 pa-2">
          <h1>Inventory</h1>
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
          <v-btn>products</v-btn>
        </v-sheet>
      </v-sheet>
    </div>
    <div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">S/N</th>
            <th class="text-left">item</th>
            <th class="text-left">description</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Unit price</th>
            <th class="text-left">inventory Value</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(inventory, count) in inventory.inventoryList"
            :key="inventory.id"
          >
            <td>{{ count }}</td>
            <td>{{ inventory.name }}</td>
            <td>{{ inventory.description }}</td>
            <td>
              {{
                inventory.quantity
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
            </td>
            <td>
              {{
                inventory.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
            </td>
            <td>
              {{
                (parseFloat(inventory.price) * parseFloat(inventory.quantity))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>