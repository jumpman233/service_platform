<template>
  <div class="main-page">
    <router-view/>
    <page-header v-if="isShowHeader">
    </page-header>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader'

  const showList = ['Recommend', 'Mine', 'Home']

  export default {
    name: 'App',
    components: {
      PageHeader
    },
    data() {
      return {
        isShowHeader: showList.indexOf(this.$router.currentRoute.name) >= 0
      }
    },
    created() {
      this.$router.beforeEach((to, from, next) => {
        this.isShowHeader = showList.indexOf(to.name) >= 0
        console.log(this.isShowHeader)
        next()
      })
    }
  }
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
  }

  .main-page {
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
