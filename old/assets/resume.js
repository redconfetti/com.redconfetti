---
# this ensures Jekyll reads the file to be transformed into Javascript later
# only Main files contain this front matter, not partials.
---

$(document).ready(function() {
  // add drop shadow to page
  $("#container").dropShadow();
  $("#nav").dropShadow();

  // make all links with 'rel="external"' link in a new window.
  // needed as XHTML strict doesn't allow target="_blank"
  $('A[rel="external"]').click(function() {
    window.open($(this).attr("href"));
    return false;
  });

  // make experience divs with rounded corners
  $(".position").corners();

  var a = $(
    '<div id="print-button"><a href="#"><img src="{{site.assets.url_prefix}}/images/pages/resume/print.png" style="border:0;" /></a></div>'
  );
  $("div#print-button").replaceWith(a);
  var myprint = new Adoro.PrintButton(a);
});
