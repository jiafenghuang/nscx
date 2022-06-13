<template>
  <div>
    <detail-layout>

      <template #detailTop>
        <img-view src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </template>

      <template #detailBottom>
        <van-form @submit="onSubmit">
          <van-cell-group>
            <van-field v-for="spec in labelArray" :key="spec.idx" :label="spec.label" :name="spec.label"
              v-model="spec.label" border clearable />
          </van-cell-group>
        </van-form>
        <div class="padding">
          <van-button type="primary" @click="updateActionPanelShow" round text="加入购物单" block />
        </div>

      </template>

    </detail-layout>
    <van-action-sheet v-model:show="actionPanelShow" title="快速下单">
      <div class="content">
        <ProductSelection></ProductSelection>
      </div>
    </van-action-sheet>

  </div>
</template>

<script setup lang="ts">
import DetailLayout from '/src/views/home/productDetailPanel/DetailLayout.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive } from '@vue/reactivity';
import ImgView from '/src/components/ImgView.vue';
import ProductSelection from './ProductSelection.vue'
const router = useRouter()
const route = useRoute()
const labelArray = [
  {
    idx: 1,
    label: '1+1'

  },
  {
    idx: 2,
    label: '1+2'
  },
  {
    idx: 3,
    label: '1+3'
  },
  {
    idx: 4,
    label: '1+4'
  },
  {
    idx: 5,
    label: '1+5'
  }
]
const actionPanelShow = ref<boolean>(false)
const onSubmit = () => { }
const formData = {
  text: "",
  tel: "",
  digit: "",
  number: "",
  password: "",
}
const productData = ref(formData)

const updateActionPanelShow = () => actionPanelShow.value = !actionPanelShow.value
const JumpToPage = () => {
  router.push({ name: "ProductSelection" })
}

</script>

<style lang="scss" scoped>
.padding {
  margin: 16px
}
</style>