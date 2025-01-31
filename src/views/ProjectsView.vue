<script setup lang="ts">
    import aiConsoleImage from "@/assets/projects/self_hosted_ai/ai_console.png";
    import aiWebImage from "@/assets/projects/self_hosted_ai/ai_web.png";
    import assetAtlasImage from "@/assets/projects/asset_atlas.png";
    import ticketTickerImage from "@/assets/projects/ticket_ticker.png";
    import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
    <h1>Projects</h1>

    <ProjectCard 
        title="Self Hosted AI using Ollama"
    >
        <span style="font-size: large;">Instructions for AI model:</span>
        <v-row>
            <v-col md="6">
                <ol class="mx-4">
                    <li>Install docker</li>
                    <li>Install <a href="https://docs.nvidia.com/cuda/wsl-user-guide/index.html#getting-started-with-cuda-on-wsl-2">Cuda drivers</a></li>
                    <li>Start container: <pre><code>docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 <br> --name ollama ollama/ollama</code></pre></li>
                    <li>Run any model from <a href="https://ollama.com/search">list</a>: <pre><code>docker exec -it ollama ollama run llama3.2:latest</code></pre></li>
                </ol>
            </v-col>
            <v-col md="6">
                <img class="my-4" width="100%" :src="aiConsoleImage">
            </v-col>
        </v-row>

        <span style="font-size: large;">Instructions for Web UI similar to chatgpt:</span>
        <ol class="mx-4">
            <li>Start open-webui container: <pre><code>docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://locahost:11434/ <br> -v open-webui:/app/backend/data --name open-webui <br> --restart always ghcr.io/open-webui/open-webui:main</code></pre></li>
            <li>Open a browser and goto: <pre><code>http://locahost:3000</code></pre></li>
            <li>Signup and start using the models</li>
        </ol>
        
        <img class="my-4" width="100%" :src="aiWebImage">
    </ProjectCard>

    <ProjectCard 
        hasRepo
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
    >
        <div>
            A small mobile application for tracking how many HSL tickets one has purchased. Made using .NET MAUI.
        </div>
        <img class="my-4" width="30%" :src="ticketTickerImage">
    </ProjectCard>
</template>

