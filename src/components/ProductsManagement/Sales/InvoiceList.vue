<script>
import ReusableTableHeader from '@/components/Reusables/ReusableTableHeader.vue'
export default {
  components: { ReusableTableHeader },
 
     
    name: "InvoicesList",
    data () {
      return {
        tableHeaders: [
          {
            id: 1,
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
           
        ],
      }
    },
     

  }

</script>
<template>
     <v-container id="order-list" fluid tag="section">
         <div>
          <reusable-table-header :tableTitle="'Invoices'" :buttonTitle="'New Invoice'"/>
         </div>
         
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in tableHeaders"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.name }}</td>
                
                <td>
                  <tr>
                    <td><button>dell</button></td>
                    <td><button class="pa-2">edit</button></td>
                  </tr>
                </td>
              </tr>
            </tbody>
          </v-table>
       
     </v-container>
</template>