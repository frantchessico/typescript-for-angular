//TODO: Tipos de Dados:
let numero: number = 10;
let texto: string = "Olá, TypeScript!";
let ativo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let qualquerCoisa: any = 5; // Evite usar "any" sempre que possível
//Fim de Tipos de Dados
//------------------------------------------------------------------//


//TODO: Interfaces:
interface Pessoa {
    nome: string;
    idade: number;
  }
  
  function saudacao(pessoa: Pessoa): void {
    console.log(`Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`);
  }
  
  const usuario: Pessoa = {
    nome: "Cátia Portimão",
    idade: 30,
  };
  
  saudacao(usuario);
// Fim de Interfaces
//------------------------------------------------------------------//


//TODO: Tipos Genéricos:
function primeiroElemento<T>(array: T[]): T {
  return array[0];
}

const numeros: number[] = [1, 2, 3, 4, 5];
const primeiroNum = primeiroElemento(numeros); // primeiroNum é do tipo "number"

const nomes: string[] = ["Alice", "Bob", "Carol"];
const primeiroNome = primeiroElemento(nomes); // primeiroNome é do tipo "string"
// Fim de Tipos Genéricos
//------------------------------------------------------------------//


//TODO: Classes:

class Animal {
  constructor(public nome: string) {}

  fazerBarulho() {
    console.log(`${this.nome} faz algum som.`);
  }
}

const cachorro = new Animal("Rex");
cachorro.fazerBarulho();
//Fim de Classes:
//------------------------------------------------------------------//


//TODO: Enums:
enum DiasDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}

const diaHoje: DiasDaSemana = DiasDaSemana.Quinta;
console.log(`Hoje é ${DiasDaSemana[diaHoje]}.`);
//Fim de Enums
//------------------------------------------------------------------//


//TODO: Union e Intersection Types
function imprimirValor(valor: number | string) {
  console.log(`O valor é: ${valor}`);
}

imprimirValor(42); 
imprimirValor("Olá"); 

type Pessoa2 = { nome: string };
type Trabalhador = { emprego: string };

type PessoaTrabalhadora = Pessoa2 & Trabalhador;
const pessoaTrabalhadora: PessoaTrabalhadora = {
  nome: "João",
  emprego: "Programador",
};
//Fim de Union e Intersection Types
//------------------------------------------------------------------//

//TODO: Namespace
namespace Geometria {
  export namespace Formas {
    export class Circulo {
      constructor(public raio: number) {}
      area(): number {
        return Math.PI * this.raio ** 2;
      }
    }
  }
}

const circulo = new Geometria.Formas.Circulo(5);
console.log(`Área do círculo: ${circulo.area()}`);
//Fim de Namespace
//------------------------------------------------------------------//

