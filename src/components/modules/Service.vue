<template>
  <div class="service-global">
    <h2 class="title">contents</h2>
    <div class="service-container">
      <div class="service-slide">
        <!-- スライド部分 -->
        <transition :name="transitionName">
          <template v-for="(content, index) in contents">
            <div v-if="visibleContent == index" :key="index">
              <img class="service-img" :src="content.src" />
              <h3 class="service-title">{{ content.title }}</h3>
              <div class="service-caption">{{ content.caption }}</div>
              <a class="button-link" :href="content.url" target="_blank">
                {{ content.button }}
              </a>
            </div>
          </template>
        </transition>
        <!-- prev と next -->
        <div class="service-slide-button">
          <img class="button-img" src="@/assets/icons/arrow-left.png" @click="sliderPrev()" />
          <img class="button-img" src="@/assets/icons/arrow-right.png" @click="sliderNext()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data() {
    return {
      transitionName: 'show-next',
      visibleContent: 0,
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
  },
  mounted() {
    setInterval(this.sliderNext, 7000)
  },
  methods: {
    sliderPrev(){
      this.transitionName = 'show-prev'
      if(this.visibleContent < 1) {
        this.visibleContent = this.contents.length - 1
      } else {
        this.visibleContent--
      }  
    },
    sliderNext(){
      this.transitionName = 'show-next'
      if(this.visibleContent === this.contents.length - 1) {
        this.visibleContent = 0
      } else {
        this.visibleContent++
      }
    }
  }
}
</script>

<style scoped>
.service-global {
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

.service-container {
  background-color: #f9f5f0;
  height: 530px;
  width: 400px;
}

/* ここからスライド */
.service-slide{
  height: 530px;
  width: 400px;
  overflow: hidden;
  position: relative;
}

.service-img {
  width: 400px;
  margin: 20px 0;
}

.service-title {
  font-size: 20px;
}

.service-caption {
  margin: 0 30px;
}

.service-slide-button{
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: absolute;
  top: 150px;
  width: 100%;
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

 /* 進むトランジションと戻るトランジションをそれぞれ用意 */
.show-next-enter-active, .show-next-leave-active,
.show-prev-enter-active, .show-prev-leave-active  {
  transition: all .4s;
}
.show-next-enter, .show-prev-leave-to {
  transform: translateX(100%);
}
.show-next-leave-to, .show-prev-enter {
  transform: translateX(-100%);
}
</style>