<script setup lang="ts">
import '@/assets/style/view/account/LoginForm.scss'
</script>

<template>
  <div class="login-main-container">
    <div class="login-title">Login</div>
    <form class="login-form">
      <div class="login-input-box">
        <input type="text" required />
        <label>Email</label>
        <span />
      </div>
      <div class="login-input-box">
        <input type="password" required />
        <label>Password</label>
        <span />
      </div>
      <div class="login-submit-btn-box">
        <router-link class="login-register action" to="/account/register">register</router-link>
        <router-link class="login-submit-btn action submit" to="/">
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L16 16L1 31"
              stroke="#777777"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </form>
  </div>
</template>
