<template>
  <div class="background">
    <div class="fixTop">
      <Header></Header>
    </div>
    <div class="container">
      <AppMain></AppMain>
    </div>
    <div class="fixBottom">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">

import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import AppMain from './components/AppMain.vue';

</script>


<style lang="scss" scoped>
.container {
  margin-bottom: 100px
}
</style>