<template>
    <div class="py-4 text-center container">
    <!-- <div class="row py-lg-5"> -->
        <div class="container" data-aos="fade-up" data-aos-duration="800" v-for="cp in contacts" :key="cp.id">
            <h4  class="text-center">
                <span id="Perencanaan">Perencanaan </span>
                <span style="color:#FF2A2A;">Strategi</span>       
            </h4>
            <p class="lead Perusahaan-IT">
                {{cp.judul_cp}}
            </p>
        </div>
    <!-- </div> -->
    </div>
</template>


<script>
import AOS from 'aos' 
import axios from 'axios';

export default {
    created ( ) {
        AOS.init();
        this.getContacts();
    },

    name: 'Contact',
    data(){
        return{
        contacts:Array,
        }
    },

    methods: {
        async getContacts(){
            let url = 'http://127.0.0.1:8000/api/contacts';
            await axios.get(url).then(response => {
            this.contacts = response.data.contacts;
            console.log(this.contacts);
        }).catch(error => {
            console.log(error);
        });
        },
    },

};


</script>