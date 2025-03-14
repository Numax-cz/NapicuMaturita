---
title: for
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - řídící-struktura
created: 2025-03-12
---
* **Cyklus for** for je řídicí struktura počítačového programu a je svou činností podobný cyklu [[while-do]] **s testováním podmínky na začátku cyklu**.

```c
// Příklad for v jazyce C.
#include <stdio.h>

int main() {
    // Smyčka for, která se opakuje 5krát
    for (int i = 1; i <= 5; i++) {  // Tento řádek definuje smyčku
        // Inicializace proměnné i na hodnotu 1, což je výchozí hodnota
		// Podmínka i <= 5 znamená, že smyčka bude pokračovat, dokud i bude menší nebo rovno 5
        // Po každém vykonání těla smyčky se proměnná i zvětší o 1 díky i++
        
        printf("Hodnota i: %d\n", i);  // Vypíše aktuální hodnotu proměnné i
    }

    return 0;  // Ukončení programu
}
```

```
1
2
3
4
5
```