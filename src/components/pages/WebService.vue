<template>
    <div>
        <navbar></navbar>
        <div class="w-global">
            <div>Webサイトの制作をしています。</div>
            <div class="w-container" v-for="website in websites" :key="website.id">
                <img :src="website.src" />
                <h3>{{ website.title }}</h3>
                <p>{{ website.caption }}</p>
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
                    url: 'https://mofmee.me',
                    title: 'mofmee',
                    src: require('@/assets/work-website/mofmee/mockup-mofmee-pc.png'),
                    caption: '1',
                    id: 1
                },
                {
                    url: 'https://mofmee.me',
                    title: 'mofmee2',
                    src: require('@/assets/work-website/mofmee/mockup-mofmee-pc.png'),
                    caption: '2',
                    id: 2
                }
            ]
        }
    }
}
</script>

<style scoped>
.w-global {
    margin: 20px;
}

.w-container {
    display: inline-block;
    background-color: #f9f5f0;
    margin: 4px;
}
img {
    width: 600px;
    margin: 10px;
}
</style>