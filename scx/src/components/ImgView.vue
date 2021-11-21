<script setup lang="ts">
import { Image as VanImage } from 'vant';
import {defineProps} from 'vue'
const props=defineProps({
  src:String
})
</script>

<template>
  <div>
    <van-image
      fit="contain"
      :src="props.src"      
    >
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
        <template v-slot:error>加载失败</template>
    </van-image> 
  </div>
</template>


