<template>
  <div>

<div id="base">
  <raheabrisham/>
  <kon-kur-jadid/>
  <konkur-ghadim/>

  <paye11/>
  <paye10/>


</div>
  </div>
</template>

<script>


  export default {
    name: "Courses",
    components: {

      Paye11: () => import("./courses/Paye10"),
      Paye10: () => import("./courses/Paye10"),
      KonkurGhadim: () => import("./courses/KonkurGhadim"),
      KonKurJadid: () => import("./courses/KonKurJadid"),
      Raheabrisham: () => import("./courses/RaheAbrisham")

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
#base{
  font-family: "B Homa";
}
</style>
