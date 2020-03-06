<template>
    <div class="illust-light-box">
        <div class="illustrations" v-for="image in images" :key="image.id">
            <img :src="image.src" />
            <p>{{ image.title }}</p>
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
img {
    width: 300px;
}

.illustrations {
    display: inline-block;
}
</style>
