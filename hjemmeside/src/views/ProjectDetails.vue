<template>
    <div class="p-8">
        <h1> {{ project.title }}</h1>
        <img :src="project.projectCover" alt="">
        <p> {{ project.description }}</p>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import { useProjectDatabase } from '../modules/useProjectsDatabase.js'
import { useRoute } from 'vue-router'

const { projects } = useProjectDatabase()   
const route = useRoute()

const project = computed(() => {
    return projects.value.find((m) => m.id == route.params.id)
})

</script>

<style lang="scss" scoped>

</style>