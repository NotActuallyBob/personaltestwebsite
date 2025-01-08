<script setup lang="ts">
    import image from "@/assets/projects/asset_atlas.png";
    import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
    <h1>Projects</h1>

    <ProjectCard 
        title="Asset Atlas"
        url="https://github.com/NotActuallyBob/AssetAtlas/tree/master?tab=readme-ov-file#assetatlas"
    >
        <div>
            <ul class="mx-4">
                <li>Expense data originates by uploading .csv file downloaded from the bank</li>
                <li>Some of the expenses are automatically categorized appropriately</li>
                <li>The rest are manually categorized using the frontend</li>
                <li>Clean expense analysis view to analyze the expenses of the desired time period</li>
            </ul>
        </div>
        <img class="my-4" width="100%" :src="image">
    </ProjectCard>
</template>

