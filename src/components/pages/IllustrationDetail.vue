<template>
  <div>
    <navbar></navbar>
    <div class="id-global">
        <h2>illustration</h2>
        <div class="id-container" v-for="illustrationDetail in illustrationsDetail" :key="illustrationDetail.title">
            <template v-if="illustrationDetail.newId === id">
                <img :src="illustrationDetail.src" />
                <div>
                    <p class="id-title">{{ illustrationDetail.title }}</p>
                    <p class="id-description">{{ illustrationDetail.description }}</p>
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
    name: 'Home',
    components: {
      Navbar,
      MainFooter
    },
    data() {
        return {
            id: '',
            illustrationsDetail: [
                {
                    src: require('@/assets/work-illustration/top-image02-original.png'),
                    title: 'mofmee top illustration',
                    description: '当サイトのトップ画です。',
                    newId: 'top2'
                },
                {
                    src: require('@/assets/work-illustration/top-image01-original.png'),
                    title: 'mofmee top illustration',
                    description: '当サイトのトップ画です。',
                    newId: 'top1'
                },
                {
                    src: require('@/assets/work-illustration/iconKumaFall.png'),
                    title: '2019年9月 アイコンご依頼',
                    description: '',
                    newId: 'icon5'
                },
                {
                    src: require('@/assets/work-illustration/iconOkojo.png'),
                    title: '2019年9月 アイコンご依頼',
                    description: '',
                    newId: 'icon4'
                },
                {
                    src: require('@/assets/work-illustration/iconNekoMidori.png'),
                    title: '2019年4月 アイコンご依頼',
                    description: '',
                    newId: 'icon3'
                },
                {
                    src: require('@/assets/work-illustration/iconRakko.png'),
                    title: '2019年4月 アイコンご依頼',
                    description: '',
                    newId: 'icon2'
                },
                {
                    src: require('@/assets/work-illustration/iconKurage.png'),
                    title: '2019年4月 アイコンご依頼',
                    description: '',
                    newId: 'icon1'
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

<style>
.id-global {
    margin: 20px 100px;
}

h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.id-container {
    background-color: #f9f5f0;
}

.id-container img{
    width:96%;
    margin: 10px 0;
}

.id-title {
    font-size: 18px;
}

/* タブレット */
@media screen and (max-width: 959px){
    .id-global {
        margin: 20px 50px;
    }
}

/* スマフォ */
@media screen and (max-width:559px){
    .id-global {
        margin: 20px 20px;
    }
}
</style>