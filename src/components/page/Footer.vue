<template>
    <div class="container" style="padding-top:50px; padding-bottom:50px;">
        <div class="row" id="footer">
            <div class="col" v-for="foot in footer" :key="foot.id" data-aos="fade-down" data-aos-duration="800">
            <img :src="foot.icon_footer" class="rounded mx-auto d-block"  width="70" height="70 " >
                <br>
                <div class="card-body">
                    <p class="card-text text-center" style=" font-weight: 10; font-size: 18px; ">
                    {{foot.deskripsi_footer}}
                    </p>
                </div>
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
    this.getFooter();
    },

    name: 'Footer List',
    data(){
        return{
        footer:Array,
        }
    },

    methods: {
        async getFooter(){
            let url = 'http://127.0.0.1:8000/api/footer/';
            await axios.get(url).then(response => {
            this.footer = response.data.footer;
            console.log(this.footer);
        }).catch(error => {
            console.log(error);
        });
        }
    },

};

</script>