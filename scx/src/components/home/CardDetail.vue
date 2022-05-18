<template>
  <div>
    <van-cell-group inset>
      <van-cell size="large" clickable >
        
        <template #title>
          {{props.title}}
        </template>

        <template #value>
          {{props.num}}
        </template>

        <template #label>
          {{props.desc}}
        </template>

      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title:String,
  num:String,
  desc:String,
})
</script>

<style scoped>

</style>