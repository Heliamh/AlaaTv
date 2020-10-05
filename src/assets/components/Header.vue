<template>

  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="myheader">

        <div class="row" style="float: right;">

          <a href="https://alaatv.com">
            <img alt="لوگوی سایت آلاء" style="margin-top: 20px;margin-right: 40px"
                 src="https://cdn.alaatv.com/upload/logo_20190508105212_20190512113140.png"
                 width="135" height="22">
          </a>
          <div  @click="changeNav">
            <i class="fa fa-bars" style="width: 2em ; height: 2em; margin-right: 25px; margin-top: 15px;"></i>

          </div>

        </div>

        <div style="float:left;margin-top: 18px;margin-left: 8px" @click="loginchange">
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
          </svg>
        </div>
        <div v-if="login===true">
          <div class="modal show" tabindex="-1" id="AlaaAjaxLoginModal" style="display: block; padding-right: 17px;"
               aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header" style="float: right">
                  <a href="https://alaatv.com">
                    <img class="modal-alaaLogo lazy-image lazy-done"
                         src="https://cdn.alaatv.com/upload/footer-alaaLogo.png?w=30&amp;h=40"
                         data-src="https://cdn.alaatv.com/upload/footer-alaaLogo.png" width="30" height="40"
                         data-toggle="m-tooltip" title="آلاء" data-placement="top" a-lazyload="1" data-loaded="true">
                    <h5 class="modal-title">ورود به آلاء</h5>
                  </a>
                  <div>
                    <svg @click="loginchange" style="color: #171a1d" width="3em" height="3em" viewBox="0 0 16 16"
                         class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                </div>
                <div class="modal-body">
                  با کد ملی ایران نیازی به ثبت نام نیست. <br> <br>
                  <form class="m-login__form m-form" action="https://alaatv.com/login" method="post">
                    <div class="form-group m-form__group">
                      <label>شماره موبایل: </label>
                      <div class="m-input-icon m-input-icon--left m-input-icon--right">
                        <input type="text" class="form-control m-input m-input--air" placeholder="09---------"
                               name="mobile" autocomplete="off">
                        <div class="form-control-feedback"></div>
                        <span class="m-input-icon__icon m-input-icon__icon--left"><span><i class="fa fa-mobile-alt"></i></span></span>
                      </div>
                    </div>
                    <div class="form-group m-form__group">
                      <label>کد ملی: </label>
                      <div class="m-input-icon m-input-icon--left m-input-icon--right">
                        <input type="password" class="form-control m-input m-input--air" placeholder="----------"
                               name="password">
                        <div class="form-control-feedback"></div>
                        <span class="m-input-icon__icon m-input-icon__icon--left"><span><i
                          class="fa fa-lock"></i></span></span>
                      </div>
                    </div>
                  </form>
                  <div class="AjaxLoginMessage"></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-lg m-btn--air btn-accent m-btn m-btn--custom AjaxLoginSubmit">
                    ورود
                  </button>
                  <button type="button" class="btn btn-secondary d-none" data-dismiss="modal">انصراف</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="Nav===true" class="myNavbar " style="z-index: 1">
        <ul class="nav flex-column">
          <li class="myNavItem nav-item">


            <a class=" nav-link " style="color: white; " href="#">
              صفحه اصلی
              <svg width="1em" style="" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill"
                   fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              </svg>
            </a>

          </li>
          <li class="myNavItem nav-item">
            <a class="nav-link" style="color: white" href="#"> محصولات آموزشی
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-lines-fill" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </a>
          </li>
          <li class="myNavItem nav-item">

            <a class="nav-link" style="color: white" href="#"> فیلم های پایه و کنکور آلاء
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-film" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"/>
              </svg>
            </a>
          </li>
          <li class="myNavItem nav-item">
            <a class="nav-link" style="color: white" href="#">همایش کنکوری آلاء
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-video-fill" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
              </svg>
            </a>


          <li class="myNavItem nav-item">
            <a class="nav-link" style="color: white" href="#">کمک مالی به آلاء
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
                <path
                  d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg>
            </a>

          <li class="myNavItem nav-item">
            <a class="nav-link" style="color: white" href="#">انجمن کنکور و دانش آموزی آلاء
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bounding-box-circles" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </a>

          <li class="myNavItem nav-item">

            <a class="nav-link" style="color: white" href="#">سوالات متداول
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-question-circle-fill" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
              </svg>
            </a>

          </li>
        </ul>
      </div>

    </scroll-fixed-header>

  </div>


</template>

<script>


  export default {
    name: "header",

    data() {
      return {
        fixed: false,
        Nav: false,
        NavIcon: false,
        login: false,

      };

    },
    methods: {
      changeNav() {
        this.Nav = !this.Nav


      },


      loginchange() {
        this.login = !this.login


      }
    },


  }


</script>

<style scoped>
  .myheader {
    background-color: #171a1d;
    height: 60px;
    text-align: right;
    color: white;


    font-family: "B Homa";
  }

  .NavBut {
    margin-left: 30px;
    margin-right: 10px;
  }

  .myNavbar {
    margin-top: 10px;
    background-color: orange;
    width: 7.5cm;
    height: 14cm;
    position: fixed;
    right: 0;
font-family: "B Homa";
    text-align: right;

  }


  .myNavItem {
    margin: 0.2cm;
  }


</style>
