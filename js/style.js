document.addEventListener("DOMContentLoaded", () => {
  // home.png
  var a = document.querySelector(".no_lpadding");
  a.onmouseenter = () => {
    a.childNodes[1].src = "./img/home_hover.png";
  }
  a.onmouseleave = () => {
    a.childNodes[1].src = "./img/home.png";
  }


  // cart.png
  var cart_div = document.querySelector(".cart");
  var bundle = [];

  bundle[0] = cart_div.childNodes[1];
  bundle[1] = cart_div.childNodes[3];
  bundle[2] = cart_div.childNodes[5];
  bundle[3] = cart_div.childNodes[7];

  bundle[0].onmouseenter = () => {
    bundle[1].style.backgroundColor = "#f13d70";
  }
  bundle[0].onmouseleave = () => {
    bundle[1].style.backgroundColor = "#b8bfc0";
  }

  bundle[2].onmouseenter = () => {
    bundle[3].style.backgroundColor = "#f13d70";
  }
  bundle[2].onmouseleave = () => {
    bundle[3].style.backgroundColor = "#b8bfc0";
  }


  // PAGE start
  // compare.html
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1, 9999],
    slide: (event, ui) => {
      $("#pricefrom").val(ui.values[0]);
      $("#priceto").val(ui.values[1]);
    }
  });
  // PAGE end
});
