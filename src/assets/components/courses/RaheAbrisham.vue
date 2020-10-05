<template>
  <div id="main">

    <p class="subtitle">راه ابریشم</p>


    <div class="container-fluid" style="width: 90%">

      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 rtl">
        <div v-for="course in RAcourses" class="col-4">
          <a :href="course.url">
            <div style="height: 300px;" class="card card-block card lazy">


              <img src="" :data-src="course.photo" class="card-img-top lazy" style="width:280px ;height:280px;margin-bottom: 5px"
                   data-loaded="true" alt="...">


            </div>

          </a>
          <p> {{course.title}}</p>
          <a href="#" class="btn btn-primary" style="width: 200px"><span> تومان</span> {{course.price.base}} </a>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';


  export default {
    name: "raheabrisham",

    data() {
      return {
        RAcourses: []
      }
    },
    created() {

      axios.get('https://alaatv.com/api/v2/home').then(
        res => {
          this.RAcourses = res.data.data[1].products
        }
      ).catch(
        err => console.log(err)
      )
    },
    mounted() {
      window.scrollTo(0, 0);
      window.addEventListener("scroll", this.lazyLoad);
    },
    methods: {
      lazyLoad: function () {
        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        let active = false;
        if (active === false) {
          active = true;
          setTimeout(() => {
            lazyImages.forEach(function (lazyImage) {
              if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy");
                lazyImages = lazyImages.filter(function (image) {
                  return image !== lazyImage;
                });

                if (lazyImages.length === 0) {
                  window.removeEventListener("scroll", this.lazyLoad);
                }
              }
            });
            active = false;
          }, 200)

        }
      },
    }


  }
</script>

<style scoped>


  body {
    background-color: black;
    color: #fff;
    font-family: 'system-ui';
  }

  h1 {
    font-weight: 800;
    font-size: 3em;
  }

  .subtitle {
    font-size: 1.25em;
    opacity: 0.65;
    margin-left: 800px;
  }

  .scrolling-wrapper {
    overflow-x: auto;
    scrollbar-arrow-color: white;
  }

  .card-block {
    height: 250px;
    background-color: #fff;
    border: none;
    background-position: center;
    background-size: cover;
    transition: all 0.2s ease-in-out !important;
    border-radius: 24px;

  }

  #main {
    margin-bottom: 70px;
  }
</style>
