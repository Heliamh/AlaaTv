<template>
  <div id="main">

    <p class="subtitle" >پایه یازدهم</p>
    <div class="container-fluid" style="width: 90%">

      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">

        <div v-for="course in KJcourses" class="col-5" s>
          <div style="height: 350px;" class="card card-block card">

<a :href="course.url.web">
  <img src="" :data-src="course.photo" class="card-img-top lazy" style="width:300px ;height:200px" data-loaded="true" alt="...">

</a>

            <p> {{course.title}}</p>
          </div>
        </div>


      </div>
    </div>



  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "paye11" ,
    data(){
      return{
        KJcourses : []
      }
    },
    created() {

      axios.get('https://alaatv.com/api/v2/home').then(
        res => { this.KJcourses =res.data.data[4].sets}
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

  .scrolling-wrapper{
    overflow-x: auto;
  }

  body{
    background-color: black;
    color: #fff;
    font-family: 'system-ui';
  }

  h1{
    font-weight: 800;
    font-size: 3em;
  }

  .subtitle{
    font-size: 1.25em;
    opacity: 0.65;
    margin-left: 800px;
  }

  .card-block{
    height: 250px;
    background-color: #fff;
    border: none;
    background-position: center;
    background-size: cover;
    transition: all 0.2s ease-in-out !important;
    border-radius: 24px;

  }



  #main{
    margin-bottom: 70px;
  }

</style>
