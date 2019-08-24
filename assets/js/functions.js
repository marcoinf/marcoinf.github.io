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
document.querySelector("#gotop").addEventListener("click", (event) => {
  event.preventDefault();
  scrolltotop();
});

// Cookies
function cookies(){
  if (localStorage.getItem("cookies") == "true"){
    document.querySelector(".cookies").style.display = "none";
  }
}

function setCookies(){
  localStorage.setItem("cookies", "true");
  cookies();
}
document.querySelector("#btnacceptcookies").addEventListener("click", (event) => {
  event.preventDefault();
  setCookies();
});

// Theme
function theme(){
  if (localStorage.getItem("theme") == "light"){
    style.href = '/assets/css/light.css';
  }
}

function setTheme(){
  if (localStorage.getItem("theme") == null || localStorage.getItem("theme") == "dark"){
    localStorage.setItem("theme", "light");
    style.href = '/assets/css/light.css';
  } else if (localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
    style.href = '/assets/css/dark.css';
  }
}
document.querySelector("#theme").addEventListener("click", (event) => {
  event.preventDefault();
  setTheme();
});

cookies();
theme();

// Copiando o código
// Adicionando ID em todas as figures com a classe highlight
let codes = document.querySelectorAll('.highlight > pre > code');
let countID = 0;
codes.forEach((code) => {

  // Setando um ID para cada caixa de código
  code.setAttribute("id", "code" + countID);
  
  // Adicionar o botão copiar em todas as figures com a classe highlight
  let btn = document.createElement('button');
  btn.innerHTML = "Copy";
  btn.className = "btn-copy";
  btn.setAttribute("data-clipboard-action", "copy");
  btn.setAttribute("data-clipboard-target", "#code" + countID);
  
  let div = document.createElement('div');
  div.appendChild(btn);
  
  code.before(div);
  // code.appendChild(btn);

  countID++;
}); 

let clipboard = new ClipboardJS('.btn-copy');


// Search
function showSearch(){
  document.querySelector("#container-search").style.display = "block";
}
document.querySelector("#showsearch").addEventListener("click", (event) => {
  event.preventDefault();
  showSearch();
});

var client = algoliasearch('2GHCE399VU', '3807d9576f2906fa1d363b090371b34f');
  var index = client.initIndex('dev_MARCO');
  autocomplete('#search-input', { hint: false }, [
    {
      source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
      displayKey: 'title',
      templates: {
        suggestion: function(suggestion) {
          return suggestion._highlightResult.title.value;
        }
      }
    }
  ]).on('autocomplete:selected', function(event, suggestion, dataset) {
    console.log(window.location.host + suggestion.url);
    window.location.href(window.location.host + suggestion.url);
  });
