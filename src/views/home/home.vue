<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeBannerBox />
    <homeCategories />
    <homeContent />
    <button @click="btnClick">加载更多</button>
  </div>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeBannerBox from "./cpns/home-banner-box.vue";
import useHomeStore from "@/stores/modules/home";
import homeContent from "./cpns/home-content.vue";
//发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();

const btnClick = () => {
  homeStore.fetchHouselistData();
};
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
