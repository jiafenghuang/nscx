<template>
  <div>
    <pair-layout :leftSpan=4
      style="background-color:#eee;margin:20px 5px ; border-radius:19px ;overflow: hidden; display: flex;">
      <template #left>
        1
      </template>

      <template #right>
        2
      </template>

    </pair-layout>

  </div>
</template>

<script setup lang="ts">
import DetailLayout from '/src/views/home/productDetailPanel/DetailLayout.vue'
import PairLayout from '/src/views/home/productListPanel/PairLayout.vue';

import { useRouter, useRoute } from 'vue-router'
import { ref, reactive } from '@vue/reactivity';
import ImgView from '/src/components/ImgView.vue';
const router = useRouter()
const route = useRoute()


</script>

<style lang="scss" scoped>
.padding {
  margin: 16px
}
</style>