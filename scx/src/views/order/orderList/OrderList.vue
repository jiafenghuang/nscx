<template >
  <div v-for="(card, idx) in cardArray" :key="card.id">
    <card-item class="cardStyle" :cardData="card" @click="getDetailByProductId(card.id)">
    </card-item>
  </div>

</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive } from '@vue/reactivity';
import CardItem from '@/components/Card/CardItem.vue'
import type { cardDataType } from 'src/@type/cardDataType'
import ImgView from '@/components/Image/ImgView.vue';
const router = useRouter()
const route = useRoute()

const cardArray: cardDataType[] = [
  {
    id: 1,
    quantity: 1,
    price: 100,
    desc: "1+2+23+原木",
    title: "#888",
    thumb: "https://img01.yzcdn.cn/vant/cat.jpeg"
  },
  {
    id: 2,
    quantity: 1,
    price: 100,
    desc: "1+2+23+原木",
    title: "#888",
    thumb: "https://img01.yzcdn.cn/vant/cat.jpeg"
  }
]

function getDetailByProductId(id: number) {
  console.log(id)
}

</script>

<style lang="scss" scoped>
.padding {
  margin: 16px
}

.cardStyle {
  background-color: #ff0;
  margin: 10px 0px
}
</style>