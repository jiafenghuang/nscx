<template>
  <van-image :src="props.src" @click="showPreviewImg">
    <template v-slot:loading>
      <van-loading type="spinner" size="20" />
    </template>
    <template v-slot:error>加载失败 </template>
  </van-image>
</template>




<script setup lang="ts">
import { Image as VanImage } from 'vant';
import { ImagePreview } from 'vant';
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
const VanImagePreview = ImagePreview.Component;

const showPreviewImg = (scope: any) => {
  console.log(scope.target.src)
}
</script>

