<template>
  <div class="resume-page">
    <div class="toolbar"><span>个人简历</span><button type="button" @click="printResume">打印 / 保存 PDF</button></div>
    <main class="resume" aria-label="个人简历">
      <Headers />
      <Card title="个人简介"><p class="summary">{{ profile.summary }}</p></Card>
      <Skills />
      <Experience />
      <Project />
      <Personal />
      <Education />
    </main>
  </div>
</template>

<script setup lang="ts">
import Headers from './components/Headers.vue';
import Card from './components/Card.vue';
import Experience from './components/Experience/index.vue';
import Project from './components/Project/index.vue';
import Personal from './components/Personal/index.vue';
import Skills from './components/Skills/index.vue';
import Education from './components/Education.vue';
import { profile } from './data';
const printResume = () => window.print();
</script>

<style lang="scss">
@import './assets/reset.scss';
</style>
