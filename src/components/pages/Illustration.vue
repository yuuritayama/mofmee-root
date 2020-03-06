<template>
    <div>
        <navbar></navbar>
        <div>
            ふんわりかわいらしいイラストが得意です。<br>
            パステルカラーやアースカラーの配色を好んで使います。<br>
            BASEにて動物アイコンの受注制作を行っております。<br>
            その他ご依頼はお問い合わせページよりお願いいたします。
        </div>
        <illust-light-box></illust-light-box>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar'
import MainFooter from '@/components/modules/MainFooter'
import IllustLightBox from '@/components/modules/IllustLightBox'

export default {
    name: 'Illustration',
    components: {
        Navbar,
        MainFooter,
        IllustLightBox
    }
}
</script>