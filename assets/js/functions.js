window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn_top = document.querySelector("#btn_top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_top.style.display = "inline-block";
    } else {
        btn_top.style.display = "none";
    }
}

var search = document.querySelector("#box-search");
function show_search(){
    search.style.display = "block";
    document.querySelector("#search-input").focus();
}
function close_search(){
    search.style.display = "none";
}