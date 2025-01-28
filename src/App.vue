<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/" class="content">Hem</RouterLink>
        <RouterLink to="/about" class="content">Om oss</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

