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

      <nav class="">
        <button @click="scrollToSection('video-cv')" class="px-2 py-1 text-black bg-white rounded">Video CV</button>
        <button @click="scrollToSection('cv')" class="!ml-4 mr-4 px-2 py-1 text-black bg-white rounded">CV</button>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
main {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
