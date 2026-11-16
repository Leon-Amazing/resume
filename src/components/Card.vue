<template>
  <section class="card">
    <h2 class="section-title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
