<template>
    <div>
        <navbar></navbar>
        <div class="w-global">
            <h2>Work</h2>
            <div>;;;;</div>
            <div class="wo-container" v-for="work in works" :key="work.id">
                <router-link :to="'/work/' + work.titleLink"><img :src="work.src"></router-link>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Work',
    components: {
        Navbar,
        MainFooter
    },
    data() {
        return {
            works: [
                {
                    title: 'Misaki',
                    titleLink: 'MisakiSumiyoshiNameCard',
                    src: require('@/assets/work-design/MisakiSumiyoshi/MockUp1.png'),
                    id: 1
                }
            ]
        }
    }
}
</script>
