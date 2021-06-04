$(".reply-no") .click(function() {
$(".pout").toggle();
$("p").text("Oh ok well Thanks, maybe next time");
    $(".flower") .hide();
});

$(".reply-yes") .click(function() {
    $("p") .text("Okay,Thanks!, These are some things you can do with Coco :)");
    $("h1") .hide();
    $(".reply-no") .hide();
    $(".reply-yes") .hide();
    $(".pet") .show();
    $(".boba") .show();
    $(".ramen") .show();
    $(".jax") .show();
    $(".sleep") .show();
    $(".pout") .hide();
});
    
$(".pet") .click(function() {
     $(".cuddle") .toggle();
    $(".flower") .hide();
    $(".friwend-jax") .hide();
     $(".sleeps") .hide();
        $(".bobatea") .hide();
        $(".ramennoodles") .hide();
});
   $(".jax") .dblclick(function() {
     $(".friend-jax") .toggle();
    $(".flower") .hide();
       $(".cuddle") .hide();
     $(".sleeps") .hide();
        $(".bobatea") .hide();
        $(".ramennoodles") .hide();
}); 
$(".boba") .click(function() {
     $(".bobatea") .toggle();
    $(".flower") .hide();
    $(".cuddle") .hide();
     $(".sleeps") .hide();
        $(".friend-jax") .hide();
        $(".ramennoodles") .hide();
});
$(".ramen") .click(function() {
     $(".ramennoodles") .fadeIn();
    $(".flower") .hide();
    $(".cuddle") .hide();
     $(".sleeps") .hide();
        $(".bobatea") .hide();
        $(".friend-jax") .hide();
});
$(".sleep") .hover(function() {
     $(".sleeps") .fadeToggle();
    $(".flower") .hide();
    $(".cuddle") .hide();
     $(".friend-jax") .hide();
        $(".bobatea") .hide();
        $(".ramennoodles") .hide();
});