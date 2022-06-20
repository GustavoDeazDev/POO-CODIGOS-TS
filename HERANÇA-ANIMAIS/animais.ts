

export class Animais{
  
    protected peso : number;
    protected altura : number;
    protected membros : number;
    protected especie : string;
    constructor ( especie : string, ){
        
        this.especie = especie;
        this.peso = 0;
        this.altura = 0;
        this.membros = 0;

    }
}

 

