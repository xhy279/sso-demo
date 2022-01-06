<script setup lang="ts">
const token = localStorage.getItem('token')
</script>

<template>
  <a-button type="primary">{{ token ? token : 'token不存在' }}</a-button>
</template>

<style></style>
