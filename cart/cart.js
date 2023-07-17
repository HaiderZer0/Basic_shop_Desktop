const cartData=[{
    name:'Börni Phone 3',
    image:'/Produkt-Ansicht/phone3_Photos/phone3_1 red.png',
},
{
    name:'Börni Pad Pro',
    image:'/Produkt-Ansicht/pad_pro_fotos/pad_pro silber.jpg',
},
{
    name:'Börni Phone 1',
    image:'/Produkt-Ansicht/phone1_photos/Blau/1.jpg',
},
{
    name:'Börni Pad 2',
    image:'/Produkt-Ansicht/pad2/pad2_1 black.jpg',
},
{
    name:'Börni Phone 2',
    image:'/Produkt-Ansicht/phone2_photos/Gelb/1.jpg',
},
{
    name:'Börni Pad 1',
    image:'/Produkt-Ansicht/pad_pro_fotos/pad_pro gray.jpg',
},
{
    name:'Börni Laptop',
    image:'/Produkt-Ansicht/laptop_fotos/laptop_gold.jpg',
}
];

const storeddata=[{
    name:'Börni Phone 3',
    preis: "1100",
    menge: 3,
},
{
    name:'Börni Pad Pro',
    preis: "1300",
    menge: 4,
},
{
    name:'Börni Phone 1',
    preis: "1400",
    menge: 1,
},
{
    name:'Börni Pad 2',
    preis: "1900",
    menge: 1,
},
{
    name:'Börni Phone 2',
    preis: "1200",
    menge: 1,
},
{
    name:'Börni Pad 1',
    preis: "1999",
    menge: 1,
},
{
    name:'Börni Laptop',
    preis: "1800",
    menge: 1,
}
];

let productname = "Börni Laptop";
let gesamtprice = document.getElementsByClassName("priceTag2")[0];
let productpage = document.getElementsByClassName("productPage")[0];
for(let i2 = 0; i2 < storeddata.length; i2++){
    for(let i = 0; i < 7; i++){
        if(storeddata[i2].name == cartData[i].name){
            let card = document.createElement("div");
            card.setAttribute("class","card");
            productpage.appendChild(card);
    
            let image = document.createElement("img");
            image.setAttribute("src", cartData[i].image);
            image.setAttribute("class", "imageCart");
            card.appendChild(image);
    
            let product_name = document.createElement("p");
            product_name.innerHTML = cartData[i].name;
            product_name.setAttribute("class", "productname");
            card.appendChild(product_name);
    
            let label = document.createElement("label");
            label.innerHTML = "Menge: ";
            label.setAttribute("class", "mengeLabel");
            card.appendChild(label);
    
            let input = document.createElement("input");
            input.setAttribute("class", "menge");
            input.setAttribute("type", "number");
            input.setAttribute("value", storeddata[i2].menge);
            card.appendChild(input);
    
            let price = document.createElement("h2");
            price.setAttribute("class", "productprice");
            preis = storeddata[i2].preis.toString() + " €";
            price.innerHTML = preis;
            card.appendChild(price);
        }

    }
    gesamtprice.innerHTML = (Number(gesamtprice.innerHTML.replace("€", "")) + Number(storeddata[i2].preis) * storeddata[i2].menge).toString()  + " €";
}
let versandkosten = document.getElementsByClassName("priceTag1")[0];
if(Number(gesamtprice.innerHTML.replace("€", "")) > 1000){
    versandkosten.innerHTML = "10.00 €"
}

let gesamt = document.getElementsByClassName("Gesamt_preis")[0];
gesamt.innerHTML = ((Number(gesamtprice.innerHTML.replace("€", ""))) + (Number(versandkosten.innerHTML.replace("€", "")))).toString() + ".00 €";