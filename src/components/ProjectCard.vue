<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
})
</script>

<template>
    <v-card class="my-4">
        <v-card-title>
            <v-btn flat class="px-0" style="font-size: x-large; text-transform: none;" prepend-icon="mdi-github">
                <a :href="url" style="text-decoration: underline;">
                    {{ title }}
                </a>
            </v-btn>
            
        </v-card-title>
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>