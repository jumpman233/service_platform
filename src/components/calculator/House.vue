<template>
  <div class="house-wrapper">
    <div class="nav-wrapper">
      <mt-navbar v-model="selected" class="nav">
        <mt-tab-item id="1">商业贷款</mt-tab-item>
        <mt-tab-item id="2">公积金贷款</mt-tab-item>
        <mt-tab-item id="3"><span class="hh" @click.stop="showDevelopingToast()">组合贷款</span></mt-tab-item>
      </mt-navbar>
    </div>
    <div class="main">
      <div class="title-wrapper">
        <div class="title">
          {{ canClick ? '天津' : '位置'}} <i class="icon-down" v-if="!canClick"></i>
        </div>
        <div class="title">
          {{ canClick ? '新楼盘' : '楼盘类型' }}<i class="icon-down" v-if="!canClick"></i>
        </div>
        <div class="title">
          {{ canClick ? '住宅' :  '住房类型' }}<i class="icon-down" v-if="!canClick"></i>
        </div>
      </div>
      <img src="../../img/calculator/tip.jpg" alt="" v-if="canClick" style="margin-top: -20px;">
      <div class="form-wrapper">
        <div class="item">
          <label>贷款总额（万元）</label>
          <input type="number" v-model="mon" placeholder="请输入金额">
        </div>
        <div class="item">
          <label>贷款期限（年）</label>
          <span>30年（360期）</span>
        </div>
        <div class="item">
          <label>贷款利率（%）</label>
          <span>基准利率（{{ ratio }}）</span>
        </div>
      </div>
      <button :class="['submit', {
        'can-click': canClick
      }]" @click="clickSubmit">开始计算</button>
    </div>
  </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui'
  import Vue from 'vue'
  import { showDevelopingToast } from '../../utils/util'

  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)

  export default {
    data() {
      return {
        selected: "1",
        mon: ''
      }
    },
    computed: {
      canClick() {
        return this.mon.length > 0
      },
      ratio() {
        return this.selected == 1 ? '4.9%' : '2.75%'
      }
    },
    methods: {
      clickSubmit() {
        if(!this.canClick) return

        this.$router.push({
          path: '/result'
        })
      },
      showDevelopingToast
    },
    components: {

    }
  }
</script>

<style lang="less">
  .house-wrapper {
    background-color: #E8E8E8;
    height: 100%;

    .nav-wrapper {
      width: 100%;
      height: 85px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 22px 30px;

      .nav {
        width: 100%;
        height: 45px;
        border: 1px solid #3E4051;
        border-radius: 10px;

        &.mint-navbar .mint-tab-item{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0;
          color: #3E4051;
          border: 1px solid #3E4051;

          &.is-selected {
            color: #fff;
            background-color: #3E4051;
          }
        }
      }
    }

    .main {
      box-sizing: border-box;
      width: 100%;
      margin-top: 15px;
      padding: 20px 40px 60px;
      background-color: #fff;
      display: flex;
      flex-direction: column;

      .title-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        height: 45px;
        margin-bottom: 30px;
        color: #595959;

        .icon-down {
          display: inline-block;
          width: 14px;
          height: 9px;
          background: url(../../img/calculator/to-bottom.jpg) 0 0 no-repeat;
          background-size: 14px 9px;
          margin-left: 10px;
        }

        .title {
          width: 225px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .title:not(:last-child) {
          border-right: 1px solid #808080;
        }
      }

      .form-wrapper {
        display: flex;
        flex-direction: column;

        .item {
          display: flex;
          align-items: center;
          width: 100%;
          height: 90px;
          border-bottom: 1px solid #808080;
          font-size: 26px;
          color: #595959;

          label {
            color: #a7a7a7;
            font-size: 26px;
            width: 235px;
          }

          input {
            font-size: 26px;
            height: 40px;
            color: #595959;

            &:focus {
              border: none;
              outline: none;
            }

            &::-webkit-input-placeholder {
              color: #a7a7a7;
            }
          }
        }
      }

      .submit {
        width: 100%;
        height: 105px;
        margin-top: 55px;
        border-radius: 10px;
        background-color: #FDCDCF;
        color: #fff;
        font-size: 38px;

        &.can-click {
          background-color: #fb634d;
        }
      }
    }

    .mint-tab-item-label {
      display: flex;
      width: 100%;
      height:100%;
      justify-content: center;
      align-items: center;
    }
  }

  .hh {
    display: flex;
    width: 100%;
    height:100%;
    justify-content: center;
    align-items: center;
  }
</style>
