<script setup lang="ts">
import WorkExperience from '@/components/WorkExperience.vue';
</script>

<template>
    <WorkExperience
        :companyName="'Trimble Solutions Oy'"
        :companyLink="'https://www.trimble.com/'"
        :jobTitle="'Software Testing Trainee'"
        :start="'6/2024'"
        :description="'I was part of the QA team developing and maintaining the internal testing framework. I mostly used C#, Vue, Javascript and the database was PostgreSQL. I gained experience in both manual testing of software and test automation. Additionally I developed a couple of tools in python to automate tasks for realease managment and I helped onboard a new Trainee to the team.'"
        :tags="['C#', 'Vue', 'Vuetify', 'PostgreSQL','Test Automation', 'Manual Testing', 'Python']">
    </WorkExperience>
    <WorkExperience
        :companyName="'Terveyden ja hyvinvoinnin laitos'"
        :companyLink="'https://thl.fi'"
        :jobTitle="'Application Developer'"
        :start="'10/2023'"
        :end="'6/2024'"
        :description="'I developed and maintained the National Infectious Diseases Register as a part of a Scrum team. The core programming language I used was Java on top of the Spring framework with PostgreSQL as the database. The frontend was implemented with Typescript, Angular and Apache Freemarker. I also gained some experience in Server administration.'"
        :tags="['Java', 'Spring Framework', 'Angular', 'Typescript', 'Flyway', 'PostgreSQL']">
    </WorkExperience>
    <WorkExperience
        :companyName="'Trimble Solutions Oy'"
        :companyLink="'https://www.trimble.com/'"
        :jobTitle="'Software Testing Trainee'"
        :start="'5/2021'"
        :end="'8/2023'"
        :description="'I was part of the QA team developing and maintaining the internal testing framework. I mostly used C#, Vue, Javascript and the database was PostgreSQL. I gained experience in both manual testing of software and test automation. Additionally I developed a couple of tools in python to automate tasks for realease managment and I helped onboard a new Trainee to the team.'"
        :tags="['C#', 'Vue', 'Vuetify', 'PostgreSQL','Test Automation', 'Manual Testing', 'Python']">
    </WorkExperience>
    <WorkExperience
        :companyName="'Esbo Idrottsförening'"
        :companyLink="'https://esboif.fi/'"
        :jobTitle="'Coach'"
        :start="'8/2016'"
        :end="'6/2018'"
        :description="'I coached gymnastics once a week for 7-12 year old children. The position included to plan a 1.5h session and guiding the children in the excerises.'"
        :tags="['Leadership', 'Planning']">
    </WorkExperience>
</template>

<style scoped>

</style>
