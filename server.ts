import Person, { sayHello } from "./person.ts";
import { red } from "fmt/colors.ts";

console.log(red("hello world I am in the red"));

const ada: Person = {
  firstName: "Jane",
  lastName: "Doe",
};
console.log(sayHello(ada));

// const site = await fetch("https://www.deno.com");
// console.log(await site.text());

// export { };

const language = ["node", "c#", "java", "mongo"];

console.log(language);
console.log(Deno.args);

console.log("jello");

const customer = {name: 'kne'}
const a  = {}
