![[Pasted image 20250915095842.png|center|300]]
https://eluc.ikap.cz/lekce/operacni-zesilovace
Operační zesilovač je součástka, která byla původně vyvinuta pro realizaci matematických operací v analogových počítačích. Základní OZ má tyto vývody:
- Kladný (neinvertující) vstup
- Záporný (invertující) vstup
- Výstup
- Dva napájecí vývody, které se ve schématu většinou nekreslí


# Vlastnosti ideálního operačního zesilovače:
- Nekonečně velké zesílení
- Nekonečně velký vstupní odpor
- Nulový výstupní odpor
- Nekonečně široké zesilované kmitočtové pásmo
- Nulový vlastní šum a zkreslení
# Vlastnosti reálného operačního zesilovače:
- Blíží se vlastnostem ideálního OZ
- Napěťové zesílení dosahuje hodnot $10^4$ - $10^7$
- Vstupní odpor (při použití tranzistoru FET na vstupu OZ) dosahuje hodnot až $10^14$Ω   
- Výstupní odpor je malý o hodnotách desítky mΩ - až po zavedení záporné zpětné vazby
- Kmitočtový rozsah sahá od zesilování stejnosměrných změn napětí až do desítek MHz
- Vlastní šum a zkreslení OZ je malé

Těchto parametrů však nelze dosáhnout současně jediným zapojením obvodu. To je důvod, proč existuje tak obrovské množství různých typů OZ. Vlastnosti OZ se vyjadřují celou řadou parametrů. Nejdůležitější **statické parametry OZ jsou**:
- **napěťové zesílení otevřené smyčky** A0, což je zesílení rozdílu napětí mezi vstupy OZ, tedy mezi vstupem neinvertujícím (+) a invertujícím (-). Rozdíl napětí je  
    U1 = Unein. – Uin.
- **potlačení souhlasného signálu** přivedeného na oba vstupy udává **činitel potlačení souhlasného signálu CMRR** (common mode rejection ratio) podle obr. 1, který se určí jako poměr napěťového zesílení otevřené smyčky A0 k zesílení souhlasného signálu ACM a vyjádřený v dB.

![[Pasted image 20250915100957.png|center]]

# Přechodová charakteristika operačního zesilovače 
![[Pasted image 20250915101353.png|center|500]]
![[Pasted image 20250915102017.png|center|500]]