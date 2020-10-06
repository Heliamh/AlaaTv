function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=Array.prototype.slice,i=Array.prototype.splice,o={topSpacing:0,bottomSpacing:0,scrollDirectionSensitive:!1,unstickUnder:!1,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,container:"",hidePosition:{element:"",topSpace:0},getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"auto"},n=e(window),r=e(document),s=[],l=n.height(),a=function(){var t=e(this).scrollTop(),i="down";i=t>u?"down":"up",u=t;for(var o=n.scrollTop(),a=r.height(),c=a-l,d=o>c?c-o:0,h=0,w=s.length;h<w;h++){var m=s[h],y=m.stickyWrapper.offset().top,g=y-m.topSpacing-d,v=!1,C=!1;if(!1!==m.unstickUnder&&n.width()<m.unstickUnder)m.stickyElement.css({width:"",position:"",top:"","z-index":""}),m.stickyElement.parent().css("height","auto");else{var O,k;if(""!==m.container&&e(m.container).length>0)v=e(m.container).offset().top+e(m.container).height()-2*m.stickyWrapper.height();if(m.stickyWrapper.css("height",m.stickyElement.outerHeight()),""!==m.hidePosition.element&&e(m.hidePosition.element).length>0)C=e(m.hidePosition.element).offset().top-m.hidePosition.topSpace;if(m.scrollDirectionSensitive){var b=m.stickyElement.height(),T=o+l,S=(m.bottomSpacing,p-o+y),E=l-b;if(i!==f&&(f=i,p=m.stickyElement.offset().top),m.getWidthFrom?k=e(m.getWidthFrom).width()||null:m.widthFromWrapper&&(k=m.stickyWrapper.width()),null==k&&(k=m.stickyElement.width()),"up"===i)(O=S)<y?m.stickyElement.css("width",k).css("position","fixed").css("top",O).css("z-index",m.zIndex):m.stickyElement.css("width",k).css("position","fixed").css("top",y).css("z-index",m.zIndex);else if("down"===i){var W=m.stickyElement.offset().top;m.stickyElement.position().top;l<b&&(W+b>T+1&&T<e(document).height()-y?m.stickyElement.css("position","fixed").css("top",S-y).css("bottom","").css("z-index",""):m.stickyElement.css("position","fixed").css("top",E-m.bottomSpacing).css("bottom","").css("z-index",""))}m.stickyElement.parent().addClass(m.className),null===m.currentTop?m.stickyElement.trigger("sticky-start",[m]):m.stickyElement.trigger("sticky-update",[m])}else if(o<=g)null!==m.currentTop&&(m.stickyElement.css({width:"",position:"",top:"","z-index":""}),m.stickyElement.parent().removeClass(m.className),m.stickyElement.trigger("sticky-end",[m]),m.currentTop=null);else{(O=a-m.stickyElement.outerHeight()-m.topSpacing-m.bottomSpacing-o-d)<0?O+=m.topSpacing:O=m.topSpacing,m.currentTop!==O&&(m.getWidthFrom?k=e(m.getWidthFrom).width()||null:m.widthFromWrapper&&(k=m.stickyWrapper.width()),null==k&&(k=m.stickyElement.width()),m.stickyElement.css("width",k).css("position","fixed").css("top",O).css("z-index",m.zIndex),m.stickyElement.parent().addClass(m.className),null===m.currentTop?m.stickyElement.trigger("sticky-start",[m]):m.stickyElement.trigger("sticky-update",[m]),m.currentTop===m.topSpacing&&m.currentTop>O||null===m.currentTop&&O<m.topSpacing?m.stickyElement.trigger("sticky-bottom-reached",[m]):null!==m.currentTop&&O===m.topSpacing&&m.currentTop<O&&m.stickyElement.trigger("sticky-bottom-unreached",[m]),m.currentTop=O);var L=m.stickyWrapper.parent();m.stickyElement.offset().top+m.stickyElement.outerHeight()>=L.offset().top+L.outerHeight()&&m.stickyElement.offset().top<=m.topSpacing||!1!==v&&o>v||!1!==C&&o>=C?(e(m.container).css("position","relative"),m.stickyElement.css({position:"absolute",top:"",bottom:"0","z-index":m.zIndex})):(e(m.container).css("position",""),m.stickyElement.css({position:"fixed",top:O,bottom:"","z-index":m.zIndex}))}}}},c=function(){l=n.height();for(var t=0,i=s.length;t<i;t++){var o=s[t],r=null;!1!==o.unstickUnder&&n.width()<o.unstickUnder?(o.stickyElement.css({width:"",position:"",top:"","z-index":""}),o.stickyElement.parent().css("height","auto")):(o.getWidthFrom?o.responsiveWidth&&(r=e(o.getWidthFrom).width()):o.widthFromWrapper&&(r=o.stickyWrapper.width()),null!=r&&o.stickyElement.css("width",r))}},d={init:function(t){var i=e.extend({},o,t);return i,this.each(function(){for(var t=e(this),n=t.attr("id"),r=n?n+"-"+o.wrapperClassName:o.wrapperClassName;null!==document.getElementById(r);)r+="1";var l=e("<div></div>").attr("id",r).addClass(i.wrapperClassName);t.wrapAll(l);var a=t.parent();i.center&&a.css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===t.css("float")&&t.css({float:"none"}).parent().css({float:"right"}),i.stickyElement=t,i.stickyWrapper=a,i.currentTop=null,s.push(i),d.setWrapperHeight(this),d.setupChangeListeners(this)})},setWrapperHeight:function(t){var i=e(t),o=i.parent();o&&o.css("height",i.outerHeight())},setupChangeListeners:function(e){window.MutationObserver?new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&d.setWrapperHeight(e)}).observe(e,{subtree:!0,childList:!0}):(e.addEventListener("DOMNodeInserted",function(){d.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){d.setWrapperHeight(e)},!1))},update:a,unstick:function(t){return this.each(function(){for(var t=e(this),o=-1,n=s.length;n-- >0;)s[n].stickyElement.get(0)===this&&(i.call(s,n,1),o=n);-1!==o&&(t.unwrap(),t.css({width:"",position:"",top:"",float:"","z-index":""}))})}},u=0,p=0,f="down";window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",c,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",c)),e.fn.sticky=function(i){return d[i]?d[i].apply(this,t.call(arguments,1)):"object"!==_typeof(i)&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):d.init.apply(this,arguments)},e.fn.unstick=function(i){return d[i]?d[i].apply(this,t.call(arguments,1)):"object"!==_typeof(i)&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):d.unstick.apply(this,arguments)},e.fn.update=function(i){return d[i]?d[i].apply(this,t.call(arguments,1)):"object"!==_typeof(i)&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):d.update.apply(this,arguments)},e(function(){setTimeout(a,0)})});var ScrollCarousel=function(){var e=[];function t(t){for(var n=t.length,r=0;r<n;r++)e[r]={isDown:!1,startX:null,scrollLeft:null},i(t[r],e[r]),t[r].onscroll=function(){o($(this).parents(".ScrollCarousel"))};$(document).on("click",".ScrollCarousel .ScrollCarousel-previous",function(){l($(this).parents(".ScrollCarousel"),"right")}),$(document).on("click",".ScrollCarousel .ScrollCarousel-next",function(){l($(this).parents(".ScrollCarousel"),"left")})}function i(e,t){!function(e,t){e.addEventListener("mousedown",function(i){t.isDown=!0,e.classList.add("active"),t.startX=i.pageX-e.offsetLeft,t.scrollLeft=e.scrollLeft})}(e,t),function(e,t){e.addEventListener("mouseleave",function(i){t.isDown=!1,e.classList.remove("active")})}(e,t),function(e,t){e.addEventListener("mouseup",function(i){t.isDown=!1,e.classList.remove("active")})}(e,t),function(e,t){e.addEventListener("mousemove",function(i){if(null==t||t.isDown){i.preventDefault();var o=i.pageX-e.offsetLeft,n=3*(o-t.startX);e.scrollLeft=t.scrollLeft-n}})}(e,t)}function o(e){e.each(function(){var e=s($(this)),t=e.length,i=e[0],o=e[t-1],l=a(i),c=a(o);n(l)?$(this).find(".ScrollCarousel-previous").fadeOut():$(this).find(".ScrollCarousel-previous").fadeIn(),r(c)?$(this).find(".ScrollCarousel-next").fadeOut():$(this).find(".ScrollCarousel-next").fadeIn()})}function n(e){return!1===e||e.pltrp===e.thisWidthWithMargin}function r(e){var t=e.thisPositionLeft+e.thisMarginLeft;return!(!1!==e&&t<0&&Math.abs(e.thisPositionLeft)-e.thisMarginLeft>1)&&(!1===e||t>0||Math.abs(e.thisPositionLeft)-e.thisMarginLeft<=1||void 0)}function s(e){return e.find(".item:visible").toArray()}function l(e,t){p(e,t);for(var i=s(e),o=i.length,n=0;n<o;n++){var r=a(i[n]),l=!1;if("right"===t&&d(r)?l=r.newScrollPositionToRight:"left"===t&&c(r)&&(l=r.newScrollPositionToLeft),!1!==l){u(e,l);break}}}function a(e){if(void 0===e)return!1;var t=$(e),i=t.parent(),o=parseInt(t.width()),n=parseFloat(t.css("marginLeft")),r=t.position().left,s=i.width(),l=Math.round(1e3*(s-r))/1e3;return{this:t,thisWidth:o,thisPositionLeft:r,thisMarginLeft:n,thisWidthWithMargin:Math.round(1e3*t.outerWidth(!0))/1e3,pltrp:l,newScrollPositionToRight:-1*(l-i.scrollLeft()-o-n),newScrollPositionToLeft:-1*Math.ceil(l-i.scrollLeft())}}function c(e){return e.pltrp>=1&&e.pltrp<=e.thisWidthWithMargin}function d(e){return e.pltrp>=-1&&e.pltrp<=e.thisWidth}function u(e,t){e.each(function(){$(this).find(".ScrollCarousel-Items").animate({scrollLeft:t},200)})}function p(e,t){e.attr("direction",t)}function f(){var e=$(this).attr("data-tooltip-content");$(this).parents(".ScrollCarousel").append('<div class="ScrollCarousel-tooltip">'+e+"</div>");var t,i,o=w($(this).parents(".ScrollCarousel"));t=o,i=$(this),function(e,t){var i=e.width(),o=t.width(),n=t.outerWidth(!0)-t.innerWidth(),r=t.position().left,s=function(e,t,i,o){var n=o;return e>t&&(n+=(e-t)/2),i+n}(o,i,r,n);e.css({"max-width":o,left:s})}(t,i),function(e){var t=-1*(e.outerHeight()+10);e.css({top:t})}(t)}function h(){w($(this).parents(".ScrollCarousel")).remove()}function w(e){return e.find(".ScrollCarousel-tooltip")}return{init:function(){t(document.getElementsByClassName("ScrollCarousel-Items"))},addSwipeIcons:function(e){!function(e){e.append('<div class="ScrollCarousel-next"><i class="fa fa-chevron-left"></i></div>'),function(e){e.append('<div class="ScrollCarousel-previous"><i class="fa fa-chevron-right"></i></div>')}(e),o(e)}(e)},checkSwipIcons:function(e){o(e)},animateScroll:function(e){!function(e){var t=0,i=[];e.each(function(){var e=s($(this)),o=e.length,l=e[0],c=e[o-1];i[t]="left";var d=$(this),u=0;setInterval(function(){var e,t=a(l),i=a(c),o=void 0!==(e=d).attr("direction")?e.attr("direction"):"left";"right"===o&&n(t)?(p(d,"left"),u-=1):"right"===o&&(u+=1),"left"===o&&r(i)?(p(d,"right"),u+=1):"left"===o&&(u-=1),d.find(".ScrollCarousel-Items").animate({scrollLeft:u},0)},1),t++})}(e)},addTooltip:function(e){!function(e){e.find(".ScrollCarousel-Items .item").hover(f,h)}(e)}}}();ScrollCarousel.init(),function(e){e.fn.OwlCarouselType2=function(t){return e.fn.OwlCarouselType2.owlCarouselOptions=e.extend(!0,{},e.fn.OwlCarouselType2.owlCarouseldefaultOptions,t),this.each(function(){var t=e(this);e.fn.OwlCarouselType2.carouselElement=t;var i=t.find(".a--block-item").length;e.fn.OwlCarouselType2.showAlaaOwlCarouselItemDetail(),t.find(".a--block-item").attr("data-owlcarousel-id",t.attr("id")),t.find(".btn-viewGrid").attr("data-owlcarousel-id",t.attr("id")),t.find(".btn-viewOwlCarousel").attr("data-owlcarousel-id",t.attr("id")).fadeOut(0),t.find(".a--owl-carousel-hide-detailes").attr("data-owlcarousel-id",t.attr("id")),t.find(".a--owl-carousel-show-detailes").attr("data-owlcarousel-id",t.attr("id")),e.fn.OwlCarouselType2.addEvents(t),i<e.fn.OwlCarouselType2.owlCarouselOptions.childCountHideOwlCarousel?(e.fn.OwlCarouselType2.switchToGridView(t),t.find(".btn-viewOwlCarousel").fadeOut()):"grid"===e.fn.OwlCarouselType2.owlCarouselOptions.defaultView&&e.fn.OwlCarouselType2.switchToGridView(t)})},e.fn.OwlCarouselType2.addEvents=function(t){e(t).on("click",".a--block-item",function(){var t=e("#"+e(this).attr("data-owlcarousel-id")),i=e(this).data("position");t.find(".a--owl-carousel-type-2").trigger("to.owl.a--block-item",i)}),e(t).on("click",".btn-viewGrid",function(t){t.preventDefault();var i=e("#"+e(this).attr("data-owlcarousel-id"));e.fn.OwlCarouselType2.switchToGridView(i)}),e(t).on("click",".btn-viewOwlCarousel",function(t){t.preventDefault();var i=e("#"+e(this).attr("data-owlcarousel-id"));e.fn.OwlCarouselType2.switchToCarousel(i)}),e(t).on("click",".a--owl-carousel-hide-detailes",function(){var t=e("#"+e(this).attr("data-owlcarousel-id"));t.find(".a--owl-carousel-slide-detailes").slideUp(),t.find(".subCategoryWarper").fadeOut(),e.fn.OwlCarouselType2.getGridViewWarper(t).find(" > div").css({"margin-bottom":"0px"})}),e(t).on("click",".a--owl-carousel-gridViewWarper .a--owl-carousel-show-detailes",function(){var t=e("#"+e(this).attr("data-owlcarousel-id"));e.fn.OwlCarouselType2.getGridViewWarper(t).find(" > div").css({"margin-bottom":"0px"});var i=e(this).parents("#"+t.attr("id")+" .a--block-item").data("position"),o="a--owl-carousel-slide-iteDetail-"+i;e.when(t.find(".subCategoryWarper").fadeOut(0)).done(function(){var n=t.find(".a--owl-carousel-slide-detailes"),r=t.find("."+o);e.when(n.slideUp(0)).done(function(){r.length>0&&(n.fadeIn(),r.slideDown());var o=t.find(".a--owl-carousel-slide-detailes"),s=e.fn.OwlCarouselType2.getGridViewWarper(t).find('.a--block-item[data-position="'+i+'"]').parent();s.css({"margin-bottom":parseInt(o.outerHeight())+50+"px"});var l=parseInt(s[0].offsetTop)+parseInt(s.outerHeight())+20,a=parseInt(s.position().left)+parseInt(s.outerWidth())/2-20;o.css({display:"block",position:"absolute",width:"100%","z-index":"1",top:l+"px"}),0===t.find(".detailesWarperPointerStyle").length&&o.append('<div class="detailesWarperPointerStyle"></div>'),t.find(".detailesWarperPointerStyle").html("<style>.a--owl-carousel-slide-detailes::before { right: auto; left: "+a+"px !important; }</style>")})})})},e.fn.OwlCarouselType2.switchToCarousel=function(t){e.fn.OwlCarouselType2.getGridViewWarper(t).html(""),t.find(".btn-viewGrid").fadeIn(0),t.find(".btn-viewOwlCarousel").fadeOut(0),t.find(".m-portlet.a--owl-carousel-slide-detailes").css({display:"block",position:"relative",width:"auto",top:"0"}),t.find(".subCategoryWarper").fadeOut(0),t.find(".a--owl-carousel-slide-detailes").slideUp(0),t.find(".detailesWarperPointerStyle").html(""),e.fn.OwlCarouselType2.getGridViewWarper(t).fadeOut(0),t.find(".a--owl-carousel-type-2").fadeIn(),e.fn.OwlCarouselType2.showAlaaOwlCarouselItemDetail()},e.fn.OwlCarouselType2.switchToGridView=function(t){e.fn.OwlCarouselType2.getGridViewWarper(t).length>0?e.fn.OwlCarouselType2.getGridViewWarper(t).css("display","flex").hide().fadeIn():0===e.fn.OwlCarouselType2.getGridViewWarper(t).length&&t.find(".a--owl-carousel-type-2").after('<div class="m-widget_head-owlcarousel-items a--owl-carousel-type-2 owl-carousel row a--owl-carousel-gridViewWarper"></div>'),e.fn.OwlCarouselType2.getGridViewWarper(t).fadeOut(0),t.find(".subCategoryWarper").fadeOut(0),t.find(".a--owl-carousel-slide-detailes").slideUp(0),t.find(".btn-viewGrid").css("cssText","display: none !important;"),t.find(".btn-viewOwlCarousel").fadeIn(0),e.fn.OwlCarouselType2.getGridViewWarper(t).html(""),t.find(".a--block-item").each(function(){e.fn.OwlCarouselType2.getGridViewWarper(t).append('<div class="'+e.fn.OwlCarouselType2.owlCarouselOptions.grid.columnClass+'">'+e(this)[0].outerHTML+"</div>")}),t.find(".a--owl-carousel-type-2").fadeOut(),e.fn.OwlCarouselType2.getGridViewWarper(t).css("display","flex").hide().fadeIn(),e.fn.OwlCarouselType2.owlCarouselOptions.grid.btnSwfitchEvent()},e.fn.OwlCarouselType2.getGridViewWarper=function(e){return e.find(".a--owl-carousel-gridViewWarper")},e.fn.OwlCarouselType2.showAlaaOwlCarouselItemDetail=function(t){var i="";i=void 0!==t?e(t.target).find(".a--block-item").attr("data-owlcarousel-id"):this.carouselElement.attr("id");var o=e("#"+i),n="a--owl-carousel-slide-iteDetail-"+o.find(".a--owl-carousel-type-2 .owl-item.active.center .a--block-item").data("position");o.find(".subCategoryWarper").fadeOut();var r=o.find(".a--owl-carousel-slide-detailes"),s=o.find("."+n);r.slideUp(),s.length>0&&(r.fadeIn(),s.slideDown(),e([document.documentElement,document.body]).animate({scrollTop:r.offset().top},300)),e.fn.OwlCarouselType2.owlCarouselOptions.OwlCarousel.btnSwfitchEvent()},e.fn.OwlCarouselType2.owlCarouseldefaultOptions={OwlCarousel:{stagePadding:0,center:!0,rtl:!0,loop:!0,nav:!0,margin:10,lazyLoad:!0,responsive:{0:{items:1},400:{items:2},600:{items:3},800:{items:4},1000:{items:5}},onTranslated:e.fn.OwlCarouselType2.showAlaaOwlCarouselItemDetail,btnSwfitchEvent:function(){},onTranslatedEvent:function(){}},grid:{btnSwfitchEvent:function(){},columnClass:"col-12 col-sm-6 col-md-3"},defaultView:"OwlCarousel",childCountHideOwlCarousel:5},e.fn.OwlCarouselType2.owlCarouselOptions=null,e.fn.OwlCarouselType2.carouselElement=null}(jQuery),function(e){e.fn.AnimateScrollTo=function(t){return e.fn.AnimateScrollTo.options=e.extend(!0,{},e.fn.AnimateScrollTo.defaultOptions,t),this.each(function(){var t=e(this);e(document).trigger("AnimateScrollTo.beforeScroll",[t]),e([document.documentElement,document.body]).animate({scrollTop:t.offset().top-e.fn.AnimateScrollTo.options.topPadding},e.fn.AnimateScrollTo.options.speed),e(document).trigger("AnimateScrollTo.afterScroll",[t])})},e.fn.AnimateScrollTo.getHeaderHeight=function(){return e("#m_header").height()},e.fn.AnimateScrollTo.defaultOptions={topPadding:e.fn.AnimateScrollTo.getHeaderHeight()+5,speed:300},e.fn.AnimateScrollTo.options=null}(jQuery);var initPage=function(){return{init:function(e){window.LazyLoad.carousel([window.imageObserver,window.gtmEecAdvertisementObserver]),window.LazyLoad.loadElementByQuerySelector(".dasboardLessons",function(e){$(e).OwlCarouselType2({OwlCarousel:{stagePadding:30,center:!1,loop:!1,lazyLoad:!1,responsive:{0:{items:1},400:{items:2},600:{items:3},800:{items:4},1000:{items:6}},btnSwfitchEvent:function(){window.imageObserver.observe(),window.gtmEecProductObserver.observe()}},grid:{columnClass:"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 gridItem",btnSwfitchEvent:function(){window.imageObserver.observe(),window.gtmEecProductObserver.observe()}},defaultView:"OwlCarousel",childCountHideOwlCarousel:4})}),function(e){for(var t in e)e[t].trim().length>0&&$("."+e[t]+".dasboardLessons .m-portlet__head").sticky({container:"."+e[t]+".dasboardLessons > .col > .m-portlet",topSpacing:$("#m_header").height(),zIndex:98})}(e),$(document).on("click",".btnScrollTo",function(){var e=$(this).attr("data-scroll-to");$(e).AnimateScrollTo()}),$(document).on("click","#m_aside_left_hide_toggle",function(){window.LazyLoad.bootstrap4CarouselLoadHeight()})}}}();$(document).ready(function(){initPage.init(sections)});
