<template>
  <span :class="checkActive() ? 'active' : ''" @click="clickItem">
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
  export default {
    props: {
      id: {
        default: -1
      },
      curId: {
        default: null
      },
      isActive: {
        default: false
      }
    },
    data() {
      return {
        text: '',
        active: false
      }
    },
    created() {
      this.active = this.isActive || false
    },
    methods: {
      checkActive() {
        if(this.id === -1) {
          return this.active
        } else {
          return this.curId === this.id
        }
      },
      clickItem() {
        this.$emit('clickItem', this.id)
        this.active = !this.active
      }
    }
  }
</script>
