import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import splitInSpaces from "./main.ts";


Deno.test("Comprobacion algoritmo", () => {
  
  assertEquals(splitInSpaces(["cueva", "arbol" ,"tren"]), "a r b o l")
});
