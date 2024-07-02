<script setup lang="ts">
import ExperienceTag from '@/models/ExperienceTag';

defineProps({
    companyName: {
        type: String,
        required: true
    },
    companyLink: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: false
    },
    tags: {
        type: Array as () => string[],
        required: true
    }
})


</script>

<template>
    <v-card class="my-4">
        <v-card-title>{{ jobTitle }}</v-card-title>
        <v-card-subtitle>
            <a target="_blank" :href="companyLink">{{ companyName }}</a> | {{ start }}
            <span v-if="end"> - {{ end }}</span>
            <span v-else> -></span>
        </v-card-subtitle>

        <v-card-text>
            <v-chip v-for="tag in tags" class="mx-1">
                {{ tag }}
            </v-chip>
            <div class="my-4">{{ description }}</div>
        </v-card-text>
    </v-card>
</template>

<style scoped>

</style>
