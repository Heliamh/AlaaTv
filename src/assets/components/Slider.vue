<template>

    <div class="slider ">
      <div class="image"><a href="https://ayeno.org/login"><img  src="../../../style/images/ayeno_slide_20200922165134.jpg" ></a></div>
      <div class="image"><img src="../../../style/images/madrese_online_slide_20190902113043.jpg" ></div>

    </div>


</template>

<script>


  export default {
    name: "Slider",
    mounted() {
      $('.slider').bxSlider({

        auto: true,
        pager: true,
        slideWidth: 1000,


        mode: 'fade',


        speed: 1000
      });
    },


  }
</script>

<style scoped>
  .image {
    margin-left: 20px;

  }

</style>
