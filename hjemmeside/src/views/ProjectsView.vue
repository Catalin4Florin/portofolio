<template>
  <section>
      <div class="hero-section">
          <div class="hero-container-text pl-4 pt-16">
              <h1 class="text-4xl text-white ">
                  {{ projects[0].title }}
              </h1>
              <p class="text-gray-300">  {{ projects[0].genre }}</p>
          </div>
      </div>

      <div class="ProjectCardsRow flex flex-wrap justify-center gap-4 z-1 relative !-mt-28" >
          <div class="movieCard relative w-1/4 h-128 flex flex-col justify-end text-white "  v-for="(project, index) in filteredProjects" :key = "project">
              <router-link :to="`/projects/${project.id}`" class="!text-white"> 
              <div @mouseenter="toggleProjectData(index, true)" @mouseleave="toggleProjectData(index, false)" class=" bg-gray-700/70 p-5 fade-effect">
                  <h2 class="text-xl !font-bold">{{ project.title }}</h2>
                  <img class="absolute inset-0 -z-1 bg-cover w-full h-full" :src="project.projectCover" alt="Project cover">
                  <div v-if="isProjectDataVisible[index]">
                      <p> duration: {{ project.duration }}</p>
                  <p> {{ project.genre }}</p>
                  <p> rating: {{ project.rating }}</p>
                  </div>
              </div>
          </router-link>
          </div>  
       </div>
       <div class="genre-filter p-4">
          <label for="genre" class="text-white"> Filter by genre: </label>
          <select id="genre" class="ml-2 p-2 rounded" v-model="selectedGenre"> 
              <option value="">All</option>
              <option value="Softcore">Softcore</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
          </select>
       </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import {useProjectsDatabase} from '../assets/useProjectsDatabase.js'

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
.hero-section {
  width: 100%;
  height: 500px;
  background-image: url('https://m.media-amazon.com/images/M/MV5BMzVjNDRkMTYtMTczYS00ZTEyLWI3NTQtYTc3NWE4MTY3OGNkXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.fade-effect {
  translate: all 0.5s;
}

</style>