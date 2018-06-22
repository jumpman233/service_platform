<template>
  <div class="user-info">
    <img src="" alt="" class="head-img">
    <div class="info-wrapper">
      <div class="name-wrapper">
        <span class="tag">个人奋斗</span>
        <span class="name">Hi, {{ username }}</span>
      </div>
      <p class="desc-text">
        在这里感受金钱最大的善意
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '小进'
      }
    }
  }
</script>

<style lang="less">
  @import "../common";

  .user-info {
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 15px 40px 20px;
    background-color: #fff;

    .head-img {
      width: 130px;
      height: 130px;
      background: url(../img/head.jpg);
      background-size: 130px 130px;
      border-radius: 50%;
    }

    .info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .name-wrapper {
        display: flex;
        align-self: flex-end;

        .tag {
          display: inline-block;
          padding: 0 10px;
          line-height: 35px;
          height: 35px;
          color: #c4c4c4;
          border: 1px solid #c4c4c4;
          font-size: 22px;
          border-radius: 5px;
        }

        .name {
          display: inline-block;
          margin-left: 20px;
          font-size: 40px;
          color: @orange;
        }
      }

      .desc-text {
        font-size: 28px;
        margin-top: 20px;
        color: @common-text-color;
      }
    }

    &:after {
      width: 670px;
      content: "";
      position: absolute;
      display: inline-block;
      height: 1px;
      bottom: 0;
      left: 40px;
      background: @dark-gray;
    }
  }
</style>
