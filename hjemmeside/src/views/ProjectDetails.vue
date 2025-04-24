<template>
<div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-screen gap-px">
  <div class="md:row-span-2 border border-black relative w-full h-full overflow-hidden">
    <img :src="project.projectCover" alt="Project Cover" class="absolute inset-0 w-full h-full object-cover blur-sm z-0" />
    <img :src="project.projectCover" alt="Project Cover" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full z-10" />
  </div>

  <h1 class="bg-[#00ffff] text-white flex items-center justify-center text-4xl md:text-6xl border border-black"> {{ project.title }} </h1>

  <div class="bg-white text-black flex flex-col items-center justify-center text-base md:text-xl px-4 border border-black">
    <p class="text-center">{{ project.description }}</p>
    <div class="mt-4">
      <a v-if="project.projectLink" :href="project.projectLink" target="_blank" rel="noopener">
        <button class="px-4 py-2 bg-[#00ffff] text-black border border-black rounded hover:bg-white hover:text-[#00ffff] transition"> View Project </button>
      </a>
    </div>
  </div>
</div>

</template>

<script setup>
import {computed} from 'vue'
import { useProjectsDatabase } from '../assets/useProjectsDatabase'
import { useRoute } from 'vue-router'

const { projects } = useProjectsDatabase()   
console.log("projects", projects)
const route = useRoute()

const project = computed(() => {
    return projects.value.find((m) => m.id == route.params.id)
})

</script>

<style lang="scss" scoped>

</style>