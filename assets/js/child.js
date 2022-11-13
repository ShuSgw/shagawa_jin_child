// $(".tw_link").remove();

// $("#toggle_original_twBtn").parents(".tw_link_innerBox").remove();

if (localStorage.getItem("twBanner") === null) {
  $(".tw_link").addClass("tw_link--active");
}

$("#toggle_original_twBtn").on("click", function () {
  $(this).parents(".tw_link").remove();
  localStorage.setItem("twBanner", false);
});

if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
  $("a[href*='twitter.com']").each(function () {
    var match;
    var $elm = $(this);
    if (
      (match = $elm
        .attr("href")
        .match(/twitter\.com\/(?:#!\/)?([a-zA-Z0-9_]{1,20})$/))
    ) {
      $elm.attr("href", "twitter://user?screen_name=" + match[1]);
    }
    if (
      (match = $elm
        .attr("href")
        .match(
          /twitter\.com\/(?:#!\/)?[a-zA-Z0-9_]{1,20}\/status(?:es)?\/(\d+)$/
        ))
    ) {
      $elm.attr("href", "twitter://status?status_id=" + match[1]);
    }
  });
}
