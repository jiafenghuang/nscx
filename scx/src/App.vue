<script setup lang="ts">
import BaseLayout from './components/BaseLayout.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
<div>
    <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/parent">Go to About</router-link> -->
    <base-layout>
      <template #header>
        <Header></Header>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
      <template #footer>
        <Footer></Footer>
      </template>
    </base-layout>
</div>
  
  
</template>

<style>

</style>
