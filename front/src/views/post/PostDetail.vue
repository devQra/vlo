<script setup lang="ts">
import { ref } from 'vue'
import '@/assets/style/view/post/PostDetail.scss'

const postDetailData = ref({
  id: 1,
  postTitle: 'Title',
  postContents: '내용',
  postWriter: {
    id: 1,
    userName: 'cl0ud_',
    userImg: '/src/assets/img/2023071701753_0.jpg',
  },
  postDate: '2023년 08월 01일',
  comments: [
    {
      id: 1,
      userInfo: {
        userName: 'cl0ud_',
        userImg: '/src/assets/img/2023071701753_0.jpg',
      },
      contents: '잘 읽었습니다~',
      date: '2023년 08월 01일',
    },
    {
      id: 2,
      userInfo: {
        userName: 'common',
        userImg: '/src/assets/img/2023071701753_0.jpg',
      },
      contents: '감사합니다',
      date: '2023년 08월 01일',
    },
  ],
})

const commentData = ref('')
const commentSubmit = () => {
  console.log(commentData.value)
}
</script>

<template>
  <div class="post-main-container">
    <div class="post-wrapper">
      <div class="post-header">
        <div class="post-title">{{ postDetailData.postTitle }}</div>
        <div class="post-info">
          <div class="post-writer">{{ postDetailData.postWriter.userName }}</div>
          <div class="post-separator">·</div>
          <div class="post-date">{{ postDetailData.postDate }}</div>
        </div>
        <div class="post-option">
          <div class="post-amend"></div>
          <div class="post-delete"></div>
        </div>
      </div>
      <div class="post-contents">
        {{ postDetailData.postContents }}
      </div>
      <div class="post-writer-profile">
        <div class="profile-img">
          <img :src="postDetailData.postWriter.userImg" alt="" />
        </div>
        <div class="post-writer-info">
          <div class="post-writer-name">{{ postDetailData.postWriter.userName }}</div>
          <div class="post-writer-description"></div>
        </div>
      </div>
      <div class="post-contour" />

      <div class="post-comments-container">
        <div class="post-comments-count">{{ postDetailData.comments.length }}개의 댓글</div>
        <div class="post-comments-write">
          <textarea v-model="commentData" placeholder="댓글을 작성하세요" />
          <div class="btn-wrapper">
            <button class="btn-submit" @click="commentSubmit()">댓글 작성</button>
          </div>
        </div>
        <div class="post-comments" :key="item.id" v-for="item in postDetailData.comments">
          <div class="post-comments-top">
            <div class="post-comments-left">
              <div class="profile-img">
                <img :src="item.userInfo.userImg" alt="" />
              </div>
              <div class="post-comments-user-info">
                <div class="post-comments-username">
                  {{ item.userInfo.userName }}
                </div>
                <div class="post-comments-time">{{ item.date }}</div>
              </div>
            </div>
            <div class="post-comments-right">
              <div class="post-comments-option">
                <div class="post-comments-amend">수정</div>
                <div class="post-comments-delete">삭제</div>
              </div>
            </div>
          </div>
          <div class="post-comments-bottom">
            <div class="post-comments-contents">{{ item.contents }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
