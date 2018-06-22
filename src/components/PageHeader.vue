<template>
  <div>
    <mt-navbar v-model="selected" class="page-header">
      <mt-tab-item id="1">
        <router-link to="/home">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link to="/recommend">推荐</router-link>
      </mt-tab-item>
      <mt-tab-item id="3">
        <router-link to="/mine">我的</router-link>
      </mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Navbar, TabItem } from 'mint-ui';

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);

  const routerData = {
    "Home": "1",
    "Recommend": "2",
    "Mine": "3"
  }

  export default {
    name: 'page-header',
    data() {
      return {
        selected: '1'
      }
    },
    created() {
      this.selected = routerData[this.$router.currentRoute.name]
    },
    methods: {
    },
    components: {
      Navbar,
      TabItem
    }
  }

</script>

<style lang="less">
  @import "../common";

  .page-header {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: 1px solid @dark-gray;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
</style>
