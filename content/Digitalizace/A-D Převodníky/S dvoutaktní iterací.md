* **Velmi přesný**, ale **pomalý**. Používá **nabíjení a vybíjení kondenzátoru** pro měření vstupního napětí.
* Jeho výstup je roven **průměrné** hodnotě vstupního napětí Ux za konstantní dobu T1
* Čas **T2** je úměrný původnímu napětí.

✅ **Výhody:** Velmi dobré **potlačení šumu** a rušení (hlavně ze sítě – 50 Hz).
❌ **Nevýhody:** Pomalejší než SAR převodník.
👉 **Použití:** Digitální multimetry, laboratorní přístroje.
![[Pasted image 20250222185052.png]]
## **📌Jak funguje?
* Před začátkem převodu je integrační kondenzátor C vybit a dekadický čítač DČ vynulován.
* Vlastní převod probíhá ve dvou taktech:
	1️⃣ **První fáze (nabíjení):**
	* Po dobu **T1** se **měřené napětí** nabíjí do **kondenzátoru**.
	2️⃣ **Druhá fáze (vybíjení):**
	* Pak se připojí **referenční napětí** s opačnou polaritou a měří se, jak dlouho trvá, než kondenzátor vybije.