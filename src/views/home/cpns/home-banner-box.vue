<template>
  <div class="location">
    <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
    <div class="position">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { useRouter } from "vue-router";
const router = useRouter();
const cityClick = () => {
  router.push("/city");
};

//城市回显
const cityStore = useCityStore();
const { currentCity } = cityStore;
</script>
<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    color: #333;
  }
  .position {
    width: 74px;
    .text {
      font-size: 12px;
      color: #666;
    }
    img {
      position: relative;
      top: -1px;
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}
</style>
