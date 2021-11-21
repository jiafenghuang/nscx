<template >
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="order" icon="search">订单</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const active=ref('home')
</script>

<style lang="scss" scoped>

</style>