<template>
  <div class="result-view">
    <img src="../../img/calculator/chart.jpg" alt="" class="chart">
    <div class="btn-group">
      <button class="btn no" @click="showDevelopingToast">房贷记账</button>
      <button class="btn no" @click="showDevelopingToast">贷款行情</button>
      <button class="btn no" @click="showDevelopingToast">房贷生息</button>
      <button class="btn" @click="toRecommend">更多资讯</button>
    </div>
    <img src="../../img/calculator/result.jpg" alt="">
    <i class="share" @click="showDevelopingToast"></i>
  </div>
</template>

<script>
  import { showDevelopingToast } from '../../utils/util'

  export default {
    methods: {
      showDevelopingToast,
      toRecommend() {
        this.$router.push({
          path: '/recommend'
        })
      }
    }
  }
</script>

<style lang="less">
  .result-view {
    background-color: #F3F3F3;

    .chart {
      margin-top: 15px;
    }

    .btn-group {
      width: 100%;
      height: 105px;
      margin: 15px 0;
      padding: 0 38px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .btn {
        width: 155px;
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        border-radius: 5px;
        background: #fb634d;
        color: #fff;
        text-align: center;

        &.no {
          background-color: #aaa;
        }
      }

      background-color: #fff;
    }

    .share {
      position: fixed;
      right: 0;
      bottom: 135px;
      display: inline-block;
      width: 113px;
      height: 128px;
      background: url(../../img/calculator/share.png) 0 0 no-repeat;
      background-size: 113px 128px;
    }
  }
</style>
