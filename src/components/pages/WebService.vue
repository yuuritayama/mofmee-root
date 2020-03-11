<template>
    <div>
        <navbar></navbar>
        <div class="w-global">
            <h2>web-service</h2>
            <div class="w-container" v-for="website in websites" :key="website.id">
                <router-link :to="'/web-service/' + website.title"><img :src="website.src" /></router-link>
                <!-- <h3><router-link class="w-title" :to="'/web-service/' + website.title">{{ website.title }}</router-link></h3> -->
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'WebService',
    components: {
        Navbar,
        MainFooter
    },
    data() {
        return {
            websites: [
                {
                    url: 'https://ykzn.life',
                    title: 'ゆるゆる薬膳',
                    src: require('@/assets/work-website/yuruyuru-yakuzen/thumbnail-yuruyuru-yakuzen.png'),
                    id: 2
                },
                {
                    url: 'https://mofmee.me',
                    title: 'mofmee',
                    src: require('@/assets/work-website/mofmee/thumbnail-mofmee.png'),
                    id: 1
                }
            ]
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.w-global {
    margin: 20px 100px;
    height: 1000px;
}

img {
    width: 460px;
    margin: 10px;
}

/* タブレット */
@media screen and (max-width: 959px){
    .w-global {
        margin: 20px 50px;
    }

    img {
        width: 460px;
        margin: 10px;
    }
}

/* スマフォ */
@media screen and (max-width:559px){
    .w-global {
        margin: 20px 20px;
    }

    img {
        width: 300px;
    }
}

.w-container {
    display: inline-block;
    background-color: #f9f5f0;
    margin: 10px;
}

.w-title {
    font-size: 16px;
    margin: 10px;
    text-decoration: none;
    color: #41312c;
}

.w-title:hover {
    color: #82b7bd;
}
</style>