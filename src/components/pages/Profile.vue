<template>
    <div>
        <navbar></navbar>
        <div class="p-global">
            <h2>profile</h2>
            <div>
                <img class="p-img" src="@/assets/p-img.jpg">
                <h3>ももやまもふふ</h3>
                <p>1994年生まれ</p>
                <a href="https://twitter.com/mof_mmm" target="_blank"><img class="sns-icon" src="@/assets/icons/twitter.png"></a>
                <a href="https://www.instagram.com/mof_mmm/" target="_blank"><img class="sns-icon" src="@/assets/icons/instagram.png"></a>
 
            </div>
            <div class="p-section">
                <div class="p-title">〜できること〜</div>
                <div class="p-text">
                    イラスト、Webデザイン、コーディング、ファッションデザイン、パターン、縫製
                </div>
            </div>
            <div class="p-section">
                <div class="p-title">〜趣味〜</div>
                <div class="p-text">
                  お絵描き、登山、中医学とアーユルヴェーダの勉強
                </div>
            </div>
            <div class="p-section">
                <div class="p-title">〜CONTACT〜</div>
                <div class="p-text">
                  <p>momoyama.mf@gmail.com<br>twitter:@mof_mmm</p>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Profile',
    components: {
        Navbar,
        MainFooter
    }
}
</script>

<style scoped>
.p-global {
    height:1000px;
}
.p-img {
    height:100px;
    border-radius:50px;
    margin:20px;
}

h2 {
    font-size:125%;
    margin:20px;
}

h3 {
    font-size:125%;
    margin:10px 10px 20px 10px;
}

p {
    font-size:90%;
}

.p-section {
    margin:15px
}

.p-title {
    font-size:90%;
}
.p-text {
    display: inline-block;
    font-size:80%;
    width:200px;
}

.sns-icon {
  height: 40px;
  margin: 5px;
}
</style>