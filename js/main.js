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

    // console.log(divList);

    let active= 0;

    btnNext.addEventListener ('click', function(){             
        if ( active < 5 ) {
            active = active + 1;
            console.log("valore next = " + active);     
            // console.log(divList[0]);
            divList[active].classList.add("active");
            divList[active - 1].classList.remove("active");
        } else {
            console.log("uscito");
        }   
    });      

    btnPrev.addEventListener('click',function() {
        if (active > 0) {
            active = active - 1;
            console.log("valore prev = " + active);         
            divList[active].classList.add("active");
            divList[active + 1].classList.remove("active");
        } else {
            active = 4;            
            divList[active].classList.add("active");
            divList[active + 1].classList.remove("active");
        }            
    });  

    

    

    

    

        // let activeimg= images[active].classList.add('active'); 
        
        
