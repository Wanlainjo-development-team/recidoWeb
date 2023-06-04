<template>
   
   
          <v-content>
            <router-view/>
          </v-content>
</template>

<script>
   export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  }
}
</script>
