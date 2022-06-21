
import { Animais } from "./Animais";
import { Util } from "./Util";

export class Repteis extends Animais {
  private _impulsao: number;
  private _velocidade: number;
 
  constructor(nome: string) {
    super(nome);
   
    this._velocidade = Util.randomizar(10, 2_000);
    this._impulsao = Util.randomizar(10, 2_000);
  }

  public atacar(): string {
    return "Ataque do Réptil";
  }

  public defender(atacante: Animais): number {
    return this._energia - Util.randomizar(10, 100);
  }
}