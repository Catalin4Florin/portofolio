<template>
  <main>
    <div id="home" class="home w-100% h-150 bg-no-repeat bg-top-right bg-[#00ffff]">
      <div class="hero w-full h-full flex items-center">
         <div class="myNameIs md:ml-10 bg-white text-black font-bold !md:w-fit max-w-full overflow-x-auto"> 
          <h2 class="text-2xl"> Hi! i am</h2>
          <h3 class="w-fit whitespace-nowrap text-3xl md:text-5xl">Catalin Florin Roatis</h3>
         </div>
      </div>
    </div>
    <!-- about me section -->
    <div id="about" class=" bg-white">
      <h3 class="p-4 text-3xl text-center text-[#00ffff] !font-bold"> About me</h3>
      <p style="-webkit-text-stroke: 0;" class="px-8 py-4 text-2xl text-white !stroke-black bg-[#00ffff] ">  Multimedia Design student at EASV with a passion for digital creativity and problem-solving. Skilled in Adobe programs, HTML, CSS, and JavaScript, I strive to bring ideas to life through design and development. Whether at work, the gym, or any challenge I take on, I give 110% to achieving the best results. Always eager to learn, improve, and push my limits.</p>
    </div>


  <!-- projects -->
  <div id="projects" class="text-center mt-10 bg-white">
    <h2 class="text-3xl text-[#00ffff] py-4 !font-bold">My Past Projects</h2>
  </div>
  <div class="ProjectCardsRow  flex flex-wrap justify-center gap-4 relative !py-10" >
          <div class="projectCard relative w-full md:w-1/4 h-128 flex flex-col justify-between text-white"  v-for="(project, index) in filteredProjects" :key = "project">
            <div></div>
            <img class="inset-0 bg-cover w-fit h-fit justify-center" :src="project.projectCover" alt="Project cover">
              <router-link :to="`/projects/${project.id}`" class="!text-white"> 
              <div @mouseenter="toggleProjectData(index, true)" @mouseleave="toggleProjectData(index, false)" class=" bg-[#00ffff]/50 p-5 fade-effect border border-black">
                  <h2 class="text-xl !font-bold">{{ project.title }}</h2>
                  <img class="absolute inset-0 -z-1 bg-cover w-full h-full blur-sm" :src="project.projectCover" alt="Project cover">
                  <div 
                  style="-webkit-text-stroke: 0;"
                  v-if="isProjectDataVisible[index]">
                    <p> Description: {{ project.shortDescription }}</p>
                    <p class="underline"> {{ project.group }}</p>
                    <p> Semester: {{ project.semester }}</p>  
                  </div>
              </div>

          </router-link>
          </div>  
       </div>

      <!-- CV -->
      <div id="cv" class="w-screen h-fit pb-4 pt-4 bg-[#00ffff]">
        <p class="pl-4 pt-4 pb-4 text-4xl bg-white text-[#00ffff] text-center !font-bold">You can download my full CV here</p>
        <div class="flex justify-center pt-4">
          <a href="/public/catalincv.pdf" download="CatalinCV.pdf">
            <button 
            style="-webkit-text-stroke: 0;"
            class=" bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-[#00ffff]">
              Download CV
            </button>
          </a>
        </div>
      </div>

      <!-- video CV -->
      <div id="video-cv" class="w-full max-w-full mx-auto h-fit pb-4 bg-[#00ffff] text-center">
        <p class="pl-4 pt-4 text-4xl pb-4 bg-white text-[#00ffff] !font-bold">Watch my Video CV</p>
        <div class="flex justify-center mt-4 pt-4">
          <div class="border-4 border-white rounded-lg p-4 w-full max-w-2xl">
            <div class="relative w-full pb-[56.25%]">
              <iframe
                class="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/A_pp6N7Io2s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>

</main>
</template>

<script setup >
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

<style scoped>
.ProjectCardsRow {
  background-color: #00ffff;
  z-index: 0;
}
.text-outline-white {
  -webkit-text-stroke: .5px white;
}

.home{
  background-image: url('@/assets/heroCatalin2.jpg');
}
</style>
