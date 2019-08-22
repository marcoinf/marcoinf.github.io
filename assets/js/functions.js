// Progress bar
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector("#progress-bar").style.width = scrolled + "%";
}

// Scroll to top
// Thanks to => http://stackoverflow.com/a/22610562
function scrolltotop() {
  if(window.scrollY != 0){
    setTimeout(() => {
      window.scrollTo(0,window.scrollY - 30);
      scrolltotop();
    }, 5);
  }
}
document.querySelector("#gotop").addEventListener("click", () => {
  event.preventDefault();
  scrolltotop();
});

// Cookies
function setCookie(){
  document.cookie = "cookies=true";
  verifyCookie();
}

function verifyCookie(){
  
  if (document.cookie.indexOf("cookies") >= 0){
    document.querySelector(".cookies").style.display = "none";
  }
}

// Theme
function verifyTheme(){
  
  if (document.cookie.indexOf("style") < 0){
    document.cookie = "style=dark";
  }
}


function changeTheme(){
  
  verifyTheme();
  let value = '; ' + document.cookie;
  let cookies = value.split('; ');
  
  for (i = 0; i < cookies.length; i++){
      
    if (cookies[i] == "style=dark"){
      document.cookie = "style=light";
      style.href = '/assets/css/light.css';
    } else if (cookies[i] == "style=light"){
      document.cookie = "style=dark";
      style.href = '/assets/css/dark.css';
    }
  }
}
