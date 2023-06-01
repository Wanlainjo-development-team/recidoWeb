<script>
export default {
    name: "reusabletable",
    props: {
    tableHeader:{  
      type: String,
      required: true,
      default: "table-header"
    }
  },
    data: ()=>({  
        tableTile: "Inventory9",
       
    })
}
</script>
<template>
    <v-container>
        <h1>{{tableTile}}</h1>
        <v-table>
            <thead>
                <tr>
                  <th
                  class="text-center">
                      {{tableHeader}}
                  </th>
                </tr>
            </thead>
        </v-table>
    </v-container>
    
</template>