<script setup lang="ts">
import itemBlock from './itemBlock.vue'
import BaseLayout from './BaseLayout.vue'

import { useRouter, useRoute } from 'vue-router'
import { ref ,reactive} from '@vue/reactivity';
// useRouter, useRoute
const list = reactive([
  {
    idx:1,
    name:'s'
  },
  {
    idx:2,
    name:'h'
  },
  {
    idx:3,
    name:'e'
  },
  {
    idx:4,
    name:'l'
  },
  {
    idx:5,
    name:'d'
  },
  {
    idx:6,
    name:'o'
  },
  {
    idx:7,
    name:'n'
  },
])
function getClickIdx(Idx:number){
  console.log('Idx :>> ', Idx);
}

</script>
<template>
  <div>
    <base-layout>
      <template #header>
        <var-app-bar 
          title="主页" 
          color="#ff9f00" 
          elevation
        />
      </template>

      <template #default>
        <item-block v-model="list" >
          <template #default="{item,index}">
            <var-card
              @click="getClickIdx(index)"
              description="公。"
              ripple
              src="https://varlet.gitee.io/varlet-ui/cat.jpg"
            >
            <template #title>
              <div>
                {{item.name}}
              </div>
            </template>
            <template #description>
              <div>
                {{item.name}}
              </div>
            </template>
            </var-card>
        </template>
        </item-block>
      </template>
      <template #footer>
          <p>Here's some contact info</p>
      </template>
    </base-layout>


  </div>
</template>


<style lang="scss" scoped>

</style>