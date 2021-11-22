<template>
  <div>
    <detail-layout>
      <template #detailTop>
        <!-- <img-view /> -->
        41
      </template>
      <template #bottomLeft>
        14324
      </template>
      <template #bottomRight>
        123
      </template>
    </detail-layout>
  </div>
</template>

<script setup lang="ts">
import DetailLayout from './DetailLayout.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref ,reactive} from '@vue/reactivity';

const router = useRouter()
const route = useRoute()

const productData = ref([])
console.log(route.params.Id)
console.log(route.query)

// const fetchDetailInfo=(query)=>{
//   async import('../shared/test.js')
// }

// watch(
//   () => route.params,
//   async routeParams=>{
//     productData.value = await fetchDetailInfo(routeParams.Id)
//   }
// )

</script>

<style lang="scss" scoped>

</style>