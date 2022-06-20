
import { Mamifero } from "./mamiferos";
import prompt from "prompt-sync";

let cachorro : Mamifero = new Mamifero("cachorro", 20);

let teclado = prompt();
let option: number = 0;

while (option != 4  ){
    console.log(`+========= Personagem }=============+`);
    console.log("|1. atacar              |");
    console.log("|2. Defender               |");
  
    console.log("|3. Imprimir atributos             |");
    console.log("|4. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
        
            
          console.log("Mordida :"+ cachorro.atacar());
            break;
       
        case 2:
           
         
            
          console.log("Corrida: " + cachorro.defender());
            
            break;

            case 3:
              
                
               console.log(cachorro.status());
                break;

               
      
        default:
            break;
    }
}
