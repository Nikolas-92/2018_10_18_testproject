document.addEventListener("DOMContentLoaded", function() {
  addSearchShadow();
  addCartHighlight();
  addDropdownMenu();
  addPriceRangeSlider(); // compare.html
  addFilterRemover(); // compare.html
  addAccordion(); // compare.html
  addMobileNumberMask(); // contact.html, basket.html
  addItemAmountChanger(); // basket.html




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
});








function addSearchShadow()
{
  var domSearch = $(".input_text");

  domSearch.on("focus", function() {
    domSearch.parent().css("box-shadow", "0px 0px 10px 4px rgba(75, 193, 193, 0.4)");
    domSearch.attr("placeholder", "");
  });
  domSearch.focusout(function() {
    domSearch.parent().css("box-shadow", "none");
    domSearch.attr("placeholder", "Поиск по сайту");
  });
}

function addCartHighlight()
{
  var ar_domCart_children = $(".cart").children();

  $(ar_domCart_children[0]).mouseenter(function() {
    $(ar_domCart_children[1]).css("backgroundColor", "#f13d70");
  });
  $(ar_domCart_children[0]).mouseleave(function() {
    $(ar_domCart_children[1]).css("backgroundColor", "#b8bfc0");
  });

  $(ar_domCart_children[2]).mouseenter(function() {
    $(ar_domCart_children[3]).css("backgroundColor", "#f13d70");
  });
  $(ar_domCart_children[2]).mouseleave(function() {
    $(ar_domCart_children[3]).css("backgroundColor", "#b8bfc0");
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

function addPriceRangeSlider()
{
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1, 9999],
    slide: function(event, ui) {
      $("#pricefrom").val(ui.values[0]);
      $("#priceto").val(ui.values[1]);
    }
  });
}

function addFilterRemover()
{
  var domItemRemoveButton = $(".filteritem").children()[0];

  $(domItemRemoveButton).on("click", function() {
    $(".filteritem").remove();
  });
}

function addAccordion()
{
  $(".accordion").accordion({
    icons: { "header": "accordionpassivearrow", "activeHeader": "accordionactivearrow" }
  });
}

function addMobileNumberMask()
{
  $("#mobilephone").on("focus", function() {
    $("#mobilephone").val("+7 ").mask("+7 (000) 000 - 00 - 00");
  });
}

function addItemAmountChanger()
{
  var ar_domAmountWrapper = $(".incdecamount");

  // for every wrapper
  for (var i = 0; i < ar_domAmountWrapper.length; i++)
  {
    var ar_domChildren = $(ar_domAmountWrapper[i]).children(); // [minus, amount, plus]

    // minus
    ar_domChildren[0].onclick = function() {
      var ar_domChildren = $(this).parent().children();

      // check for zero
      if (parseInt(ar_domChildren[1].innerHTML) > 1) {
        ar_domChildren[1].innerHTML = parseInt(ar_domChildren[1].innerHTML) - 1;
      }
    }
    // plus
    ar_domChildren[2].onclick = function() {
      var ar_domChildren = $(this).parent().children();

      ar_domChildren[1].innerHTML = parseInt(ar_domChildren[1].innerHTML) + 1;
    }
  }
}
