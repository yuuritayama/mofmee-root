<template>
  <div class="top-image-global">
    <div class="mi-container">
      <div class="mi-slide">
        <!-- スライド部分 -->
        <transition :name="transitionName">
          <template v-for="(content, index) in contents">
            <div v-if="visibleContent == index" :key="index">
              <img class="mi-img" :src="content.src" />
            </div>
          </template>
        </transition>
        <!-- prev と next -->
        <div class="mi-slide-button">
          <img class="button-img" src="@/assets/icons/arrow-left.png" @click="sliderPrev()" />
          <img class="button-img" src="@/assets/icons/arrow-right.png" @click="sliderNext()" />
        </div>
        <!-- ロゴと説明 -->
        <div class="discription">
          <img src="@/assets/mofmee-logo01.png" />
          <p>Mofufu Momoyama portfolio website<br>
            Illustration / Web-design / Cording</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainImage',
  data() {
    return {
      transitionName: 'show-next',
      visibleContent: 0,
      contents: [
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
    setInterval(this.sliderNext, 8000)
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
.top-image-global {
  position: relative;
  margin-bottom: 60px;
}

/* ここからスライド */
/* PC */
.mi-container {
  height: 600px;
}  

.mi-slide{
  height: 600px;
  overflow: hidden;
  position: relative;
}

.mi-img {
  justify-content: center;
  height: 600px
}

.mi-slide-button {
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: space-between;
  position: absolute;
  top: 150px;
  width: 100%;
}

.mi-slide-button .button-img {
  width:60px;
}

.mi-slide-button .button-img:hover {
  opacity: 80%;
}

/* タブレット */
@media screen and (max-width: 959px){
  .mi-container {
    height: 350px;
  }  

  .mi-slide{
    height: 350px;
    overflow: hidden;
    position: relative;
  }

  .mi-img {
    justify-content: center;
    height: 350px
  }

  .mi-slide-button {
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    position: absolute;
    top: 150px;
    width: 100%;
  }

  .mi-slide-button .button-img {
    width:40px;
  }  

  .mi-slide-button .button-img:hover {
    opacity: 80%;
  }
}

/* スマフォ */
@media screen and (max-width:559px){
  .mi-container {
    height: 230px;
  } 
  .mi-slide{
      height: 230px;
      overflow: hidden;
      position: relative;
    }

  .mi-img {
    justify-content: center;
    height: 230px;
  }

  .mi-slide-button {
    align-items: center;
    display: flex;
    height: 70px;
    justify-content: space-between;
    position: absolute;
    top: 80px;
    width: 100%;
    }

  .mi-slide-button .button-img {
    width:30px;
  }

  .mi-slide-button .button-img:hover {
    opacity: 80%;
  }
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