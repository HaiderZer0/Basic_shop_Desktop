const bilddata=[{
    imag1:'/Produkt-Ansicht/phone1_photos/Blau/1.jpg',
    imag2: '/Produkt-Ansicht/phone1_photos/Blau/2.jpg',
    imag3:'/Produkt-Ansicht/phone1_photos/Blau/3.jpg'
},
{
    imag1:'/Produkt-Ansicht/phone1_photos/Grün/1.jpg',
    imag2: '/Produkt-Ansicht/phone1_photos/Grün/2.jpg',
    imag3:'/Produkt-Ansicht/phone1_photos/Grün/3.jpg'
},
{
    imag1:'/Produkt-Ansicht/phone1_photos/Lila/1.jpg',
    imag2: '/Produkt-Ansicht/phone1_photos/Lila/2.jpg',
    imag3:'/Produkt-Ansicht/phone1_photos/Lila/3.jpg'    
},
{
    imag1:'/Produkt-Ansicht/phone1_photos/Rot/1.jpg',
    imag2: '/Produkt-Ansicht/phone1_photos/Rot/2.jpg',
    imag3:'/Produkt-Ansicht/phone1_photos/Rot/3.jpg'   
},
{
    imag1:'/Produkt-Ansicht/phone1_photos/Weiß/1.jpg',
    imag2: '/Produkt-Ansicht/phone1_photos/Weiß/2.jpg',
    imag3:'/Produkt-Ansicht/phone1_photos/Weiß/3.jpg'   
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

i1.addEventListener('click', () => {
    i1.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i4.style.border = "";
    i5.style.border = "";

    o1.style.backgroundColor = "#709775";
    o2.style.backgroundColor = "#e3fade";
    o3.style.backgroundColor = "#bfb6ed";
    o4.style.backgroundColor = "#C02E38";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[0].imag1);
    image2.setAttribute("src" , bilddata[0].imag2);
    image3.setAttribute("src" , bilddata[0].imag3);
});

i2.addEventListener('click', () => {
    i2.style.border = "solid white 3.5px";
    i1.style.border = "";
    i3.style.border = "";
    i4.style.border = "";
    i5.style.border = "";

    o2.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o3.style.backgroundColor = "#bfb6ed";
    o4.style.backgroundColor = "#C02E38";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[1].imag1);
    image2.setAttribute("src" , bilddata[1].imag2);
    image3.setAttribute("src" , bilddata[1].imag3);
});

i3.addEventListener('click', () => {
    i3.style.border = "solid white 3.5px";
    i2.style.border = "";
    i1.style.border = "";
    i4.style.border = "";
    i5.style.border = "";

    o3.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o2.style.backgroundColor = "#e3fade";
    o4.style.backgroundColor = "#C02E38";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[2].imag1);
    image2.setAttribute("src" , bilddata[2].imag2);
    image3.setAttribute("src" , bilddata[2].imag3);

});

i4.addEventListener('click', () => {
    i4.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i1.style.border = "";
    i5.style.border = "";

    o4.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o2.style.backgroundColor = "#e3fade";
    o3.style.backgroundColor = "#bfb6ed";
    o5.style.backgroundColor = "#FBF7F4";

    image1.setAttribute("src" , bilddata[3].imag1);
    image2.setAttribute("src" , bilddata[3].imag2);
    image3.setAttribute("src" , bilddata[3].imag3);

});

i5.addEventListener('click', () => {
    i5.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i4.style.border = "";
    i1.style.border = "";

    o5.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#4B7590";
    o2.style.backgroundColor = "#e3fade";
    o3.style.backgroundColor = "#bfb6ed";
    o4.style.backgroundColor = "#C02E38";

    image1.setAttribute("src" , bilddata[4].imag1);
    image2.setAttribute("src" , bilddata[4].imag2);
    image3.setAttribute("src" , bilddata[4].imag3);

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

zumwarenkorb.addEventListener('click', ()=>{
    warenkorbStatus.innerHTML = Number(warenkorbStatus.innerHTML) + 1;
});