<template>

  <div id="app">
    <DropdownMenu></DropdownMenu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import DropdownMenu from '@/components/DropdownMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    DropdownMenu,
    Footer
  }
}
</script>
