$(document).ready(function() {
  "use strict";

  // Open/Close Search Box
  $(
    '.search-box input[type="submit"], .search-box button, .search-box input[type="button"]'
  ).on("click", function() {
    $(".search-box").toggleClass("search-open");
    $(".overlay-content").toggleClass("show-overlay");
  });

  // Opan/Close Side Nav
  $(".btn-menu").on("click", function() {
    $(".side-nav").toggleClass("open-side-nav");
    $(".overlay-content").toggleClass("show-overlay");
  });
  $(".btn-close-nav, .overlay-content").on("click", function() {
    $(".side-nav").toggleClass("open-side-nav");
    $(".overlay-content").toggleClass("show-overlay");
  });
  $("ul.side-nav-in .has-dropdown").on("click", function() {
    //$(this).toggleClass('opan-subnav')
    $(this)
      .find("ul")
      .slideToggle();
  });

  // Responsive Tabs
  $(".tab-section .tab_content").hide();
  $(".tab-section .tab_content:first").show();
  /* if in tab mode */
  $(".tab-section ul.tabs li").click(function() {
    $(".tab-section .tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".tab-section ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab-section .tab_drawer_heading").removeClass("d_active");
    $(".tab-section .tab_drawer_heading[rel^='" + activeTab + "']").addClass(
      "d_active"
    );
  });
  /* if in drawer mode */
  $(".tab-section .tab_drawer_heading").click(function() {
    $(".tab-section .tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab-section .tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
    $(".tab-section ul.tabs li").removeClass("active");
    $(".tab-section ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
  });
  $(".tab-section ul.tabs li")
    .last()
    .addClass("tab_last");

  // Add/Remove class on Accordion Click event
  $(".tab-section h4.panel-title").on("click", function() {
    $(".tab-section h4.panel-title").removeClass("open-accordion");
    $(this).toggleClass("open-accordion");
  });

  // Animate on scroll
  AOS.init({
    easing: "ease-in-out-sine"
  });
  setInterval(addItem, 300);
  var itemsCounter = 1;
  var container = document.getElementById("aos-demo");
  function addItem() {
    if (itemsCounter > 42) return;
    var item = document.createElement("div");
    item.classList.add("aos-item");
    item.setAttribute("data-aos", "fade-up");
    item.innerHTML =
      '<div class="aos-item__inner"><h3>' + itemsCounter + "</h3></div>";
//    container.appendChild(item);
    itemsCounter++;
  }

  // Active carousel first item by js
  $(".carousel.vertical .carousel-inner > .item:first").addClass("active");
});

// ----------------//
$("body").append(
  '<div class="product-image-overlay"><span class="product-image-overlay-close">x</span><img src="" /></div>'
);
var productImage = $("img");
var productOverlay = $(".product-image-overlay");
var productOverlayImage = $(".product-image-overlay img");

productImage.click(function() {
  var productImageSource = $(this).attr("src");

  productOverlayImage.attr("src", productImageSource);
  productOverlay.fadeIn(100);
  $("body").css("overflow", "hidden");

  $(".product-image-overlay-close").click(function() {
    productOverlay.fadeOut(100);
    $("body").css("overflow", "auto");
  });
});
