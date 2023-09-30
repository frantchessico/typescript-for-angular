

# TypeScript Para Angular

Este é um guia abrangente sobre os conceitos fundamentais do TypeScript, incluindo explicações e exemplos.

## Tipos de Dados

Em TypeScript, você pode declarar variáveis com tipos de dados específicos. Isso ajuda a tornar seu código mais seguro e legível. Aqui estão alguns tipos de dados comuns:

- `number`: Usado para números inteiros e de ponto flutuante.
- `string`: Usado para representar texto.
- `boolean`: Usado para valores verdadeiros ou falsos.
- `null` e `undefined`: Usados para representar a ausência de valor.
- `any`: Um tipo que permite que uma variável aceite qualquer tipo de dado. Evite usar `any` sempre que possível.
- `void`: Usado para funções que não retornam um valor.
- `never`: Usado para funções que nunca retornam (geralmente usadas para exceções).

```typescript
let numero: number = 10;
let texto: string = "Olá, TypeScript!";
let ativo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let qualquerCoisa: any = 5; // Evite usar "any" sempre que possível
```

## Interfaces

As interfaces são usadas para definir a estrutura de objetos em TypeScript. Elas são particularmente úteis ao trabalhar com objetos complexos, pois definem quais propriedades e métodos um objeto deve ter.

```typescript
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
```

## Tipos Genéricos

Os tipos genéricos permitem que você crie funções, classes ou tipos que trabalhem com vários tipos de dados de forma flexível. Eles são indicados com `<T>` e são especialmente úteis para criar código reutilizável.

```typescript
function primeiroElemento<T>(array: T[]): T {
  return array[0];
}

const numeros: number[] = [1, 2, 3, 4, 5];
const primeiroNum = primeiroElemento(numeros); // primeiroNum é do tipo "number"

const nomes: string[] = ["Alice", "Bob", "Carol"];
const primeiroNome = primeiroElemento(nomes); // primeiroNome é do tipo "string"
```

## Classes

Classes são uma parte fundamental da programação orientada a objetos em TypeScript. Elas permitem criar objetos com propriedades e métodos. Você pode definir construtores e herança de classes.

```typescript
class Animal {
  constructor(public nome: string) {}

  fazerBarulho() {
    console.log(`${this.nome} faz algum som.`);
  }
}

const cachorro = new Animal("Rex");
cachorro.fazerBarulho();
```

## Enums

Enums são usados para criar conjuntos nomeados de valores. Eles são úteis quando você tem um conjunto fixo de opções, como os dias da semana ou os estados de um pedido.

```typescript
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
```

## Union e Intersection Types

Union types (`|`) permitem que uma variável possa ter mais de um tipo. Por exemplo, `number | string` significa que a variável pode ser um número ou uma string. Intersection types (`&`) permitem combinar tipos para criar um novo tipo que inclui todas as propriedades de ambos os tipos.

```typescript
function imprimirValor(valor: number | string) {
  console.log(`O valor é: ${valor}`);
}

imprimirValor(42); // Funciona
imprimirValor("Olá"); // Funciona

type Pessoa2 = { nome: string };
type Trabalhador = { emprego: string };

type PessoaTrabalhadora = Pessoa2 & Trabalhador;
const pessoaTrabalhadora: PessoaTrabalhadora = {
  nome: "João",
  emprego: "Programador",
};
```

## Namespace

Namespaces são usados para organizar código em módulos lógicos separados, evitando conflitos de nome entre diferentes partes do código.

```typescript
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
```

## Decoradores

Decoradores são usados para adicionar metadados ou comportamentos a classes, métodos e propriedades. Eles são frequentemente usados em bibliotecas e frameworks como Angular para estender funcionalidades.

```typescript
function logar(classe: any) {
  console.log(`Registrando a classe: ${classe}`);
}

@logar
class ExemploClasse {
  constructor() {
    console.log("Esta é uma instância da classe ExemploClasse.");
  }
}
```

Estes são os conceitos fundamentais do TypeScript que você pode usar para escrever código seguro e escalável em aplicações web e Node.js. Explore mais aprofundadamente cada tópico conforme necessário para seu projeto.


### Por:
  **[Francisco Inoque](https://franciscoinoque.tech/)** da **[SavanaPoint](https://savanapoint.com)**