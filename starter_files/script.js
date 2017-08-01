let portfolioData = [
    {
        img : "img/boat.jpg",
        h2 : "Boats"
    },
    {
        img : "img/hair.jpg",
        h2 : "Hair Styles"
    },
    {
        img : "img/shirts.jpg",
        h2 : "t Shirts"
    },
    {
        img : "img/dirt.jpg",
        h2 : "Dirt"
    }
];


/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/
/*note use section id hero getElementById**/
// let hero document.getElementById("#hero");
// const heading = document.createElement( "h1" );
//
// const mainHeading = document.createTextNode( "ACME Design Studio" );

let section = document.querySelector('#hero');
let heading = document.createElement("h1");
section.appendChild(heading);
heading.textContent="Acme Design Studio";

let paragraph = document.createElement('p');

section.appendChild(paragraph);
paragraph.textContent=("We are dedicated to producing the best designs in the world");



/*The unordered list should contain four li tags, all of which should contain an img tag and an h2 tag. */





/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/
const portfolio = document.querySelector("#portfolio");
const portfolio_list = document.createElement("ul");
li_list = ["Boats", "Hair Style", "T-Shirts", "Dirt"];
img_list = ["img/boat.jpg", "img/hair.jpg", "img/shirt.jpg;", "img/dirt.jpg"];
portfolio.appendChild(portfolio_list);
for (i=0; i<portfolioData.length; i++) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  li.appendChild(img);
  li.appendChild(h2);
  portfolio_list.appendChild(li);
  img.setAttribute("src", portfolioData[i].img);
  h2.textContent=portfolioData[i].h2;
}

let navigation = document.querySelector("#main_navigation");
let newClass = document.getElementById(".dropdown");
newClass.style.visible = "hidden";




/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
