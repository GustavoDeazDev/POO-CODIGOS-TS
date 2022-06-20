import { Util } from './../AULA_HERANÇA/Util';
import { Animais } from './animais';




                                   
export class Mamifero extends Animais {
    private ataque : number;
    private defesa : number;
    

    constructor(  especie: string, peso : number ){
        super(especie);
        this.ataque = 100;
        this.defesa = 50;
        this.peso= peso;
        
        this.altura = 50;
        this.membros = 4;

       
        
    }
    public status() : string {
        return(
            "Animal \n " +
            "\n Especie:" + this.especie +
            ("\n Altura:" + this.altura) +
            ("\n Peso:" + this.peso) +
            ("\n Membros:" + this.membros) +
            ("\n Ataque:" + this.ataque) +
            ("\n Defesa:" + this.defesa) 
           
        );
    }

        public atacar () : number {
             return  (
            this.ataque += Util.randomizar(1, 100)
           );
             }
             public defender () : number {
                return  (
              this.defesa += Util.randomizar(1, 100)
              );
                }
            }


           



