import { Personagem } from './Personagem';
import {Util} from "./Util";

export class Warrior extends Personagem {
   
    private _forca:number;
    private _agilidade:number;

    constructor(nome: string){
        super(nome);
       this._vidaAtual = 100;
        this._forca=Util.randomizar(100, 1_000);
        this._agilidade=Util.randomizar(100, 1_000);
    }

}