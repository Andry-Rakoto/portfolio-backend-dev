<template>
  <IconifyIcon :icon="name" :class="className" />
</template>

<script setup>
import { Icon as IconifyIcon } from '@iconify/vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  }
})

const className = computed(() => props.class)
</script>