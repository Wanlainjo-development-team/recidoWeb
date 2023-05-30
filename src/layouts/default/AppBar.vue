
<script >
import Vue from 'vue'
export default({
  data:()=>({  
    companyNmae: "WANLAINJO COMPUTERS",
    drawerItem: [
        
    ],
  })
})
</script>

<template>
  <v-app-bar >
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />
       {{ companyNmae }}
    </v-app-bar-title>
  </v-app-bar>
   
  <v-navigation-drawer
  permanent
  location="left"
  >
   <v-list>
      <v-list-item> 
        <v-btn
        prepend-icon="mdi-shopping"
        color="primary"
        href="#"
        min-width="200"
        size="large"
        variant="flat"
        elevated
      >
        SALES
      </v-btn>
      </v-list-item>
      <v-divider/> 
      <v-list-item> 
        <v-btn
        color="success"
        href="#"
        min-width="200"
        size="large"
        variant="flat"
      >
        <v-icon
          icon="mdi-StoreOutline"
          size="large"
          start
        />
        INVENTORY
      </v-btn>
      </v-list-item>
      <v-divider/> 
      <v-list-item> 
        <v-btn
        color="yellow"
        href="#"
        min-width="200"
        size="large"
        variant="flat"
      >
        <v-icon
          icon="mdi-store"
          size="large"
          start
        />
        Inventory
      </v-btn>
      </v-list-item>
      <v-divider/> 
      <v-list-item> 
        <v-btn
        color="info"
        href="#"
        min-width="200"
        size="large"
        variant="flat"
      >
        <v-icon
          icon="mdi-Chart-line"
          size="large"
          start
        />
        <router-link to="/reports/salesreport">Reports</router-link>
      </v-btn>
      </v-list-item>
      <v-divider/> 
   </v-list>
  </v-navigation-drawer>
</template>

