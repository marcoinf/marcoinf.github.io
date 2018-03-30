window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn_top = document.querySelector("#btn_top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_top.style.display = "inline-block";
    } else {
        btn_top.style.display = "none";
    }
}