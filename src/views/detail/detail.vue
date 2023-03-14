<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { getDetailInfos } from "@/services";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;

//发送网络请求获取数据
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data;
  console.log(res);
});

//监听返回按钮的点击
const onClickLeft = () => {
  router.back();
};
</script>
<style scoped></style>
