document.addEventListener("DOMContentLoaded", function() {
  addSearchShadow();
  addCartHighlight();
  addDropdownMenu();




  // PAGE catalog.html start
  try {
    var domFastButton = document.querySelectorAll(".slidefastbutton");
    var domSlideScreen = document.querySelectorAll(".slidedscrpreviewrapper");
    var domClDispl = domSlideScreen[0];
    var domSlideLeft = document.querySelector("#lsb");
    var domSlideRight = document.querySelector("#rsb");

    // Fast nav buttons
    for (var i = 0; i < domFastButton.length; i++) {
      var domFBElement = domFastButton[i];
      var domSSElement = domSlideScreen[i];

      domFBElement.onclick = function() {
        // disable all slides
        for (var z = 0; z < domSlideScreen.length; z++) {
          domSlideScreen[z].style.display = "none";
        }

        domSSElement.style.display = "block";
        domClDispl = domSSElement;
      }
    }

    // Slide left, right
    domSlideLeft.onclick = function() {
      var lastSymbolInId = parseInt(domClDispl.id.slice(-1));

      domClDispl.style.display = "none";

      // if first slide, go to last
      if (lastSymbolInId <= 1) {
        domClDispl = domSlideScreen[domSlideScreen.length - 1];
        domClDispl.style.display = "block";
        if (jQuery) {
          domClDispl.style.opacity = 0;
          $(domClDispl).animate({opacity: 1}, 800);
        }

        return;
      }

      domClDispl = domSlideScreen[lastSymbolInId - 2];
      domClDispl.style.display = "block";
      if (jQuery) {
        domClDispl.style.opacity = 0;
        $(domClDispl).animate({opacity: 1}, 800);
      }
    }
    domSlideRight.onclick = function() {
      var lastSymbolInId = parseInt(domClDispl.id.slice(-1));

      domClDispl.style.display = "none";

      // if last slide, go to first
      if (lastSymbolInId >= 3) {
        domClDispl = domSlideScreen[0];
        domClDispl.style.display = "block";
        if (jQuery) {
          domClDispl.style.opacity = 0;
          $(domClDispl).animate({opacity: 1}, 800);
        }

        return;
      }

      domClDispl = domSlideScreen[lastSymbolInId];
      domClDispl.style.display = "block";
      if (jQuery) {
        domClDispl.style.opacity = 0;
        $(domClDispl).animate({opacity: 1}, 800);
      }
    }

  } catch (error) {

  }
  // PAGE catalog.html end




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
    domEl.addEventListener("click", function() {
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
    $("#mobilephone").on("focus", function() {
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
      var dom_spanM = dom_incwrap[i].children[0]; // span element minus
      var dom_p = dom_incwrap[i].children[1]; // p element with number
      var dom_spanP = dom_incwrap[i].children[2]; // span element plus

      // minus span action
      dom_spanM.onclick = function() {
        // check for zero
        if (parseInt(dom_p.innerHTML) >= 2) {
          dom_p.innerHTML = parseInt(dom_p.innerHTML) - 1;
        }
      }

      // plus span action
      dom_spanP.onclick = function() {
        dom_p.innerHTML = parseInt(dom_p.innerHTML) + 1;
      }
    }


    // phone mask
    $("#mobilephone").on("focus", function() {
      $("#mobilephone").val("+7 ").mask("+7 (000) 000 - 00 - 00");
    });
  } catch (error) {

  }
  // PAGE basket.html end
});








function addSearchShadow()
{
  var domSearch = $(".input_text");

  if (domSearch.length)
  {
    domSearch.on("focus", function() {
      domSearch.parent().css("box-shadow", "0px 0px 10px 4px rgba(75, 193, 193, 0.4)");
      domSearch.attr("placeholder", "");
    });
    domSearch.focusout(function() {
      domSearch.parent().css("box-shadow", "none");
      domSearch.attr("placeholder", "Поиск по сайту");
    });
  }
}


function addCartHighlight()
{
  var domCart_children = $(".cart").children();

  $(domCart_children[0]).mouseenter(function() {
    $(domCart_children[1]).css("backgroundColor", "#f13d70");
  });
  $(domCart_children[0]).mouseleave(function() {
    $(domCart_children[1]).css("backgroundColor", "#b8bfc0");
  });

  $(domCart_children[2]).mouseenter(function() {
    $(domCart_children[3]).css("backgroundColor", "#f13d70");
  });
  $(domCart_children[2]).mouseleave(function() {
    $(domCart_children[3]).css("backgroundColor", "#b8bfc0");
  });
}


function addDropdownMenu()
{
  $("#dropmenuTrigger").mousestop(300, function() {
    $(".dropmenu").toggle("blind", 200);
  });
  $(".dropmenu").mouseleave(function() {
    $(".dropmenu").toggle("blind", 200);
  });
}
