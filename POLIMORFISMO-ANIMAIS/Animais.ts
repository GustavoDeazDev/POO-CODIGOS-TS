import { Util } from "./Util";


export abstract class Animais {
  protected _nome: string;
  protected _peso: number;
  protected _força: number;
  protected _energia: number;
  

  constructor(nome: string) {
    this._nome = nome;
    this._peso = Util.randomizar(100, 1_000);
    this._força = Util.randomizar(100, 1_000);
    this._energia = Util.randomizar(100, 1_000);
    
  }

  public abstract atacar(): string;

  
}