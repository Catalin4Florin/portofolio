<template>
  
    <nav class="navBar">
            <div class="search-filter p-4">
          <label for=""> Search by title:</label>
          <input type="text" class="text-black"
          placeholder="Search by title"
          v-model = "searchQuery"
          />
       </div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>

    
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style>
.navBar{
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
</style>