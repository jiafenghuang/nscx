<template>
  <div style=" display: flex;align-items: center;justify-content: flex-end;height: 100%;" @click="emits('click')">
    <van-card style="width:100%;height: 100%;" :quantity="props.cardData.quantity" :price="props.cardData.quantity"
      :desc="props.cardData.desc" :title="props.cardData.title" :thumb="props.cardData.thumb">
    </van-card>
    <right-arrow></right-arrow>
  </div>
</template>
<script setup lang="ts">
import CardItemContent from '@/components/Card/CardItemContent.vue'
import CardItemLayout from '@/components/Card/CardItemLayout.vue';
import type { cardDataType } from 'src/@type/cardDataType'
import ImgView from '@/components/Image/ImgView.vue';
import RightArrow from '@/components/Router/RightArrow.vue'
const props = defineProps<{ cardData: cardDataType }>()
console.log(props.cardData)
const emits = defineEmits(['click'])





</script>
<style>
</style>