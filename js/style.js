document.addEventListener("DOMContentLoaded", function() {
  addSearchShadow();
  addCartHighlight();
  addDropdownMenu();
  addPriceRangeSlider(); // compare.html
  addFilterRemover(); // compare.html
  addAccordion(); // compare.html
  addMobileNumberMask(); // contact.html, basket.html
  addItemAmountChanger(); // basket.html
  addCarousel(); // catalog.html
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

function addCarousel()
{
  if (!$(".slide").length && $(".slide").length < 2) { return; }

  var ar_domSlideNodes = [];
  var iFocusIndex = 0;
  var iSlideWidthPx = 1090;
  var ar_domDirectionArrow = $(".directionslide");
  var ar_domFastBullets = $(".slidefastbutton");

  addCarousel_fillWithSlides(ar_domSlideNodes); // fill array with slides
  addCarousel_sortCSS(iFocusIndex, iSlideWidthPx, ar_domSlideNodes); // sort margin

  // left arrow
  ar_domDirectionArrow[0].onclick = function() {
    ar_domSlideNodes.unshift(ar_domSlideNodes.pop());
    addCarousel_sortCSS(iFocusIndex, iSlideWidthPx, ar_domSlideNodes);
    addCarousel_sortCSSAnimateLeft(iFocusIndex, iSlideWidthPx, ar_domSlideNodes);
  }

  // right arrow
  ar_domDirectionArrow[1].onclick = function() {
    ar_domSlideNodes.push(ar_domSlideNodes.shift());
    addCarousel_sortCSS(iFocusIndex, iSlideWidthPx, ar_domSlideNodes);
    addCarousel_sortCSSAnimateRight(iFocusIndex, iSlideWidthPx, ar_domSlideNodes)
  }

  // bullet fast nav
  for (var i = 0; i < ar_domFastBullets.length; i++)
  {
    ar_domFastBullets[i].onclick = function() {
      addCarousel_focusBullet(iFocusIndex, parseInt(this.id.slice(-1)), ar_domSlideNodes);
      addCarousel_sortCSS(iFocusIndex, iSlideWidthPx, ar_domSlideNodes);
    }
  }
}

function addCarousel_fillWithSlides(ar_domSlideNodes)
{
  for (var i = 0; i < $(".slide").length; i++)
  {
    ar_domSlideNodes.push($(".slide")[i]);
  }
}

function addCarousel_sortCSS(iFocusIndex, iSlideWidthPx, ar_domSlideNodes)
{
  // set focus position
  $(ar_domSlideNodes[iFocusIndex]).css("marginLeft", 0);

  // before focus
  for (var i = 0; i < iFocusIndex; i++)
  {
    $(ar_domSlideNodes[i]).css("marginLeft", 0);
    $(ar_domSlideNodes[i]).css("marginLeft", -1 * iSlideWidthPx);
  }

  // after focus
  for (var i = iFocusIndex + 1; i < ar_domSlideNodes.length; i++)
  {
    $(ar_domSlideNodes[i]).css("marginLeft", 0);
    $(ar_domSlideNodes[i]).css("marginLeft", iSlideWidthPx);
  }
}

function addCarousel_sortCSSAnimateLeft(iFocusIndex, iSlideWidthPx, ar_domSlideNodes)
{
  $(ar_domSlideNodes[iFocusIndex]).css("marginLeft", -1 * iSlideWidthPx);
  $(ar_domSlideNodes[iFocusIndex + 1]).css("marginLeft", 0);
  $(ar_domSlideNodes[iFocusIndex]).animate({"marginLeft": 0}, 600);
  $(ar_domSlideNodes[iFocusIndex + 1]).animate({"marginLeft": iSlideWidthPx}, 600);
}

function addCarousel_sortCSSAnimateRight(iFocusIndex, iSlideWidthPx, ar_domSlideNodes)
{
  var iPrevSlideIndex = iFocusIndex - 1;
  if (iFocusIndex == 0) { iPrevSlideIndex = ar_domSlideNodes.length - 1; }

  $(ar_domSlideNodes[iFocusIndex]).css("marginLeft", iSlideWidthPx);
  $(ar_domSlideNodes[iPrevSlideIndex]).css("marginLeft", 0);
  $(ar_domSlideNodes[iFocusIndex]).animate({"marginLeft": 0}, 600);
  $(ar_domSlideNodes[iPrevSlideIndex]).animate({"marginLeft": -1 * iSlideWidthPx}, 600);
}

function addCarousel_focusBullet(iFocusIndex, iBulletID, ar_domSlideNodes)
{
  var iSlideFocusID = parseInt(ar_domSlideNodes[iFocusIndex].id.slice(-1));

  // toss bullet into focus
  while (iBulletID != iSlideFocusID)
  {
    ar_domSlideNodes.unshift(ar_domSlideNodes.pop());

    iSlideFocusID = parseInt(ar_domSlideNodes[iFocusIndex].id.slice(-1));
  }
}
