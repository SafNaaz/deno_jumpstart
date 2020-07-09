//uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

// fs module

import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson("ninjas.json");
console.log(jsonObj);

const books = [
  { title: "the way of kings", author: "brandon sendersion" },
  { title: "name of the wind", author: "patrick rothfus" },
];

await writeJson("books.json", books, { spaces: 2 });
console.log("create books.json");
