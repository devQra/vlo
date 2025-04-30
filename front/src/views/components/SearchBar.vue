<script setup lang="ts">
import '@/assets/style/components/SearchBar.scss'
import { ref } from 'vue'

const query = ref('')
const emit = defineEmits(['message'])
const enterSubmit = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    searchSubmit()
  }
}
const searchSubmit = () => {
  emit('message', query.value)
}
</script>

<template>
  <div class="search-container">
    <input type="text" v-model="query" @keypress="enterSubmit" />
    <button class="action" @click="searchSubmit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 26 26"
        fill="none"
        stroke="#777777"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </button>
  </div>
</template>
