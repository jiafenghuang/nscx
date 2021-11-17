<template>
  <div class="background">
    <div >
      <slot name="header"></slot>
    </div>
    <div>
      <slot ></slot>
    </div>
    <div class="fixBottom var-elevation--2">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped>
.background{
  background-color: rgba(63, 63, 63, 0.219)
}
.fixBottom{
  width: 100%;
  background-color: red;
  position: fixed;
  bottom:0px;
  text-align: center;
  justify-content: center;
  line-height: 10px;
  height: 5%;
}

</style>
