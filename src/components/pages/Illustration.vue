<template>
    <div>
        <navbar></navbar>
        <div class="i-global">
            <h2>illustration</h2>
            <div class="i-container" v-for="image in images" :key="image.id">
                <router-link :to="'/illustration/' + image.id"><img :src="image.src" /></router-link>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'
export default {
    name: 'Illustration',
    components: {
        Navbar,
        MainFooter
    },
    data() {
        return {
            images: [
                {
                    src: require('@/assets/work-illustration/top-image02-thumbnail.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 'top2'
                },
                {
                    src: require('@/assets/work-illustration/top-image01-thumbnail.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 'top1'
                },
                {
                    src: require('@/assets/work-illustration/iconKumaFall-thumbnail.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 'icon5'
                },
                {
                    src: require('@/assets/work-illustration/iconOkojo-thumbnail.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 'icon4'
                },
                {
                    src: require('@/assets/work-illustration/iconNekoMidori-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 'icon3'
                },
                {
                    src: require('@/assets/work-illustration/iconRakko-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 'icon2'
                },
                {
                    src: require('@/assets/work-illustration/iconKurage-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 'icon1'
                }
            ]
        }
    }
}
</script>

<style scoped>
.i-global{
    margin: 20px 100px;
    /* contents増えたら修正 */
    height: 1000px;
}

h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}


.i-container {
    display: inline-flex;
    flex-wrap: wrap;
    background-color: #f9f5f0;
    margin: 10px 4px;
}

img {
    width: 200px;
    margin: 10px;
}


/* タブレット */
@media screen and (max-width: 959px){
    .i-global {
        margin: 20px 50px;
    }
    img {
        width: 170px;
        margin: 10px;
    }
}

/* スマフォ */
@media screen and (max-width:559px){
    .i-global {
        margin: 20px 20px;
    }

    img {
        width: 140px;
        margin: 10px;
    }
}
</style>
