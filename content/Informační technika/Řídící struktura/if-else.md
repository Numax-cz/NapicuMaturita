---
title: if-else
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - řídící-struktura
created: 2025-03-12
---
* **Podmíněný příkaz** a podmíněná konstrukce jsou prostředky programovacího jazyka, které **umožňují rozdílné chování programu, v závislosti na specifikované logické podmínce**, která je vyhodnocena jako pravda, či nepravda.
	* **`IF..GOTO`** Forma vyskytující se v nestrukturovaných programovacích jazycích. Napodobuje typickou strojovou instrukci GOTO, která umožňuje skok na určitý řádek kódu.
	* **`IF..THEN..(ENDIF)`** Pokud je podmínka v části IF vyhodnocena jako pravda, je vykonán kód specifikovaný v části THEN. V případě, že je podmínka vyhodnocena jako nepravda, je kód specifikovaný v části THEN vynechán a program pokračuje dále za částí ENDIF.
	* **`IF..THEN..ELSE..(ENDIF)`** Oproti předchozímu výrazu, je v případě vyhodnocení podmínky v části IF jako nepravda vykonán kód specifikovaný v části ELSE.
	* Podmíněné příkazy mohou být a také velmi často bývají částí jiných podmíněných příkazů. Některé jazyky umožňují sloučit ELSE a IF do ELSEIF.

```c
//Příklad if, else if, else v jazyce C.
#include <stdio.h>

int main() {
    int a; // Deklarace proměnné
    printf("Zadej číslo: "); // Vypíše zprávu
    scanf("%d", &a);  // Načte číslo, které uživatel zadá

    if (a > 0) {  // Pokud je číslo větší než 0
        printf("ano\n");  // Vypíše "ano"
    } else if (a == 0) {  // Pokud je číslo rovno 0
        printf("nula\n");  // Vypíše "nula"
    } else {  // Pokud je číslo menší než 0
        printf("ne\n");  // Vypíše "ne"
    }

    return 0;  // Ukončení programu
}
```

```
Zadej číslo: 0
nula
```