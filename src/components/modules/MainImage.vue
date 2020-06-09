<template>
  <div class="top-image-global">
    <div class="mi-container">
      <div class="mi-slide-outer">
        <transition :name="transName">
          <template v-for="(mainImage, idx) in mainImages" >
            <div class="mi-slide-inner" v-if="currentIndex === idx" :key="idx">
              <img class="mi-img" :src="mainImage.src" />
            </div>
          </template>
        </transition>
      </div>
      <!-- ロゴと説明 -->
      <div class="discription">
        <img src="@/assets/mofmee-logo01.png" />
        <p>Mofufu Momoyama portfolio website<br>
          Illustration / Web-design / Cording</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainImage',
  data() {
    return {
      currentIndex : 0,
      timerId: undefined,
      transName: 'next',
      mainImages: [
        {
          title: 'top1',
          src: require('@/assets/top-images/top-image01.png')
        },
        {
          title: 'top2',
          src: require('@/assets/top-images/top-image02.png')
        }
      ]
    }
  },
  mounted() {
      this.timertId = setInterval(() => {
        this.next()
      },3000)
  },
  methods: {
    next() {
      this.transName = 'next',
      this.currentIndex++
      if (this.currentIndex === this.mainImages.length) {
        this.currentIndex = 0
      }
    }
  }
}
</script>

<style scoped>
.top-image-global {
  position: relative;
  margin-bottom: 60px;

}

/* ここからスライド */
/* PC */
.mi-container {
  width: 1280px;
  height: 600px;
  margin: auto;
  overflow: hidden;
}

.mi-slide-outer {
  position: relative;
}

.mi-slide-inner {
  width: 1280px;
  position: absolute;
  margin: auto;
}

.mi-img {
  width: 1280px;
  margin: auto;
}

/* アニメーション */
.next-enter-active, .next-leave-active {
  transition: all .8s ease-out;
}
.next-enter {
  transform: translateX(1280px);
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave {
  transform: translateX(0);
}
.next-leave-to {
  transform: translateX(-1280px);
}

/* タブレット */
@media screen and (max-width: 959px){
  .mi-container {
    width: 600px;
    height: 282px;
  }

  .mi-slide-outer {
    position: relative;
  }

  .mi-slide-inner {
    width: 600px;
    position: absolute;
    margin: auto;
  }

  .mi-img {
    width: 600px;
    margin:auto;
  }

  .next-enter {
    transform: translateX(600px);
  }
  .next-leave-to {
    transform: translateX(-600px);
  }
}

/* スマフォ */
@media screen and (max-width:559px){
  .mi-container {
    width: 350px;
    height: 164px;
  }

  .mi-slide-outer {
    position: relative;
  }

  .mi-slide-inner {
    width: 350px;
    position: absolute;
    margin: auto;
  }

  .mi-img {
    width: 350px;
    margin:auto;
  }

  .next-enter {
    transform: translateX(350px);
  }
  .next-leave-to {
    transform: translateX(-305px);
  }
}


/* ロゴと説明 */
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
