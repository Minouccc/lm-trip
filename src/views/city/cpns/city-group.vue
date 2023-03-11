<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="hot-city" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities">
        <van-index-anchor :index="group.group"></van-index-anchor>
        <template v-for="(city, indey) in group?.cities">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import router from "@/router";
import useCityStore from "@/stores/modules/city";
import { computed } from "vue";

//定义props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

//动态索引
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

//城市回显
const cityStore = useCityStore();
const cityClick = (city) => {
  cityStore.currentCity = city;
  router.back();
};
</script>
<style lang="less" scoped>
.city-group {
  .list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;
    .hot-city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      color: #000;
      background-color: #fff4ec;
      margin: 6px;
    }
  }
}
</style>
