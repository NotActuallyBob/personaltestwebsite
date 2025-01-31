<script setup lang="ts">
defineProps({
    hasRepo: {
        type: Boolean,
        required: false,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
})
</script>

<template>
    <v-card class="my-4">
        <v-card-title>
            <v-btn v-if="hasRepo" flat class="px-0" style="font-size: x-large; text-transform: none;" prepend-icon="mdi-github">
                <a :href="url" style="text-decoration: underline;">
                    {{ title }}
                </a>
            </v-btn>
            <span v-else>{{ title }}</span>
            
        </v-card-title>
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>