<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-brand><router-link  class="nav-deco" to="/"><img src="@/assets/mofmee-logo02.png" alt="MOFMEE" class="mm-logo"></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link class="nav-deco" to="/profile">profile</router-link></b-nav-item>
        <b-nav-item><router-link class="nav-deco" to="/illustration">illustration</router-link></b-nav-item>
        <b-nav-item><router-link class="nav-deco" to="/web-service">web-service</router-link></b-nav-item>
        <b-nav-item><router-link class="nav-deco" to="/contact">contact</router-link></b-nav-item>
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
  background-color:#41312c;
}

.mm-logo {
  height:50px;
}

.nav-deco {
  color: #ede4dc;
  text-decoration: none;
}

.nav-deco:hover {
  color: #82b7bd;
}

.hidden {
  display:none;
}

</style>