<script lang="ts" setup>
const nameObjects: string[] = [
  "DashBoard",
  "Transactions",
  "Accounts",
  "Investments",
  "Credit Cards",
  "Loans",
  "Services",
  "My Privileges",
  "Setting",
];
</script>

<template>
  <div class="left-menu">
    <MainPageLeftMenuObject
      v-for="(item, index) in nameObjects"
      :key="item"
      :name-object="item"
      :icon-object="'imageLeftMenu' + (index + 1)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "/assets/leftMenu.scss";
</style>
