<template>
  <div>
    <nav-headner></nav-headner>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeadner from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'

export default {
  name: 'Home',
  components: {
    NavHeadner,
    NavFooter
  }
}
</script>
