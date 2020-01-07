<template>
<div class="srv-global">
  <h2 class="title">SERVICE</h2>
  <div class="container">
    <div class="section">
      <a href="https://store.line.me/stickershop/author/310303" target="_blank"><h3 class="title">LINEスタンプ</h3></a>
      <a href="https://store.line.me/stickershop/author/310303" target="_blank"><img class="img" src="@/assets/linestamp.png" alt="LINE SRAMP"></a>
      <div class="text">オリジナルキャラクターのLINEスタンプです。随時更新しています。</div>
    </div>
    <div class="section">
      <a href="https://suzuri.jp/mof_mmm" target="_blank"><h3 class="title">SUZURI</h3></a>
      <a href="https://suzuri.jp/mof_mmm" target="_blank"><img class="img" src="@/assets/surisurikun.png" alt="SUZURI"></a>
      <div class="text">オリジナルイラストを使用したTシャツやスマフォケースなどのグッズショップです。</div>
    </div>
    <div class="section">
      <a href="https://mof.thebase.in/" target="_blank"><h3 class="title">BASE</h3></a>
      <a href="https://mof.thebase.in/" target="_blank"><img class="img" src="@/assets/mm-logo-03.png" alt="BASE"></a>
      <div class="text">個人販売のページです。主にSNSアイコンイラストの受注制作を受けています。</div>
    </div>
    <div class="section">
      <a href="https://mofchan.com/" target="_blank"><h3 class="title">blog</h3></a>
      <a href="https://mofchan.com/" target="_blank"><img class="img" id="blog" src="@/assets/blog.png" alt="blog"></a>
      <div class="text">毎日すこやかに生きたい！食事や運動などの情報をまとめているブログです。</div>
    </div>
    <div class="section">
      <a href="https://note.com/mof_mmm" target="_blank"><h3 class="title">note</h3></a>
      <a href="https://note.com/mof_mmm" target="_blank"><img class="img" src="@/assets/logo-symbol.png" alt="note"></a>
      <div class="text">日々の気づきや目標などをのんびり書き連ねています。</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style scoped>
h2 {
  color: #241a08;
  margin: 20px;
}

h3 {
  font-size: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
}

.section {
  width: 230px;
  height: 300px;
  margin: 20px 40px;
}

.img {
  height: 150px;
}

.text {
  color: #241a08;
  display: inline-block;
  font-size: 100%;
  width: 200px;
  height: 100px;
}

a {
  color: #241a08;
  text-decoration: none;
}

a:hover {
  color: #928178;
}

a:hover img {
  opacity: 0.7;
}

#blog {
  border-radius:35%;
}
</style>