<template>
    <div>
        <h1> {{ project.title }}</h1>
        <img :src="project.projectCover" alt="">
        <p> {{ project.description }}</p> 
        <p class="text-white"> puila pula </p>

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