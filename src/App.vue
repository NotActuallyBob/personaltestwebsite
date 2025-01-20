<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <router-link to="/">
          Mikael Snellman
        </router-link>
      </v-app-bar-title>

      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

      <div class="d-none d-md-flex">
        <router-link to="/about">
          <v-btn class="mr-2" elevation="2" rounded>
            About
          </v-btn>
        </router-link>
        <router-link to="/projects">
          <v-btn class="mr-2" elevation="2" rounded>
            Projects
          </v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn class="mr-2" elevation="2" rounded>
            Contact
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list
        dense
        nav>
        <v-list-item prepend-icon="mdi-information">
          <router-link to="/about">About</router-link>
        </v-list-item>
        <v-list-item prepend-icon="mdi-library">
          <router-link to="/projects">Projects</router-link>
        </v-list-item>
        <v-list-item prepend-icon="mdi-email">
          <router-link to="/contact">Contact</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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