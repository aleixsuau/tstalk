/**** BASICS ****/
// let model: number;
// let model: string;
// let model: boolean;
// let model: []; // Array
// let model: number[]; // Array of numbers
// let model: {}; // Object
// let model: any; // Lo que quieras

// model = 5;


/**** INTERMEDIATE ****/
// Tuple
// let model: [string,number];
// Union
// let model: string | number;
// Custom types
/*type Custom = 33;
let model: Custom; */
// Alias
/*type AliasType = "€" | "$";
let model: AliasType;*/

// model = 5;


/*** WITH FUNCTIONS */

/*function comeOn (param1: string, param2: number): string {
    return param1 + param2;
}*/

// Void
/*function comeOn (param1: string, param2: number): void {
    console.log("comeOn");
}*/


/*// Interface
interface IGato {
    pelo: string,
    maulla(): void
}
// Object interface implementation
let gatito: IGato = {
    maulla: () => console.log("miau"),
    pelo: "corto"
}
// Classes interface implementation
class Gato implements IGato {
    constructor(public pelo: string){
    }
    maulla(){
        console.log("Miau!");
    }
}*/
