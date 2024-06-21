<template>
  <card title="专业技能" class="skills">
    <div v-for="(skills, index) in list" :key="'skills' + index" class="skill">
      <span class="blod">{{ skills.title }}</span>
      <span v-html="addTag(skills.content)"></span>
    </div>
  </card>
</template>

<script lang="ts" setup>
import Card from '../Card.vue';
import { addTag } from '@/utils/tools';
import { list } from './list';
</script>

<style lang="scss" scoped>
.skills {
  padding-top: 35px;
}
.skill {
  margin-bottom: 10px;
}
.blod {
  font-weight: 800;
}
</style>
