<script setup lang="ts">
import PairLayout from './PairLayout.vue';
</script>
<template>
  <div >
    <div >
      <slot name="detailTop" ></slot>
    </div>
    <div>
    <van-row :gutter="10">
      <van-col :span="12">
        <slot name="bottomLeft"></slot>
      </van-col>
      <van-col :span="12">
        <slot name="bottomRight"></slot>
      </van-col>
      </van-row>
    </div>

  </div>
</template>
<style scoped>
</style>
