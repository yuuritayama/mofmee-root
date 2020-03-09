<template>
    <div class="illust-lightbox">
        <div class="illustrations" v-for="image in images" :key="image.id">
            <img :src="image.src" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'IllustLightBox',
    data() {
        return {
            images: [
                {
                    src: require('@/assets/work-illustration/iconKurage-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 1
                },
                {
                    src: require('@/assets/work-illustration/iconRakko-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 2
                },
                {
                    src: require('@/assets/work-illustration/iconNekoMidori-thumbnail.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 3
                },
                {
                    src: require('@/assets/work-illustration/iconOkojo-thumbnail.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 4
                },
                {
                    src: require('@/assets/work-illustration/iconKumaFall.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 5
                },
                {
                    src: require('@/assets/work-illustration/top-image01-thumbnail.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 6
                },
                {
                    src: require('@/assets/work-illustration/top-image02-thumbnail.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 7
                }
            ]
        }
    }
}
</script>

<style scoped>
.illust-lightbox{
    margin: 20px;
}

.illustrations {
    display: inline-block;
    background-color: #f9f5f0;
    margin: 4px;
}

img {
    width: 200px;
    margin: 10px;
}

</style>
