<template>

  <van-form @submit="onSubmit">

    <van-cell-group inset v-for="(formData, idx) in formDataArray" :key="idx" :title="formData.model">

      <van-cell center title="自定义装配">
        <template #right-icon>
          <van-switch v-model="isCustomNameArray[idx]" @click="!isCustomNameArray[idx]" size="24" />
        </template>
      </van-cell>

      <van-field v-model="formData.singleSeaterName" label="单位型号" v-if="isCustomNameArray[idx]" />

      <van-field label="单位数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.singleSeaterQuantity" />
        </template>
      </van-field>

      <van-field v-model="formData.doubleSeaterName" label="双位型号" v-if="isCustomNameArray[idx]" />

      <van-field label="双位数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.doubleSeaterQuantity" />
        </template>
      </van-field>

      <van-field v-model="formData.threeSeaterName" label="三位型号" v-if="isCustomNameArray[idx]" />


      <van-field label="三位数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.threeSeaterQuantity" />
        </template>
      </van-field>


      <van-field v-model="formData.armrestName" label="扶手型号" v-if="isCustomNameArray[idx]" />
      <van-field label="扶手数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.armrestQuantity" />
        </template>
      </van-field>

      <van-field v-model="formData.cornerName" label="脚踏型号" v-if="isCustomNameArray[idx]" />
      <van-field label="脚踏数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.cornerQuantity" />
        </template>
      </van-field>
      <van-field v-model="formData.teapoyName" label="茶几型号" v-if="isCustomNameArray[idx]" />
      <van-field label="茶几数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.cornerQuantity" />
        </template>
      </van-field>
      <van-field v-model="formData.squareTableName" label="方几型号" v-if="isCustomNameArray[idx]" />
      <van-field label="方几数量">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.squareTableQuantity" />
        </template>
      </van-field>

      <van-field v-if="cabinetShowArray[idx]" v-model="formData.cabinetName" label="电视柜" />
      <van-field label="电视柜数量" v-if="cabinetShowArray[idx]">
        <template #right-icon>
          <van-stepper min="0" v-model="formData.cabinetQuantity" />
        </template>
      </van-field>
      <div
        style="margin: 10px;display: flex;align-content: space-around;justify-content: space-around;align-items: center;">

        <van-button type="default" @click="setCabinetShow(idx)" v-if="!cabinetShowArray[idx]">加电视柜</van-button>

        <van-button type="default" @click="setMoreOrder" v-if="idx === lastOrderIdx">更多订单</van-button>
      </div>

      <van-divider />
    </van-cell-group>


    <div style="margin: 16px;padding-bottom:50px">
      <van-button round block type="primary" native-type="submit">保存</van-button>
    </div>
  </van-form>

</template>

<script lang="ts" setup>
import { ref, reactive, toRaw, computed, isReactive, unref } from '@vue/reactivity';
import _ from 'lodash';
import { useRouter, useRoute } from "vue-router"


interface formDataType {
  model: string,
  remark: string,
  totalQuantity: number,
  squareTableName: string,
  squareTableQuantity: number,
  teapoyName: string,
  teapoyQuantity: number,
  cabinetName: string,
  cabinetQuantity: number,
  cornerName: string,
  cornerQuantity: number,
  armrestName: string,
  singleSeaterName: string,
  singleSeaterQuantity: number,
  doubleSeaterName: string,
  doubleSeaterQuantity: number,
  threeSeaterName: string,
  threeSeaterQuantity: number,
  armrestQuantity: number,
}

const router = useRouter()
const route = useRoute()

const formDataTemplate: formDataType = {
  model: "",
  remark: "",
  totalQuantity: 1,
  squareTableName: "",
  squareTableQuantity: 1,
  teapoyName: "",
  teapoyQuantity: 1,
  cabinetName: "",
  cabinetQuantity: 1,
  cornerName: "",
  cornerQuantity: 1,
  armrestName: "",
  singleSeaterName: "",
  singleSeaterQuantity: 1,
  doubleSeaterName: "",
  doubleSeaterQuantity: 1,
  threeSeaterName: "",
  threeSeaterQuantity: 1,
  armrestQuantity: 1,
}
const lastOrderIdx = computed(() => {
  return formDataArray.length - 1
})
const isCustomNameArray = ref<boolean[]>([false])
const cabinetShowArray = ref<boolean[]>([false])
const formDataArray = reactive<formDataType[]>([])

formDataArray.push(_.cloneDeep(formDataTemplate))

const onSubmit = (): void => {
  console.log(formDataTemplate)
};

const setMoreOrder = (): void => {
  formDataArray.push(_.cloneDeep(formDataTemplate))
};

const setCabinetShow = (idx: number) => {
  cabinetShowArray.value[idx] = !cabinetShowArray.value[idx]
};

</script>


<style lang="scss" scoped>
</style>