<template >
  <div>
    <van-row :gutter="10">
      <van-col :span="12">
        <!--  -->
        <slot name="left"></slot>
      </van-col>
      <!-- <van-col :span="12"> -->
        <!-- <slot name="right"></slot> -->
      <!-- </van-col> -->
      </van-row>
    <van-divider/>
  </div>
</template>