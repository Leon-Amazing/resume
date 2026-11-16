<template>
  <Card title="项目经历">
    <article class="entry project-entry" v-for="(project, index) in list" :key="project.title.name">
      <div class="entry-heading"><h3><span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>{{ project.title.name }}</h3></div>
      <p class="date project-date">项目时间：{{ project.title.date }}｜{{ project.title.company }}</p>
      <p class="project-description">{{ project.description }}</p>
      <p class="tech-stack"><strong>技术栈</strong>{{ project.stack }}</p>
      <ul class="achievements"><li v-for="content in project.content" :key="content"><RichText :text="content" /></li></ul>
    </article>
  </Card>
</template>

<script setup lang="ts">
import Card from '../Card.vue';
import RichText from '../RichText.vue';
import { list } from './list';
</script>
