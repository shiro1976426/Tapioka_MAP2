$(function(){
  $("#slider").slick({
    prevArrow: '<img src=<%= @post.image%>" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="<%= @post.image2%>" class="slide-arrow next-arrow">'
  });
});