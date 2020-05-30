<template>
    <div class="i-global">
        <h2 class="i-title">Information</h2>
        <div  class="i-container">
            <div v-for="information in informations" :key="information.id">
                <p>{{ information.date }} 
                    <a :href="information.url" target="_blank">{{ information.title }}</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Information',
    data() {
        return {
            informations: [
                {
                    date: '2020/5/30',
                    title: 'illustrationを更新しました。',
                    url: '',
                    id: 3
                },
                {
                    date: '2019/3/9',
                    title: 'ホームページを更新しました。',
                    url: 'https://note.com/mof_mmm/n/n52cb49227cce',
                    id: 2
                },
                {
                    date: '2019/1/3',
                    title: 'ホームページを公開しました。',
                    id: 1
                }
            ]
        }
    }
}
</script>

<style scoped>
.i-global {
  color: #41312c;
  background-color: #ede4dc;
  display: inline-block;
  margin: 30px auto;
}

.i-container {
  background-color: #f9f5f0;
  width: 400px;
  padding: 20px;
}

/* スマフォ */
@media screen and (max-width:559px){
    .i-global {
        margin: 30px 10px;
    }

    .i-container {
        background-color: #f9f5f0;
        width: 360px;
        display: inline-flex;
        flex-wrap: wrap;
    }
}

.i-title {
  color: #241a08;
  padding: 0.2em;
  margin: 10px 0px;
  /* マーカー風下線 */
  background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.i-container p {
    position: relative;
    padding-left: 25px;
}

.i-container p:before {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 0;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 15px transparent;
    border-bottom: solid 15px #ede4dc;
}

.i-container p:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 10px;
    width: 96%;
    border-bottom: solid 3px #ede4dc;
}

.i-container p a {
    color: #41312c;
    text-decoration: none;
}

.i-container p a:hover {
    color: #82b7bd;
}
</style>