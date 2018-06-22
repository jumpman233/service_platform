<template>
  <div class="mine-view">
    <div class="top">
      <div class="blank"></div>
      <img src="../img/head.jpg" alt="" class="head-img">
      <div class="main-name">
        <div>
          <span class="name">HI {{ username }}</span>
          <span class="tag">个人奋斗</span>
        </div>
        <p class="desc">在这里感受金钱最大的善意</p>
      </div>
    </div>
    <div class="main">
      <div class="btn" @click="showDevelopingToast">历史测评</div>
      <div class="btn" @click="showDevelopingToast">收藏资讯</div>
      <div class="btn" @click="showDevelopingToast">理财计划</div>
      <div class="btn" @click="showDevelopingToast">收支管理</div>
      <div class="btn" @click="showDevelopingToast">修改标签</div>
    </div>
  </div>
</template>

<script>
  import { showDevelopingToast } from '../utils/util'

  export default {
    data() {
      return {
        username: '小进'
      }
    },
    methods: {
      showDevelopingToast
    },
    components: {

    }
  }

</script>

<style lang="less">
  .mine-view {
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 750px;
      height: 350px;
      background: url(../img/mine/top.jpg) 0 0 no-repeat;
      background-size: 750px 350px;

      .blank {
        width: 100%;
        height: 10px;
        background-color: #E8E8E8;
        position: absolute;
        top: 0;
      }

      .head-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 50px;
      }

      .main-name {
        .name {
          font-size: 46px;
          color: #fff;
          margin-right: 20px;
        }

        .tag {
          display: inline-block;
          padding: 0 10px;
          line-height: 35px;
          height: 35px;
          color: #fff;
          border: 1px solid #fff;
          font-size: 22px;
          border-radius: 5px;
        }
      }

      .desc {
        margin-top: 20px;
        font-size: 24px;
        color: #fff;
      }
    }

    .main {
      box-sizing: border-box;
      width: 100%;
      background: #fff;
      padding: 35px;

      .btn {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 85px;
        color: #fc6954;
        line-height: 85px;
        font-size: 30px;
        padding: 0 25px 0 45px;
        border-bottom: 1px solid #9D9D9D;
        background-color: #fff;

        &:after {
          content: "";
          display: inline-block;
          width: 18px;
          height: 33px;
          background: url(../img/mine/to_right.jpg) 0 0 no-repeat;
          background-size: 18px 33px;
        }

        &:not(:first-child) {
          margin-top: 15px;
        }
      }
    }
  }
</style>
