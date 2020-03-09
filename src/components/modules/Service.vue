<template>
  <div class="s-global">
    <h2 class="title">contents</h2>
    <div class="s-container">
      <template v-for="content in contents">
          <div class="s-box" :key="content.title">
            <img class="s-img" :src="content.src" />
            <h3 class="s-title">{{ content.title }}</h3>
            <div class="s-caption">{{ content.caption }}</div>
            <a class="button-link" :href="content.url" target="_blank">
              {{ content.button }}
            </a>
          </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data() {
    return {
      contents: [
        {
          title: 'グッズ販売',
          src: require('@/assets/service-images/suzuri.png'),
          caption: 'SUZURIにてスマートフォンケースやTシャツ、ステッカーなどのグッズを販売しています。',
          url: 'https://suzuri.jp/mof_mmm',
          button: '通販はこちら'
        },
        {
          title: 'LINEスタンプ',
          src: require('@/assets/service-images/linestamp.png'),
          caption: 'ひつじのもふちゃんのラインスタンプを配信中です。',
          url: 'https://store.line.me/stickershop/author/310303',
          button: 'ラインスタンプはこちら'
        },
        {
          title: 'イラスト受注',
          src: require('@/assets/service-images/base.png'),
          caption: 'BASEにてSNS用のアイコンイラストをお受けしています。たまにオリジナルグッズの通販もしています。',
          url: 'https://mof.thebase.in/',
          button: '申し込みはこちら'
        },
        {
          title: 'note',
          src: require('@/assets/service-images/note.png'),
          caption: '日々のあれこれを綴ったエッセイや、待ち受け画像の配信など随時お知らせを更新しています。',
          url: 'https://note.com/mof_mmm',
          button: 'noteを読む'
        },
        {
          title: 'blog',
          src: require('@/assets/service-images/blog.png'),
          caption: '毎日生きるので精いっぱい。虚弱体質でうつ状態・自律神経失調症をだったわたしが、それらを克服したメソッドを書き溜めたブログです。',
          url: 'https://mofchan.com',
          button: '元気になりたい人はcheck!'
        }
      ]
    }
  }
}
</script>

<style scoped>
.s-global {
  color: #41312c;
  background-color: #ede4dc;
  margin: 30px auto;
  width: 80%;
}

.title {
  color: #241a08;
  padding: 0.2em;
  margin: 10px 80px;
  /* マーカー風下線 */
  background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.s-container {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;

}

.s-box {
  background-color: #f9f5f0;
  height: 530px;
  width: 400px;
  margin: 10px auto;
}

.s-slide{
  height: 530px;
  width: 400px;
  overflow: hidden;
  position: relative;
}

.s-img {
  width: 400px;
  margin: 20px 0;
}

.s-title {
  font-size: 20px;
}

.s-caption {
  margin: 0 30px;
}
.button-img {
  width:40px;
}

.button-img:hover {
  opacity: 80%;
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