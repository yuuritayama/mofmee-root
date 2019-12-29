<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-brand href="#">MOFMEE</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/profile">profile</router-link></b-nav-item>
        <b-nav-item href="#">illustration</b-nav-item>
        <b-nav-item href="#">web-design</b-nav-item>
        <b-nav-item href="#">fashion</b-nav-item>
        <b-nav-item href="#">contact</b-nav-item>
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
  background-color:#856859;
}
</style>