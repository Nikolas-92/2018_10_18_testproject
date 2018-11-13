document.addEventListener("DOMContentLoaded", () => {
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

  // drop menu
  document.querySelector(".dropmenu").onmouseleave = () => { $(".dropmenu").toggle("blind", 200); }
  document.querySelector(".dropmenu").parentElement.firstElementChild.onclick = () => {
    $(".dropmenu").toggle("blind", 200);
  }




  // PAGE compare.html start
  try {
    // price range slider
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

    // filter item remove testing
    var domEl = document.querySelector(".filteritem").children[0];
    domEl.addEventListener("click", () => {
      domEl.parentElement.remove();
    });

    // accordion
    $(".accordion").accordion({
      icons: { "header": "accordionpassivearrow", "activeHeader": "accordionactivearrow" }
    });
  } catch (error) {

  }
  // PAGE compare.html end




  // PAGE contact.html start
  try {
    $("#mobilephone").on("focus", () => {
      $("#mobilephone").val("+7 ").mask("+7 (000) 000 - 00 - 00");
    });
  } catch (error) {

  }
  // PAGE contact.html end




  // PAGE basket.html start
  try {
    var dom_incwrap = document.querySelectorAll(".incdecamount");

    for (var i = 0; i < dom_incwrap.length; i++) {
      // for every wrapper in dom_incwrap
      let dom_spanM = dom_incwrap[i].children[0]; // span element minus
      let dom_p = dom_incwrap[i].children[1]; // p element with number
      let dom_spanP = dom_incwrap[i].children[2]; // span element plus

      // minus span action
      dom_spanM.onclick = () => {
        // check for zero
        if (parseInt(dom_p.innerHTML) >= 2) {
          dom_p.innerHTML = parseInt(dom_p.innerHTML) - 1;
        }
      }

      // plus span action
      dom_spanP.onclick = () => {
        dom_p.innerHTML = parseInt(dom_p.innerHTML) + 1;
      }
    }
  } catch (error) {

  }
  // PAGE basket.html end
});
