'strict mode'

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

// creiamo l'array con il src delle immagini
const images= ["imm/01.jpg","imm/02.jpg","imm/03.jpg","imm/04.jpg","imm/05.jpg"];

//selezioniamo il carousel
let containerElement = document.querySelector("div.carousel");
let divList = [];

let newDiv;


// cicliamo l'array

for ( let i = 0; i < images.length; i++) {
        // console.log(i);        
        
        //creiamo il div casella da inserire nel container
        newDiv = document.createElement("div");
        // console.log(i, newDiv);

        // ora aggiungiamo la classe alle caselle create
        newDiv.classList.add('item');
        divList.push(newDiv);
        // console.log(divList);

        // inseriamo per ogni div la sua immagine
        let img = document.createElement("img");
        img.src=images[i];
        newDiv.appendChild(img);

        // aggiungiamo la classe active al primo elemento come partenza
        if ( i === 0) {
            newDiv.classList.add('active');
        }        
            
        //una volta definite le condizioni inseriamo i valori al loro posto
        containerElement.append(newDiv);         
            
    }


    let active= 0;
    const items = document.querySelectorAll(".item");

    btnNext.addEventListener ('click', function() {   
        items[active].classList.remove('active');
        if ( active === images.length - 1) {
            active = 0;
        } else {
            active++;
        }
        items[active].classList.add('active');

          
        // if ( active < 4 ) {
        //     active = active + 1;
        //     console.log("valore active in if = " + active);     
        //     divList[active].classList.add("active");
        //     divList[active - 1].classList.remove("active");
        // } else {
        //     console.log("valore active in else = " + active);     
        //     divList[0].classList.add("active");
        //     divList[4].classList.remove("active");
        //     active = 0;
        //     console.log("valore active in else = " + active);     
        //     divList[active].classList.add("active");
        // }         
    }); 

    btnPrev.addEventListener('click',function() {
        //     active = 4;
        //     // divList[4].classList.add("active");
        //     // divList[0].classList.remove("active");
        // // if (active > 0) {
        //     console.log("valore active = " + active);         
        //     active = active - 1;   
        //     console.log("valore active = " + active);         
        //     // divList[active].classList.add("active");
        //     // divList[active + 1].classList.remove("active");
        // // } else {
        //     // active = 4;            
        //     // divList[active].classList.add("active");
        items[active].classList.remove('active');
        if( active === 0 ) {
            active = images.length -1;
        } else {
            active--;
        }
        items[active].classList.add('active');

        //     // divList[active + 1].classList.remove("active");
        }            
    );  
        
        
