<template>
  <div class="city top-page">
    <van-search
      v-model="SearchValue"
      placeholder="城市/区域/位置"
      show-action
      shape="round"
      @cancel="cancelClick"
    />
    <van-tabs v-model:active="tabActive" line-height="3">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
const router = useRouter();
const SearchValue = ref("");
const tabActive = ref(0);

const cancelClick = () => {
  router.back();
};
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script>
<style lang="less" scoped></style>
