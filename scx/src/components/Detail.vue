<template>
  <div>
    
  </div>
</template>

<script setup lang="ts">
import { watch ,ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const productData = ref()
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