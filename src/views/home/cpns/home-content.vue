<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <HouseItemV3
          v-if="item.discoveryContentType === 3"
          :item-data="item.data"
        />
        <HouseItemV9
          v-else-if="item.discoveryContentType === 9"
          :item-data="item.data"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";

import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
console.log(houselist);
</script>
<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
