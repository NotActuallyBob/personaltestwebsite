<script setup lang="ts">
import emailImage from "@/assets/email.png";

</script>

<template>
  <h1>Contact</h1>

  <div class="mb-4">
    <img class="my-4" :src="emailImage">
  </div>
  <v-btn
          class="mx-2"
          href="https://www.linkedin.com/in/mikaelsnellman/"
          target="_blank"
          icon="mdi-linkedin">
        </v-btn>
        <v-btn
          class="mx-2"
          href="https://github.com/NotActuallyBob"
          target="_blank"
          icon="mdi-github">
        </v-btn>
        <v-btn
          class="mx-2"
          href="https://www.instagram.com/mikael_snellman/"
          target="_blank"
          icon="mdi-instagram">
        </v-btn>
</template>

<style scoped>

</style>
