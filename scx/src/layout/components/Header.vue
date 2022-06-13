<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
  </div>
</template>

<script setup lang="ts">
import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.name)
const goback = function () {
  router.go(-1)
}
const onClickLeft = () => {

  goback()
  Toast('返回');
}
function onClickRight() {
  console.log(route.name)
  Toast('按钮');
}
</script>

<style scoped>
</style>