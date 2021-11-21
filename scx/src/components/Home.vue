<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import ImgView from './ImgView.vue'
import Info from './Info.vue'
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
])
function getClickIdx(Idx:number){
  pushWithQuery(Idx.toString())
  console.log('Idx :>> ', Idx);
}

</script>
<template>
  <div>
    <item-block v-for="(item,idx) in list" :key="idx">
      <template #imgView>
        <img-view :src="item.src" />
      </template>
      <template #desc>
        <info
          :title="item.name"
          :desc="item.name"
          :num="item.idx.toString()"
        ></info>
      </template>
    </item-block>
  </div>
</template>


<style lang="scss" scoped>

</style>