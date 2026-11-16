<template>
  <Card title="工作经历">
    <article class="entry" v-for="item in list" :key="item.title.company">
      <div class="entry-heading"><h3>{{ item.title.company }}</h3><span class="date">{{ item.title.date }}</span></div>
      <p class="entry-subtitle">{{ item.title.job }}</p>
      <ul class="achievements"><li v-for="content in item.content" :key="content"><RichText :text="content" /></li></ul>
    </article>
  </Card>
</template>

<script setup lang="ts">
import Card from '../Card.vue';
import RichText from '../RichText.vue';
import { list } from './list';
</script>
