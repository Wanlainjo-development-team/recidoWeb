
<script >
export default {
  data: () => ({
    businessName: "ReciDo",
    drawer: true,
    Logo: "/src/assets/logo.png",
     
    props: {
      toggle: {
        type: Boolean,
        required: false,
        default: true,
      },
     
  watch: {
      group () {
        this.drawer = false
      },
    },
    },
    drawerItem: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "mdi-view-dashboard",
      },
      {
        title: "Iventory",
        path: "/inventory/productlist",
        icon: "mdi-NetworkPos",
      },
      {
        title: "Sales",
        path: "/invoiceList",
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
       
    ],
  }),
};
</script>
<style>
  .v-btn:hover:before{
    color: transparent !important;
  }
</style>
<template>
  <v-app-bar elevation="1">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title >{{businessName}}</v-toolbar-title>
     
      <v-img src="/src/assets/logo.png" class="flex start"/>
   
    
    <v-spacer/>
    <v-btn variant="text" icon="mdi-magnify"></v-btn>
     <v-btn variant="text" icon="mdi-filter"></v-btn>
    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

  <v-navigation-drawer 
  v-model="drawer"
  location="left"
  >
     
    <v-list>
      <v-list-item
        v-for="(route, i) in drawerItem"
        :key="i"
        :to="route.path"
        color="primary"
      >
        <div class="rounded-lg py-3 px-2 d-flex align-center">
          <v-icon :style="{marginLeft: !drawer ? 'initial' : '-10px'}" :icon="route.icon"></v-icon>
          <span class="ml-2 mt-1">{{ route.title }}</span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

