<template>
  <div>
    <navbar></navbar>
    <main-image></main-image>
    <sns></sns>
    <service></service>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MainImage from '@/components/MainImage'
import Sns from '@/components/Sns'
import Service from '@/components/Service'
import MainFooter from '@/components/MainFooter'

export default {
    name: 'Top',
    components: {
      Navbar,
      MainImage,
      Sns,
      Service,
      MainFooter
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #241a08;
}

</style>