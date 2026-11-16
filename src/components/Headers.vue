<template>
  <header class="resume-header">
    <div class="identity"><h1>{{ profile.name }}</h1><p class="role">{{ profile.role }}</p></div>
    <div class="contact">
      <a :href="'tel:' + profile.phone.replaceAll('-', '')">{{ profile.phone }}</a>
      <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
      <span>求职岗位：{{ profile.role }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { profile } from '../data';
</script>
