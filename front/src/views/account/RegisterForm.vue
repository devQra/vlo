<script setup lang="ts">
import '@/assets/style/view/account/RegisterForm.scss'
</script>

<template>
  <div class="register-main-container">
    <div class="register-title">Register</div>
    <div class="register-input-box">
      <input type="text" required />
      <label>Nickname</label>
      <span />
    </div>
    <div class="register-input-box">
      <input type="text" required />
      <label>Email</label>
      <span />
    </div>
    <div class="register-input-box">
      <input type="password" required />
      <label>Password</label>
      <span />
    </div>
    <div class="register-input-box">
      <input type="password" required />
      <label>Password Check</label>
      <span />
    </div>

    <router-link class="register-submit-btn action" to="/Login">
      <svg
        width="17"
        height="32"
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
</template>
