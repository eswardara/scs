function initPageSliders() {
  !(function (e) {
    "use strict";
    e(".fullwidth-slider").owlCarousel({
      slideSpeed: 350,
      autoPlay: 5e3,
      singleItem: !0,
      autoHeight: !0,
      navigation: !1,
      pagination: !0,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    }),
      e(".fullwidth-slider-fade").owlCarousel({
        transitionStyle: "fadeUp",
        slideSpeed: 350,
        singleItem: !0,
        autoHeight: !0,
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".fullwidth-gallery").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 5e3,
        slideSpeed: 700,
        singleItem: !0,
        autoHeight: !0,
        navigation: !1,
        pagination: !1,
      }),
      e(".item-carousel").owlCarousel({
        autoPlay: !1,
        stopOnHover: !0,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsTabletSmall: [768, 3],
        itemsMobile: [480, 2],
        navigation: !0,
        pagination: !1,
        navigationText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>",
        ],
      }),
      e(".customer-carousel").owlCarousel({
        autoPlay: 5e3,
        stopOnHover: !0,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        navigation: !0,
        pagination: !1,
        navigationText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>",
        ],
      }),
      e(".coverage-carousel").owlCarousel({
        stopOnHover: !0,
        items: 6,
        itemsDesktop: [1199, 3],
        itemsTabletSmall: [768, 3],
        itemsMobile: [480, 2],
        navigation: !0,
        pagination: !1,
        navigationText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>",
        ],
      }),
      e(".industries-carousel").owlCarousel({
        stopOnHover: !0,
        items: 4,
        itemsDesktop: [1199, 2],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 2],
        navigation: !0,
        pagination: !1,
        navigationText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>",
        ],
      }),
      e(".small-item-carousel").owlCarousel({
        autoPlay: 3e3,
        stopOnHover: !1,
        items: 5,
        itemsDesktop: [1199, 4],
        itemsTabletSmall: [768, 3],
        itemsMobile: [480, 3],
        pagination: !1,
        navigation: !1,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".single-carousel").owlCarousel({
        singleItem: !0,
        autoHeight: !0,
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".content-slider").owlCarousel({
        slideSpeed: 350,
        singleItem: !0,
        autoHeight: !0,
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".photo-slider").owlCarousel({
        slideSpeed: 350,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1],
        autoHeight: !0,
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".work-full-slider").owlCarousel({
        slideSpeed: 350,
        singleItem: !0,
        autoHeight: !0,
        navigation: !1,
        pagination: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".blog-posts-carousel").owlCarousel({
        autoPlay: 5e3,
        stopOnHover: !0,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1],
        pagination: !1,
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".blog-posts-carousel-alt").owlCarousel({
        autoPlay: 3500,
        stopOnHover: !0,
        slideSpeed: 350,
        singleItem: !0,
        autoHeight: !0,
        pagination: !1,
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      }),
      e(".image-carousel").owlCarousel({
        autoPlay: 5e3,
        stopOnHover: !0,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1],
        navigation: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
      });
    var a = e(".fullwidth-slideshow"),
      i = e(".fullwidth-slideshow-pager");
    e(".fullwidth-slideshow").owlCarousel({
      autoPlay: 5e3,
      stopOnHover: !0,
      transitionStyle: "fade",
      slideSpeed: 350,
      singleItem: !0,
      autoHeight: !0,
      pagination: !1,
      navigation: !0,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      afterAction: function (a) {
        var t = this.currentItem;
        e(".fullwidth-slideshow-pager")
          .find(".owl-item")
          .removeClass("synced")
          .eq(t)
          .addClass("synced"),
          void 0 !== e(".fullwidth-slideshow-pager").data("owlCarousel") &&
            (function (e) {
              var a = i.data("owlCarousel").owl.visibleItems,
                t = e,
                s = !1;
              for (var l in a) if (t === a[l]) var s = !0;
              !1 === s
                ? t > a[a.length - 1]
                  ? i.trigger("owl.goTo", t - a.length + 2)
                  : (t - 1 == -1 && (t = 0), i.trigger("owl.goTo", t))
                : t === a[a.length - 1]
                ? i.trigger("owl.goTo", a[1])
                : t === a[0] && i.trigger("owl.goTo", t - 1);
            })(t);
      },
      responsiveRefreshRate: 200,
    }),
      e(".fullwidth-slideshow-pager").owlCarousel({
        autoPlay: 5e3,
        stopOnHover: !0,
        items: 8,
        itemsDesktop: [1199, 8],
        itemsDesktopSmall: [979, 7],
        itemsTablet: [768, 6],
        itemsMobile: [480, 4],
        autoHeight: !0,
        pagination: !1,
        navigation: !1,
        responsiveRefreshRate: 100,
        afterInit: function (e) {
          e.find(".owl-item").eq(0).addClass("synced");
        },
      }),
      e(".fullwidth-slideshow-pager").on("click", ".owl-item", function (i) {
        i.preventDefault();
        var t = e(this).data("owlItem");
        a.trigger("owl.goTo", t);
      });
    var t = e(".fullwidth-slideshow").data("owlCarousel");
    (e(document.documentElement).keyup(function (e) {
      37 == e.keyCode ? t.prev() : 39 == e.keyCode && t.next();
    }),
    e(".owl-carousel").length) &&
      (t = e(".owl-carousel").data("owlCarousel")).reinit();
  })(jQuery);
}
!(function (e) {
  "use strict";
  var a, i;
  function t(e, a) {
    e.height(a.height()), e.css({ "line-height": a.height() + "px" });
  }
  e(window).load(function () {
    if (
      (e("body").imagesLoaded(function () {
        e(".page-loader div").fadeOut(),
          e(".page-loader").delay(200).fadeOut("slow");
      }),
      initWorkFilter(),
      (function () {
        e(".local-scroll").localScroll({
          target: "body",
          duration: 1500,
          offset: 0,
          easing: "easeInOutExpo",
        });
        var a = e(".home-section, .split-section, .page-section"),
          i = e(".scroll-nav li a");
        e(window).scroll(function () {
          a.filter(":in-viewport:first").each(function () {
            var a = e(this),
              t = e('.scroll-nav li a[href="#' + a.attr("id") + '"]');
            i.removeClass("active"), t.addClass("active");
          });
        });
      })(),
      e(window).trigger("scroll"),
      e(window).trigger("resize"),
      window.location.hash && e(window.location.hash).length)
    ) {
      var a = e(window.location.hash).offset().top;
      e("html, body").animate({ scrollTop: a });
    }
  }),
    e(document).ready(function () {
      var a = e(".sheader");
      e(window).bind("scroll", function (s) {
        e(window).scrollTop() > a.height() ? t() : i();
      });
      var i = function () {
          a.css("position", "relative"), a.css("margin-top", "0px");
        },
        t = function () {
          a.css("position", "fixed"),
            a.css("top", "0"),
            a.css("margin-top", "70px");
        };
    }),
    e(document).ready(function () {
      e(window).trigger("resize"),
        (function () {
          e(".js-stick").sticky({ topSpacing: 0 }),
            t(e(".inner-nav > ul > li > a"), e(".main-nav")),
            t(s, e(".main-nav")),
            s.css({ width: e(".main-nav").height() + "px" }),
            e(".main-nav").hasClass("transparent") &&
              e(".main-nav").addClass("js-transparent");
          e(window).scroll(function () {
            e(window).scrollTop() > 10
              ? (e(".js-transparent").removeClass("transparent"),
                e(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass(
                  "small-height"
                ))
              : (e(".js-transparent").addClass("transparent"),
                e(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass(
                  "small-height"
                ));
          }),
            s.click(function () {
              l.hasClass("js-opened")
                ? (l.slideUp("slow", "easeOutExpo").removeClass("js-opened"),
                  e(this).removeClass("active"))
                : (l.slideDown("slow", "easeOutQuart").addClass("js-opened"),
                  e(this).addClass("active"),
                  e(".main-nav").hasClass("not-top") &&
                    e(window).scrollTo(".main-nav", "slow"));
            }),
            l.find("a:not(.mn-has-sub)").click(function () {
              s.hasClass("active") &&
                (l.slideUp("slow", "easeOutExpo").removeClass("js-opened"),
                s.removeClass("active"));
            });
          var a,
            i = e(".mn-has-sub");
          e(".mobile-on .mn-has-sub")
            .find(".fa:first")
            .removeClass("fa-angle-right")
            .addClass("fa-angle-down"),
            i.click(function () {
              if (e(".main-nav").hasClass("mobile-on"))
                return (
                  (a = e(this).parent("li:first")).hasClass("js-opened")
                    ? a.find(".mn-sub:first").slideUp(function () {
                        a.removeClass("js-opened"),
                          a
                            .find(".mn-has-sub")
                            .find(".fa:first")
                            .removeClass("fa-angle-up")
                            .addClass("fa-angle-down");
                      })
                    : (e(this)
                        .find(".fa:first")
                        .removeClass("fa-angle-down")
                        .addClass("fa-angle-up"),
                      a.addClass("js-opened"),
                      a.find(".mn-sub:first").slideDown()),
                  !1
                );
            }),
            (a = i.parent("li")).hover(
              function () {
                e(".main-nav").hasClass("mobile-on") ||
                  e(this).find(".mn-sub:first").stop(!0, !0).fadeIn("fast");
              },
              function () {
                e(".main-nav").hasClass("mobile-on") ||
                  e(this)
                    .find(".mn-sub:first")
                    .stop(!0, !0)
                    .delay(100)
                    .fadeOut("fast");
              }
            );
        })(),
        init_fullscreen_menu(),
        init_side_panel(),
        e(".work-lightbox-link").magnificPopup({
          gallery: { enabled: !0 },
          mainClass: "mfp-fade",
        }),
        e(".lightbox-gallery-1").magnificPopup({ gallery: { enabled: !0 } }),
        e(".lightbox-gallery-2").magnificPopup({ gallery: { enabled: !0 } }),
        e(".lightbox-gallery-3").magnificPopup({ gallery: { enabled: !0 } }),
        e(".lightbox").magnificPopup(),
        e(window).width() >= 1024 &&
          0 == a &&
          (e(".parallax-1").parallax("50%", 0.1),
          e(".parallax-2").parallax("50%", 0.2),
          e(".parallax-3").parallax("50%", 0.3),
          e(".parallax-4").parallax("50%", 0.4),
          e(".parallax-5").parallax("50%", 0.5),
          e(".parallax-6").parallax("50%", 0.6),
          e(".parallax-7").parallax("50%", 0.7),
          e(".parallax-8").parallax("50%", 0.5),
          e(".parallax-9").parallax("50%", 0.5),
          e(".parallax-10").parallax("50%", 0.5),
          e(".parallax-11").parallax("50%", 0.05)),
        (function () {
          var a;
          e(".tpl-minimal-tabs > li > a").click(function () {
            e(this).parent("li").hasClass("active") ||
              ((a = e(".tpl-minimal-tabs-cont > .tab-pane")
                .filter(e(this).attr("href"))
                .height()),
              e(".tpl-minimal-tabs-cont").animate({ height: a }, function () {
                e(".tpl-minimal-tabs-cont").css("height", "auto");
              }));
          }),
            e(".accordion").each(function () {
              var a = e(this).children("dd").hide();
              e(this).children("dd").first().slideDown("easeOutExpo"),
                e(this).children("dt").children("a").first().addClass("active"),
                e(this)
                  .children("dt")
                  .children("a")
                  .click(function () {
                    var i = e(this).parent().next("dd");
                    return (
                      e(".accordion > dt > a").removeClass("active"),
                      e(this).addClass("active"),
                      a.not(i).slideUp("easeInExpo"),
                      e(this).parent().next().slideDown("easeOutExpo"),
                      !1
                    );
                  });
            });
          e(".toggle > dd").hide();
          e(".toggle > dt > a").click(function () {
            if (e(this).hasClass("active"))
              e(this).parent().next().slideUp("easeOutExpo"),
                e(this).removeClass("active");
            else {
              e(this).parent().next("dd");
              e(this).addClass("active"),
                e(this).parent().next().slideDown("easeOutExpo");
            }
            return !1;
          });
        })(),
        e(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
          placement: "bottom",
        }),
        e(".tooltip-top, .tooltip-top a").tooltip({ placement: "top" }),
        e(".count-number").appear(function () {
          var a = e(this);
          a.countTo({
            from: 0,
            to: a.html(),
            speed: 1300,
            refreshInterval: 60,
          });
        }),
        e(".team-item").click(function () {
          e("html").hasClass("mobile") && e(this).toggleClass("js-active");
        }),
        initPageSliders(),
        init_map(),
        init_wow(),
        init_masonry();
    }),
    e(window).resize(function () {
      e(".mobile-on .desktop-nav > ul").css(
        "max-height",
        e(window).height() - e(".main-nav").height() - 20 + "px"
      ),
        e(window).width() <= 1024
          ? e(".main-nav").addClass("mobile-on")
          : e(window).width() > 1024 &&
            (e(".main-nav").removeClass("mobile-on"), l.show()),
        init_side_panel_resize(),
        js_height_init(),
        split_height_init();
    }),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
      ? ((a = !0), e("html").addClass("mobile"))
      : ((a = !1), e("html").addClass("no-mobile")),
    /mozilla/.test(navigator.userAgent),
    /safari/.test(navigator.userAgent),
    "ontouchstart" in document.documentElement ||
      (document.documentElement.className += " no-touch"),
    e(".home-section, .page-section, .small-section, .split-section").each(
      function (a) {
        e(this).attr("data-background") &&
          e(this).css(
            "background-image",
            "url(" + e(this).data("background") + ")"
          );
      }
    ),
    ((i = jQuery).fn.equalHeights = function () {
      var e = 0,
        a = i(this);
      return (
        a.each(function () {
          var a = i(this).innerHeight();
          a > e && (e = a);
        }),
        a.css("height", e)
      );
    }),
    i("[data-equal]").each(function () {
      var e = i(this),
        a = e.data("equal");
      e.find(a).equalHeights();
    }),
    e(".progress-bar").each(function (a) {
      e(this).css("width", e(this).attr("aria-valuenow") + "%");
    });
  var s = e(".mobile-nav"),
    l = e(".desktop-nav");
})(jQuery);
var fm_menu_wrap = $("#fullscreen-menu"),
  fm_menu_button = $(".fm-button");
function init_fullscreen_menu() {
  var e;
  fm_menu_button.click(function () {
    return (
      !$(this).hasClass("animation-process") &&
      ($(this).hasClass("active")
        ? ($(this)
            .removeClass("active")
            .css("z-index", "2001")
            .addClass("animation-process"),
          fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function () {
            fm_menu_wrap.fadeOut(function () {
              fm_menu_wrap
                .find(".fm-wrapper-sub")
                .removeClass("js-active")
                .show(),
                fm_menu_button
                  .css("z-index", "1030")
                  .removeClass("animation-process");
            });
          }),
          $(".owl-carousel").lenth &&
            $(".owl-carousel").data("owlCarousel").play())
        : ($(".owl-carousel").lenth &&
            $(".owl-carousel").data("owlCarousel").stop(),
          $(this)
            .addClass("active")
            .css("z-index", "2001")
            .addClass("animation-process"),
          fm_menu_wrap.fadeIn(function () {
            fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active"),
              fm_menu_button.removeClass("animation-process");
          })),
      !1)
    );
  }),
    $("#fullscreen-menu")
      .find("a:not(.fm-has-sub)")
      .click(function () {
        if (fm_menu_button.hasClass("animation-process")) return !1;
        fm_menu_button
          .removeClass("active")
          .css("z-index", "2001")
          .addClass("animation-process"),
          fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function () {
            fm_menu_wrap.fadeOut(function () {
              fm_menu_wrap
                .find(".fm-wrapper-sub")
                .removeClass("js-active")
                .show(),
                fm_menu_button
                  .css("z-index", "1030")
                  .removeClass("animation-process");
            });
          }),
          $(".owl-carousel").lenth &&
            $(".owl-carousel").data("owlCarousel").play();
      }),
    $(".fm-has-sub").click(function () {
      return (
        (e = $(this).parent("li:first")).hasClass("js-opened")
          ? e.find(".fm-sub:first").slideUp(function () {
              e.removeClass("js-opened"),
                e
                  .find(".fm-has-sub")
                  .find(".fa:first")
                  .removeClass("fa-angle-up")
                  .addClass("fa-angle-down");
            })
          : ($(this)
              .find(".fa:first")
              .removeClass("fa-angle-down")
              .addClass("fa-angle-up"),
            e.addClass("js-opened"),
            e.find(".fm-sub:first").slideDown()),
        !1
      );
    });
}
var side_panel = $(".side-panel"),
  sp_button = $(".sp-button"),
  sp_close_button = $(".sp-close-button"),
  sp_overlay = $(".sp-overlay");
function sp_panel_close() {
  side_panel.animate({ opacity: 0, left: -270 }, 500, "easeOutExpo"),
    sp_overlay.fadeOut(),
    $(".owl-carousel").lenth && $(".owl-carousel").data("owlCarousel").play();
}
function init_side_panel() {
  !(function (e) {
    "use strict";
    var a;
    sp_button.click(function () {
      return (
        side_panel.animate({ opacity: 1, left: 0 }, 500, "easeOutExpo"),
        setTimeout(function () {
          sp_overlay.fadeIn();
        }, 100),
        e(".owl-carousel").lenth &&
          e(".owl-carousel").data("owlCarousel").stop(),
        !1
      );
    }),
      sp_close_button.click(function () {
        return sp_panel_close(), !1;
      }),
      sp_overlay.click(function () {
        return sp_panel_close(), !1;
      }),
      e("#side-panel-menu")
        .find("a:not(.sp-has-sub)")
        .click(function () {
          e(window).width() >= 1199 || sp_panel_close();
        }),
      e(".sp-has-sub").click(function () {
        return (
          (a = e(this).parent("li:first")).hasClass("js-opened")
            ? a.find(".sp-sub:first").slideUp(function () {
                a.removeClass("js-opened"),
                  a
                    .find(".sp-has-sub")
                    .find(".fa:first")
                    .removeClass("fa-angle-up")
                    .addClass("fa-angle-down");
              })
            : (e(this)
                .find(".fa:first")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up"),
              a.addClass("js-opened"),
              a.find(".sp-sub:first").slideDown()),
          !1
        );
      });
  })(jQuery);
}
function init_side_panel_resize() {
  !(function (e) {
    "use strict";
    e(window).width() >= 1199
      ? (side_panel.css({ opacity: 1, left: 0 }),
        e(".side-panel-is-left").css("margin-left", "270px"),
        sp_button.css("display", "none"),
        sp_close_button.css("display", "none"))
      : sp_close_button.is(":hidden") &&
        (side_panel.css({ opacity: 0, left: -270 }),
        e(".side-panel-is-left").css("margin-left", "0"),
        sp_button.css("display", "block"),
        sp_close_button.css("display", "block"));
  })(jQuery);
}
var fselector = 0,
  work_grid = $("#work-grid, #isotope");
function initWorkFilter() {
  !(function (e) {
    "use strict";
    var a;
    (a = work_grid.hasClass("masonry") ? "masonry" : "fitRows"),
      e(".filter").click(function () {
        return (
          e(".filter").removeClass("active"),
          e(this).addClass("active"),
          (fselector = e(this).attr("data-filter")),
          work_grid.imagesLoaded(function () {
            work_grid.isotope({
              itemSelector: ".mix",
              layoutMode: a,
              filter: fselector,
            });
          }),
          !1
        );
      }),
      window.location.hash &&
        e(".filter").each(function () {
          e(this).attr("data-filter") ==
            "." + window.location.hash.replace("#", "") &&
            (e(this).trigger("click"),
            e("html, body").animate({
              scrollTop: e("#portfolio").offset().top,
            }));
        }),
      work_grid.imagesLoaded(function () {
        work_grid.isotope({
          itemSelector: ".mix",
          layoutMode: a,
          filter: fselector,
        });
      });
  })(jQuery);
}
function js_height_init() {
  var e;
  (e = jQuery)(".js-height-full").height(e(window).height()),
    e(".js-height-parent").each(function () {
      e(this).height(e(this).parent().first().height());
    });
}
var gmMapDiv = $("#map-canvas");
function init_map() {
  !(function (e) {
    if (
      (e(".map-section").click(function () {
        e(this).toggleClass("js-active"),
          e(this).find(".mt-open").toggle(),
          e(this).find(".mt-close").toggle();
      }),
      gmMapDiv.length)
    ) {
      gmMapDiv.attr("data-address");
      var a = gmMapDiv.attr("data-address");
      gmMapDiv.gmap3({
        action: "init",
        marker: { address: a, options: { icon: "images/map-marker.png" } },
        map: {
          options: {
            zoom: 14,
            zoomControl: !0,
            zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL },
            zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP,
            },
            mapTypeControl: !1,
            scaleControl: !1,
            scrollwheel: !1,
            streetViewControl: !1,
            draggable: !0,
            styles: [
              {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{ color: "#d3d3d3" }],
              },
              {
                featureType: "transit",
                stylers: [{ color: "#808080" }, { visibility: "off" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ visibility: "on" }, { color: "#b3b3b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }],
              },
              {
                featureType: "road.local",
                elementType: "geometry.fill",
                stylers: [
                  { visibility: "on" },
                  { color: "#ffffff" },
                  { weight: 1.8 },
                ],
              },
              {
                featureType: "road.local",
                elementType: "geometry.stroke",
                stylers: [{ color: "#d7d7d7" }],
              },
              {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#ebebeb" }],
              },
              {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [{ color: "#a7a7a7" }],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }],
              },
              {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#efefef" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#696969" }],
              },
              {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{ visibility: "on" }, { color: "#737373" }],
              },
              {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry.stroke",
                stylers: [{ color: "#d6d6d6" }],
              },
              {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
              {},
              {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [{ color: "#dadada" }],
              },
            ],
          },
        },
      });
    }
  })(jQuery);
}
function init_wow() {
  var e, a;
  (e = jQuery),
    (a = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 90,
      mobile: !1,
      live: !0,
    })),
    e("body").hasClass("appear-animate") && a.init();
}
function init_masonry() {
  var e;
  (e = jQuery)(".masonry").imagesLoaded(function () {
    e(".masonry").masonry();
  });
}
function split_height_init() {
  var e;
  (e = jQuery)(".ssh-table, .split-section-content").css("height", "auto"),
    e(window).width() > 992 &&
      e(".split-section").each(function () {
        var a = e(this).find(".split-section-content").innerHeight();
        e(this).find(".ssh-table").height(a);
      });
}




$(document).ready(function () {
  var testimonialCarousel = document.querySelector("#testimonialCarousel");
  
  if (window.matchMedia("(min-width: 576px)").matches) {
      // Desktop view - custom multi-card carousel
      var carousel = new bootstrap.Carousel(testimonialCarousel, {
          interval: false
      });

      var carouselInner = $(".carousel-inner");
      var carouselWidth = carouselInner[0].scrollWidth;
      var cardWidth = $(".carousel-item").width();
      var scrollPosition = 0;
      var maxScrollPosition = carouselWidth - (cardWidth * 3);
      var totalItems = $(".carousel-item").length;
      var visibleItems = 3;

      // Duplicate items for infinite scroll effect
      var clonedItems = $(".carousel-item").clone(true);
      carouselInner.append(clonedItems);
      
      // Update carouselWidth after adding cloned items
      carouselWidth = carouselInner[0].scrollWidth;
      maxScrollPosition = carouselWidth / 2 - (cardWidth * 3);

      function handleNextClick() {
          scrollPosition += cardWidth;
          
          // Check if we need to loop
          if (scrollPosition >= carouselWidth / 2) {
              // Jump to the beginning without animation
              carouselInner.scrollLeft(0);
              scrollPosition = cardWidth;
          }
          
          carouselInner.animate(
              { scrollLeft: scrollPosition },
              400
          );
      }

      function handlePrevClick() {
          scrollPosition -= cardWidth;
          
          // Check if we need to loop
          if (scrollPosition < 0) {
              // Jump to the end without animation
              carouselInner.scrollLeft(carouselWidth / 2 - cardWidth);
              scrollPosition = carouselWidth / 2 - (cardWidth * 2);
          }
          
          carouselInner.animate(
              { scrollLeft: scrollPosition },
              400
          );
      }

      // Auto-play functionality
      var autoPlayInterval = setInterval(handleNextClick, 9000);
      
      // Pause on hover
      $(".testimonial-slider").hover(
          function() { clearInterval(autoPlayInterval); },
          // function() { autoPlayInterval = setInterval(handleNextClick, 9000); }
      );

      // Use custom arrow navigation buttons
      $("#nextArrow").on("click", function () {
          clearInterval(autoPlayInterval);
          handleNextClick();
          // autoPlayInterval = setInterval(handleNextClick, 9000);
      });

      $("#prevArrow").on("click", function () {
          clearInterval(autoPlayInterval);
          handlePrevClick();
          // autoPlayInterval = setInterval(handleNextClick, 9000);
      });

  } else {
      // Mobile view - default Bootstrap carousel
      $(testimonialCarousel).addClass("slide");
      var carousel = new bootstrap.Carousel(testimonialCarousel, {
          interval: 9000,
          wrap: true
      });
      
      // Use custom arrow navigation buttons for mobile too
      $("#nextArrow").on("click", function () {
          carousel.next();
      });

      $("#prevArrow").on("click", function () {
          carousel.prev();
      });
  }
});