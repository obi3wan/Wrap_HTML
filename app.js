let $scLink = $("#SCLink");
let $zaxLink = $("#ZaxLink");
let $tmasLink = $("#TMASLink");
let $hswaLink = $("#HSWALink");
let $wishPic = $("#wishPic");
let $covalencePic = $("#covalencePic");
let $facebookPic = $("#facebookPic");
let $etsyPic = $("#etsyPic");
let $instaPic = $("#instaPic");
let $snapPic = $("#snapPic");
let $hoverLayer = $(".hoverLayer");
let $navItems = $(".nav-item");
let currentlyActiveNavItem;



// let $text = $("<h3>Wish</h3>");
// $text.css({
//     "color": "black",
//     "text-align": "center",
//     "vertical-align": "middle"
// });
// $text.appendTo($hoverLayer);

$scLink.click(function () {
    window.open("http://www.serenitycounselingshoals.org/home.html");
});

$scLink.hover(function () {
    $scLink.css("cursor", "pointer");
});

$zaxLink.click(function () {
    window.open("https://www.zaxbys.com/locations/al/florence/366-cox-creek-pkwy/menu/");
});

$zaxLink.hover(function () {
    $zaxLink.css("cursor", "pointer");
});

$tmasLink.click(function () {
    window.open("http://www.metroanimalshelter.org/");
});

$tmasLink.hover(function () {
    $tmasLink.css("cursor", "pointer");
});

$hswaLink.click(function () {
    window.open("http://www.humanesocietyofwa.org/");
});

$hswaLink.hover(function () {
    $hswaLink.css("cursor", "pointer");
});

$wishPic.click(function () {
    window.open("http://www.wish.com/");
});

$wishPic.hover(function () {
    $wishPic.css("cursor", "pointer");
    // $wishPic.removeClass("col-md-4");
    // $hoverLayer.addClass("col-md-4");
    $hoverLayer.css("display", "block");
    // $hoverLayer.text($text);
});

// $wishPic.mouseover(function() {
//     $wishPic.css("cursor", "pointer");
//     $hoverLayer.css("display", "block");
//     $hoverLayer.text("Wish");
// });

// $wishPic.mouseout(function() {
//     $hoverLayer.css("display", "none");
//     $hoverLayer.text("");
// });

// $wishPic.mouseenter(function() {
//     $wishPic.css("cursor", "pointer");
//     $hoverLayer.css("display", "block");
//     $hoverLayer.text("Wish");
//     // $hoverLayer.text($text);
// });

// $wishPic.mouseleave(function() {
//     $hoverLayer.css("display", "none");
// });

$covalencePic.click(function () {
    window.open("https://covalence.io/");
});

$covalencePic.hover(function () {
    $covalencePic.css("cursor", "pointer");
});

$facebookPic.click(function () {
    window.open("https://www.facebook.com/");
});

$facebookPic.hover(function () {
    $facebookPic.css("cursor", "pointer");
});

$etsyPic.click(function () {
    window.open("https://www.etsy.com/");
});

$etsyPic.hover(function () {
    $etsyPic.css("cursor", "pointer");
});

$instaPic.click(function () {
    window.open("https://www.instagram.com/");
});

$instaPic.hover(function () {
    $instaPic.css("cursor", "pointer");
});

$snapPic.click(function () {
    window.open("https://www.snapchat.com/");
});

$snapPic.hover(function () {
    $snapPic.css("cursor", "pointer");
});

$navItems.click(function () {
    console.log("this.id before = ", this.id);
    let a = $(this.id);
    // console.log("currentlyActiveNavItem != undefined is ", currentlyActiveNavItem != undefined);
    if (currentlyActiveNavItem != undefined) {
        currentlyActiveNavItem.removeClass("activeItem");
        currentlyActiveNavItem.addClass("largeBoldText");
    }
    else {
        a.removeClass("largeBoldText"); // not removing class 
        a.addClass("activeItem");       // not adding class 
        currentlyActiveNavItem = a;
        console.log("this after = ", a);
    }
});

// function activate(e) {
//     console.log("e.which before = ", e.which);
//     console.log("event.this before = ", event.this);
//     // console.log("currentlyActiveNavItem != undefined is ", currentlyActiveNavItem != undefined);
//     if (currentlyActiveNavItem != undefined) {
//         currentlyActiveNavItem.removeClass("activeItem");
//         currentlyActiveNavItem.addClass("largeBoldText");
//     }
//     this.removeClass("largeBoldText");
//     this.addClass("activeItem");
//     currentlyActiveNavItem = this;
//     console.log("this after = ", this);
// }