<template>
    <div>
        <navbar></navbar>
        <div class="p-global">
            <h2>profile</h2>
            <div class="p-overview">
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
            </div>
            <div class="p-section">
                <h3 class="p-title">illustration</h3>
                <div class="p-text">
                    <p>パステルカラーやアースカラーをメインとしたゆるくてかわいらしいイラストを描きます。</p>
                    <p>
                        イラストはInstagramに投稿しています。<br>
                        もふちゃんとその仲間たちのゆる～い日常をご覧ください。
                    </p>
                    <img src="@/assets/mofchan.png" />
                    <p>
                        オリジナルキャラクター：ひつじのもふちゃん<br>
                        人の肩に乗るくらいの大きさ。<br>
                        まれに頭にお花が咲く。<br>
                        もっふりみんなに癒しを届ける存在です。
                    </p>
                    <a class="p-button" href="https://www.instagram.com/mof_mmm/" target="_blank">instagramへ</a>
                    <p>
                        お仕事で描いたイラストは当ホームページのillustrationに掲載しています。
                    </p>
                    <a class="p-button"><router-link class="router" to="/illustration">illustrationへ</router-link></a>
                </div>
            </div>
            <div class="p-section">
                <h3 class="p-title">web-service</h3>
                <div class="p-text">
                    <p>
                        簡単なwebデザインとコーディングができます。<br>
                        当サイトはVue.jsで作りました。
                    </p>
                    <a class="p-button"><router-link class="router" to="/web-service">web-serviceへ</router-link></a>
                </div>
            </div>
            <div class="p-section">
                <h3 class="p-title">fashion</h3>
                <div class="p-text">
                    <p>
                        服飾系専門学校を出ています。<br>
                        洋服のデザイン、パターン作成、縫製まで一通りの技術があります。<br>
                        作品のギャラリーは準備中です。
                    </p>
                </div>
            </div>
            <div class="p-section">
                <h3 class="p-title">趣味</h3>
                <div class="p-text">
                    <p>
                        登山が好きです。ブログに登山日記を書いています。<br>
                        白馬岳に初めて登ってから北アルプスの虜になってしまいました。
                    </p>
                    <a class="p-button" href="https://mofchan.com/category/climbing" target="_blank">blogへ</a>
                    <p>
                        中医学やアーユルヴェーダなどの東洋医学に興味があります。<br>
                        現在は薬膳や理論を独学し、日々の生活に取り入れています。<br>
                        ツイッターに #ずぼら薬膳 で投稿しています。
                    </p>
                    <a class="p-button" href="https://twitter.com/search?q=%23%E3%81%9A%E3%81%BC%E3%82%89%E8%96%AC%E8%86%B3&src=typed_query" target="_blank">#ずぼら薬膳</a>  
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
    text-align: center;
    flex-wrap: wrap;
    margin: 20px 100px;
}

.profile {
    display: inline-flex;
}

/* タブレット */
@media screen and (max-width: 959px){
    .p-global {
        margin: 20px 50px;
    }
    .profile {
        display: inline-flex;
    }
}

/* スマフォ */
@media screen and (max-width:559px){
    .p-global {
        margin: 20px 20px;
    }

    .profile {
        display: inline-block;
    }
}

h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.p-overview {
    background-color: #f9f5f0;
    margin: 10px;
}

.p-section-left {
    margin: 10px;
}

.p-section-left img {
    margin:20px 0;
    width: 180px;
    border-radius: 50%;
}

.p-section-right {
    margin: 10px;
    padding: 10px 0 0 10px;
    text-align: left;
}

.p-section-right h3 {   
    font-size:20px;
    margin-bottom: 20px;
}

.p-section-right h4 {   
    font-size:16px;
    margin: 20px 0;
}

.p-section-right p {
    font-size: 14px;
}

.p-section {
    margin: 10px;
    padding: 10px;
    text-align: left;
    background-color: #f9f5f0;
}

.p-title {
    font-size: 24px;
    border-bottom: dotted 2px #82b7bd;
}

.p-text {
    padding: 0 30px;
}

.p-text img {
    width: 100px;
    float: left;
    margin: 0 20px 0 0;
}

.p-section .p-text .p-button {
    display: inline-block;
    padding: 0.3em 1em;
    margin: 10px;
    text-decoration: none;
    color: #82b7bd;
    border: solid 2px #82b7bd;
    border-radius: 3px;
    transition: .4s;
}

.p-section .p-text .p-button:hover {
    background: #82b7bd;
    color: #ede4dc;
}

.router {
    text-decoration: none;
    color: #82b7bd;
}

.router:hover {
    background: #82b7bd;
    color: #ede4dc;
}
</style>