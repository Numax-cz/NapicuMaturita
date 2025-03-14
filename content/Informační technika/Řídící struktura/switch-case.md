---
title: switch-case
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - řídící-struktura
created: 2025-03-12
---
* Příkaz **switch** (v některých jazycích uveden jako **case**) porovnává předanou hodnotu s předem specifikovanými konstantami. 
* V případě shody předané hodnoty s definovanou konstantou, vykoná příkaz, nebo příkazy, které jsou definovány za ní.

```c
// Příklad switch v jazyce C.
#include <stdio.h>

int main() {
    int den; // Deklarace proměnné den
    printf("Zadej číslo dne (1-7): "); // Vypíše zprávu
    scanf("%d", &den);  // Načte číslo dne od uživatele (z konzole)
    
    switch (den) {  // Vybere akci na základě hodnoty den
        case 1:
            printf("Pondělí\n");  // Pokud je den 1, vypíše Pondělí
            break;  // Ukončí switch
        case 2:
            printf("Úterý\n");  // Pokud je den 2, vypíše Úterý
            break;  // Ukončí switch
        case 3:
            printf("Středa\n");  // Pokud je den 3, vypíše Středa
            break;  // Ukončí switch
        case 4:
            printf("Čtvrtek\n");  // Pokud je den 4, vypíše Čtvrtek
            break;  // Ukončí switch
        case 5:
            printf("Pátek\n");  // Pokud je den 5, vypíše Pátek
            break;  // Ukončí switch
        case 6:
            printf("Sobota\n");  // Pokud je den 6, vypíše Sobota
            break;  // Ukončí switch
        case 7:
            printf("Neděle\n");  // Pokud je den 7, vypíše Neděle
            break;  // Ukončí switch
        default:
		    printf("Neplatné číslo dne!\n");  // Pokud není platný den, vypíše chybu
            break;  // Ukončí switch
    }

    return 0;  // Ukončení programu (vrátí nulu)
}
```

```
Zadej číslo dne (1-7): 3
Středa
```