<template>
  <div id="app">
    <navbar></navbar>
    <div class="blank"></div>
    <main-image></main-image>
    <sns></sns>
    <div class="contents">
      <contents></contents>
      <information></information>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainImage from '@/components/modules/MainImage'
import Sns from '@/components/modules/Sns'
import Contents from '@/components/modules/Contents'
import Information from '@/components/modules/Information'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Home',
    components: {
      Navbar,
      MainImage,
      Sns,
      Contents,
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

.blank {
  margin: 20px;
}

.color{
  color:#41312c;
  color:#ede4dc;
  color:#82b7bd;
  color:#f9f5f0;
}
</style>