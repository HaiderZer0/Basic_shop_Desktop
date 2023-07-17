const bilddata=[{
    imag1:'/Produkt-Ansicht/phone3_Photos/phone3_1.png',
    imag2: '/Produkt-Ansicht/phone3_Photos/phone3_2.png',
    imag3:'/Produkt-Ansicht/phone3_Photos/phone3_3.png'
},
{
    imag1:'/Produkt-Ansicht/phone3_Photos/phone3_1_skin.png',
    imag2: '/Produkt-Ansicht/phone3_Photos/phone3_2_skin.png',
    imag3:'/Produkt-Ansicht/phone3_Photos/phone3_3_skin.png'
},
{
    imag1:'/Produkt-Ansicht/phone3_Photos/phone3_1_black.png',
    imag2: '/Produkt-Ansicht/phone3_Photos/phone3_2_black.png',
    imag3:'/Produkt-Ansicht/phone3_Photos/phone3_3_black.png'    
},
{
    imag1:'/Produkt-Ansicht/phone3_Photos/phone3_1 red.png',
    imag2: '/Produkt-Ansicht/phone3_Photos/phone3_2 red.png',
    imag3:'/Produkt-Ansicht/phone3_Photos/phone3_3_red.png'   
},
{
    imag1:'/Produkt-Ansicht/phone3_Photos/phone3_1 white.jpg',
    imag2: '/Produkt-Ansicht/phone3_Photos/phone3_2 white.jpg',
    imag3:'/Produkt-Ansicht/phone3_Photos/phone3_3 white.jpg'   
}
];
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");



const o1 = document.getElementById('o1');
const i1 = document.getElementById('i1');

const o2 = document.getElementById('o2');
const i2 = document.getElementById('i2');

const o3 = document.getElementById('o3');
const i3 = document.getElementById('i3');

const o4 = document.getElementById('o4');
const i4 = document.getElementById('i4');

const o5 = document.getElementById('o5');
const i5 = document.getElementById('i5');

i1.style.border = "solid white 3.5px";
o1.style.backgroundColor = "#709775";

let val = 1;
i1.addEventListener('click', () => {
    i1.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i4.style.border = "";
    i5.style.border = "";

    o1.style.backgroundColor = "#709775";
    o2.style.backgroundColor = "#F9E3DD";
    o3.style.backgroundColor = "#43494F";
    o4.style.backgroundColor = "#C02E38";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[0].imag1);
    image2.setAttribute("src" , bilddata[0].imag2);
    image3.setAttribute("src" , bilddata[0].imag3);
    val = 1;
});

i2.addEventListener('click', () => {
    i2.style.border = "solid white 3.5px";
    i1.style.border = "";
    i3.style.border = "";
    i4.style.border = "";
    i5.style.border = "";

    o2.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o3.style.backgroundColor = "#43494F";
    o4.style.backgroundColor = "#C02E38";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[1].imag1);
    image2.setAttribute("src" , bilddata[1].imag2);
    image3.setAttribute("src" , bilddata[1].imag3);
    val = 2;
});

i3.addEventListener('click', () => {
    i3.style.border = "solid white 3.5px";
    i2.style.border = "";
    i1.style.border = "";
    i4.style.border = "";
    i5.style.border = "";

    o3.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o2.style.backgroundColor = "#F9E3DD";
    o4.style.backgroundColor = "#C02E38";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[2].imag1);
    image2.setAttribute("src" , bilddata[2].imag2);
    image3.setAttribute("src" , bilddata[2].imag3);
    val = 3;

});

i4.addEventListener('click', () => {
    i4.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i1.style.border = "";
    i5.style.border = "";

    o4.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o2.style.backgroundColor = "#F9E3DD";
    o3.style.backgroundColor = "#43494F";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[3].imag1);
    image2.setAttribute("src" , bilddata[3].imag2);
    image3.setAttribute("src" , bilddata[3].imag3);
    val = 4;

});

i5.addEventListener('click', () => {
    i5.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i4.style.border = "";
    i1.style.border = "";

    o5.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o2.style.backgroundColor = "#F9E3DD";
    o3.style.backgroundColor = "#43494F";
    o4.style.backgroundColor = "#C02E38";

    image1.setAttribute("src" , bilddata[4].imag1);
    image2.setAttribute("src" , bilddata[4].imag2);
    image3.setAttribute("src" , bilddata[4].imag3);
    val = 5;

});

const p1 = document.getElementById("64");
const p2 = document.getElementById("128");
const p3 = document.getElementById("256");
const p4 = document.getElementById("512");

p1.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p1.value;
});
p2.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p2.value;
});
p3.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p3.value;
});
p4.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p4.value;
});

const zumwarenkorb = document.getElementsByClassName("zumWarenkorb")[0];
const warenkorbStatus = document.getElementsByClassName("cart_status")[0];
const radios = document.getElementsByClassName('speicher')[0];
const productName = document.getElementsByClassName('produkt_title')[0].innerHTML;
const productPrice = document.getElementsByClassName('storageOption')[0].value;
const searchBar = document.getElementById('searchArea');

zumwarenkorb.addEventListener('click', ()=>{
    let value = 0;
    warenkorbStatus.innerHTML = Number(warenkorbStatus.innerHTML) + 1;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].id;       
        }
    }
    let product = productName; 
    let color = val;
    let storage = value;
    let price = productPrice;
}); 

searchBar.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        window.location = window.location.origin + "/shop/shop.html?search=" + searchBar.value;
    }
});
