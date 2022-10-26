'strict mode'

// creiamo l'array con il src delle immagini
const images= ["imm/01.jpg","imm/02.jpg","imm/03.jpg","imm/04.jpg","imm/05.jpg"];

//selezioniamo il carousel
let containerElement = document.querySelector("div.carousel");

// cicliamo l'array

for (let i = 0; i < images.length; i++) {
        console.log(i); 
        
        
        
        //creiamo il div casella da inserire nel container
        let newDiv = document.createElement("div");

        // ora aggiungiamo la classe alle caselle create
        newDiv.classList.add('item');

        // inseriamo per ogni div la sua immagine
        let img = document.createElement("img");
        img.src=images[i];
        newDiv.appendChild(img);

        if ( i === 0) {
            newDiv.classList.add('item', 'active');
        } 

       
            
        //una volta definite le condizioni inseriamo i valori al loro posto
        containerElement.append(newDiv);

        
}


