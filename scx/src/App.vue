<script setup lang="ts">
import BaseLayout from './components/layout/BaseLayout.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
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
