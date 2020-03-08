<template>
    <div>
        <navbar></navbar>
        <div class="i-global">
            <h2>illustration</h2>
        </div>
        <IllustLightBox></IllustLightBox>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import IllustLightBox from '@/components/modules/IllustLightBox'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Illustration',
    components: {
        Navbar,
        IllustLightBox,
        MainFooter
    }
}
</script>

<style scoped>
.i-global {
    margin: 20px 100px;
}
h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}
</style>