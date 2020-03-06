<template>
    <div>
        <navbar></navbar>
        <div>Webサイトの制作をしています。</div>
        <div>
            実績
            <ul>
                <li>mofmee</li>
                <li>もふふの今日もがんばらない！</li>
                <li>薬膳</li>
                <li>misaki</li>
            </ul>
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
    }
}
</script>