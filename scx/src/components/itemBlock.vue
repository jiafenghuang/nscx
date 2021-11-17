<script lang="ts" setup>

// import { ref ,reactive,toRef} from '@vue/reactivity';
import {defineProps} from 'vue'
const props = defineProps({
  modelValue: Array
})
</script>
<template >
  <div>
    <var-row :gutter="15" >
      <var-col :span="12"  v-for="(item,idx) in props.modelValue" :key="idx">      
        <slot :item="item" :index="idx"></slot>


      </var-col>      
</var-row>
  </div>
</template>

<style lang="sass" scoped>
$fontColor:#000
$fontSize:14px

</style>