<template>
  <card title="项目经历" class="project">
    <div class="project-item" v-for="(project, idx) in list" :key="idx">
      <div class="project-title">
        <h3>{{ project.title.name }}</h3>
        <h3>{{ project.title.date }}</h3>
      </div>
      <ul class="project-desc" v-for="(content, idx) in project.content" :key="idx">
        <li>
          <h4>{{ content.title }}</h4>
          <div>
            <p v-for="(item, idx) in content.children" :key="idx" v-html="addTag(item)"></p>
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>

<script lang="ts" setup>
import Card from '../Card.vue';
import { addTag } from '@/utils/tools';
import { list } from './list';
</script>

<style lang="scss" scoped>
.project-item {
  margin: 10px 0;
  margin-bottom: 12px;
}
.project-title {
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
}

.project-desc {
  padding-right: 40px;
}
ul {
  padding-left: 20px;
}
</style>
