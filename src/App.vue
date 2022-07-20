<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-info static-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" alt="..." height="36">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="active">
              <a href="#" class="nav-link">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" class="nav-link">Tentang Kami</a>
            </li>
            <li>
              <a href="#" class="nav-link">Layanan</a>
            </li>
            <li>
              <a href="#" class="nav-link">Produk</a>
            </li>
            <li>
              <a href="#" class="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`./assets/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>











  <div class="py-4 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h4  class="text-center">
          <span id="Perencanaan">Perencanaan </span>
          <span style="color:#FF2A2A;">Strategi</span>       
        </h4>
        <p class="lead Perusahaan-IT">
          Perusahaan IT yang bergerak di bidang jasa Penyedia sistem aplikasi & Pengembangan software house yang sudah bekerja sama dengan Bank-Bank Besar.  
        </p>
      </div>

      <div class="container">
        <h4  class="text-center">
          <span id="Perencanaan">Perencanaan </span>
          <span style="color:#FF2A2A;">Strategi</span>       
        </h4>
        <p class="lead Perusahaan-IT">
          Perusahaan IT yang bergerak di bidang jasa Penyedia sistem aplikasi & Pengembangan software house yang sudah bekerja sama dengan Bank-Bank Besar.  
        </p>
      </div>

    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <!-- <div class="card"> -->
          <img class="rounded mx-auto d-block" src="./assets/Icon.png" alt="">
          <div class="card-body text-center">
            <p class="card-text">
              Technology Constantly improve, to provide the best solution
            </p>
          </div>
        <!-- </div> -->
      </div>
      <div class="col">
        <!-- <div class="card"> -->
          <img class="rounded mx-auto d-block" src="./assets/Icon.png"  width="70" height="70" >
          <div class="card-body">
            <p class="card-text text-center">
                We don’t sell you a product. We sell you a solution
            </p>
          </div>
        <!-- </div> -->
      </div>
      <div class="col">
        <!-- <div class="card"> -->
          <img class="rounded mx-auto d-block" src="./assets/Icon.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text text-center">Speed and quality is our motto</p>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: Montserrat; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #FFFFFF; */
}





p.lead.Perusahaan-IT{
  color: #4D4D4F;
  font-weight: 380;
  /*
font-size: 20px;
line-height: 30px;

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em; */
}

nav.navbar.navbar-expand-lg.navbar-dark.static-top{
  background-color: #67C6EF;
}





.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      // object-fit: cover;
    }
  }
}








</style>

<style scoped>
  @import "css/carousel.css";
    /* @import "css/nicepage.css"; */
</style>



<script>
import Carousel from "./components/Carousel.vue";
import Slide from "./components/Slide.vue";

export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["qjual_1", "qjual_2", "qjual_3"];

    return { carouselSlides };
  },
};
</script>
