import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import bubbleSort from "./main.ts";


Deno.test("Comprobacion algoritmo", () => {
  const array = [67,23,5,12,65]
  assertEquals(bubbleSort(array), [5,12,23,65,67])
});

Deno.test("Comprobacion algoritmo - Misma longitud", () => {
    const array = [67,23,5,12,65]
    assertEquals(bubbleSort(array).length, 5)
  });