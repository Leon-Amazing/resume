<template>
  <Card title="教育经历">
    <div class="entry-heading education"><h3>{{ profile.education.school }}<span class="degree">{{ profile.education.degree }}</span></h3><span class="date">{{ profile.education.date }}</span></div>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { profile } from '../data';
</script>
