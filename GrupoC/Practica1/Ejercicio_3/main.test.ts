import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import mapTime from "./main.ts";


Deno.test("Comprobacion algoritmo 1", () => {
  
  assertEquals(mapTime("a"), "Not valid")
});

Deno.test("Comprobacion algoritmo 2", () => {
  
  assertEquals(mapTime("12:00 pm"), "0000")
});

Deno.test("Comprobacion algoritmo 3", () => {
  
  assertEquals(mapTime("11:33 pm"), "2333")
});

Deno.test("Comprobacion algoritmo 4", () => {
  
  assertEquals(mapTime("01:33 am"), "0133")
});