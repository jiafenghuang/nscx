<template>
  <div>
    <van-row justify="center" style="margin:5px">
      <van-col :span="props.leftSpan" style="align-items: center;display: flex;justify-content: center;">
        <slot name="leftPanel"></slot>
      </van-col>
      <van-col :span="props.rightSpan">
        <slot name="rightPanel"></slot>
      </van-col>
    </van-row>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  leftSpan: {
    type: Number,
    default: 6,

  },
  rightSpan: {
    type: Number,
    default: 18,
  }
})
</script>
<style>
</style>