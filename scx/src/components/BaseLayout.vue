<template>
  <div class="background">
    <div class="fixTop">
      <slot name="header" ></slot>
    </div>
    <div class="container">
      <slot ></slot>
    </div>
    <div class="fixBottom">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped>
.background{
  background-color: rgba(63, 63, 63, 0.219);
  /* position: relative; */

}
.fixTop{
  width: 100vw;
  position: relative;
  height: 6vh;
}

.container{
  margin-top: 1vh;
  height: 84vh;
  width: 100vw;
  overflow: scroll;
  position: relative;

}
.fixBottom{
  height: 6vh;
  width: 100vw;
  position: relative;
  text-align: center;
  justify-content: center;
}

</style>
