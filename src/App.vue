<template>
  <div class="app">
    <router-view></router-view>
    <tarbar />
    <loading />
  </div>
</template>

<script setup>
import tarbar from "@/components/tar-bar/tar-bar.vue";
import loading from "./components/loading/loading.vue";
</script>

<style scoped></style>
