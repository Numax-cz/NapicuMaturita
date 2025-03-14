---
title: Třídy
author: Marcel Mikoláš
tags:
  - výpočetní-technika
  - datové-typy
created: 2025-03-12
---
* Třída je základní stavební blok **objektově orientovaného programování (OOP)**. Umožňuje definovat vlastní datové typy, které kombinují **atributy** (vlastnosti) a **metody** (funkce) do jednoho celku. Třídy v C++ slouží jako šablona pro vytváření **objektů**.

```cpp
// Příklad třídy v jazyce C++.
#include <iostream>

// Definice třídy
class Osoba {
public:
    // Atributy (vlastnosti) třídy
    std::string jmeno;
    int vek;

    // Metoda (funkce) třídy
    void pozdrav() {
        std::cout << "Ahoj, jmenuji se " << jmeno << " a je mi " << vek << " let." << std::endl;
    }
};

int main() {
    // Vytvoření objektu (instanci) třídy Osoba
    Osoba osoba1;

    // Přiřazení hodnot atributům objektu
    osoba1.jmeno = "Jan";
    osoba1.vek = 30;

    // Volání metody objektu
    osoba1.pozdrav();  // Vytiskne: Ahoj, jmenuji se Jan a je mi 30 let.

    return 0;
}
```

```
Ahoj, jmenuji se Jan a je mi 30 let.
```