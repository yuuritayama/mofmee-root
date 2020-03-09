<template>
    <div>
        <navbar></navbar>
        <div class="wd-global">
            <h2>web-service</h2>
            <div class="wd-container" v-for="websiteDetail in websitesDetail" :key="websiteDetail.title">
                <template v-if="websiteDetail.title === id">
                    <img :src="websiteDetail.src" />
                    <p class="wd-title">{{ websiteDetail.title }}</p>
                    <a class="wd-button" :href="websiteDetail.url" target="_blank">
                        {{ websiteDetail.url }}
                    </a>
                    <div class="wd-description">
                        <p>{{ websiteDetail.description }}</p>
                        <p>制作担当<br>{{ websiteDetail.potision }}</P>
                        <p>使用ツール<br>{{ websiteDetail.tool}}</p>
                        <p>使用言語 フレームワーク CMSなど<br>{{ websiteDetail.lang }}</p>
                    </div>
                </template>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'
export default {
    name: 'WebServiceDetail',
    components: {
        Navbar,
        MainFooter
    },
    data() {
        return {
            id: '',
            websitesDetail: [
                {
                    src: require('@/assets/work-website/mofmee/thumbnail-mofmee.png'),
                    title: 'mofmee',
                    url: 'https://mofmee.me',
                    description: '始めて本格的に制作したWebサイトです。当サイトの管理者であるももやまもふふのポートフォリオサイトになります。イラストやデザイン、コーディングまで一通り行いました。',
                    potision: 'Design / Cording',
                    tool: 'CLIP STUDIO PAINT',
                    lang: 'HTML / CSS / Vue.js',
                }
            ]
        }
    },
    mounted() {
        this.setId()
    },
    methods: {
        setId() {
            this.id = this.$route.params.id
            console.log(this.id)
        }
    }
}
</script>

<style scoped>
.wd-global {
    margin: 20px 100px;
}

.wd-description {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 60%;
    margin: 10px auto;
}

/* タブレット */
@media screen and (max-width: 959px){
    .wd-global {
        margin: 20px 50px;
    }

    .wd-description {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
    margin: 10px auto;
    }
}

/* スマフォ */
@media screen and (max-width:559px){
    .wd-global {
        margin: 20px 20px;
    }

    .wd-description {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 80%;
    margin: 10px auto;
    }
}

h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.wd-container {    
    background-color: #f9f5f0;
}

.wd-container img {
    width: 80%;
    margin: 20px;
}

.wd-container a{
    text-decoration: none;
}

.wd-title {
    font-size: 20px;
    color: #41312c;
}

.wd-button {
    display: inline-block;
    padding: 0.3em 1em;
    margin: 14px;
    text-decoration: none;
    color: #82b7bd;
    border: solid 2px #82b7bd;
    border-radius: 3px;
    transition: .4s;
}

.wd-button:hover {
  background: #82b7bd;
  color: #ede4dc;
}
</style>