---
title: do-while
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - řídící-struktura
created: 2025-03-12
---
* **Cyklus do-while** je řídicí struktura počítačového programu a označuje **cyklus, který testuje podmínku opakování cyklu vždy na konci průběhu těla cyklu** (srovnej s cyklus [[while-do]]). 
* Počet průchodů cyklem je vždy alespoň jeden, vzhledem k testování podmínky na konci cyklu.
* Toho se dá využít například v dlouhých procesech, při kterých se například ověřují vstupní údaje. Při neplatnosti kteréhokoli z nich je třeba proces ukončit ihned.

```c
// Příklad do-while v jazyce C.
#include <stdio.h>

int main() {
    int i = 1; // Deklarace proměnné i s počáteční hodnotou 1
    
    // Smyčka do-while
    do {
        printf("Hodnota i: %d\n", i); // Vypíše aktuální hodnotu i
        i++;  // Zvýší hodnotu i o 1
    } while (i <= 5);  // Smyčka pokračuje, dokud i je menší nebo rovno 5
    
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
![[Pasted image 20250312211132.png|center|300]]