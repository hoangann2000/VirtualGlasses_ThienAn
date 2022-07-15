let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

// console.log(dataGlasses);

const ELE = (id) => {
    return document.querySelector(id);
  };



// let showList =  (mang) => {
//     let content = "";
//     dataGlasses.map((sp) => {
//         content += `
//             <a onclick="showVir(${})" class="col-4"> 
//                 <img src=${sp.src} style="width:100%; cursor:pointer" />
//             </a>
//         `
//     });
//     ELE("#vglassesList").innerHTML = `${content}`;
// }

let showList =  () => {
    let content = "";
    for (const index in dataGlasses) {
        let idx = dataGlasses[index];
       content += `
       <a onclick="showVir(${index})" class="col-4"> 
        <img src=${idx.src} style="width:100%; cursor:pointer" />
        </a>
       `
    }
    ELE("#vglassesList").innerHTML = `${content}`;
}
showList(dataGlasses)


let showVir = (index) => {
    let contentVir = `
        <img src="${dataGlasses[index].virtualImg}"/>
    `
    ELE("#avatar").innerHTML = `${contentVir}`;

    ELE("#glassesInfo").style.display = "block";    
    let contentIn4 = `
        <h5>${dataGlasses[index].name} - ${dataGlasses[index].brand} (${dataGlasses[index].color})</h5>
        <P style="color:#55ee55"><span style="background-color:red; color: #fff; padding:2px 5px; margin-right: 8px">$${dataGlasses[index].price}</span>Stocking</P> 
        <p>${dataGlasses[index].description}</p>
    `
    ELE("#glassesInfo").innerHTML = `${contentIn4}`;
}
window.showVir = showVir;

let removeGlasses = (isValid) => {
    if(isValid) {
        ELE("#avatar img").style.display = "block"
        ELE("#glassesInfo").style.display = "block"
    }else {
        ELE("#avatar img").style.display = "none"
        ELE("#glassesInfo").style.display = "none"
    }
}
window.removeGlasses = removeGlasses;

