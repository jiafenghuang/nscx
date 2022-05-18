<template>
  <div>
    <detail-layout>
      
      <template #detailTop>
        <img-view src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </template>

      <template #detailBottom>
        <van-form @submit="onSubmit" >
          <van-cell-group >
            <van-field 
              v-for="spec in labelArray"
              :key="spec.idx"
              :label="spec.label" 
              :name="spec.label" 
              v-model="spec.label"
              border
              clearable />
          </van-cell-group>
        </van-form>
      </template>

    </detail-layout>
  </div>
</template>

<script setup lang="ts">
import DetailLayout from '../layout/DetailLayout.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref ,reactive} from '@vue/reactivity';
import ImgView from './ImgView.vue'

const router = useRouter()
const route = useRoute()
const labelArray=[
  {
    idx:1,
    label:'1+1'

  },
  {
    idx:2,
    label:'1+2'
  },
  {
    idx:3,
    label:'1+3'
  },
  {
    idx:4,
    label:'1+4'
  },
  {
    idx:5,
    label:'1+5'
  }
]
const onSubmit = ()=>{}
const formData = {
  text:"",
  tel:"",
  digit:"",
  number:"",
  password:"",
}
const productData = ref(formData)
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