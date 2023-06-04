<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
       
      <v-flex d-flex lg3 >
        <widget
          icon="money_off"
          title="$141,291"
          :subTitle="'Title'"
          :supTitle="'subTitle'"
          color="#dc3545"
        />
      </v-flex>
       
      <!-- Widgets Ends -->
    </v-layout>
    <v-container class="bg-surface-variant">
        <v-row no-gutters>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
          >
            <v-sheet class="ma-2 pa-2" >
              One of three columns
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
</template>
  

<script>
import widget from "../Reusables/widget.vue";
export default {
  components: { widget },
  name: "Dashboard",
};
</script>

<style>
</style>