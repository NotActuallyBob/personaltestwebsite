<script setup lang="ts">
import WorkExperience from '@/components/WorkExperience.vue';
</script>

<template>
    <WorkExperience
        :companyName="'Trimble Solutions Oy'"
        :companyLink="'https://www.trimble.com/'"
        :jobTitle="'Software Testing Trainee'"
        :start="'6/2024'"
        :tags="['C#', 'Vue', 'Vuetify', 'PostgreSQL','Test Automation']">
        I contributed to the development and maintenance of an internal testing framework and a quality analysis web application. I gained hands-on experience in front-end development using Vue.js, leveraging the Vuetify component library. I took the initiative to migrate our build tool from Vue CLI to Vite, improving project performance and workflow efficiency. I also worked extensively with .NET, primarily in C#, which helped me sharpen my debugging skills, particularly in resolving issues with referenced .NET projects.
    </WorkExperience>
    <WorkExperience
        :companyName="'Terveyden ja hyvinvoinnin laitos'"
        :companyLink="'https://thl.fi'"
        :jobTitle="'Application Developer'"
        :start="'10/2023'"
        :end="'6/2024'"
        :tags="['Java', 'Spring Framework', 'Angular', 'Typescript', 'Flyway', 'PostgreSQL']">
        I developed and maintained the National Infectious Diseases Register as a part of a Scrum team. The core programming language I used was Java on top of the Spring framework with PostgreSQL as the database. The frontend was implemented with Typescript, Angular and Apache Freemarker. I also gained some experience in Server administration.
    </WorkExperience>
    <WorkExperience
        :companyName="'Trimble Solutions Oy'"
        :companyLink="'https://www.trimble.com/'"
        :jobTitle="'Software Testing Trainee'"
        :start="'5/2021'"
        :end="'8/2023'"
        :tags="['C#', 'Vue', 'Vuetify', 'PostgreSQL','Test Automation', 'Manual Testing', 'Python']">
        I was part of the QA team responsible for developing and maintaining the internal testing framework, primarily using C#, Vue.js, JavaScript, and PostgreSQL. I gained experience in both manual software testing and test automation. Additionally, I developed tools in Python to automate tasks for release management and helped onboarding a new trainee, making sure they integrated smoothly into the team.
    </WorkExperience>
    <WorkExperience
        :companyName="'Esbo Idrottsförening'"
        :companyLink="'https://esboif.fi/'"
        :jobTitle="'Coach'"
        :start="'8/2016'"
        :end="'6/2018'"
        :tags="['Leadership', 'Planning']">
        I coached gymnastics once a week for 7-12 year old children. The position included to plan a 1.5h session and guiding the children in the excerises.
    </WorkExperience>
</template>

<style scoped>

</style>
