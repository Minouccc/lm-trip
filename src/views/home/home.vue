<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeBannerBox />
    <homeCategories />
    <div class="search-bar" v-if="isShowSearchBar">
      <searchBar />
    </div>
    <homeContent />
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeBannerBox from "./cpns/home-banner-box.vue";
import searchBar from "@/components/search-bar/search-bar.vue";
import useHomeStore from "@/stores/modules/home";
import homeContent from "./cpns/home-content.vue";
import useScroll from "@/hooks/useScroll";
//发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    });
  }
});

//搜索框显示的控制
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
