<script lang="ts" setup>
// import { ref ,reactive,toRef} from '@vue/reactivity';
//import {defineProps} from 'vue'
const props = defineProps({
  modelValue: Array
})
</script>
<template >
  <div>
    <van-row :gutter="10" >
      <van-col :span="6">      
        <slot name="left"></slot>
      </van-col>      
      <van-col :span="18">      
        <slot name="right"></slot>
      </van-col>  
      </van-row>
    <van-divider /> 
  </div>
</template>

<style lang="sass" scoped>
$fontColor:#000
$fontSize:14px

</style>