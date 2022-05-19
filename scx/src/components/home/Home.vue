<template>
  <div>

    <pair-layout v-for="(item,idx) in list" :key="idx">
      
      <template #left>
        <img-view :src="item.src" />
      </template>

      <template #right>
        <CardDetail
          :title="item.name"
          :desc="item.name"
          :num="item.idx.toString()"
          @click=getClickIdx(item.idx)
        ></CardDetail>
      </template>
      
    </pair-layout>

  </div>
</template>

<script setup lang="ts">
import PairLayout from '../layout/PairLayout.vue'
import ImgView from '../common/ImgView.vue'
import CardDetail from './CardDetail.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref ,reactive} from '@vue/reactivity';

const router = useRouter()
const route = useRoute()

function pushWithQuery(query:string) {
  console.log(route.query)
  router.push({
    name: 'Detail',
    params:{
      Id:query,

    },
    query: {
      ...route.query,
    },
  })
}

// useRouter, useRoute
const list = reactive([
  {
    idx:1,
    name:'s',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    idx:2,
    name:'h',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    idx:3,
    name:'e',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    idx:4,
    name:'l',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    idx:5,
    name:'d',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    idx:6,
    name:'o',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    idx:7,
    name:'n',
    src:"https://img01.yzcdn.cn/vant/cat.jpeg"
  },
]);

function getClickIdx(Idx:number){

  pushWithQuery(Idx.toString())
  console.log('Idx :>> ', Idx);

}

</script>


<style lang="scss" scoped>

</style>