* **Komparační převodník**
* **Nejrychlejší** převodník – celý převod proběhne **v jednom kroku**.
* Obsahuje **řadu komparátorů** – každý porovnává vstupní napětí s jinou referenční hodnotou.
* Výstupem je **binární číslo**, které odpovídá nejvyšší úrovni napětí, které bylo překonáno.

✅ **Výhody:** Extrémně rychlý – ideální pro osciloskopy a měření vysokých frekvencí.
❌ **Nevýhody:** Potřebuje hodně součástek – u 8-bitového převodníku je **255 komparátorů**!
👉 **Použití:** Digitální osciloskopy, vysokorychlostní měření.
![[Pasted image 20250222185131.png]]
Úbytky napětí na rezistorech s hodnotou odporu R odpovídají váze nejméně významného bitu (LSB), úbytky napětí na dvou krajních rezistorech R/2 odpovídají LSB/2
## **📌Jak funguje?
* 1️⃣ **Napěťový dělič** vytvoří **2ⁿ–1 referenčních úrovní** (např. u 8-bitového převodníku je to **255 úrovní**).
* 2️⃣ **Komparátory** porovnávají vstupní napětí s těmito úrovněmi.
* 3️⃣ **Prioritní dekodér** převede výstup komparátorů na binární číslo.

