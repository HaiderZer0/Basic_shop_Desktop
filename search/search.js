const searchData=[{
    name:'Börni Phone 3',
    image:'/shop/fotosShop/borni2.jpeg',
    href: '/Produkt-Ansicht/index.html',
},
{
    name:'Börni Pad Pro',
    image:'/shop/fotosShop/ipad pro 1.png',
    href: '/Produkt-Ansicht/pad_pro_files/padPro.html',
},
{
    name:'Börni Phone 1',
    image:'/shop/fotosShop/borni1.jpeg',
    href: '/Produkt-Ansicht/phone1_files/phone1.html',
},
{
    name:'Börni Pad 2',
    image:'/shop/fotosShop/ipad air 1.png',   
    href: 'Produkt-Ansicht/pad2_files/pad2.html',
},
{
    name:'Börni Phone 2',
    image:'/shop/fotosShop/borni3.jpeg',
    href: '/Produkt-Ansicht/phone2_files/phone2.html',
},
{
    name:'Börni Pad 1',
    image:'/shop/fotosShop/ipad 1.png',
    href: '/Produkt-Ansicht/pad1_files/pad1.html',
},
{
    name:'Börni Laptop',
    image:'/shop/fotosShop/mac 1.png',
    href: '/Produkt-Ansicht/laptop_files/laptop.html',
}
];

let search = " ";
search = window.location.search.split('?search=')[1];

const searchArray = search.toLowerCase().split("");

document.getElementsByClassName("searchTitle")[0].innerHTML = "Suchergebnisse für: " + search;
const ergebnisse = document.getElementsByClassName("ergebnisse")[0];


let count = 0;
let vergleich = false;


for(let i = 0; i < 7; i++){
    const searchDataName = searchData[i].name.toLowerCase().split("");
    for(let i2 = 0; i2 < searchData[i].name.length; i2++){
        if(searchArray.includes(searchDataName[i2])){
            vergleich = true
            break;
        }
    }
    if(vergleich){
        let card = document.createElement('a');
        card.setAttribute("class","card");
        ergebnisse.appendChild(card);
        card.setAttribute("href", searchData[i].href);

        let cardImage = document.createElement('img');
        cardImage.setAttribute("class", "image");
        card.appendChild(cardImage);

        cardImage.setAttribute("src", searchData[i].image);

        let cardTitle = document.createElement('h2');
        cardTitle.setAttribute("class", "cardTitle");
        cardTitle.innerHTML = searchData[i].name;

        card.appendChild(cardTitle);
        count++;
        vergleich = false;
    }
}

if(count == 0){
    let noResult = document.createElement('h1');
    noResult.innerHTML = "No match found";
    ergebnisse.appendChild(noResult);
}