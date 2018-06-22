<template>
  <div class="home-view">
    <div class="tool-salary tool" @click="showDevelopingToast()">
      <div class="text-wrapper">
        <h4 class="tool-title">税后工资（敬请期待）</h4>
        <p class="tool-desc">换城市、换工作、如何不降税后工资</p>
      </div>
    </div>
    <div class="tool-house tool" @click="clickHouse()">
      <div class="text-wrapper">
        <h4 class="tool-title">房贷助手</h4>
        <p class="tool-desc">买房最好的时机永远是现在</p>
      </div>
    </div>
    <div class="tool-car tool" @click="showDevelopingToast()">
      <div class="text-wrapper">
        <h4 class="tool-title">车贷助手（敬请期待）</h4>
        <p class="tool-desc">如何20万买下兰博基尼</p>
      </div>
    </div>
    <div class="tool-financial tool" @click="showDevelopingToast()">
      <div class="text-wrapper">
        <h4 class="tool-title">理财管家（敬请期待）</h4>
        <p class="tool-desc">除了工资你还有这些收入</p>
      </div>
    </div>
    <div class="tool-baby tool" @click="showDevelopingToast()">
      <div class="text-wrapper">
        <h4 class="tool-title">宝贝计划（敬请期待）</h4>
        <p class="tool-desc">财商教育要从娃娃抓起</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { showDevelopingToast } from '../utils/util'
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    showDevelopingToast,
    clickHouse() {
      this.$router.push({
        path: '/house'
      })
    }
  }
}
</script>

<style lang="less">
  .home-view {
    width: 100%;
    display: flex;
    flex-direction: column;

    .tool {
      position: relative;
    }

    .tool-salary {
      width: 750px;
      height: 225px;
      background: url(../img/home/salary.jpg) 0 0 no-repeat;
      background-size: 750px 225px;
    }

    .tool-house {
      width: 750px;
      height: 224px;
      background: url(../img/home/house.jpg) 0 0 no-repeat;
      background-size: 750px 224px;
    }

    .tool-car {
      width: 750px;
      height: 225px;
      background: url(../img/home/car.jpg) 0 0 no-repeat;
      background-size: 750px 225px;
    }

    .tool-financial {
      width: 750px;
      height: 227px;
      background: url(../img/home/financial.jpg) 0 0 no-repeat;
      background-size: 750px 227px;
    }

    .tool-baby {
      width: 750px;
      height: 225px;
      background: url(../img/home/baby.jpg) 0 0 no-repeat;
      background-size: 750px 225px;
    }

    .text-wrapper {
      position: absolute;
      left: 72px;
      bottom: 20px;

      .tool-title {
        font-size: 36px;
        font-weight: bold;
        color: #fff;
      }

      .tool-desc {
        margin-top: 10px;
        font-size: 24px;
        color: #fff;
      }
    }
  }
</style>
