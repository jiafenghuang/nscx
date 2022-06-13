
<template >
  <div>
    <van-row justify="center" style="margin:10px">
      <van-col :span="leftSpanWidth">
        <slot name="left"></slot>
      </van-col>
      <van-col :span="rightSpanWidth">
        <slot name="right"></slot>
      </van-col>
    </van-row>
    <van-divider />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, Ref, toRefs } from '@vue/reactivity';
//import {defineProps} from 'vue'
const props = defineProps({
  leftSpan: {
    type: Number,
    default: 6,

  },
  rightSpan: {
    type: Number,
    default: 18,
  }
})

const { leftSpan, rightSpan } = props
const isLeftSpanPass = leftSpan != 6 //if pass the leftSpan the value maybe is not 6
const isRightSpanPass = rightSpan != 18 //if pass the leftSpan the value maybe is not 6
const leftSpanWidth: Ref<number> = ref(leftSpan)
const rightSpanWidth: Ref<number> = ref(rightSpan)
const fitScreen = () => {
  if (isLeftSpanPass) {
    rightSpanWidth.value = 24 - leftSpan
  }
  if (isRightSpanPass) {
    leftSpanWidth.value = 24 - rightSpan
  }
}
fitScreen()

</script>
<style lang="sass" scoped>
$fontColor:#000
$fontSize:14px

</style>