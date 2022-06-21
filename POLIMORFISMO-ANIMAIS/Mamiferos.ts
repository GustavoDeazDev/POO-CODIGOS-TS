
import { Animais } from "./Animais";
import { Util } from "./Util";

export class Mamiferos extends Animais {
 
  private _rapidez: number;
  private _versatilidade: number;
  constructor(nome: string) {
    super(nome);
   
    this._rapidez = Util.randomizar(100, 1_000);
    this._versatilidade = Util.randomizar(100, 1_000);
    this._energia = Util.randomizar(100, 1_000);
  }

  public atacar(): string {
    return "Ataque do Mamifero";
  }

 
}