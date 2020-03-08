<template>
    <div>
        <navbar></navbar>
        <div class="wd-global">
            <h2>web-service</h2>
            <div class="wd-container" v-for="websiteDetail in websitesDetail" :key="websiteDetail.title">
                <template v-if="websiteDetail.title === id">
                    <a :href="websiteDetail.url" target="_blank">
                        <img :src="websiteDetail.src" />
                    </a>
                    <a :href="websiteDetail.url" target="_blank">
                        <p class="wd-title">{{ websiteDetail.title }}</p>
                    </a>
                    <p class="wd-work">{{ websiteDetail.work }}</p>
                    <p class="wd-detail">{{ websiteDetail.detail }}</P>
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
                    work: 'Design / Vue.js',
                    detail: 'イラストレーター/駆け出しエンジニアのももやまもふふの個人ホームページです。イラストやデザイン、コーディングまで一通り行いました。'
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

.wd-title:hover {
    color: #82b7bd;
}

.wd-detail {
    font-size: 14px;
    margin: 0 20px;
}
</style>