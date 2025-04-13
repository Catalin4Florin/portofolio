

<template>
  <main>
    <div class="home w-100% h-150 bg-no-repeat bg-top-right">
      <div class="hero w-full h-full flex items-center">
         <div class="myNameIs pl-10 opacity-100"> 
          <h2 class="text-2xl"> Hi! i am</h2>
          <h3 class="w-fit whitespace-nowrap text-5xl"> Catalin Florin Roatis</h3>
         </div>
      </div>
    </div>
    <!-- about me section -->
    <div class="aboutMe">
          <h3 class="pl-4 pt-4 text-2xl"> About me</h3>
          <p class="pl-4 pt-4"> Lorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pulaLorem pula </p>
         </div>
  </main>

  <!-- projects -->
  <div class="ProjectCardsRow flex flex-wrap justify-center gap-4 relative !mt-10" >
          <div class="movieCard relative w-1/4 h-128 flex flex-col justify-end text-white "  v-for="(project, index) in filteredProjects" :key = "project">
              <router-link :to="`/projects/${project.id}`" class="!text-white"> 
              <div @mouseenter="toggleProjectData(index, true)" @mouseleave="toggleProjectData(index, false)" class=" bg-gray-700/70 p-5 fade-effect">
                  <h2 class="text-xl !font-bold">{{ project.title }}</h2>
                  <img class="absolute inset-0 -z-1 bg-cover w-full h-full" :src="project.projectCover" alt="Project cover">
                  <div v-if="isProjectDataVisible[index]">
                      <p> Description: {{ project.description }}</p>
                    <p class="underline"> {{ project.group }}</p>
                    <p> Semester: {{ project.semester }}</p>
                  </div>
              </div>
          </router-link>
          </div>  
       </div>
</template>

<script setup >
import { ref, computed } from 'vue';
import {useProjectsDatabase} from '../modules/useProjectsDatabase.js'

const { projects } = useProjectsDatabase()

//selected genre for filtering
const selectedGenre = ref('');
const searchQuery = ref('');

const filteredProjects = computed( () => {
  let result = selectedGenre.value
  ? projects.value.filter((project) => project.genre === selectedGenre.value)
  : projects.value

  if (searchQuery.value) {
      result = result.filter((project) => project.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }

  return result
});

const isProjectDataVisible = ref([]);


const toggleProjectData = (index, isVisible) => {
isProjectDataVisible.value[index] = isVisible;
};

</script>

<style>


.home{
  background-image: url('@/assets/heroCatalin2.jpg');
}




.aboutMe{
  background-color: gray ;
}
</style>
