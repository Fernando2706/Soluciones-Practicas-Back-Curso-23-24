import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import getMultiples from "./main.ts";


Deno.test("Comprobacion algoritmo", () => {
  
  assertEquals(getMultiples(50), [
    0,  3,  5,   6,  9, 10, 12, 15, 18, 20, 21,
   24, 25, 27,  30, 33, 35, 36, 39, 40, 42, 45,
   48, 50
 ])
});
