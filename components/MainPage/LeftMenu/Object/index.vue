<script lang="ts" setup>
const props = defineProps({
  nameObject: String,
  iconObject: String,
});
</script>

<template>
  <div class="object">
    <img
      class="background-blue-rectangle"
      src="/MainWindow/blue-Rectangle.svg"
      alt=""
    />
    <img
      class="object-icon"
      :src="'/MainWindow/' + iconObject + '.svg'"
      alt=""
    />
    <div class="object-title">{{ nameObject }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "/assets/leftMenu.scss";
</style>
