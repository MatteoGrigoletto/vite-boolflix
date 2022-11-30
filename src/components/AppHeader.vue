<template>
    <header>
        <section class="first-section-header">
            <div class="container-80">
                <AppLogo/>
                <SearchBar @filter="filtering"/>
            </div>
        </section>
    </header>
</template>

<script>
import {store} from '../store';
import axios from 'axios';

import AppLogo from './another-comp/AppLogo.vue';
import SearchBar from './another-comp/SearchBar.vue';
    export default {
        name:'AppHeader',
        data(){
            return{
                store,
            }
        },
        components:{
            SearchBar,
            AppLogo,
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
      }),
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '8e140fa3ab237a4b70f6371d23a8cd27',
          query: this.store.title,
        }
      })
      .then((response) =>{
        this.store.listTv = response.data.results
        console.log(this.store.listTv)
      })
            },   
        },
    }
</script>

<style lang="scss" scoped>
.first-section-header{
    background-color: black;

    .container-80{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>