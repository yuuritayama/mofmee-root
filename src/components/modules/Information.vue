<template>
    <div class="n-global">
        <h2 class="n-title">Information</h2>
        <div  class="n-container">
            <div v-for="information in informations" :key="information.id">
                <p>{{ information.date }} 
                    <a :href="information.url">{{ information.title }}</a>
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
                    date: '2019/3/9',
                    title: 'ホームページを更新しました。',
                    url: '#',
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
.n-global {
  color: #41312c;
  background-color: #ede4dc;
  display: inline-block;
  margin: 30px;
}

.n-title {
  color: #241a08;
  padding: 0.2em;
  margin: 10px 80px;
  /* マーカー風下線 */
  background: linear-gradient(transparent 70%, #82b7bd 70%);
}

.n-container {
  background-color: #f9f5f0;
  height: 530px;
  width: 400px;
  padding: 20px;
}

.n-container p {
    position: relative;
    padding-left: 25px;
}

.n-container p:before {
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

.n-container p:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 3px #ede4dc;
}

.n-container p a {
    color: #41312c;
    text-decoration: none;
}

.n-container p a:hover {
    color: #82b7bd;
}
</style>