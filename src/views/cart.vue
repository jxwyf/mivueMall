<template>
   <order-header></order-header>
    Cart
    <nav-footer></nav-footer>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'

export default {
  name: 'Cart',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>
