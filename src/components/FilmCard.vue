<template>
    <div v-for="film in store.listFilm">
        <img :src="`http://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
        <h3>{{film.title}}</h3>
        <p>{{film.original_title}}</p>
        <div v-if="film.original_language === 'it'">
            <img src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="film.original_language === 'en'">
            <img src="../assets/unking.png" alt="">
        </div>
        <div>
            <i class="fa-solid fa-star" v-for=" index in 5"
            :class="startsCalcolate(film.vote_average)  > index ? 'gold' : 'gray'" ></i>
        </div>
    </div>
    <div v-for="tv in store.listTv">
        <img :src="`http://image.tmdb.org/t/p/w500/${tv.poster_path}`" alt="">
        <h3>{{tv.name}}</h3>
        <p>{{tv.original_name}}</p>
        <div v-if="tv.original_language === 'it'">
            <img src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="tv.original_language === 'en'">
            <img src="../assets/unking.png" alt="">
        </div>
        <div>
            <i class="fa-solid fa-star" v-for=" index in 5"
            :class="startsCalcolate(tv.vote_average)  > index ? 'gold' : 'gray'" ></i>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
    export default {
        name:'FilmCard',
        data(){
            return{
                store,
            }
        },
        methods: {
            startsCalcolate(vote){
               return Math.floor(vote / 2);
            }
        }
    }
</script>

<style lang="scss" scoped>
 .gray {
    color: #ededed;
}
.gold {
    color: yellow;
}
</style>