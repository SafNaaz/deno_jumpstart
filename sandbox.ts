//uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

// fs module

import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson("ninjas.json");
console.log(jsonObj);
