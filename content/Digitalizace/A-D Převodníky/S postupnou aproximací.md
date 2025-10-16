* Používá **napěťový komparátor**, který říká „vyšší“ nebo „nižší“, a postupně upravuje výsledek.
* Trvá mu **přesně n kroků** na převedení **n-bitového** čísla (např. 10 bitů → 10 kroků).
* Vyrábějí se jako **8 až 16-bitové**, a odpovídajícím rozlišením **0,4 % až 0,0018 %**. Jejich doba převodu je zhruba **10 μs**. Používají se zejména v rychlých systémových (vzorkovacích) voltmetrech, schopných dosáhnout **10 000 měření/s**

✅ **Výhody:** rychlý, poměrně přesný, běžně se používá.
❌ **Nevýhody:** musí mít **stabilní napětí** během převodu – proto se často používá **vzorkovač s pamětí**.
👉 **Použití:** Multimetry, osciloskopy, měřící přístroje.
![[Pasted image 20250222185149.png]]
## **📌Jak funguje?
* Funguje jako **chytrá hra na hádání** – porovnává vstupní napětí s různými binárními hodnotami, dokud nenajde tu správnou.
* **Vstupní** napětí se v nich **srovnává se zpětnovazebním kompenzačním napětím na výstupu** D/A převodníku, které se mění tak dlouho, dokud není rozdíl mezi oběma napětími menší, než rozlišovací schopnost A/D převodníku. Pak je odpovídající číslo na vstupu D/A převodníku výstupem A/D převodníku.