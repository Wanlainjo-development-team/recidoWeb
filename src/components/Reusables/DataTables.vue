<template>
<v-container id="data-tables" fluid tag="section">
  <v-table>
    <thead>
      <tr color="primary">
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          item
        </th>
        <th class="text-left">
          date
        </th>
        <th class="text-left">
          Action
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
        <td>{{ item.name }}</td>
        <td>
          <tr class="pa-2">
            <td>
               <v-btn class="pa-2" color="error">Cancel</v-btn>
            </td>
            <td class="pa-2">
               <v-btn color="success" >Edit</v-btn>
            </td>
            
          </tr>
        </td>
      </tr>
    </tbody>
  </v-table>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        tableHeaders: [
          {
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
    props () {
      
    },
  }
</script>