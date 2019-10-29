<template>
  <div>
    <h1>Hello Pixi</h1>
    <div class="aspect-box">
      <div class="aspect-box__inner pixi-app" ref="container"></div>
    </div>
  </div>
</template>

<script>
import { init as dmapInit } from "../pixi/pixiDmap";

export default {
  name: "view-pixi",
  mounted() {
    dmapInit(this.$refs.container);
  }
};
</script>

<style lang="scss" scoped>
.aspect-box {
  position: relative;
  background-color: gray;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 50%;
  }
  > .aspect-box__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>