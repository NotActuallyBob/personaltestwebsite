<script setup lang="ts">
import WorkExperience from '@/components/WorkExperience.vue';



</script>

<template>
  <h1>About</h1>

  <h1>Work Experience</h1>
  <v-row justify="center">
    <v-col cols="12" lg="6">
      <WorkExperience
        :companyName="'Terveyden ja hyvinvoinnin laitos'"
        :companyLink="'https://thl.fi'"
        :jobTitle="'Application Developer'"
        :start="'2023'"
        :end="'2024'"
        :description="'I developed and maintained the National Infectious Diseases Register as a part of a Scrum team. The core programming language I used was Java on top of the Spring framework with PostgreSQL as the database. The frontend was implemented with Typescript, Angular and Apache Freemarker. I also gained some experience in Server administration.'"
        :tags="['Java', 'Spring Framework', 'Angular', 'Typescript', 'Flyway', 'PostgreSQL']">
      </WorkExperience>
    </v-col>
    <v-col cols="12" lg="6">
      <WorkExperience
        :companyName="'Trimble Solutions Oy'"
        :companyLink="'https://www.trimble.com/'"
        :jobTitle="'Software Testing Trainee'"
        :start="'2021'"
        :end="'2023'"
        :description="'I was part of the QA team developing and maintaining the internal testing framework. I mostly used C#, Vue, Javascript and the database was PostgreSQL. I gained experience in both manual testing of software and test automation. Additionally I developed a couple of tools in python to automate tasks for realease managment and I helped onboard a new Trainee to the team.'"
        :tags="['C#', 'Vue', 'Vuetify', 'PostgreSQL','Test Automation', 'Manual Testing', 'Python']">
      </WorkExperience>
    </v-col>
  </v-row>
  
  <ul>
    <a href="/files/cv/english/2024.pdf">2024</a>
  </ul>
</template>

<style scoped>

</style>
