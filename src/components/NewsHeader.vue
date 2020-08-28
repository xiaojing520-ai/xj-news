<template>
  <div class="news-header">
    <div class="back">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="title"><slot></slot></div>
    <div class="extra"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.news-header {
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  text-align: center;
  line-height: 50px;
  .back,
  .extra {
    width: 50px;
  }
  .title {
    flex: 1;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
