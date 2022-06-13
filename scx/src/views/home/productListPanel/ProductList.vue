<template>
  <div>

    <pair-layout v-for="(item, idx) in list" :key="idx"
      style="background-color:#eee;margin:20px 5px ; border-radius:19px ;overflow: hidden; display: flex;">

      <template #left>
        <div style="background-color:#eee;border-radius:10px ;overflow: hidden;height: 100%;">
          <img-view :src="item.imgSrc" style="height: 100%" position="center" fit="contain" />
        </div>

      </template>

      <template #right>
        <div style="background-color:#eee;border-radius:4px ;overflow: hidden;">
          <CardDetail :title="item.name" :desc="item.speci" :num="item.quantity.toString()" @click=getClickIdx(item.id)>
          </CardDetail>

        </div>

      </template>

    </pair-layout>
  </div>
</template>

<script setup lang="ts">
import PairLayout from '/src/views/home/productListPanel/PairLayout.vue';
import ImgView from '/src/components/ImgView.vue';
import CardDetail from '/src/views/home/productListPanel/CardDetail.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from '@vue/reactivity';
interface itemListProp {
  name: string,
  quantity: number,
  color: string,
  id: number,
  imgSrc: string,
  speci: string
}
const router = useRouter()
const route = useRoute()
function pushWithQuery(query: string) {
  console.log(route.query)
  router.push({
    name: 'ProductDetail',
    params: {
      Id: query,
    },
    query: {
      ...route.query,
    },
  })
}

const list: itemListProp[] = reactive([
  {
    id: 1,
    name: 's',
    quantity: 2,
    color: 'red',
    speci: "1+2+3",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 2,
    name: 's',
    quantity: 3,
    color: 'yellow',
    speci: "1+2+5",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 3,
    name: 's',
    quantity: 4,
    color: 'blue',
    speci: "1+2+3",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 4,
    name: 's',
    quantity: 5,
    color: 'grey',
    speci: "1+2+1",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 5,
    name: 's',
    quantity: 6,
    color: 'grey',
    speci: "1+2+4",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 6,
    name: 's',
    quantity: 7,
    color: 'grey',
    speci: "1+2+1",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 7,
    name: 's',
    quantity: 8,
    color: 'grey',
    speci: "1+2+2",
    imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },

]);

function getClickIdx(Idx: number) {

  pushWithQuery(Idx.toString())
  console.log('Idx :>> ', Idx);

}


</script>


<style lang="scss" scoped>
</style>