<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-brand><router-link  class="nav-deco" to="/"><img src="@/assets/mm-logo-01.png" alt="MOFMEE" class="mm-logo"></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link class="nav-deco" to="/profile">profile</router-link></b-nav-item>
        <b-nav-item class="hidden">illustration</b-nav-item>
        <b-nav-item class="hidden">web-design</b-nav-item>
        <b-nav-item class="hidden">fashion</b-nav-item>
        <b-nav-item class="hidden" href="#">contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navber'
}
</script>

<style scoped>
.navbar {
  background-color:#543f32;
}

.mm-logo {
  height:50px;
}

.nav-deco {
  color: #fbfaf5;
}

.nav-deco:hover {
  color: #928178;
}

.hidden {
  display:none;
}

</style>