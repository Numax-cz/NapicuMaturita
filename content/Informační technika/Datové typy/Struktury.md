---
title: Struktury
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - datové-typy
created: 2025-03-12
---
* Struktury jsou složené datové typy, které **umožňují uchovávat různé typy hodnot v jednom objektu**. 
* V C se používají k organizaci různých dat do jednoho balíčku.
```c
// Příklad struktury v jazyce C.
#include <stdio.h>

// Definice struktury pro osobu
struct Osoba {
    char jmeno[50];
    int vek;
};

int main() {
    struct Osoba osoba1 = {"Jan", 30};  // Inicializace struktury
    printf("Jméno: %s, Věk: %d\n", osoba1.jmeno, osoba1.vek);
    return 0;
}
```

```
Jméno: Jan, Věk: 30
```