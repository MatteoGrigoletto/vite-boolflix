<template>

<!-- card  -->

    <div class="card" v-for="film in store.fullList">

        <img  v-if="(film.poster_path == null)" src="../../assets/noflag.png" alt="">
        <img v-else class="poster" :src="`http://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">

        <div class="text-box">
            <h2>{{film.title}}{{film.name}}</h2>
            <p>{{film.original_title}}{{film.original_name}}</p>
            <div v-if="film.original_language === 'it'">
                <img class="flag" src="../../assets/italy.png" alt="">
            </div>
            <div v-else-if="film.original_language === 'en'">
                <img class="flag" src="../../assets/unking.png" alt="">
            </div>
            <div v-else>
                <img class="flag" src="../../assets/noflag.png" alt="">
            </div>
             <div class="stars">
                <i class="fa-solid fa-star" v-for=" index in 5"
                :class="startsCalcolate(film.vote_average)  >= index ? 'gold' : 'gray'" ></i>
            </div>
        </div>    
    </div>
</template>

<script>
import {store} from '../../store';
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

.card{
    width: calc(100% / 5 - 6px);
    margin: 3px;
    background-color: rgb(44, 44, 44);
    position: relative;
    height: 550px;

    &:hover{
        transform: scale(1.2);
        z-index: 10;
        transition: 2s linear ;
        .text-box { 
            display: block;
         }
     }
    .poster{
        object-fit: cover;
    }
    .text-box{
        display: none;
        position: absolute;
        content: '';
        bottom: 2%;
        left: 5%;
        width: 90%;
        height: 170px;
        text-align: center;
        border:1px solid white;
        border-radius: 10px;
        background-color: rgba(57, 56, 56, .5);


         h2{
            height:70px;
        }
        p{
            height: 40px;
        }  
        .flag{
            width: 30px;
        }
        .stars{
            height: 20px;
            display: none;
        }
    }
}
.card:hover .stars{
    display: block;
}
 .gray {
    color: #ededed;
}
.gold {
    color: yellow;
}
</style>