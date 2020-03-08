<template>
  <div class="top-image-global">
    <img src="@/assets/top-images/top-image01.png" />
    <div class="discription">
      <img src="@/assets/mofmee-logo01.png" />
      <p>Mofufu Momoyama portfolio website<br>
         Illustration / Web-design / Cording</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainImage'
}
</script>

<style scoped>
.top-image-global {
  position: relative;
}

.top-image-global img {
  margin: 20px 0 40px 0;
  padding: 0 20px;
  width: 100%;
}

.discription {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.discription p {
  color:#41312c;
}

@media screen and (max-width:600px){
  .discription p {
    color:#41312c;
    font-size: 10px;
  }
}

.discription img {
  width: 80%;
}
</style>