<template>
  <Card title="核心技能">
    <dl class="skills-list"><div v-for="skill in list" :key="skill.title"><dt>{{ skill.title }}</dt><dd><RichText :text="skill.content" /></dd></div></dl>
  </Card>
</template>

<script setup lang="ts">
import Card from '../Card.vue';
import RichText from '../RichText.vue';
import { list } from './list';
</script>
