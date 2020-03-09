<template>
    <div>
        <navbar></navbar>
        <div class="i-global">
            <div class="i-container" v-for="image in images" :key="image.id">
                <img :src="image.src" />
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
                    id: 7
                },
                {
                    src: require('@/assets/work-illustration/top-image01-thumbnail.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 6
                },
                {
                    src: require('@/assets/work-illustration/iconKumaFall-thumbnail.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 5
                },
                {
                    src: require('@/assets/work-illustration/iconOkojo-thumbnail.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 4
                },
                {
                    src: require('@/assets/work-illustration/iconNekoMidori-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 3
                },
                {
                    src: require('@/assets/work-illustration/iconRakko-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 2
                },
                {
                    src: require('@/assets/work-illustration/iconKurage-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 1
                }
            ]
        }
    }
}
</script>

<style scoped>
.i-global{
    margin: 20px 100px;
}

.i-container {
    display: inline-flex;
    flex-wrap: wrap;
    background-color: #f9f5f0;
    margin: 4px;
}

img {
    width: 200px;
    margin: 10px;
}

</style>
