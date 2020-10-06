<template>
<div>




  <div style="font-family: fa-solid-900"
    class="row blockWraper a--owl-carousel-row ابریشم a--content-carousel-1 dasboardLessons blockId-164 ابریشم blockWraper-hasProduct lazy-done"
    id="sectionId-ابریشم" a-lazyload="1" data-loaded="true">
    <div class="col">

      <div class="col">

        <div class="m-portlet a--owl-carousel-Wraper " id="owlCarousel_164" style="">


          <div id="sticky-wrapper" class="sticky-wrapper" style="height: 45px;">
            <div class="m-portlet__head a--owl-carousel-head" style="">
              <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title"><h3 class="m-portlet__head-text"><span class="redSquare"></span><a
                  href="https://alaatv.com/landing/16" class="m-link"> راه ابریشم </a></h3></div>
              </div>
              <div class="m-portlet__head-tools"><a href="#" style="float: left"
                                                    class="btn btn-outline-metal m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill m-btn--air btn-viewGrid"
                                                    title="نمایش شبکه ای" data-owlcarousel-id="sectionId-ابریشم"><i
                class="fa fa-th"></i></a><a href="#"
                                            class="btn btn-outline-metal m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill m-btn--air btn-viewOwlCarousel"
                                            title="نمایش افقی" data-owlcarousel-id="sectionId-ابریشم"
                                            style="display: none;"><i class="fa fa-exchange-alt"></i></a></div>
            </div>
          </div>
          <div class="m-portlet__body m-portlet__body--no-padding a--owl-carousel-body">
            <div class="m-widget_head-owlcarousel-items ScrollCarousel a--owl-carousel-type-2 carousel_block_164">
              <div class="ScrollCarousel-Items">
                <div v-for="course in RAcourses" class="item carousel a--block-item a--block-type-product w-55443211"
                     data-gtm-eec-product-id="441"
                     :data-gtm-eec-product-name="course.title" data-gtm-eec-product-price="620000.00"
                     data-gtm-eec-product-brand="آلاء" data-gtm-eec-product-category="VIP" data-gtm-eec-product-variant="-"
                     data-gtm-eec-product-quantity="-" data-gtm-eec-product-position="0"
                     data-gtm-eec-product-list="راه ابریشم"
                     data-owlcarousel-id="sectionId-ابریشم">
                  <div class="a--block-imageWrapper"><a :href="course.url.web"
                                                        class="a--block-imageWrapper-image a--gtm-eec-product a--gtm-eec-product-click d-block lazy-done"
                                                        data-gtm-eec-product-id="441"
                                                        :data-gtm-eec-product-name="course.title"
                                                        :data-gtm-eec-product-price="course.price"
                                                        data-gtm-eec-product-brand="آلاء"
                                                        data-gtm-eec-product-category="VIP" data-gtm-eec-product-variant="-"
                                                        data-gtm-eec-product-quantity="-" data-gtm-eec-product-position="0"
                                                        data-gtm-eec-product-list="راه ابریشم" a-lazyload="1"
                                                        data-loaded="true"><img
                    :src="course.photo"
                    :data-src="course.photo"
                    :alt="course.title" class="a--block-image lazy-image lazy-done lazy" width="400" height="400"
                    a-lazyload="1" data-loaded="true"></a></div>
                  <div class="a--block-infoWrapper">
                    <div class="a--block-titleWrapper"><a :href="course.url.web"
                                                          class="m-link a--owl-carousel-type-2-item-subtitle a--gtm-eec-product-click"
                                                          data-gtm-eec-product-id="441"
                                                          :data-gtm-eec-product-name="course.title"
                                                          :data-gtm-eec-product-price="course.price"
                                                          data-gtm-eec-product-brand="آلاء"
                                                          data-gtm-eec-product-category="VIP"
                                                          data-gtm-eec-product-variant="-" data-gtm-eec-product-quantity="-"
                                                          data-gtm-eec-product-position="0"
                                                          data-gtm-eec-product-list="راه ابریشم"><span
                      class="m-badge m-badge--danger m-badge--dot"></span>{{course.title}}</a></div>
                    <div class="a--block-detailesWrapper"><span
                      class="m-badge m-badge--danger m-badge--wide m-badge--rounded a--productPrice">    {{course.price.base}}  تومان </span>
                    </div>
                  </div>
                </div>


                <div class="item carousel a--block-item a--block-item-showMoreItem w-44333211"
                     data-owlcarousel-id="sectionId-ابریشم"><a href="https://alaatv.com/landing/16">
                  <button type="button" class="btn m-btn--air btn-outline-accent m-btn m-btn--custom m-btn--outline-2x"> نمایش
                    بیشتر از راه ابریشم
                  </button>
                </a></div>
              </div>
            </div>
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
    font-family: "B Jadid";
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
