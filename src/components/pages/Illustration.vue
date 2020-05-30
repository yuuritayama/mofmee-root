<template>
    <div>
        <navbar></navbar>
        <div class="i-global">
            <h2>illustration</h2>
            <div id="open" class="i-container" v-for="image in images" :key="image.id">
                <img id="thumbnail" @click="modalOpen(image)" :src="image.src" />
            </div>
            <div id="mask" @click="modalClose" :class="{hidden:showContent}"></div>
            <section id="modal" :class="{hidden:showContent}">
                <img id="selectedImg" :src="selectedImage.modal" />
                <p>{{ selectedImage.title }}</p>
                <div id="close" @click="modalClose">閉じる</div>
            </section>
        </div>
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
    },
    data() {
        return {
            showContent: true,
            selectedImage: "",
            images: [
                {
                    src: require('@/assets/work-illustration/iconKumaMask-thumbnail.png'),
                    modal: require('@/assets/work-illustration/iconKumaMask.png'),
                    title: '2020年4月 アイコンご依頼',
                    id: 'icon6'
                },
                {
                    src: require('@/assets/work-illustration/top-image02-thumbnail.png'),
                    modal: require('@/assets/work-illustration/top-image02-original.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 'top2'
                },
                {
                    src: require('@/assets/work-illustration/top-image01-thumbnail.png'),
                    modal: require('@/assets/work-illustration/top-image01-original.png'),
                    title: '2020年3月 ホームページトップ画',
                    id: 'top1'
                },
                {
                    src: require('@/assets/work-illustration/iconKumaFall-thumbnail.png'),
                    modal: require('@/assets/work-illustration/iconKumaFall.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 'icon5'
                },
                {
                    src: require('@/assets/work-illustration/iconOkojo-thumbnail.png'),
                    modal: require('@/assets/work-illustration/iconOkojo.png'),
                    title: '2019年9月 アイコンご依頼',
                    id: 'icon4'
                },
                {
                    src: require('@/assets/work-illustration/iconNekoMidori-thumbnail.png'),
                    modal: require('@/assets/work-illustration/iconNekoMidori.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 'icon3'
                },
                {
                    src: require('@/assets/work-illustration/iconRakko-thumbnail.png'),
                    modal: require('@/assets/work-illustration/iconRakko.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 'icon2'
                },
                {
                    src: require('@/assets/work-illustration/iconKurage-thumbnail.png'),
                    modal: require('@/assets/work-illustration/iconKurage.png'),
                    title: '2019年4月 アイコンご依頼',
                    id: 'icon1'
                }
            ]
        }
    },
    methods: {
        modalOpen(image) {
            this.showContent = false,
            this.selectedImage = image
        },
        modalClose() {
            this.showContent = true,
            this.selectedImage = ""
        }
    }
}
</script>

<style scoped>
.i-global{
    margin: 20px 100px;
}

h2 {
    text-align: left;
    width: 100%;
    /* マーカー風下線 */
    background: linear-gradient(transparent 70%, #82b7bd 70%);
}


.i-container {
    display: inline-flex;
    flex-wrap: wrap;
    background-color: #f9f5f0;
    margin: 10px 4px;
}

#thumbnail {
    cursor: pointer;
    width: 200px;
    margin: 10px;
}

#mask {
    background: rgba(130, 183, 189, 0.4);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

#modal {
    background: #f9f5f0;
    width: 80%;
    border-radius: 4px;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
}

#modal #selectedImg {
    width: 90%;
    margin: 20px auto;
}

#modal p {
    font-size: 16px;
    margin-top: 20px;
}

#close {
    cursor: pointer;
    color: #82b7bd;
    width: 100px;
    border: 1px solid #82b7bd;
    border-radius: 4px;
    text-align: center;
    padding: 8px 0;
    margin: 20px auto 20px;
}

#mask.hidden {
    display: none;
}

#modal.hidden {
    transform: translate(0, -500px);
}


/* タブレット */
@media screen and (max-width: 959px){
    .i-global {
        margin: 20px 50px;
    }
    #thumbnail {
        width: 170px;
        margin: 10px;
    }
}

/* スマフォ */
@media screen and (max-width:559px){
    .i-global {
        margin: 20px 20px;
    }

    #thumbnail {
        width: 140px;
        margin: 10px;
    }
}
</style>
