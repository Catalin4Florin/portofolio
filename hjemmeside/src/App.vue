<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function scrollToSection(sectionId) {
  if (route.path === '/') {
    setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    })
  }
}
</script>

<template>
  <header>
    <div class="wrapper w-full">

      <nav class="absolute z-2 pt-20 max-w-full overflow-x-auto flex gap-2 md:gap-4">
        <button @click="scrollToSection('home')" class="px-2 py-1 text-black bg-white rounded border border-black">Home</button>
        <button @click="scrollToSection('about')" class="px-2 py-1 text-black bg-white rounded border border-black">About me</button>
        <button @click="scrollToSection('projects')" class="px-2 py-1 text-black bg-white rounded border border-black">Projects</button>
        <button @click="scrollToSection('cv')" class="px-2 py-1 text-black bg-white rounded border border-black">CV</button>
        <button @click="scrollToSection('video-cv')" class="px-2 py-1 text-black bg-white rounded border border-black">Video CV</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
main {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem; 
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
