// Progress bar
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}


function setCookie(){
  document.cookie = "cookies=true";
  verifyCookie();
}

function verifyCookie(){
  
  if (document.cookie.indexOf("cookies") >= 0){
    document.querySelector(".cookies").style.display = "none";
  }
}

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
