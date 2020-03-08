<template>
  <div id="app">
    <navbar></navbar>
    <main-image></main-image>
    <sns></sns>
    <div class="contents">
      <service></service>
      <information></information>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainImage from '@/components/modules/MainImage'
import Sns from '@/components/modules/Sns'
import Service from '@/components/modules/Service'
import Information from '@/components/modules/Information'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Home',
    components: {
      Navbar,
      MainImage,
      Sns,
      Service,
      Information,
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
  color: #41312c;
  background-color: #ede4dc;
}

.contents {
    display: inline-flex;
  }

@media screen and (max-width: 920px) {
  .contents {
    display: block;
  }
}

.color{
  color:#41312c;
  color:#ede4dc;
  color:#82b7bd;
  color:#f9f5f0;
}
</style>