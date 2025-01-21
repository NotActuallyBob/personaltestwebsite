<script setup lang="ts">
    import assetAtlasImage from "@/assets/projects/asset_atlas.png";
    import ticketTickerImage from "@/assets/projects/ticket_ticker.png";
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
        <img class="my-4" width="100%" :src="assetAtlasImage">
    </ProjectCard>

    <ProjectCard class="my-4"
        title="Ticket Ticker"
        url="https://github.com/NotActuallyBob/"
    >
        <div>
            A small mobile application for tracking how many HSL tickets one has purchased. Made using .NET MAUI.
        </div>
        <img class="my-4" width="30%" :src="ticketTickerImage">
    </ProjectCard>
</template>

