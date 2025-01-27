<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/" class="content">Home</RouterLink>
        <RouterLink to="/about" class="content">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

