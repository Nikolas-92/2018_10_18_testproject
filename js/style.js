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
  var ar_domSlides = $(".slide");
  var ar_domFastBullets = $(".slidefastbutton");
  var iSlideWidthPx = 1090;
  var iNumberOfSlides = ar_domSlides.length;
  var iCurrentSlideID = 1;

  // order all slides in line, starting from second
  for (var i = 1; i < ar_domSlides.length; i++)
  {
    $(ar_domSlides[i]).css("margin-left", iSlideWidthPx * i);
  }


  // next slide button(right)
  $(".directionslide")[1].onclick = function() {
    // check if last slide
    if (iCurrentSlideID >= iNumberOfSlides) { return; }

    // substr from every slide left margin
    for (var i = 0; i < ar_domSlides.length; i++)
    {
      var iNewMargin = parseInt($(ar_domSlides[i]).css("marginLeft")) - iSlideWidthPx;
      $(ar_domSlides[i]).animate({marginLeft: iNewMargin}, 400);
    }

    iCurrentSlideID += 1;
  }

  // prev slide button(left)
  $(".directionslide")[0].onclick = function() {
    // check if first slide
    if (iCurrentSlideID <= 1) { return; }

    // add to every slide left margin
    for (var i = 0; i < ar_domSlides.length; i++)
    {
      var iNewMargin = parseInt($(ar_domSlides[i]).css("marginLeft")) + iSlideWidthPx;
      $(ar_domSlides[i]).animate({marginLeft: iNewMargin}, 400);
    }

    iCurrentSlideID -= 1;
  }


  // bullet fast nav
  for (var i = 0; i < ar_domFastBullets.length; i++)
  {
    ar_domFastBullets[i].onclick = function() {
      iCurrentSlideID = parseInt(this.id.slice(-1));

      // order slides
      for (var i = 0; i < ar_domSlides.length; i++)
      {
        $(ar_domSlides[i]).css("margin-left", iSlideWidthPx * i);
      }

      // substr from every slide left margin
      for (var i = 0; i < ar_domSlides.length; i++)
      {
        var iNewMargin = parseInt($(ar_domSlides[i]).css("marginLeft")) - iSlideWidthPx * (iCurrentSlideID - 1);
        $(ar_domSlides[i]).css("marginLeft", iNewMargin);
      }
    }
  }

}
