* Vzorkovač odebírá vzorky signálu v pravidelných intervalech **Tₛ**. Pokud je splněn **vzorkovací teorém** (vzorkovací frekvence **fₛ** je alespoň **2× vyšší** než nejvyšší frekvence signálu), lze původní signál přesně obnovit. Pokud ne, vzniká **aliasing** – zkreslení signálu. Tomu brání **antialiasingový filtr** (AAF), který omezuje frekvence před vzorkováním.
* Vzorkovač **bez paměti** je rychlejší, ale méně přesný. **S pamětí** udrží hodnotu stabilní pro kvalitnější převod.
* Vzorkovače nejsou ideální – obsahují **chyby**, např. samovybíjení kondenzátoru, pomalou reakci na změnu vstupního napětí (**slew rate**) nebo časovou nejistotu vzorkování (**jitter**).

### **📌 Vzorkovač bez paměti**
* Funguje jako rychlý spínač – v určitém okamžiku „sejme“ hodnotu signálu a okamžitě ji pošle dál.
* Výstup je **přesný**, ale jen na krátký okamžik – pokud se signál mění rychle, může A/D převodník vzorky špatně zachytit.
* Používá se tam, kde je signál **stabilní** během vzorkování.
### **📌 Vzorkovač s pamětí (Sample & Hold, S/H)**
* Sejme hodnotu signálu a **udrží ji konstantní** po určitou dobu.
* Výstup není tak rychlý jako u vzorkovače bez paměti, ale je **stabilní**, takže A/D převodník má čas na přesné převedení vzorku.
* Používá se při rychlém měření signálů, které se mohou měnit během převodu.

![[Pasted image 20250222184728.png]]
