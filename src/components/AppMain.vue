<template>
<main>
    <section class="first-section-main">
        <div class="film-list" >
        <FilmCard/>
    </div>
    </section>  
</main>
   
</template>

<script>
import FilmCard from './FilmCard.vue';
    export default {
        name:'AppMain',
    components: {
        FilmCard,
    }
    }
</script>

<style lang="scss" scoped>
.first-section-main{
    background-color: black;
    color: white;

    .film-list{
        display: flex;
        flex-wrap: wrap;
    }

}
</style>