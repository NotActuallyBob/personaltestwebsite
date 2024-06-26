<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <router-link to="/">
          Mikael Snellman
        </router-link>
      </v-app-bar-title>

      <router-link to="/about">
        <v-btn class="mx-2" elevation="2" rounded>
          About
        </v-btn>
      </router-link>
      <router-link to="/contact">
        <v-btn class="mr-4 ml-2" elevation="2" rounded>
          Contact
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <RouterView />
          </v-col>
        </v-row>
      </v-container> 
    </v-main>
  </v-app>
</template>

<style scoped>
</style>