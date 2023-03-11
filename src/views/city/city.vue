<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="SearchValue"
        placeholder="城市/区域/位置"
        show-action
        shape="round"
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import cityGroup from "./cpns/city-group.vue";
// tab的切换
const tabActive = ref();

// 搜索框功能
const router = useRouter();
const SearchValue = ref("");
const cancelClick = () => {
  router.back();
};
// 从Store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// 获取选中标签后的数据
// const currentCity = computed(() => allCities.value[tabActive.value]);
</script>
<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
