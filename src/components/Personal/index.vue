<template>
  <Card title="组件库与个人作品">
    <article class="entry" v-for="item in list" :key="item.name">
      <div class="entry-heading"><h3>{{ item.name }}</h3></div>
      <div class="work-links">
        <div v-for="link in item.links" :key="link.url">
          <span>{{ link.label }}：</span><a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.url }}</a>
        </div>
      </div>
      <p><RichText :text="item.content" /></p>
    </article>
  </Card>
</template>

<script setup lang="ts">
import Card from '../Card.vue';
import RichText from '../RichText.vue';
import { list } from './list';
</script>
