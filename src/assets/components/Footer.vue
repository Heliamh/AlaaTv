<template>
  <footer class="m-grid__item m-footer ">
    <div class="m-container m-container--fluid m-container--full-height m-page__container">
      <ul class="m-footer__nav m-nav m-nav--inline alaaNamad d-block">
        <li class="m-nav__item"><a data-toggle="modal" data-target="#aboutAlaaModal"><img
          src="https://cdn.alaatv.com/upload/footer-alaaLogo.png?w=40&amp;h=51"
          data-src="https://cdn.alaatv.com/upload/footer-alaaLogo.png" class="lazy-image lazy-done lazy" alt="آلاء"
          data-name="alaa" width="36" height="46" data-toggle="m-tooltip" title="" data-placement="top"
          data-original-title="آلاء" a-lazyload="1" data-loaded="true"></a></li>
        <li class="m-nav__item"><a data-toggle="modal" data-target="#aboutSharifHighschoolModal"><img
          src="https://cdn.alaatv.com/upload/footer-sharifLogo.png?w=40&amp;h=37"
          data-src="https://cdn.alaatv.com/upload/footer-sharifLogo.png" class="lazy-image lazy-done lazy"
          alt="دبیرستان دانشگاه شریف آلاء" data-name="sharif-school" width="49" height="46" data-toggle="m-tooltip"
          title="" data-placement="top" data-original-title="دبیرستان غیر دولتی دانشگاه صنعتی شریف" a-lazyload="1"
          data-loaded="true"></a></li>
        <li class="m-nav__item"><a
          onclick="window.open(&quot;https://trustseal.enamad.ir/?id=125806&amp;Code=MIc5m5QgNzwT4U7FmBLE&quot;, &quot;Popup&quot;,&quot;toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot;)"><img
          class="lazy-image lazy-done lazy" src="https://cdn.alaatv.com/upload/enamad.png?w=40&amp;h=32"
          data-src="https://cdn.alaatv.com/upload/enamad.png" alt="enamad.ir" style="cursor:pointer" data-name="enamad"
          width="56" height="46" data-toggle="m-tooltip" title="" data-placement="top"
          data-original-title="نماد اعتماد الکترونیکی" a-lazyload="1" data-loaded="true"></a></li>
        <li class="m-nav__item" data-toggle="m-tooltip" title="" data-placement="top"
            data-original-title="نشان ملی ثبت رسانه های دیجیتال"><img class="lazy-image lazy-done lazy"
                                                                      id="jxlzwlaofukznbqejzpesizp"
                                                                      style="cursor:pointer"
                                                                      onclick="window.open(&quot;https://logo.samandehi.ir/Verify.aspx?id=146279&amp;p=rfthaodsgvkauiwkjyoepfvl&quot;, &quot;Popup&quot;,&quot;toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30&quot;)"
                                                                      alt="logo-samandehi"
                                                                      src="https://cdn.alaatv.com/upload/samandehi.png?w=40&amp;h=41"
                                                                      data-src="https://cdn.alaatv.com/upload/samandehi.png"
                                                                      width="44" height="46" a-lazyload="1"
                                                                      data-loaded="true"></li>
      </ul>
      <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first d-block">
        <ul class="m-footer__nav m-nav m-nav--inline m--pull-right m--margin-top-10 a--full-width text-center">
          <li class="m-nav__item"><a href="https://alaatv.com/faq" class="m-nav__link" data-toggle="m-tooltip" title=""
                                     data-placement="top" data-original-title="سؤالات متداول"><i
            class="m-menu__link-icon fa fa-question-circle"></i></a></li>
          <li class="m-nav__item"><a href="https://alaatv.com/rules" class="m-nav__link" data-toggle="m-tooltip"
                                     title="" data-placement="top" data-original-title="قوانین سایت آلاء"><i
            class="m-menu__link-icon fa fa-gavel"></i></a></li>
          <li class="m-nav__item m-nav__item"><a href="https://alaatv.com/contactUs" class="m-nav__link"
                                                 data-toggle="m-tooltip" title="" data-placement="top"
                                                 data-original-title="تماس با ما"><i
            class="m-menu__link-icon fa fa-phone-volume"></i></a></li>
          <li class="m-nav__item m-nav__item"><a href="https://forum.alaatv.com" class="m-nav__link"
                                                 data-toggle="m-tooltip" title="" data-placement="top"
                                                 data-original-title="انجمن کنکور و دانش آموزی آلاء"><i
            class="m-menu__link-icon fab fa-hornbill"></i></a></li>
          <li class="m-nav__item"><a target="_blank" href="tg://resolve?domain=alaa_sanatisharif" class="m-nav__link"
                                     data-toggle="m-tooltip" title="" data-placement="top"
                                     data-original-title="تلگرام آلاء"><i class="m-menu__link-icon fab fa-telegram"></i></a>
          </li>
          <li class="m-nav__item"><a target="_blank" href="https://www.instagram.com/alaa_sanatisharif"
                                     class="m-nav__link" data-toggle="m-tooltip" title="" data-placement="top"
                                     data-original-title="اینستاگرام آلاء"><i
            class="m-menu__link-icon fab fa-instagram"></i></a></li>
        </ul>
        <div class="text-center"> 2013 © آموزش مجازی آلاء</div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
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

</style>
