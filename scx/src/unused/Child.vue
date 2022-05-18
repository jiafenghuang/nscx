<template>
  <div>
    {{rate}}
  </div>
</template>

<script setup lang="ts">
import {defineProps,computed} from 'vue'
let props = defineProps({
  value:Number
})
let rate:string = computed(()=>"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
// console.log('props :>> ', props);
</script>

<style lang="scss" scoped>

</style>