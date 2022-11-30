import {reactive} from "vue";

export const store  = reactive({
   listFilm: [],
   listTv: [],
   fullList: [],
   title: '',
   active : false,
});