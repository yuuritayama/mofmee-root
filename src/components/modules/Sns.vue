<template>
    <div>
      <a href="https://twitter.com/mof_mmm" target="_blank">
        <img class="sns-icon" src="@/assets/icons/twitter.png">
      </a>
      <a href="https://www.instagram.com/mof_mmm/" target="_blank">
        <img class="sns-icon" src="@/assets/icons/instagram.png">
      </a>
      <!-- <a href="https://github.com/mof-mmm" target="_blank">
        <img class="sns-icon" src="@/assets/icons/github.png">
      </a> -->
    </div>
</template>

<script>
export default {
  name: 'Sns'
}
</script>

<style scoped>
.sns-icon {
  height: 40px;
  margin: 10px;
}

.sns-icon:hover {
  opacity: 80%;
}
</style>