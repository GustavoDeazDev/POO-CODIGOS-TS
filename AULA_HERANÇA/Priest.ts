import { Personagem } from './Personagem';
import { Util } from "./Util";

export class Priest extends Personagem {
  
    private _espirito: number;
    private _versatilidade: number;
    constructor(nome: string){
         super(nome);
        this._armadura = 1_000;
        this._vidaMaxima=Util.randomizar(200, 10_000);
        this._vidaAtual=Util.randomizar(40, this._vidaMaxima);
        this._espirito=Util.randomizar(100, 1_000);
        this._versatilidade=Util.randomizar(100, 1_000);
    }

}