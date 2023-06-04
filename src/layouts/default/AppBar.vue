
<script >
export default {
  data: () => ({
    companyNmae: "ReciDo",
    props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },
    drawerItem: [
      {
        title: "Dashboard",
        path: "/",
        icon: "mdi-view-dashboard",
         
      },
      {
        title: "Iventory",
        path: "/inventory/productlist",
        icon: "mdi-FormatListBulleted",
        
      },
      {
        title: "Sales",
        path: "/sales/orderlist",
        icon: "mdi-shopping",
        
      },
      {
        title: "Report",
        path: "/report/salesreport",
        icon: "mdi-shopping",
         
      },
      {
        title: "Customers",
        path: "/customers/customerlist",
        icon: "mdi-account-group",
        
      },
      {
        title: "tables",
        path: "/dataTables",
        icon: "mdi-account-group",
        
      },
    ],
  }),
};
</script>

<template>  
  <div>
    <v-card
    color="grey-lighten-4"
    flat
    rounded="0"
  >
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-card-title>{{companyNmae}}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  </div>
 
  <v-navigation-drawer permanent location="left">
    <div>
      
    </div>
    <v-list>
      <v-list-item v-for="(route, i) in drawerItem" :key="i" :to="route.path" color="primary">
        <div  class="rounded-lg py-3 px-2">
          <v-icon :icon="route.icon" ></v-icon>
          {{ route.title }}
        </div>
        <v-divider />
      </v-list-item>
    </v-list>
    
  </v-navigation-drawer>
</template>

