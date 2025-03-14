---
title: while-do
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - řídící-struktura
created: 2025-03-12
---

* **Cyklus while-do** je řídicí struktura počítačového programu a označuje cyklus, který **testuje podmínku opakování cyklu vždy na počátku průběhu těla cyklu** (srovnej s cyklus [[do-while]]).
* Pokud zajistíme hned **na počátku nesplnění podmínky cyklu,** **cyklus se ani jednou nevykoná**. Počet průchodů cyklem může být nulový, pokud při prvním vykonání cyklu je podmínka neplatná.

```c
// Příklad while-do v jazyce C.
#include <stdio.h>

int main() {
    int i = 1;
    
    // Smyčka while
    while (i <= 5) {  // Podmínka se kontroluje před každým vykonáním těla smyčky
        printf("Hodnota i: %d\n", i);  // Vypíše aktuální hodnotu i
        i++;  // Zvýší hodnotu i o 1
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
<br><br>
![[Pasted image 20250312211049.png|center|300]]