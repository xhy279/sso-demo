<script setup lang="ts">
const token = localStorage.getItem('token')
if (token) {
  window.parent.postMessage({ token }, '*')
}
</script>

<template>已成功登录，返回登录前页面...</template>
