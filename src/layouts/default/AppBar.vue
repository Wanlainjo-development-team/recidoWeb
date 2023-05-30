
<script >

export default{
  data:()=>({  
    companyNmae: "WANLAINJO COMPUTERS",
    drawerItem: [
      {title:'Iventory', path:'/inventory/productlist',icon:'mdi-StoreOutline',color:'info'},
      {title:'Sales', path:'/sales/orderlist',icon:'mdi-shopping',color:'primary'},
      {title:'Report', path:'/report/salesreport',icon:'mdi-shopping',color:'yellow'},
      {title:'Customers', path:'/customers/customerlist',icon:'mdi-user',color:'green'},
    ],
  })
}

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
        <v-btn v-for="(route, i) in drawerItem" :key="i" :to="route.path"
        color= route.color
        min-width="200"
        size="large"
        variant="flat"
        elevated
      >
         {{ route.title }}
      </v-btn>
      <v-divider/>
      </v-list-item>
   </v-list>
  </v-navigation-drawer>
</template>

