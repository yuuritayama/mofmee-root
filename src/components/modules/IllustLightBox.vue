<template>
    <div class="illust-lightbox">
        <div class="illustrations" v-for="image in images" :key="image.id">
            <img :src="image.src" />
            <p class="image-title">{{ image.title }}</p>
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
                    src: require('@/assets/work-illustration/iconKurage.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 1
                },
                {
                    src: require('@/assets/work-illustration/iconRakko.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 2
                },
                 {
                    src: require('@/assets/work-illustration/iconNekoMidori.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 3
                },
                 {
                    src: require('@/assets/work-illustration/iconOkojo.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 4
                },
                 {
                    src: require('@/assets/work-illustration/iconKumaFall.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 5
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
    width: 300px;
    margin: 10px;
}

</style>
