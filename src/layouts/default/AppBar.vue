
<script >
export default {
  data: () => ({
    companyNmae: "ReciDo",
    drawer: true,
    props: {
      toggle: {
        type: Boolean,
        required: false,
        default: true,
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
  <!-- <div>
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
  </div> -->

  <v-app-bar elevation="5">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
  </v-app-bar>

  <v-navigation-drawer :rail="drawer">
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
          <span v-if="!drawer" class="ml-2 mt-1">{{ route.title }}</span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

