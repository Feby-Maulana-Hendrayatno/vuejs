<template>
    <div class="container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
    <h1>
        <span id="spesialisasi">Spesialisasi </span>
        <span style="color:#FF2A2A;">Kami</span>       
    </h1>
    <br>
    <div class="row mb-3" v-for="ttg in tentangKami" :key="ttg.id">
        <div class="col-md-8 themed-grid-col">
            <div class="d-flex text-align-left " style="text-align:justify; font-size:22px; font-family: Montserrat; font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;">
            {{ttg.deskripsi}}
            </div>
        </div>
        <div class="col-md-4 themed-grid-col">
        <img :src="ttg.foto" class="rounded mx-auto d-block">
        </div>
    </div>
    </div>
</template>


<script>
import AOS from 'aos'
import axios from 'axios';

export default {
    created ( ) {
        AOS.init();
        this.getTentangKami();
    },

    name: 'TentangKami',
    data(){
        return{
        tentangKami:Array,
        }
    },

    methods: {

    getTentangKami(){
        let url = 'http://127.0.0.1:8000/api/tentang/';
        axios.get(url).then(response => {
        this.tentangKami = response.data.tentangKami;
        console.log(this.tentangKami);
        }).catch(error => {
        console.log(error);
        });
    },

    },

};

</script>

<style>
.p{
    font-size: 200px;
}
</style>