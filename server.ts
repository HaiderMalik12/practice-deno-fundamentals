import Person, {sayHello} from "./person.ts";

const ada: Person = {
    firstName : 'Jane',
    lastName: 'Doe'
}
console.log(sayHello(ada))



const site = await fetch("https://www.deno.com");
console.log(await site.text());

export { };

