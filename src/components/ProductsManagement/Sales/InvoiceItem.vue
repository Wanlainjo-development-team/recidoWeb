
<script>
  export default {
    const: total,
    const: vat,
    data () {
      return {
        
      }
    },
 props : { 
      item:{  
         type:String,
         required:true,
      },
      Description:{  
        type:String,
        required:false,
      },
      quantiy:{
        type:String,
        required:true
      },
      unitPrice:{
        type:String,
        required:true
      },
  },
  methods: {
    calculateSubtotal(){  
      if(this.quantiy && this.unitPrice == true){  
         total = this.quantiy * this.unitPrice
        return total
      }
      alert("Please input a unit price and Quantity ")
    },
    calculateVat( ){
       const vatRate = 0.075 
       vat = total * vatRate
       return vat
     },
    grandTotal(){  
      const grandTotal = total+ vat
      return grandTotal
    }
  },


  }
</script>

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
