const bilddata=[{
    imag1:'/Produkt-Ansicht/pad2/pad2_1 black.jpg',
    imag2: '/Produkt-Ansicht/pad2/pad2_2 black.jpg',
    imag3:'/Produkt-Ansicht/pad2/pad2_3_black-transformed.png'
},
{
    imag1:'/Produkt-Ansicht/pad2/pad2_1 blue.jpg',
    imag2: '/Produkt-Ansicht/pad2/pad2_2 blue.jpg',
    imag3:'/Produkt-Ansicht/pad2/pad2_3_blue-transformed.png'
},
{
    imag1:'/Produkt-Ansicht/pad2/pad2_1 rose.jpg',
    imag2: '/Produkt-Ansicht/pad2/pad2_2 rose.jpg',
    imag3:'/Produkt-Ansicht/pad2/pad2_3_rose-transformed.png'    
},
{
    imag1:'/Produkt-Ansicht/pad2/pad2_1 violett.jpg',
    imag2: '/Produkt-Ansicht/pad2/pad2_2 violett.jpg',
    imag3:'/Produkt-Ansicht/pad2/pad2_3_violett-transformed.png'   
},
{
    imag1:'/Produkt-Ansicht/pad2/pad2_1 polarstern.jpg',
    imag2: '/Produkt-Ansicht/pad2/pad2_2 polarstern.jpg',
    imag3:'/Produkt-Ansicht/pad2/pad2_3_polarstern-transformed.png'   
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
    o2.style.backgroundColor = "#93B2C1";
    o3.style.backgroundColor = "#E6D2CF";
    o4.style.backgroundColor = "#BEBCD2";
    o5.style.backgroundColor = "#E4E1D8";

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

    o1.style.backgroundColor = "#767479";
    o2.style.backgroundColor = "#709775";
    o3.style.backgroundColor = "#E6D2CF";
    o4.style.backgroundColor = "#BEBCD2";
    o5.style.backgroundColor = "#E4E1D8";

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
//
    
    o2.style.backgroundColor = "#93B2C1";
    o1.style.backgroundColor = "#767479";
    o3.style.backgroundColor = "#709775";
    o4.style.backgroundColor = "#BEBCD2";
    o5.style.backgroundColor = "#E4E1D8";

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

    o1.style.backgroundColor = "#767479";
    o4.style.backgroundColor = "#709775";
    o3.style.backgroundColor = "#E6D2CF";
    o2.style.backgroundColor = "#93B2C1";
    o5.style.backgroundColor = "#E4E1D8";

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
    o2.style.backgroundColor = "#93B2C1";
    o3.style.backgroundColor = "#E6D2CF";
    o4.style.backgroundColor = "#BEBCD2";
    o1.style.backgroundColor = "#767479";

    image1.setAttribute("src" , bilddata[4].imag1);
    image2.setAttribute("src" , bilddata[4].imag2);
    image3.setAttribute("src" , bilddata[4].imag3);

});

const p1 = document.getElementById("64");
const p2 = document.getElementById("256");

p1.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p1.value;
});
p2.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p2.value;
});

const zumwarenkorb = document.getElementsByClassName("zumWarenkorb")[0];
const warenkorbStatus = document.getElementsByClassName("cart_status")[0];

zumwarenkorb.addEventListener('click', ()=>{
    warenkorbStatus.innerHTML = Number(warenkorbStatus.innerHTML) + 1;
});