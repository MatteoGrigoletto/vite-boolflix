<template>
<main>
    <section class="first-section-main">
        <div class="information">
            <h2>Hai trovato {{itemSearched}} trasmissioni ( {{store.listTv.length}} sono serie TV )</h2>
        </div>
        <div class="film-list" >
        <FilmCard/>
    </div>
    </section>  
</main>
   
</template>

<script>
import {store} from '../store';

import FilmCard from './FilmCard.vue';
    export default {
        name:'AppMain',
    data(){
        return{
            store,
        }
    },
    components: {
        FilmCard,
    },
    computed:{
        itemSearched(){
         let fullList = this.store.listFilm.concat(this.store.listTv)
         return fullList.length;
        }
    }
}
</script>

<style lang="scss" scoped>
.first-section-main{
    background-color: black;
    color: white;
    .information{
        padding: 20px;
    }
    .film-list{
        display: flex;
        flex-wrap: wrap;
    }

}
</style>