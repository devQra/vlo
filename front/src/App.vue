<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNav from '@/views/components/SideNav.vue'
import '@/assets/style/main.scss'
</script>

<template>
  <SideNav />
  <RouterView />
</template>
