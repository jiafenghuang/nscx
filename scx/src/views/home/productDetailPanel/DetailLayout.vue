<script setup lang="ts">
import PairLayout from '../../../layout/unused/PairLayout.vue';
</script>
<template>
  <div>
    <div class="top">
      <slot name="detailTop"></slot>
    </div>
    <div>
      <slot name="detailBottom"></slot>
    </div>

  </div>
</template>
<style scoped>
.top {
  width: 100vw;
  height: 30vh;

}

.right {}
</style>
