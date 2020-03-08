<template>
    <div>
        <navbar></navbar>
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