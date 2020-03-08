<template>
    <div>
        <navbar></navbar>
        <iframe src="https://mofmee.tumblr.com/" width="100%" height="600" border="0" frameborder="0"></iframe>
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
    }
}
</script>