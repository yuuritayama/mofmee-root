<template>
    <div class="blog-global">
        <h2 class="title">blog</h2>
        <div class="blog-container">
            <img src="@/assets/service-images/blog.png" />
            <h3>もふふの今日もがんばらない！</h3>
            <div class="blog-caption">
                毎日生きるので精いっぱい。虚弱体質でうつ状態・自律神経失調症をだったわたしが、それらを克服したメソッドを書き溜めたブログです。
            </div>
            <a class="button-link" href="https://mofchan.com" target="_blank">元気になりたい人はcheck!</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>

<style scoped>
.blog-global {
  color: #41312c;
  background-color: #ede4dc;
  display: inline-block;
  margin: 30px;
}

.title {
  color: #241a08;
  padding: 0.2em;
  margin: 10px 80px;
  /* マーカー風下線 */
  background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.blog-container {
  background-color: #f9f5f0;
  height: 530px;
  width: 400px;
}

h3 {
  font-size: 20px;
}

img {
  width: 400px;
  margin: 20px 0;
}

.blog-caption {
  margin: 0 30px;
}

.button-link {
  display: inline-block;
  padding: 0.3em 1em;
  margin: 20px;
  text-decoration: none;
  color: #82b7bd;
  border: solid 2px #82b7bd;
  border-radius: 3px;
  transition: .4s;
}

.button-link:hover {
  background: #82b7bd;
  color: #ede4dc;
}
</style>