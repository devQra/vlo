<script setup lang="ts">
import '@/assets/style/view/post/PostWrite.scss'
import { computed, ref } from 'vue'
import { marked } from 'marked'

const inputContents = ref('')
const inputTitle = ref('')
const outputContents = computed(() => marked(inputContents.value))
const outputTitle = computed(() => marked(inputTitle.value))
const updateTitle = (e: Event) => {
  inputTitle.value = (e.target as HTMLInputElement).value
}
const updateContents = (e: Event) => {
  inputContents.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <div class="writeview-main-container">
    <div class="edit-container">
      <input
        class="title"
        placeholder="제목을 입력하세요"
        :value="inputTitle"
        @input="updateTitle"
      />
      <textarea
        class="editor"
        :value="inputContents"
        @input="updateContents"
        placeholder="내용을 입력해주세요."
        v-html="inputContents"
      />
    </div>
    <div class="preview-container">
      <div class="preview-title" v-html="outputTitle" />
      <div class="preview-text" v-html="outputContents" />
    </div>
    <button class="btn-submit">Submit</button>
  </div>
</template>
