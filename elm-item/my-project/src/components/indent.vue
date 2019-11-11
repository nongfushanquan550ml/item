<template>
  <div>
    <div class="indent_header">
      <h3 class="index_header_d">订单</h3>
      <div class="index_header_g1"></div>
      <div class="index_header_g2"></div>
    </div>
    <div class="ofen_busy">
      <span class="pg">最近经常购买</span>
      <span class="one">查看最近12个商家</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.indent_header {
  height: vw(128);
  line-height: vw(128);
  .index_header_d {
    font-size: vw(40);
    margin-left: vw(494);
    margin-right: vw(286);
    float: left;
  }
  .index_header_g1 {
    float: left;
    width: vw(60);
    height: vw(60);
    background: url(../assets/bk1.png) no-repeat;
    background-size: 100% 100%;
    margin-right: vw(70);
    margin-top: vw(70);
  }
  .index_header_g2 {
    float: left;
    width: vw(60);
    height: vw(60);
    background: url(../assets/bk2.png) no-repeat;
    background-size: 100% 100%;
    margin-top: vw(70);
  }
}
.ofen_busy {
  height: vw(157);
  .pg {
      float: left;
    font-size: vw(42);
    color: #333;
    line-height: vw(42);
    vertical-align: middle;
  }
  .one {
      float: left;
    font-size: vw(33);
    color: #666;
        vertical-align: middle;
  }
}
</style>