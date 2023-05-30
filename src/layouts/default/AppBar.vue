
<script >
export default {
  data: () => ({
    companyNmae: "WANLAINJO COMPUTERS",
    drawerItem: [
      {
        title: "Dashboard",
        path: "/",
        icon: "mdi-view-dashboard",
        color: "info",
      },
      {
        title: "Iventory",
        path: "/inventory/productlist",
        icon: "mdi-FormatListBulleted",
        color: "info",
      },
      {
        title: "Sales",
        path: "/sales/orderlist",
        icon: "mdi-shopping",
        color: "primary",
      },
      {
        title: "Report",
        path: "/report/salesreport",
        icon: "mdi-shopping",
        color: "yellow",
      },
      {
        title: "Customers",
        path: "/customers/customerlist",
        icon: "mdi-account-group",
        color: "green",
      },
    ],
  }),
};
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />
      {{ companyNmae }}
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer permanent location="left">
    <v-list>
      <v-list-item v-for="(route, i) in drawerItem" :key="i" :to="route.path">
        <div :class="`bg-${route.color}`" class="rounded-lg py-3 px-2">
          <v-icon :icon="route.icon"></v-icon>
          {{ route.title }}
        </div>
        <v-divider />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

