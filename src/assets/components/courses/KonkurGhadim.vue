<template>

  <div
    class="row blockWraper a--owl-carousel-row konkoor1 a--content-carousel-1 dasboardLessons blockId-2 konkoor1 lazy-done"
    id="sectionId-konkoor1" a-lazyload="1" data-loaded="true">
    <div class="col">
  <div class="m-portlet a--owl-carousel-Wraper " id="owlCarousel_2" style="">
    <div id="sticky-wrapper11" class="sticky-wrapper" style="height: 45px;">
      <div class="m-portlet__head a--owl-carousel-head" style="">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title"><h3 class="m-portlet__head-text"><span class="blueSquare"></span><a
            href="https://alaatv.com/c?tags[0]=نظام_آموزشی_قدیم&amp;tags[1]=کنکور" class="m-link"> کنکور نظام قدیم </a>
          </h3></div>
        </div>
        <div class="m-portlet__head-tools"><a href="#"
                                              class="btn btn-outline-metal m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill m-btn--air btn-viewGrid"
                                              title="نمایش شبکه ای" data-owlcarousel-id="sectionId-konkoor1"><i
          class="fa fa-th"></i></a><a href="#"
                                      class="btn btn-outline-metal m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill m-btn--air btn-viewOwlCarousel"
                                      title="نمایش افقی" data-owlcarousel-id="sectionId-konkoor1"
                                      style="display: none;"><i class="fa fa-exchange-alt"></i></a></div>
      </div>
    </div>
    <div class="m-portlet__body m-portlet__body--no-padding a--owl-carousel-body">
      <div class="m-widget_head-owlcarousel-items ScrollCarousel a--owl-carousel-type-2 carousel_block_2">
        <div class="ScrollCarousel-Items">
          <div v-for="cource in KGcourses" class="item carousel a--block-item a--block-type-set w-44333211"
               data-owlcarousel-id="sectionId-konkoor1">
            <div class="a--block-imageWrapper">
              <div class="a--block-detailesWrapper">
                <div class="a--block-set-count"><span class="a--block-set-count-number">112</span><br><span
                  class="a--block-set-count-title">محتوا</span><br><a :href="cource.url.web"
                                                                      class="a--block-set-count-icon">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                       class="style-scope yt-icon">
                    <path
                      d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"
                      class="style-scope yt-icon"></path>
                  </svg>
                </a></div>
                <div class="a--block-set-author-pic lazy"><img
                  :src="cource.author.photo"
                  class="m-widget19__img lazy-image lazy-done lazy"
                  :data-src="cource.author.photo"
                  :alt="cource.author.last_name" width="40" height="40" a-lazyload="1" data-loaded="true"></div>
              </div>
              <a :href="cource.url.web" class="a--block-imageWrapper-image"><img
                :src="cource.photo"
                :data-src="cource.photo"
                :alt="cource.title" class="a--block-image lazy-image lazy-done lazy" width="453" height="254"
                a-lazyload="1" data-loaded="true"></a></div>
            <div class="a--block-infoWrapper">
              <div class="a--block-titleWrapper"><a :href="cource.url.web" class="m-link"><span
                class="m-badge m-badge--info m-badge--dot"></span> {{cource.title}}</a></div>
            </div>
          </div>

          <div class="item carousel a--block-item a--block-item-showMoreItem w-44333211"
               data-owlcarousel-id="sectionId-konkoor1"><a
            href="https://alaatv.com/c?tags[0]=نظام_آموزشی_قدیم&amp;tags[1]=کنکور">
            <button type="button" class="btn m-btn--air btn-outline-accent m-btn m-btn--custom m-btn--outline-2x"> نمایش
              بیشتر از کنکور نظام قدیم
            </button>
          </a></div>
        </div>
      </div>
    </div>
  </div>

    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: "konkur-ghadim",
    data() {
      return {
        KGcourses: []
      }
    },
    created() {

      axios.get('https://alaatv.com/api/v2/home').then(
        res => {
          this.KGcourses = res.data.data[3].sets
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

  .scrolling-wrapper {
    overflow-x: auto;
  }

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
