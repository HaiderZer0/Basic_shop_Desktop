const searchBar = document.getElementById("searchArea");
const lupe = document.getElementsByClassName("search")[0];

let clicked = false;

lupe.addEventListener("click", ()=>{
    if(clicked == false){
        searchBar.style.opacity = 1;
        searchBar.style.width = 180 + "px";
        searchBar.style.padding = 10 + "px"
        lupe.style.color = "#709775";
        clicked = true;
    }
    else{
        searchBar.style.opacity = 0;
        searchBar.style.width = 0 + "px";
        searchBar.style.padding = 0 + "px"
        lupe.style.color = "";
        clicked = false;
    }
});

searchBar.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        window.location = window.location.origin + "/search/search.html?search=" + searchBar.value;
    }
});
