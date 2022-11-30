<template>
    <div>
        <form action="" @submit.prevent="filtering">
            <input type="text" v-model="store.title">
            <button > Cerca</button>
        </form>
    </div>
</template>

<script>
import {store} from '../store';
import axios from 'axios';
    export default {
        name:'AppHeader',
        data(){
            return{
                store,
            }
        },
        methods: {
// aggiunge metodo per la ricerca filtrata dei film
            filtering(){
                axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '8e140fa3ab237a4b70f6371d23a8cd27',
          query: this.store.title,
        }
      })
      .then((response) =>{
        this.store.listFilm = response.data.results;
        console.log(this.store.listFilm)
      })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>