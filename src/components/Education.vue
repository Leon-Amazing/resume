<template>
  <card title="教育经历" class="education">
    <div class="education-item">
      <div class="education-title">
        <p>2014.09 - 2018.06</p>
        <p>湖南工学院</p>
        <p>本科</p>
      </div>
    </div>
  </card>
</template>

<script lang="ts" setup>
import Card from './Card.vue';
</script>

<style lang="scss" scoped>
.education-title {
  display: flex;

  p {
    width: 100%;
    text-align: center;
  }
  :nth-child(1) {
    text-align: left;
  }
}
</style>
