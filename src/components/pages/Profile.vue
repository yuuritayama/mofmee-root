<template>
    <div>
        <navbar></navbar>
        <div class="p-global">
            <h2>profile</h2>
            <div class="profile">
                <div class="p-section-left">
                    <img class="p-img" src="@/assets/p-img.jpg">
                    <sns></sns>
                </div>
                <div class="p-section-right">
                    <h3>ももやまもふふ</h3>
                    <h4>イラストレーター / 駆け出しエンジニア</h4>
                    <p>1994年5月1日生まれ 誕生花：スズラン</p>
                    <p>某私立大学 哲学・思想系学部卒業<br>
                    服飾系専門学校卒業</p>
                    <p>どこかでだれかをハッピーにするものづくりをしています。<br>
                    ツイッターやインスタグラムではゆるゆる癒し系のイラストを発信。<br>
                    「より楽に楽しく生きる」ためのメソッドをブログで公開中。
                    現在は薬膳の情報サイトも製作中です。</p>
                </div>
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
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import Sns from '@/components/modules/Sns'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Profile',
    components: {
        Navbar,
        Sns,
        MainFooter
    }
}
</script>

<style scoped>
.p-global {
    flex-wrap: wrap;
    margin: 100px;
}

h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.profile {
    display: inline-flex;
}

@media screen and (max-width: 600px) {
    .profile {
        display: inline-block;
    }
}

.p-section-left {
    border-style: solid;
    margin: 10px;
}

.p-section-left img {
    margin:20px 0;
    width: 180px;
    border-radius: 50%;
}

.p-section-right {
    border-style: solid;
    margin: 10px;
    text-align: left;
}

.p-section-right h3 {   
    font-size:20px;
    margin-bottom: 20px;
}

.p-section-right h4 {   
    font-size:14px;
    margin: 20px 0;
}

.p-section-right p {
    font-size: 14px;
}

.p-section {
    margin: 10px;
}

</style>