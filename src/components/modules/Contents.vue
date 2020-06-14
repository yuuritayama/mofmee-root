<template>
  <div class="c-global">
    <h2 class="c-title">contents</h2>
    <div class="c-container">
      <template v-for="content in contents">
          <div class="c-box" :key="content.name">
            <img class="c-img" :src="content.src" />
            <h3 class="c-name">{{ content.name }}</h3>
            <div class="c-caption">{{ content.caption }}</div>
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
  name: 'Contents',
  data() {
    return {
      contents: [
        {
          name: 'グッズ販売',
          src: require('@/assets/service-images/suzuri.png'),
          caption: 'SUZURIにてスマートフォンケースやTシャツ、ステッカーなどのグッズを販売しています。',
          url: 'https://suzuri.jp/mof_mmm',
          button: '通販はこちら'
        },
        {
          name: 'mof-log',
          src: require('@/assets/service-images/mof-log.png'),
          caption: 'YouTubeでVlogを投稿しています。飼い猫のなたねさんがよく登場します。',
          url: 'https://www.youtube.com/channel/UCPRRetJLCcKm2TRA5XGUQlA',
          button: 'YouTubeをcheck‼'
        },
        {
          name: 'LINEスタンプ',
          src: require('@/assets/service-images/linestamp.png'),
          caption: 'ひつじのもふちゃんのラインスタンプを配信中です。',
          url: 'https://store.line.me/stickershop/author/310303',
          button: 'ラインスタンプはこちら'
        },
        {
          name: 'イラスト受注',
          src: require('@/assets/service-images/base.png'),
          caption: 'BASEにてSNS用のアイコンイラストをお受けしています。たまにオリジナルグッズの通販もしています。',
          url: 'https://mof.thebase.in/',
          button: '申し込みはこちら'
        },
        {
          name: 'note',
          src: require('@/assets/service-images/note.png'),
          caption: '日々のあれこれを綴ったエッセイや、待ち受け画像の配信など随時お知らせを更新しています。',
          url: 'https://note.com/mof_mmm',
          button: 'noteを読む'
        },
        {
          name: 'mofu-mori',
          src: require('@/assets/service-images/mofu_mori.png'),
          caption: 'どうぶつの森で作ったマイデザインなどの紹介ブログです。',
          url: 'https:///mofu-mori/mofchan.com',
          button: 'あつまれ！'
        },
        {
          name: 'blog',
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
.c-global {
  color: #41312c;
  background-color: #ede4dc;
  display: inline-block;
  margin: 30px auto;
}

@media screen and (max-width:1400px){
  .c-global {
    max-width: 90%;
  }
}

.c-container {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
}

.c-box {
  background-color: #f9f5f0;
  height: 530px;
  width: 400px;
  margin: 10px auto;
}

.c-img {
  width: 400px;
  margin: 20px 0;
}

.c-caption {
  margin: 0 30px;
}

/* スマフォ */
@media screen and (max-width:559px){
  .c-global {
    margin: 30px 10px;

  }

  .c-container {
    width: 360px;
    margin: 10px 0;
  }

  .c-box {
    background-color: #f9f5f0;
    height: 480px;
    width: 400px;
    margin: 10px 0;

  }

  .c-img {
    width: 340px;
    margin: 0;
  }

  .c-caption {
    margin: 10px;
  }
}


.c-title {
  color: #241a08;
  padding: 0.2em;
  margin: 10px 0px;
  /* マーカー風下線 */
  background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.c-name {
  font-size: 20px;
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