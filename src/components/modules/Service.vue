<template>
  <div class="service-global">
    <h2 class="title">SERVICE</h2>
    <div class="service-container">
      <div class="vue-carousel">
        <!-- スライド部分 -->
        <transition :name="transitionName">
          <template v-for="(content, index) in contents">
            <div v-if="visibleContent == index" :key="index">
              <img :src="content.src" class="service-img" />
              <h3>{{ content.title }}</h3>
              <div>{{ content.caption }}</div>
              <a :href="content.link" target="_blank" class="button-link">
                {{ content.button }}
              </a>
            </div>
          </template>
        </transition>
        <!-- 「PREV」「NEXT」と現在地のドット -->
        <div class="vue-carousel_footer">
          <img src="@/assets/icons/arrow-left.png" class="button-img" @click="sliderPrev()" />
          <img src="@/assets/icons/arrow-right.png" class="button-img" @click="sliderNext()" />
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
          title: 'SUZURI　グッズ',
          src: require('@/assets/surisurikun.png'),
          caption: 'スマートフォンケースやTシャツ、ステッカーなどのグッズを販売しています。',
          link: 'https://suzuri.jp/mof_mmm',
          button: '通販はこちら'
        },
        {
          title: 'LINEスタンプ',
          src: require('@/assets/linestamp.png'),
          caption: 'ひつじのもふちゃんのラインスタンプを配信中です。',
          link: 'https://store.line.me/stickershop/author/310303',
          button: 'ラインスタンプはこちら'
        },
        {
          title: 'イラスト受注',
          src: require('@/assets/mm-logo-03.png'),
          caption: 'BASEにてSNS用のアイコンイラストをお受けしています。たまにグッズの通販もしています。',
          link: 'https://mof.thebase.in/',
          button: 'イラスト申し込みはこちら'
        },
        {
          title: 'もふふの今日もがんばらない！',
          src: require('@/assets/blog.png'),
          caption: '虚弱体質を克服するメソッドを書き溜めたブログです。',
          link: 'https://mofchan.com/',
          button: 'blogを読む'
        },
        {
          title: 'note',
          src: require('@/assets/logo-symbol.png'),
          caption: '日々のあれこれを綴ったエッセイやお知らせはこちら。',
          link: 'https://note.com/mof_mmm',
          button: 'noteを読む'
        }
      ]
    }
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
}

.title {
  color: #241a08;
  padding: 0.2em;
  margin: 10px 80px;
  background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.service-container {
  background-color: #f9f5f0;
}

/* スライド */
.service-slide {
  display: inline-flex;
}

.service-img {
  width: 300px;
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

.vue-carousel{
  height: 500px;
  overflow: hidden;
  position: relative;
  width: 300px;
  }
 .vue-carousel_body{
    color: #fff;
    height: 150px;
    left: 0;
    line-height: 150px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;    
  }
  .vue-carousel_footer{
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    position: absolute;
    top: 150px;
    width: 100%;
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