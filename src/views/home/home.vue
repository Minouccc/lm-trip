<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeBannerBox />
  </div>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeBannerBox from "./cpns/home-banner-box.vue";
import useHomeStore from "@/stores/modules/home";

//发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
