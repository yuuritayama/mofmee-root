<template>
    <div>
        <h2>hello</h2>
        <div>
            <div v-for="websiteDetail in websitesDetail" :key="websiteDetail.title">
                <template v-if="websiteDetail.title === id">
                    ^^:{{ websiteDetail.title }}
                    {{ websiteDetail.detail }}
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WebServiceDetail',
    data() {
        return {
            id: '',
            websitesDetail: [
                {
                    title: 'mofmee1',
                    detail: 'a'
                },
                {
                    title: 'mofmee2',
                    detail: 'b'
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