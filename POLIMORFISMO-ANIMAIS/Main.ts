

import { Repteis } from './Repteis';
import { Mamiferos } from './Mamiferos';
import { Animais} from './Animais';




let vaca: Mamiferos = new Mamiferos("Vaquinha mumu");
let lagarto: Animais = new Repteis("Lagartinho lalau");
let macaco : Mamiferos = new Mamiferos("Macaquinho mama")

const bichos: Animais[] = [];
bichos.push(vaca);
bichos.push(lagarto);
bichos.push(macaco);

bichos.forEach((b) => console.log(b.atacar()));



