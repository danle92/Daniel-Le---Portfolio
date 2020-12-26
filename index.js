// Home Page--------------

$("#monitor-base").css("display", "block").animate({
  top: "50px",
  opacity: 1,
}, 1000);
$("#monitor-stand").delay(500).css("display", "block").animate({
top: "50px",
  opacity: 1,
}, 1500);
$("#monitor-screen").delay(1000).css("display", "block").animate({
  top: "50px",
  opacity: 1,
}, 2000);

$("#line0").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 1000);
$("#line1").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 1000);
$("#line2").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 1500);
$("#line3").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 2000);


$("#home_titlea").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 1000);
$("#home_titleb").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 1500);
$("#frontend-title").delay(2000).css("display", "block").animate({
  marginTop: "0",
  opacity: 1,
}, 2000);

//Home Page scroll animation
$(document).ready(function() {
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 2000, 'swing');

  });
});

//Scroll function------------

var $win = $(window);

$win.on("scroll", function() {

  var scroll = $win.scrollTop();

  // About Me Page
  if (scroll >= 357) {
    $("#heading_aboutme").css("display", "block").animate({
      marginLeft: "",
      opacity: 1,
    }, 1000);
  }

  if (scroll >= 500) {
    $(".aboutme_s1").css("display", "block").animate({
      marginTop: "",
      opacity: 1,
    }, 1000);
  }

    //Skills panel----------

  if (scroll >= 700) {
    $("#skill_box1").css("display", "block").animate({
      marginTop: "",
      opacity: 1,
    }, 1000);
    $("#skill_box2").delay(500).css("display", "block").animate({
      marginTop: "",
      opacity: 1,
    }, 1000);
    $("#skill_box3").delay(700).css("display", "block").animate({
      marginTop: "",
      opacity: 1,
    }, 1000);
    $("#skill_box4").delay(900).css("display", "block").animate({
      marginTop: "",
      opacity: 1,
    }, 1000);
  }

  if (scroll >= 900) {
    $(".aboutme_s2").css("display", "block").animate({
      marginTop: "",
      opacity: 1,
    }, 1000);
  }

  if (scroll >= 920) {

    $("#html").animate({
      width: "85%",
    }, {
      duration: 1500,
      easing: "swing",
      step: function(x) {
        $(".skill_score1").text(Math.round(x * 100 / 100) + "%");
      }
    });

    $("#CSS").delay(150).animate({
      width: "85%",
    }, {
      duration: 1500,
      easing: "swing",
      step: function(x) {
        $(".skill_score2").text(Math.round(x * 100 / 100) + "%");
      }
    });

    $("#bootstrap").delay(300).animate({
      width: "60%",
    }, {
      duration: 1500,
      easing: "swing",
      step: function(x) {
        $(".skill_score3").text(Math.round(x * 100 / 100) + "%");
      }
    });

    $("#javascript").delay(450).animate({
      width: "40%",
    }, {
      duration: 1500,
      easing: "swing",
      step: function(x) {
        $(".skill_score4").text(Math.round(x * 100 / 100) + "%");
      }
    });

    $("#photoshop").delay(600).animate({
      width: "70%",
    }, {
      duration: 1500,
      easing: "swing",
      step: function(x) {
        $(".skill_score5").text(Math.round(x * 100 / 100) + "%");
      }
    });
  }
  //Skills end----------

// Work Exp --------------

if (scroll >= 1200) {
  $("#heading_workexp").css("display", "block").animate({
    marginLeft: "",
    opacity: 1
  }, 1000);
}

if (scroll >= 1300) {
  $(".knightfrank").css("display", "block").animate({
    marginTop: "",
    opacity: 1
  }, 1000);
  $(".line1").css("display", "block").animate({
    marginTop: "",
    opacity: 1
  }, 1000);
}

if (scroll >= 1500) {
  $(".bigw").css("display", "block").animate({
    marginTop: "",
    opacity: 1
  }, 1000);
}

  //Portfolio ----------------

  if (scroll >= 2000) {
    $("#portfolio_heading").css("display", "block").animate({
      marginLeft: "",
      opacity: 1
    }, 1000);
  }

  if (scroll >= 2200) {
    $("#portfolio").css("display", "block").animate({
      marginTop: "",
      opacity: 1
    }, 1000);
    $("#contact").fadeIn("slow");
  }

  if (scroll >= 3300) {

    $("#contact_title").css("display", "block").animate({
      marginLeft: "",
      opacity: 1
    }, 1000);
  }

  if (scroll >= 3400) {
    $("#contact_form").css("display", "block").animate({
      marginTop: "",
      opacity: 1
    }, 1000);
  }

  // console.log(scroll);
});


// Work Experience Section ---------------------------------------


$(".portfolio_box").hover(function() {
  var portfoliohover = $(this).attr("id");
  $("#" + portfoliohover + "a").animate({opacity: 1},250);
  $("#" + portfoliohover + "b").animate({top: "35%",opacity: 1},250);
}, function() {
  var portfoliohover = $(this).attr("id");
  $("#" + portfoliohover + "a").animate({opacity: 0},250);
  $("#" + portfoliohover + "b").animate({top: 0,opacity: 0},250);
  console.log(portfoliohover);
});
