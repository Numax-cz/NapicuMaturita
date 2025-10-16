---
title: Pole
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - datové-typy
created: 2025-03-12
---
* Pole jsou datové struktury, které **umožňují ukládat více hodnot stejného typu pod jedním názvem**. 
* Hodnoty jsou v paměti uloženy **sekvenčně** a přistupuje se k nim pomocí **indexu**.
* Prvky v poli jsou indexovány od 0.

```c
// Příklad pole v jazyce C.

#include <stdio.h>
int main() {
    int pole[5] = {1, 2, 3, 4, 5};  // Deklarace pole o 5 prvcích

    printf("%d\n", pole[2]);  // Vytiskne 3 (prvek na indexu 2)

    return 0;
}

```

```
3
```