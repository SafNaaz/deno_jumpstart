//reading files

const decoder = new TextDecoder("utf-8");

const data = await Deno.readFile("readme.txt");
console.log(decoder.decode(data));

//writing files

const encoder = new TextEncoder();
const text = encoder.encode("hello again, ninjas");

await Deno.writeFile("readme.txt", text);
