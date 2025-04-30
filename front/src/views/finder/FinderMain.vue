<script setup lang="ts">
import '@/assets/style/view/FinderView.scss'
import SearchBar from '@/views/components/SearchBar.vue'
import PostCard from '@/views/components/PostCard.vue'
import { ref } from 'vue'
import UserCard from '@/views/components/UserCard.vue'

const postData = ref([
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
  {
    id: 1,
    postTitle: 'title',
    postContents: 'contents',
  },
])
const userData = ref([
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
  {
    id: 1,
    name: 'dev_cl0ud',
    intro: '안녕하세요 개발자 취업을 꿈꾸고 있습니다',
  },
])
const emit = (query: string) => {
  console.log('find: ' + query)
}
</script>

<template>
  <div class="finder-main-container">
    <div class="finder-top-container">
      <SearchBar @message="emit" />
    </div>
    <div class="finder-middle-container">
      <p class="action">게시물 전체 보기 ></p>
      <div class="finder-post-card">
        <PostCard :postData="postData" />
      </div>
    </div>
    <div class="finder-bottom-container">
      <p class="action">사용자 전체 보기 ></p>
      <div class="finder-user-card">
        <UserCard :userData="userData" />
      </div>
    </div>
  </div>
</template>
