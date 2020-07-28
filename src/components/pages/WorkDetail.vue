<template>
    <div>
        <navbar></navbar>
        <div class="wod-global">
            <h2>Work</h2>
            <div class="wod-container" v-for="workDetail in worksDetail" :key="workDetail.title">
                <template v-if="workDetail.titleId === id">
                    <img :src="workDetail.src" />
                    <p class="wod-title">{{ workDetail.title }}</p>
                    <div class="wod-description">
                        <p>{{ workDetail.description }}</p>
                        <p>制作担当<br>{{ workDetail.potision }}</P>
                        <p>使用ツール<br>{{ workDetail.tool}}</p>
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
    name: 'WorkDetail',
    components: {
        Navbar,
        MainFooter
    },
    data() {
        return {
            id: '',
            worksDetail: [
                {
                    src: require('@/assets/work-design/MisakiSumiyoshi/MockUp1.png'),
                    title: 'Misaki',
                    titleId: 'MisakiSumiyoshiNameCard',
                    description: 'MisakiSumiyoshi',
                    potision: 'Design / Cording',
                    tool: 'Illustrator / Photoshop'
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