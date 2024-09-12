<script setup lang="ts">
import WorkExperienceList from '@/components/WorkExperienceList.vue';
import EducationList from '@/components/EducationList.vue';



</script>

<template>
  <v-card class="mb-6">
    <v-card-title style="font-size: 32px; font-weight: bold;">Education</v-card-title>
    <v-card-text>
      <EducationList></EducationList>
    </v-card-text>
  </v-card>

  <v-card class="my-4">
    <v-card-title style="font-size: 32px; font-weight: bold;">Work Experience</v-card-title>
    <v-card-text>
      <WorkExperienceList></WorkExperienceList>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
