<template>
  <div>
    <div class="interface">
      <div class="interface-left">
        <div class="mobile-menu">
          <img
            class="mobile-menu-img"
            src="/public/MainWindow/menu.svg"
            alt=""
          />
        </div>
        <div class="logo">
          <img class="logo-img" src="/public/MainWindow/Logo.svg" alt="" />
        </div>
        <div class="vertical-line"></div>
        <div class="title">Setting</div>
      </div>
      <div class="interface-center">
        <div class="title">Setting</div>
      </div>
      <div class="interface-right">
        <div class="input">
          <img
            class="input-icon"
            src="/public/MainWindow/magnifying-glass 1.svg"
            alt=""
          />
          <input
            class="input-text"
            type="text"
            value=""
            placeholder="Search for something"
          />
        </div>
        <div class="button">
          <img
            class="button-icon"
            src="/public/MainWindow/settings 1.svg"
            alt=""
          />
        </div>
        <div class="button">
          <img
            class="button-icon"
            src="/public/MainWindow/002-notification-1.svg"
            alt=""
          />
        </div>
        <div class="profile">
          <img
            class="profile-icon"
            src="/public/MainWindow/Mask-Group.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="input-mobile">
      <div class="input">
        <img
          class="input-icon"
          src="/public/MainWindow/magnifying-glass 1.svg"
          alt=""
        />
        <input
          class="input-text"
          type="text"
          value=""
          placeholder="Search for something"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";

const input2 = ref("");
</script>

<style lang="scss" scoped>
@import "/assets/headerDefaultLayouts.scss";
</style>
