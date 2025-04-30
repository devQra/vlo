<script setup lang="ts">
import '@/assets/style/components/SideNav.scss'
import { watch } from 'vue'
import router from '@/router'

watch(
  () => router.currentRoute.value.fullPath,
  () => {},
)
</script>

<template>
  <div class="sidenav-main-container">
    <div class="sidenav-top-container">
      <router-link class="sidenav-clickEventGrey action" to="/">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.33333L13 1L25 8.33333"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.3333 13V21.5333C22.3333 21.9752 21.9752 22.3333 21.5333 22.3333H4.46666C4.02483 22.3333 3.66666 21.9752 3.66666 21.5333V13"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link class="sidenav-clickEventGrey action" to="/finder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
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
      </router-link>
      <router-link class="sidenav-clickEventGrey action" to="/post/write">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1538 1.15398H3.53845C2.1365 1.15398 1 2.29048 1 3.69243V21.4616C1 22.8636 2.1365 24 3.53845 24H21.3076C22.7096 24 23.846 22.8636 23.846 21.4616V13.8462"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.24997 11.9424L19.4038 1.7886C20.4552 0.737134 22.16 0.737134 23.2114 1.7886C24.2629 2.84006 24.2629 4.54481 23.2114 5.59627L13.0576 15.7501L7.34613 17.6539L9.24997 11.9424Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link class="sidenav-clickEventGrey action" to="/account/myVlo">
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13C16.3137 13 19 10.3137 19 7C19 3.68629 16.3137 1 13 1C9.68629 1 7 3.68629 7 7C7 10.3137 9.68629 13 13 13Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 28V22C1 20.3431 2.34314 19 4 19H22C23.6569 19 25 20.3431 25 22V28"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="sidenav-bot-container">
      <router-link class="sidenav-clickEventGrey action" to="/account/login">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 25H4C3.20435 25 2.44129 24.6839 1.87868 24.1213C1.31607 23.5587 1 22.7956 1 22V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H11.5M10 13L16 7M10 13L16 19M10 13H25"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
