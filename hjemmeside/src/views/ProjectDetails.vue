<template>
  <div class="grid grid-cols-2 grid-rows-2 h-screen gap-px">
    <div class="row-span-2 border border-black relative w-full h-full">
      <img
        :src="project.projectCover"
        alt="Project Cover"
        class="absolute inset-0 w-full h-full object-cover blur-sm z-0"
      >
      <img
        :src="project.projectCover"
        alt="Project Cover"
        class="relative w-fit h-fit object-cover z-10 mx-auto my-auto"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;"
      >
    </div>
    <h1 class="bg-gray-300 flex items-center justify-center text-2xl border border-black">{{ project.title }}</h1>
    <p class="bg-gray-400 flex items-center justify-center text-xl border border-black">{{ project.description }}</p>
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