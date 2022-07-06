<template>
  <card-item-layout :leftSpan="6" :rightSpan="18">
    <template #leftPanel>
      <ImgView src="https://img01.yzcdn.cn/vant/cat.jpeg"></ImgView>
    </template>
    <template #rightPanel>
      <div style=" display: flex;align-items: center;justify-content: flex-end;height: 100%;" @click="emits('click')">
        <card-item-content :cardData="props.cardData" style="width:100%;height: 100%;">
        </card-item-content>
        <right-arrow></right-arrow>
      </div>
    </template>
  </card-item-layout>
</template>
<script setup lang="ts">
import CardItemContent from '@/components/Card/CardItemContent.vue'
import CardItemLayout from '@/components/Card/CardItemLayout.vue';
import type { cardDataType } from 'src/@type/cardDataType'
import ImgView from '@/components/Image/ImgView.vue';
import RightArrow from '@/components/Router/RightArrow.vue'
const props = defineProps<{ cardData: cardDataType }>()
const emits = defineEmits(['click'])





</script>
<style>
</style>