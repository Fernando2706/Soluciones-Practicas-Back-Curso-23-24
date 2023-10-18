import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import checkSecurity from "./main.ts";


Deno.test("Comprobacion algoritmo 1", () => {
  
  assertEquals(checkSecurity("abc"), -1)
});

Deno.test("Comprobacion algoritmo 2", () => {
  
  assertEquals(checkSecurity("abcdeedwe000"), 0)
});

Deno.test("Comprobacion algoritmo 3", () => {
  
  assertEquals(checkSecurity("Super!rehgfhgt"), 1)
});

Deno.test("Comprobacion algoritmo 4", () => {
  
  assertEquals(checkSecurity("Pru111eba?del?algoritmo_super+seguro1234"), 3)
});