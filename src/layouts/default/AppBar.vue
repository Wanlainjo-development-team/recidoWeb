
<script >
export default {
  data: () => ({
    companyNmae: "ReciDo",
    drawer: true,
    props: {
      toggle: {
        type: Boolean,
        required: false,
        default: false,
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

<template>
  

  <v-app-bar elevation="1">
    <v-app-bar-nav-icon  />
  </v-app-bar>

  <v-navigation-drawer >
    <div></div>
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

