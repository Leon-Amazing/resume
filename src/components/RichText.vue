<template>
  <span><template v-for="(part, index) in parts" :key="index"><strong v-if="part.bold">{{ part.text }}</strong><template v-else>{{ part.text }}</template></template></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ text: string }>();
const parts = computed(() => props.text.split(/(\*\*.*?\*\*)/g).filter(Boolean).map(text => ({
  bold: text.startsWith('**') && text.endsWith('**'),
  text: (text.startsWith('**') && text.endsWith('**') ? text.slice(2, -2) : text).replace(/`([^`]+)`/g, '$1')
})));
</script>
