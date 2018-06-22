<template>
  <div class="recommend-view">
    <div class="blank"></div>
    <div class="top" @click="showDevelopingToast"></div>
    <img src="../img/recommend/banner.jpg" class="mt40" alt="" @click="showDevelopingToast()"/>
    <img src="../img/recommend/a1.jpg" class="mt15" alt="" @click="showDevelopingToast()"/>
    <img src="../img/recommend/a2.jpg" class="mt15" alt="" @click="showDevelopingToast()"/>
  </div>
</template>

<script>
  import { showDevelopingToast } from '../utils/util'

  export default {
    methods: {
      showDevelopingToast
    }
  }
</script>

<style lang="less">
  .recommend-view {
    width: 100%;
    background-color: #E8E8E8;
    padding-bottom: 20px;

    .blank {
      width: 100%;
      height: 65px;
    }

    .mt40 {
      margin-top: 40px;
    }

    .mt15 {
      margin-top: 15px;
    }

    .top {
      position: fixed;
      left: 0;
      top: 10px;
      width: 750px;
      height: 98px;
      background: url(../img/recommend/top.jpg) 0 0 no-repeat;
      background-size: 750px 98px;
    }
  }
</style>
