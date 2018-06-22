<template>
  <div class="first-view">
    <user-info></user-info>
    <section class="main-content">
      <img src="../img/first/title.jpg" alt="">
      <div class="choose-wrapper">
        <div class="choose-title">
          <img src="../img/first/life.jpg" alt="">
          <div>
            <span class="choose-tip">{{ lifeTagText }}</span>
            <i class="icon-top"></i>
          </div>
        </div>
        <div class="choose-list">
          <div class="choose-row">
            <first-tag class="choose-item" :id="0" :curId="lifeId" @clickItem="clickLifeItem">学生</first-tag>
            <first-tag class="choose-item" :id="1" :curId="lifeId" @clickItem="clickLifeItem">个人奋斗</first-tag>
            <first-tag class="choose-item" :id="2" :curId="lifeId" @clickItem="clickLifeItem">二人世界</first-tag>
          </div>
          <div class="choose-row">
            <first-tag class="choose-item" :id="3" :curId="lifeId" @clickItem="clickLifeItem">家有儿女</first-tag>
            <first-tag class="choose-item" :id="4" :curId="lifeId" @clickItem="clickLifeItem">退休在家</first-tag>
            <first-tag class="choose-item" :id="5" :curId="lifeId" @clickItem="clickLifeItem">都不符合</first-tag>
          </div>
        </div>
      </div>

      <div class="choose-wrapper">
        <div class="choose-title">
          <img src="../img/first/money.jpg" alt="">
          <div>
            <span class="choose-tip">{{ moneyTagText }}</span>
            <i class="icon-top"></i>
          </div>
        </div>
        <div class="choose-list">
          <div class="choose-row">
            <first-tag class="choose-item" :id="0" :curId="moneyId" @clickItem="clickMoneyItem">1万以下</first-tag>
            <first-tag class="choose-item" :id="1" :curId="moneyId" @clickItem="clickMoneyItem">1万-5万</first-tag>
            <first-tag class="choose-item" :id="2" :curId="moneyId" @clickItem="clickMoneyItem">5万-10万</first-tag>
          </div>
          <div class="choose-row">
            <first-tag class="choose-item" :id="3" :curId="moneyId" @clickItem="clickMoneyItem">10万-30万</first-tag>
            <first-tag class="choose-item" :id="4" :curId="moneyId" @clickItem="clickMoneyItem">30万-100万</first-tag>
            <first-tag class="choose-item" :id="5" :curId="moneyId" @clickItem="clickMoneyItem">100万以上</first-tag>
          </div>
        </div>
      </div>

      <div class="choose-wrapper">
        <div class="choose-title">
          <img src="../img/first/experience.jpg" alt="">
          <div>
            <span class="choose-tip">理财老司机</span>
            <i class="icon-top"></i>
          </div>
        </div>
        <div class="choose-list">
          <div class="choose-row">
            <first-tag :isActive="true" class="choose-item">都没买过</first-tag>
            <first-tag class="choose-item">买过货币基金</first-tag>
            <first-tag class="choose-item">买过定期</first-tag>
          </div>
          <div class="choose-row">
            <first-tag class="choose-item">买过基金</first-tag>
            <first-tag class="choose-item">炒过股票</first-tag>
            <first-tag class="choose-item">其他投资</first-tag>
          </div>
        </div>
      </div>
    </section>
    <div class="bottom">
      <button class="btn btn-white" @click="clickSkip">跳过</button>
      <button class="btn btn-orange" @click="clickFinish">完成</button>
    </div>
  </div>
</template>

<script>
  import UserInfo from './UserInfo'
  import FirstTag from './FirstTag'

  const tagData = {
    lifeTag: [
      '花样少年',
      '行业精英',
      '顾家暖男',
      '男神老爸',
      '不老男神',
      '神秘人'
    ],
    moneyTag: [
      '有点零花钱',
      '有点小钱',
      '小有资产',
      '金玉满堂',
      '富甲一方',
      '壕气冲天'
    ]
  }

  export default {
    data() {
      return {
        lifeId: 0,
        moneyId: 0
      }
    },
    computed: {
      lifeTagText() {
        return tagData.lifeTag[this.lifeId]
      },
      moneyTagText() {
        return tagData.moneyTag[this.moneyId]
      }
    },
    methods: {
      clickLifeItem(id) {
        this.lifeId = id
      },
      clickMoneyItem(id) {
        this.moneyId = id
      },
      toHome() {
        this.$router.push({
          path: '/home'
        })
      },
      clickSkip() {
        this.toHome()
      },
      clickFinish() {
        this.toHome()
      }
    },
    components: {
      UserInfo,
      FirstTag
    }
  }
</script>

<style lang="less">
  @import "../common";
  .first-view {
    padding-top: 20px;

    .main-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 40px 0;
    }

    .btn {
      width: 200px;
      height: 50px;
      font-size: 25px;
      line-height: 50px;
      text-align: center;
      border-radius: 5px;
      border: none;

      &.btn-white {
        background-color: #fff;
        border: 1px solid @dark-gray;
        color: @dark-gray;
      }

      &.btn-orange {
        background-color: @orange;
        color: #fff;
      }
    }

    .bottom {
      display: flex;
      box-sizing: border-box;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      width: 100%;
      height: 130px;
      padding: 0 70px;
      border-top: 1px solid;
      bottom: 0;
      left: 0;
      border-top: 1px solid @dark-gray;
    }

    .choose-wrapper {
      width: 100%;
      margin: 0 90px;
      display: flex;
      flex-direction: column;

      &:not(:last-child) {
        border-bottom: 1px solid @dark-gray;
      }

      &:not(:first-child) {
        padding-top: 20px;
      }

      .choose-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .choose-tip {
          color: @dark-gray;
          font-size: 24px;
        }

        .icon-top {
          display: inline-block;
          margin-left: 10px;
          width: 32px;
          height: 17px;
          background: url(../img/first/icon.jpg) 0 0 no-repeat;
          background-size: 32px 17px;
        }
      }

      .choose-list {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 190px;
        padding: 20px 0 30px;

        .choose-row {
          display: flex;
          width: 100%;
          height: 60px;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .choose-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 100%;
            background-color: #F9F9F9;
            text-align: center;
            color: #727272;
            font-size: 22px;

            &.active {
              background-color: #FEF1EB;
              color: @orange;
            }
          }
        }
      }
    }
  }
</style>
