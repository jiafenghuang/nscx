<template>
  <div>
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import Child from './Child.vue'
const router = useRouter()
const route = useRoute()
// console.log('1 :>> ', route);
</script>

<style lang="scss" scoped>

</style>