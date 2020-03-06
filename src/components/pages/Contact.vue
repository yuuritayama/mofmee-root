<template>
    <div>
        <navbar></navbar>
        <div>
            <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScGErJnCd6ehSCkMOhspML1OSllFRS5XcAo5yrfsWUNa-aPUQ/viewform?embedded=true" 
            width="100%" height="677" frameborder="0" marginheight="0" marginwidth="0">
                読み込んでいます…
            </iframe>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'

export default {
    name: 'Contact',
    components: {
        Navbar,
        MainFooter
    }
}
</script>