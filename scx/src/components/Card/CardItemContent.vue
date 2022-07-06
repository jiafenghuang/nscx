<template>
  <van-card :num="props.quantity" :price="props.price" :desc="props.desc" :title="props.title" :thumb="props.thumb" />
</template>
<script setup lang="ts">
const props = defineProps({
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  desc: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: "未命名",
  },
  thumb: {
    type: String,
    default: '',
  }
})
</script>
<style>
</style>