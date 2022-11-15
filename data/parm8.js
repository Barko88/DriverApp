const quizData = {
  title: "Pärm 8"
};

const questions = [
  {
    text:
      "1 .Vilka veckodagar sker flest dödsolyckor i trafiken där de omkomna är yngre än 30 år?",
    type: "mc",
    answers: [
      { text: "A Onsdagar och torsdagar", correct: false },
      { text: "B Fredagar, lördagar och söndagar", correct: true },
      { text: "C Måndagar och tisdagar", correct: false }
    ]
  },
  {
    text:
      "2. Hur lång sträcka kör du i 3 sekunder när hastigheten är 110 km/h?",
    type: "mc",
    answers: [
      { text: "A. 90 meter.", correct: true },
      { text: "B. 60 meter.", correct: false },
      { text: "C. 130 meter.", correct: false },
      { text: "D. 150 meter", correct: false }
    ]
  },
  {
    text:
      "3. Olika körsätt innebär att körningen påverkar miljön olika mycket. Körsättet varierar också med kombinationen av förare och passagerare. Med vilken av dessa kombinationer är det troligt att körsättet påverkar miljön mest negativt?",
    type: "mc",
    answers: [
      {
        text: "A Både föraren och passagerarna är unga kvinnor.",
        correct: false
      },
      {
        text: "B Föraren är en medelålders man och passagerarna är kvinnor.",
        correct: false
      },
      {
        text: "C Föraren är en medelålders kvinna och passagerarna är män.",
        correct: false
      },
      { text: "D Både föraren och passagerarna är unga män", correct: true }
    ]
  },
  {
    text:
      "4. Får en ambulans med sirener och blåljus påslagna passera en trafiksignal som lyser rött?",
    type: "mc",
    answers: [
      { text: "A Ja", correct: true },
      { text: "B Nej", correct: false }
    ]
  },
  {
    text:
      "5. Varför bör du ur miljösynpunkt inte tvätta bilen på en asfalterad garageuppfart som lutar ut mot gatan?",
    type: "mc",
    answers: [
      {
        text:
          "A Gatubrunnar blir tilltäppta av feta oljerester från biltvätten.",
        correct: false
      },
      {
        text:
          "B Bilschampot skadar den kemiska processen i reningsverket när vattnet i gatubrunnarna kommer dit.",
        correct: false
      },
      {
        text:
          "C Smutsvatten och oljerester rinner ut i gatubrunnarna och vidare ut i vattendragen.",
        correct: true
      },
      { text: "D Asfalten löses upp av tvättmedlet", correct: false }
    ]
  },
  {
    text: "6. Vilken av de här förarna löper störst risk att dödas i trafiken?",
    type: "mc",
    answers: [
      { text: "A En 18 årig kvinna", correct: true },
      { text: "B En 30 årig kvinna", correct: false },
      { text: "C En 45 årig kvinna", correct: false },
      { text: "D En 60 årig kvinna", correct: false }
    ]
  },
  {
    text:
      "7. När du för första gången får körkort har du en prövotid. Hur lång är den?",
    type: "mc",
    answers: [
      { text: "A. 1 år", correct: false },
      { text: "B. 2 år", correct: true },
      { text: "C. 3 år", correct: false },
      { text: "D. 4 år", correct: false },
      { text: "E. 5 år", correct: false }
    ]
  },
  {
    text: "8. Vad innebär linjen mitt på vägen?",
    type: "mc",
    image: "P8Q8.png",
    answers: [
      { text: "A Den markerar körbanans mitt", correct: true },
      {
        text: "B Den anger att högsta tillåtna hastighet är 70km/h",
        correct: false
      },
      { text: "C Den förvarnar om spärrlinjen längre fram", correct: false },
      { text: "D Det är förbjudet att överskrida linjen", correct: false }
    ]
  },
  {
    text:
      "9. Du ska svänga vänster och kör på en enkelriktad väg. Vilket körfält ska du ta?",
    type: "mc",
    image: "P8Q9.png",
    answers: [
      { text: "A. Vänstra körfältet", correct: true },
      { text: "B. Högra körfältet", correct: false },
      {
        text: "C. Du kan välja antigen högra eller vänstra körfältet",
        correct: false
      }
    ]
  },
  {
    text:
      "10. Vilken av dessa personer kan lättast påverkas av grupptryck vid bilkörning?",
    type: "mc",
    answers: [
      { text: "A Den som har bra självförtroende", correct: false },
      { text: "B Den som har lång erfarenhet av bilkörning", correct: false },
      { text: "C Den som har dåligt självförtroende", correct: true }
    ]
  },
  {
    text: "11. Du tänker köra om cyklisten. Hur ska du göra?",
    type: "mc",
    image: "P8Q11.png",
    answers: [
      { text: "A Jag väntar efter backkrönet med att köra om", correct: true },
      {
        text:
          "B Jag kör om direkt om jag kan göra det utan att överträda mittlinjen.",
        correct: false
      },
      {
        text:
          "C Jag kör om direkt men ser till att lämna tillräckligt vingelutrymme för cyklisten",
        correct: false
      },
      {
        text:
          "D Jag tutar för att uppmärksamma cyklisten på att jag tänker köra om",
        correct: false
      }
    ]
  },
  {
    text:
      "12. Vad ska du kontrollera för trafiksäkerheten efter du har tvättat din bil på biltvätt?",
    type: "mc",
    answers: [
      { text: "A. Elsystemet.", correct: false },
      { text: "B. Bromsarna.", correct: true },
      { text: "C. Servosystemet.", correct: false },
      { text: "D. Kylarvätskan.", correct: false }
    ]
  },
  {
    text:
      "13. I vilken av de här situationerna får du inte stanna för att släppa av en passagerare?",
    type: "mc",
    image: "P8Q13.png",
    answers: [
      { text: "A Bild A", correct: false },
      { text: "B Bild B", correct: true },
      { text: "C Bild C", correct: false }
    ]
  },
  {
    text:
      "14. Hur kan ditt avstånd till framförvarande fordon öka trafiksäkerheten?",
    type: "mc",
    answers: [
      {
        text:
          "A Ett kort avstånd ökar säkerheten när jag ska göra en omkörning",
        correct: false
      },
      {
        text: "B Långt avstånd underlättar omkörning för trafik bakom mig",
        correct: true
      },
      { text: "C Ett kort avstånd hindrar farliga omkörningar", correct: false }
    ]
  },
  {
    text:
      "15. Du ska till kiosken som ligger 2 km längre bort. Hur ska du ta dig dit om du ska tänka på miljön?",
    type: "mc",
    answers: [
      { text: "A Jag tar min bil som har haft motorvärmare", correct: false },
      { text: "B Jag cyklar", correct: true },
      { text: "C Jag tar min eldrivna moped", correct: false },
      { text: "D Jag åker med min granne som också ska dit", correct: false }
    ]
  },
  {
    text: "16. Vad är riktigt om katalysatorn i en bensindriven bil?",
    type: "mc",
    answers: [
      { text: "A Den renar inte avgaserna från koldioxid", correct: true },
      {
        text: "B Den renar avgaserna effektivast när motorn är kall",
        correct: false
      },
      {
        text: "C Den renar avgaserna från alla skadliga ämnen",
        correct: false
      },
      { text: "D Den gör att bränslet används effektivare.", correct: false }
    ]
  },
  {
    text:
      "17. Många gående skadas på övergångställe i tätort under mörker. Vad kan orsaken vara?",
    type: "mc",
    answers: [
      {
        text: "A. Gående har svårt att upptäcka bilar under mörker",
        correct: false
      },
      {
        text: "B. Förare har svårt att bedöma avstånd under mörker",
        correct: false
      },
      {
        text:
          "C. Förarna tror att de ser alla gående och är därför inte uppmärksamma.",
        correct: true
      }
    ]
  },
  {
    text:
      "18. Du kommer till ett obevakat övergångställe där en grupp dagisbarn just skall gå över. Hur ska du uppträda?",
    type: "mc",
    answers: [
      {
        text:
          "A Om det finns en lucka mellan barnen, så får jag passera med stor försiktighet.",
        correct: false
      },
      {
        text:
          "B Jag har väjningsplikt och stannar och väntar tills alla barn passerat.",
        correct: true
      },
      { text: "C Jag stannar och vinkar fram barnen.", correct: false }
    ]
  },
  {
    text: "19. Du ska köra in till en cirkulationsplats, vad gäller?",
    type: "mc",
    answers: [
      {
        text: "A. Jag måste alltid stanna på en cirkulationsplats",
        correct: false
      },
      {
        text: "B. Fordonen i cirkulationsplatsen har väjningsplikt till mig",
        correct: false
      },
      {
        text: "C. Jag har väjningsplikt till fordonen i cirkulationsplatsen",
        correct: true
      }
    ]
  },
  {
    text:
      "20. Grupptrycket kan påverka hur du uppträder som förare. Är det bra eller dåligt?",
    type: "mc",
    answers: [
      { text: "A. Det är alltid dåligt med grupptryck", correct: false },
      { text: "B. Det är alltid bra med grupptryck", correct: false },
      {
        text:
          "C. Gruppens värderingar avgör om det är bra eller dåligt med grupptryck",
        correct: true
      }
    ]
  },
  {
    text:
      "21. För att minska risken att få en pisksnärtsskada (whiplash) måste du ha huvudstödet (nackskyddet) rätt inställt. Vad krävs dessutom?",
    type: "mc",
    answers: [
      { text: "A Att bilen är utrustad med krockkudde.", correct: false },
      { text: "B Att bilen har ABS-bromsar", correct: false },
      { text: "C Att jag använder bilbälte på rätt sätt.", correct: true },
      { text: "D Att bilen har antisladdsystem.", correct: false }
    ]
  },
  {
    text:
      "22. Kan man få körkortet återkallat om man upprepade gånger omhändertas av polisen för fylleri, även om man inte kört bil i berusat tillstånd?",
    type: "mc",
    answers: [
      { text: "A Ja, körkortet kan återkallas. Sid 209", correct: true },
      {
        text:
          "B Nej, körkortet kan enbart återkallas om man kör bil i berusat tillstånd.",
        correct: false
      }
    ]
  },
  {
    text:
      "23. Många unga förare omkommer i trafiken på helgnätter under sommaren. Vilken är den vanligaste orsaken?",
    type: "mc",
    answers: [
      { text: "A. Att de har druckit alkohol.", correct: true },
      { text: "B. Att de omkommer i en omkörningsolycka .", correct: false },
      { text: "C. Att de råkar ut för en viltolycka.", correct: false },
      { text: "D. Att de är trötta.", correct: false }
    ]
  },
  {
    text: "24. Vilket påstående är sant om katalysatorn i en bensindriven bil?",
    type: "mc",
    answers: [
      {
        text: "A. Katalysatorn renar avgaserna effektivast när motorn är kall.",
        correct: false
      },
      {
        text:
          "B. Katalysatorns höga arbetstemperatur gör att lättantändliga föremål i närheten kan börja brinna",
        correct: true
      },
      {
        text: "C. Katalysatorn gör att bränslet används effektivare.",
        correct: false
      },
      {
        text:
          "D. Katalysatorn kan lätt överhettas om motorns tomgångsvarvtal är felinställt",
        correct: false
      }
    ]
  },
  {
    text:
      "25. Kamraterna till en ung man visar tydligt att de inte accepterar att han kör bil när han är onykter. Den unge mannen påverkas av deras åsikter och kör därför aldrig mer bil när han är berusad. Vad kallas detta?",
    type: "mc",
    answers: [
      { text: "A Imitationsinlärning", correct: false },
      { text: "B Bortträngning", correct: false },
      { text: "C Sannolikhetsinlärning", correct: false },
      { text: "D Grupptryck", correct: true }
    ]
  },
  {
    text: "26. Var kan denna skylt finnas och vilken information ger den.",
    type: "mc",
    image: "P8Q26.png",
    answers: [
      {
        text:
          "A. Skylten kan finnas vid vägarbeten och anger alternativ färdväg för vissa tunga fordon förbi vägarbetet",
        correct: false
      },
      {
        text: "B. Skylten placeras på tunga fordon och anger fordonets vikter",
        correct: false
      },
      {
        text:
          "C. Skylten placeras på fordon lastade med farligt gods och anger lastens innehåll",
        correct: true
      },
      {
        text:
          "D. Skylten kan sitta som tilläggstavla och anger rekommenderad färdväg för fordon lastade med farligt gods",
        correct: false
      }
    ]
  },
  {
    text:
      "27. Du stannar vid en järnvägkorsning där bommarna är på väg ner. Tåget som ska passera är ett mycket långt godståg. Hur bör du göra med tanke på miljön?",
    type: "mc",
    answers: [
      { text: "A. Stänga av motorn", correct: true },
      {
        text: "B. Ha motorn på tomgång och ettans växel ilagd",
        correct: false
      },
      {
        text:
          "C. Ha kopplingen i dragläge för att snabbt komma igång när tåget passerat.",
        correct: false
      },
      {
        text:
          "D. Ha motorn på tomgång, växeln i friläge och parkeringsbromsen åtdragen",
        correct: false
      }
    ]
  },
  {
    text:
      "28. Hur stor andel av de förare som har dödats i singelolyckor har varit alkoholpåverkade?",
    type: "mc",
    answers: [
      { text: "A Ca en fjärdedel", correct: false },
      { text: "B Ca en tredjedel", correct: false },
      { text: "C Ca två tredjedelar", correct: false },
      { text: "D Ca hälften", correct: true }
    ]
  },
  {
    text:
      "29. Är det någon skillnad mellan män och kvinnor när det gäller risken att få nackskador av pisksnärtstyp (whiplash) vid en trafikolycka?",
    type: "mc",
    answers: [
      {
        text: "A Ja, män löper större risk att få nackskador.",
        correct: false
      },
      { text: "B Nej, det är ingen skillnad", correct: true },
      {
        text: "C Ja, kvinnor löper större risk att få nackskador.",
        correct: false
      }
    ]
  },
  {
    text:
      "30. Vem är det som till sist avgör om du ska köra bil eller inte, när du använder ett läkemedel?",
    type: "mc",
    answers: [
      { text: "A Apotekspersonal som lämnat ut läkemedlet.", correct: false },
      { text: "B Jag själv som använder läkemedlet.", correct: true },
      { text: "C Läkaren som skrivit ut läkemedlet.", correct: false }
    ]
  },
  {
    text:
      "31. Alkohol kan påverka synen även om alkoholhalten i blodet är mindre än 0.2 promille. Vad innebär detta för föraren?",
    type: "mc",
    answers: [
      { text: "A Känsligare för bländning", correct: true },
      { text: "B Synfältet ökar", correct: false },
      { text: "C Mörkerseendet förbättras", correct: false },
      { text: "D Synskärpan ökar", correct: false }
    ]
  },
  {
    text:
      "32. Hur lång bör en person minst vara för att sitta på en plats i framsätet där det finns krockkudde (airbag)",
    type: "mc",
    answers: [
      { text: "A 100 cm", correct: false },
      { text: "B 120 cm", correct: false },
      { text: "C 140 cm", correct: true },
      { text: "D 160 cm", correct: false }
    ]
  },
  {
    text: "33. Hur ska bilbältet sitta för att göra mest nytta?",
    type: "mc",
    answers: [
      { text: "A Bältet ska sitta löst mot kroppen", correct: false },
      {
        text: "B På axeln ska bältet ligga så långt från halsen som möjligt",
        correct: false
      },
      { text: "C Bältet ska vara väl åtdraget mot kroppen", correct: true },
      {
        text: "D Jag ska helst ha en vadderad jacka mellan mig och bältet",
        correct: false
      }
    ]
  },
  {
    text: "34. Hur kan du med ditt vägval minska påverkan på miljön?",
    type: "mc",
    answers: [
      {
        text: "A Jag väljer en väg där jag ofta måste köra med låga växlar.",
        correct: false
      },
      {
        text:
          "B Jag väljer en väg där jag får stanna ofta så att motorn får gå på mycket tomgång.",
        correct: false
      },
      {
        text: "C Jag väljer en väg där jag måste växla mycket",
        correct: false
      },
      {
        text:
          "D Jag väljer en väg där jag kan hålla jämn fart och där jag behöver stanna få gånger.",
        correct: true
      }
    ]
  },
  {
    text:
      "35. Du kör bil på en väg med heldragen kantlinje. Du upptäcker att bilen bakom försöker köra om dig på en plats där det är förbjudet att köra om. Vad ska du göra för att minska faran?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag placerar bilen nära kantlinjen för att underlätta omkörningen.",
        correct: true
      },
      {
        text:
          "B Jag placera bilen nära mittlinjen för att visa att omkörningen inte är lämplig.",
        correct: false
      },
      {
        text: "C Jag ökar farten för att förhindra omkörningen.",
        correct: false
      }
    ]
  },
  {
    text: "36. Får du svänga till höger när trafikljuset ser ut som på bilden?",
    type: "mc",
    image: "P8Q36.png",
    answers: [
      {
        text:
          "A Ja, men du måste först stanna eftersom det finns en stoppskylt.",
        correct: false
      },
      {
        text: "B Nej, du måste vänta på att extrasignalen lyser grönt.",
        correct: false
      },
      {
        text:
          "C Ja, jag får svänga utan att stann eftersom huvudsignalen lyser grönt.",
        correct: true
      }
    ]
  },
  {
    text: "37. Vad gäller vid körning på motorväg?",
    type: "mc",
    answers: [
      { text: "A Det är tillåtet att köra moped klass I", correct: false },
      {
        text: "B Det är inte tillåtet att köra med lägre hastighet än 40km/h.",
        correct: false
      },
      {
        text:
          "C Den högsta tillåtna hastighet på motorväg är 110km/h om inget annat anges.",
        correct: true
      }
    ]
  },
  {
    text: "38. Vilken insats från oss förare skulle öka trafiksäkerheten mest?",
    type: "mc",
    answers: [
      { text: "A. Om alla körde nya bilar", correct: false },
      {
        text: "B. Om alla anpassade hastigheten till varje situation",
        correct: true
      },
      {
        text: "C. Om alla gjorde säkerhetskontroll före varje körning.",
        correct: false
      },
      {
        text: "D. Om alla fixerade blicken långt fram vid körning",
        correct: false
      }
    ]
  },
  {
    text:
      "39. Vad ska du fylla på i bilbatteriet om nivån är för låg i någon av cellerna?",
    type: "mc",
    answers: [
      { text: "A. Svavelsyra.", correct: false },
      { text: "B. Destillerat vatten.", correct: true },
      { text: "C. T-sprit", correct: false },
      { text: "D. K-sprit", correct: false },
      { text: "E. Glykol.", correct: false }
    ]
  },
  {
    text: "40. Vad betyder vägmärket?",
    type: "mc",
    image: "P8Q40.png",
    answers: [
      { text: "A Vägvisning till en riksväg", correct: false },
      { text: "B Vägnummermärke vid omledning av trafiken", correct: false },
      { text: "C Nummer på trafikplatsen", correct: true }
    ]
  },
  {
    text:
      "41. Varför är det stor risk att älgar finns nära vägarna under sommarmånaderna maj-juni?",
    type: "mc",
    answers: [
      { text: "A. Älgjakten börjar", correct: false },
      {
        text: "B. Förra årets älgkalvar stöts bort av älgkorna",
        correct: true
      },
      { text: "C. Tillgången på mat ökar", correct: false },
      {
        text: "D. Värmen gör att älgarna söker sig till öppna ytor",
        correct: false
      }
    ]
  },
  {
    text:
      "42. Hur ska du göra när du kör om ett väghållningsfordon som används vid ett vägarbete?",
    type: "mc",
    answers: [
      { text: "A. Jag ska alltid köra om till vänster", correct: false },
      { text: "B. Jag ska alltid köra om till höger", correct: false },
      {
        text:
          "C. Jag får köra om antigen till vänster eller till höger beroende på situationen",
        correct: true
      }
    ]
  },
  {
    text:
      "43. Vad innebär den siffra som anges på en personbils kontrollmärke?",
    type: "mc",
    image: "P8Q43.png",
    answers: [
      { text: "A. Den månad som bilen ska besiktigas", correct: false },
      {
        text: "B. Den månad som bilens trafikförsäkring ska betalas",
        correct: false
      },
      {
        text: "C. Den månad som bilens fordonsskatt ska betalas",
        correct: true
      }
    ]
  },
  {
    text: "44. Hur kan du minska bränsleförbrukningen på din bil?",
    type: "mc",
    answers: [
      { text: "A. Jag kör med lågt lufttryck i däcken", correct: false },
      {
        text: "B. Jag blandar karburatorsprit i bensinen vintertid",
        correct: false
      },
      {
        text: "C. Jag stänger av luftkonditioneringen när den inte behövs",
        correct: true
      }
    ]
  },
  {
    text:
      "45. Finns det ett samband mellan innebörden av detta vägmärke och miljöpåverkan?",
    type: "mc",
    image: "P8Q45.png",
    answers: [
      { text: "A. Ja, här kan jag tanka biobränsle", correct: false },
      {
        text:
          "B. Ja, här finns särskilt anordnade parkeringsplatser i anslutning till kollektivtrafik",
        correct: true
      },
      {
        text:
          "C. Ja, här finns parkeringsplatser med anslutningar till motorvärmare",
        correct: false
      },
      {
        text: "D. Nej, vägmärket betyder parkeringsplats enbart för taxibilar",
        correct: false
      }
    ]
  },
  {
    text:
      "46. Vilket är det mest miljövänliga transportmedlet när du ska åka 30 mil?",
    type: "mc",
    answers: [
      { text: "A. Flyg", correct: false },
      { text: "B. Motorcykel", correct: false },
      { text: "C. Personbil", correct: false },
      { text: "D. Tåg", correct: true }
    ]
  },
  {
    text:
      "47. En person har köpt en ny personbil som uppfyller kraven för miljöklass El. Vilken kostnad slipper personen de fem första åren genom detta val av bil?",
    type: "mc",
    answers: [
      { text: "A. Kostnad för fordonsskatt", correct: true },
      { text: "B. Kostnad för kontrollbesiktning", correct: false },
      { text: "C. Kostnad för trafikförsäkring", correct: false },
      { text: "D. Kostnad för helförsäkring", correct: false }
    ]
  },
  {
    text:
      "48. Du kör på en motorväg och ser en person som liftar vid vägkanten. Får du stanna för att ta upp liftaren?",
    type: "mc",
    answers: [
      { text: "A. Ja, om jag slår på varningsblinkern", correct: false },
      {
        text: "B. Nej, det är förbjudet att stanna på en motorväg",
        correct: true
      },
      {
        text: "C. Ja, om hastigheten på motorvägen inte överstiger 90 km/h",
        correct: false
      }
    ]
  },
  {
    text: "49. Du ska svänga höger i korsningen på bilden. Hur ska du göra?",
    type: "mc",
    image: "P8Q49.png",
    answers: [
      {
        text: "A. Jag får köra utan att stanna vid stopplinjen",
        correct: true
      },
      {
        text:
          "B. Jag ska stanna vid stopplinjen och får köra när signalen visar grönt ljus",
        correct: false
      },
      {
        text:
          "C. Jag får köra även om signalen visar rött ljus, men jag måste först stanna vid stopplinjen",
        correct: false
      }
    ]
  },
  {
    text: "50. Vilken typ av fordon har du framför dig?",
    type: "mc",
    image: "P8Q50.png",
    answers: [
      { text: "A. Ett fordon lastat med farligt gods", correct: false },
      {
        text:
          "B. En lastbil med totalvikt över 3,5 ton med tillkopplad släpvagn",
        correct: false
      },
      {
        text:
          "C. En lastbil med totalvikt över 3,5 ton utan tillkopplad släpvagn",
        correct: true
      },
      { text: "D. Ett långsamtgående fordon", correct: false }
    ]
  },
  {
    text: "51. Vad betyder det när den här kontrollampan tänds under körning?",
    type: "mc",
    image: "P8Q51.png",
    answers: [
      { text: "A. De låsningsfria bromsarna är inkopplade", correct: false },
      {
        text: "B. Det är något fel på de låsningsfria bromsarna",
        correct: true
      },
      {
        text: "C. Bromsvätskenivån i de låsningsfria bromsarna är för låg",
        correct: false
      }
    ]
  },
  {
    text:
      "52. Varför är det viktigt att du som bilförare har bra självkontroll?",
    type: "mc",
    answers: [
      {
        text: "A Jag kan förutse andras misstag och därmed undvika olyckor.",
        correct: false
      },
      {
        text: "B Jag kan reagera snabbt med bromsen när det är nödvändigt.",
        correct: false
      },
      {
        text: "C Jag kan bevara mitt lugn även i stressiga trafiksituationer.",
        correct: true
      }
    ]
  },
  {
    text:
      "53. Du har hamnat på avfarten av misstag i stället för att köra rakt fram till nästa avfart. Hur ska du göra?",
    type: "mc",
    image: "P8Q53.png",
    answers: [
      { text: "A Fortsätta på avfarten.", correct: true },
      {
        text:
          "B Öka farten och köra över spärrområdet för att komma tillbaka till körfältet rakt fram.",
        correct: false
      },
      {
        text: "C Backa för att komma tillbaka till körfältet rakt fram.",
        correct: false
      },
      {
        text:
          "D Bromsa kraftigt och försiktigt köra tillbaka till körfältet rakt fram.",
        correct: false
      }
    ]
  },
  {
    text:
      "54. Vilket är det lämpligaste sättet att vända i korsningen på bilden?",
    type: "mc",
    image: "P8Q54.png",
    answers: [
      {
        text:
          "A Jag svänger vänster i korsningen, stannar och backar rakt genom korsningen.",
        correct: false
      },
      {
        text:
          "B Jag svänger vänster i korsningen, stannar och backar rund hörn A.",
        correct: false
      },
      {
        text:
          "C Jag svänger höger i korsningen, stannar och backar rakt genom korsningen.",
        correct: false
      },
      {
        text:
          "D Jag kör rakt fram i korsningen, stannar och backar runt hörn B.",
        correct: true
      }
    ]
  },
  {
    text:
      "55. Du vill parkera där vägmärkena gäller. Klockan är 19.00 och bilen ska stå parkerad två timmar. Vad gäller?",
    type: "mc",
    image: "P8Q55.png",
    answers: [
      { text: "A Jag får parkera här utan att betala avgift.", correct: true },
      {
        text: "B Jag får parkera här men jag ska betala avgift.",
        correct: false
      },
      { text: "C Jag får inte parkera här.", correct: false }
    ]
  },
  {
    text:
      "56. Personbilen på bilden är av 1996 års modell. När får den automatiskt körförbud om ägaren inte betalar fordonskatt i tid?",
    type: "mc",
    image: "P8Q56.png",
    answers: [
      { text: "A 1 februari.", correct: false },
      { text: "B 1 mars.", correct: true },
      { text: "C 1 oktober.", correct: false },
      { text: "D 1 december.", correct: false }
    ]
  },
  {
    text:
      "57. En del personer söker efter äventyr och spänning i livet. Hur brukar sådana personer bete sig när de kör bil?",
    type: "mc",
    answers: [
      {
        text: "A De samspelar tydligt med sina medtrafikanter.",
        correct: false
      },
      { text: "B De följer alltid trafikreglerna korrekt.", correct: false },
      {
        text:
          "C De planerar sin körning för att undvika kraftiga inbromsningar.",
        correct: false
      },
      {
        text: "D De tar större risker och visar mindre hänsyn än andra.",
        correct: true
      }
    ]
  },
  {
    text: "58. Hur bör du köra för att minska bilens avgasutsläpp?",
    type: "mc",
    answers: [
      {
        text: "A Jag undviker onödiga stopp genom att planera körningen",
        correct: true
      },
      {
        text: "B Jag använder motorbromsning så lite som möjligt",
        correct: false
      },
      {
        text: "C Jag kör med kort avstånd till framförvarande",
        correct: false
      },
      {
        text: "D Jag accelererar snabbt och med full gas efter varje växling",
        correct: false
      }
    ]
  },
  {
    text:
      "59. Bilar ska besiktas inom en viss period. Inställelsemånaden bestäms av sista siffran i registreringsnumret. Hur lång är besiktningsperioden?",
    type: "mc",
    answers: [
      {
        text: "A Inställningsmånaden + 2 månader före + 2 månader efter",
        correct: true
      },
      { text: "B Enbart inställelsemånaden", correct: false },
      { text: "C Inställelsemånaden + 2 månader före", correct: false },
      {
        text: "D Inställelsemånaden + 1 månad före + 1 månad efter",
        correct: false
      }
    ]
  },
  {
    text:
      "60. Du kommer som första person fram till en trafikolycka. Vad är det första du bör göra?",
    type: "mc",
    answers: [
      { text: "A Varna andra", correct: false },
      { text: "B Överblicka situationen", correct: true },
      { text: "C Larma 112", correct: false },
      { text: "D Ge första hjälpen åt skadade", correct: false }
    ]
  },
  {
    text: "61. Signalen visar blinkande gult sken. Vad innebär det?",
    type: "mc",
    image: "P8Q61.png",
    answers: [
      { text: "A Signalen förstärker varningen för spårvagn", correct: true },
      { text: "B Signalen gäller endast för spårvagnsföraren", correct: false },
      {
        text: "C Jag måste stanna innan jag passerar korsningen",
        correct: false
      },
      { text: "D Jag får inte passera förrän signalen släcks.", correct: false }
    ]
  },
  {
    text:
      "62. Vilken är den vanligaste påföljden för den som kör bil och har något narkotiskt ämne i blodet?",
    type: "mc",
    answers: [
      { text: "A Prövotiden på körkortet förlängs med ett år", correct: false },
      { text: "B Böter eller fängelse och återkallat körkort", correct: true },
      { text: "C Återkallat körkort i högst en månad", correct: false },
      { text: "D Varning i körkortsregistret", correct: false }
    ]
  },
  {
    text:
      "63. Du ska på landsväg svänga till vänster i en fyrvägskorsning. Vilka fordon är det störst risk att du krockar med?",
    type: "mc",
    answers: [
      { text: "A Mötande fordon", correct: false },
      { text: "B Fordon från vänster", correct: false },
      { text: "C Fordon bakifrån", correct: true },
      { text: "D Fordon från höger", correct: false }
    ]
  },
  {
    text:
      "64. Du kör i 50 km/h. Hur många meter rullar ditt fordon på en sekund?",
    type: "mc",
    answers: [
      { text: "A Ca 5 m", correct: false },
      { text: "B Ca 9 m", correct: false },
      { text: "C Ca 14 m", correct: true },
      { text: "D Ca 24 m", correct: false }
    ]
  },
  {
    text:
      "65. Nästan hälften av alla bilresor i Sverige är kortare än 5 kilometer. Påverkar resans längd mängden avgasutsläpp per kilometer?",
    type: "mc",
    answers: [
      {
        text:
          "A Nej, resans längd gör ingen skillnad på mängden avgasutsläpp per kilometer",
        correct: false
      },
      {
        text:
          "B Ja, en kort bilresa medför större mängd avgasutsläpp per kilometer än en lång bilresa",
        correct: true
      },
      {
        text:
          "C Ja, en lång bilresa medför större mängd avgasutsläpp per kilometer än en kort bilresa",
        correct: false
      }
    ]
  },
  {
    text:
      "66. Vilken av de här förarna visar exempel på säkert samspel i trafiken?",
    type: "mc",
    answers: [
      {
        text:
          "A En förare som saktar in för att visa att han har väjningsplikt",
        correct: true
      },
      {
        text: "B En förare som alltid håller på sin rätt enligt reglerna",
        correct: false
      },
      {
        text:
          "C En förare som överträder hastighetsgränsen för att följa trafikrytmen",
        correct: false
      }
    ]
  },
  {
    text:
      "67. Vilken av dessa åtgärder är den bästa om du vill minska utsläppen av koldioxid från din bil?",
    type: "mc",
    answers: [
      { text: "A Jag kör på lägsta möjliga växel", correct: false },
      { text: "B Jag kör på högsta möjliga växel", correct: true },
      { text: "C Jag kör med lågoktanig bensin", correct: false },
      { text: "D Jag kör med högoktanig bensin", correct: false }
    ]
  },
  {
    text:
      "68. En person säger om sig själv att han aldrig gör misstag i trafiken. Vilket begrepp anger den förare som beskriver sig själv på detta sätt?",
    type: "mc",
    answers: [
      { text: "A Mogen", correct: false },
      { text: "B Impulsiv", correct: false },
      { text: "C Defensiv", correct: false },
      { text: "D Omogen", correct: true }
    ]
  },
  {
    text: "69. Vilken tid på dygnet sker flest dödsolyckor?",
    type: "mc",
    answers: [
      { text: "A 00.00 – 02.00", correct: true },
      { text: "B 06.00 – 08.00", correct: false },
      { text: "C 11.00 – 14.00", correct: false },
      { text: "D 18.00 – 20.00", correct: false }
    ]
  },
  {
    text:
      "70. Hur länge bör du använda motorvärmare innan du startar bilen när temperaturen är 0o C?",
    type: "mc",
    answers: [
      { text: "A Ca 1 timme", correct: true },
      { text: "B Ca 3 timmar", correct: false },
      { text: "C Ca 5 timmar", correct: false },
      { text: "D Ca 10 timmar", correct: false }
    ]
  },
  {
    text:
      "71. Du ska köra från Malmö till Göteborg med din bil av årsmodell 2004. Det är mars månad och väglaget är som på bilden. Vilka däck får du ha på bilen?",
    type: "mc",
    image: "P8Q71.png",
    answers: [
      { text: "A Dubbdäck med 2 mm mönsterdjup", correct: false },
      { text: "B Sommardäck med 6 mm mönsterdjup", correct: false },
      { text: "C Odubbade vinterdäck med 4 mm mönsterdjup", correct: true }
    ]
  },
  {
    text:
      "72. Var går minsta gränsen för rattfylleri om polisen skall straffa dig?",
    type: "mc",
    answers: [
      { text: "A 0.2 promille", correct: false },
      { text: "B 0.5 promille", correct: false },
      {
        text:
          "C Oavsett hur mycket alkohol du har i blodet så kan polisen straffa dig om du kör på ett sätt som innebär risk för andra trafikanter.",
        correct: true
      }
    ]
  },
  {
    text: "73. Vid vilken situation gäller hastigheten 110km/h?",
    type: "mc",
    image: "P8Q73.png",
    answers: [
      { text: "A I situation på bild A", correct: false },
      { text: "B I situation på bild B", correct: false },
      { text: "C I båda situationerna", correct: true }
    ]
  },
  {
    text:
      "74. Hur påverkas körningen om du pratar i mobiltelefon när du kör bil?",
    type: "mc",
    answers: [
      { text: "A Reaktionstiden blir kortare", correct: false },
      { text: "B Jag gör mindre och lugnare rattrörelser", correct: false },
      { text: "C Jag har sämre uppsikt bakåt i sidospeglarna", correct: true },
      { text: "D Stoppsträckan blir kortare", correct: false }
    ]
  },
  {
    text: "75. Hur påverkas körningen när du pratar i mobiltelefonen?",
    type: "mc",
    answers: [
      { text: "A Reaktionstiden blir längre", correct: true },
      { text: "B Stoppsträckan blir kortare", correct: false },
      { text: "C Föraren har bättre uppsikt i backspegeln", correct: false },
      { text: "D Rattrörelserna blir mer stabila", correct: false }
    ]
  },
  {
    text: "76. Vilket påstående om reaktionstiden är riktig?",
    type: "mc",
    answers: [
      {
        text:
          "A Den blir längre när föraren måste välja mellan olika alternativ.",
        correct: true
      },
      { text: "B Den blir kortare i låga hastigheter", correct: false },
      { text: "C Den blir längre i halt väglag", correct: false }
    ]
  },
  {
    text:
      "77. Du hör och ser en ambulans under utryckning som närmar sig bakifrån. Vad ska du göra?",
    type: "mc",
    answers: [
      {
        text: "A Jag måste alltid köra in till kanten och stanna.",
        correct: false
      },
      {
        text:
          "B Jag måste lämna fri väg. Det kan jag göra genom att minska hastigheten, köra åt sidan eller stanna om det behövs.",
        correct: true
      },
      { text: "C Jag ska stanna omedelbart.", correct: false },
      {
        text:
          "D Jag ska köra på som vanligt för att inte förvirra föraren i utryckningsfordonet.",
        correct: false
      }
    ]
  },
  {
    text:
      "78. Bilderna visar baksidan på olika vägmärken. Vilket vägmärke anger stopplikt vid vägkorsning?",
    type: "mc",
    image: "P8Q78.png",
    answers: [
      { text: "A Vägmärke A", correct: true },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "79. Partiklar i luften är ett allvarligt miljöproblem i tätorterna. Partiklarna kommer bland annat från vägbanan och frigörs när bildäck nöter på vägen. Vilken typ av däck sliter loss mest partiklar?",
    type: "mc",
    answers: [
      { text: "A Högfartsdäck", correct: false },
      { text: "B Friktionsdäck", correct: false },
      { text: "C Dubbdäck", correct: true },
      { text: "D Sommardäck", correct: false },
      { text: "E Allrounddäck", correct: false }
    ]
  },
  {
    text:
      "80. Du ska köra rakt fram. Gäller högerregeln i någon av situationerna?",
    type: "mc",
    image: "P8Q80.png",
    answers: [
      { text: "A Ja, men enbart i situation A", correct: true },
      { text: "B Ja, men enbart i situation B", correct: false },
      { text: "C Ja i båda situationerna", correct: false },
      { text: "D Nej", correct: false }
    ]
  },
  {
    text: "81. Vad måste du ha med dig när du kör personbil?",
    type: "mc",
    answers: [
      { text: "A Bilens registreringsbevis", correct: false },
      { text: "B Körkortet", correct: true },
      { text: "C Försäkringshandlingar för bilen", correct: false }
    ]
  },
  {
    text: "82. Vilka får trafikera körfält A där vägmärket gäller?",
    type: "mc",
    image: "P8Q82.png",
    answers: [
      { text: "A Fordon i linjetrafik och cyklister", correct: true },
      { text: "B Bussar och tunga lastbilar", correct: false },
      { text: "C Endast bussar", correct: false },
      { text: "D Endast fordon i linjetrafik", correct: false }
    ]
  },
  {
    text:
      "83. På de här vägarna är hastigheten begränsad till 90 km/h. På vilken väg är det mest motiverat att hålla lägre hastighet därför att vilda djur kan springa ut på vägen?",
    type: "mc",
    image: "P8Q83.png",
    answers: [
      { text: "A Vägen på bild A", correct: false },
      { text: "B Vägen på bild B", correct: true },
      { text: "C Vägen på bild C", correct: false },
      { text: "D Vägen på bild D", correct: false }
    ]
  },
  {
    text: "84. Vad kännetecknar förare som kör impulsivt?",
    type: "mc",
    answers: [
      { text: "A De har god handlingsberedskap", correct: false },
      { text: "B De kör hindrande långsamt", correct: false },
      { text: "C De planerar sin körning", correct: false },
      { text: "D De handlar först och tänker sedan", correct: true }
    ]
  },
  {
    text:
      "85. Vilken av följande utrustningar i bilen är viktigast för att minska risken att du blir skadad om du blir påkörd bakifrån?",
    type: "mc",
    answers: [
      { text: "A Antisladdsystem", correct: false },
      { text: "B Huvudstöd (nackstöd)", correct: true },
      { text: "C Krockkudde (airbag)", correct: false },
      { text: "D ABS-bromsar", correct: false }
    ]
  },
  {
    text: "86. Vad ska du göra med kontrollmärket till din bil?",
    type: "mc",
    image: "P8Q86.png",
    answers: [
      {
        text: "A Sätta fast det på bilens vindruta så att det syns tydligt",
        correct: false
      },
      { text: "B Sätta fast det på bakre registreringsskylten", correct: true },
      { text: "C Förvara det i bostaden på ett säkert ställe", correct: false },
      { text: "D Sätta fast det på registreringsbeviset", correct: false }
    ]
  },
  {
    text:
      "87. Hur kan du säkert veta om du kan använda en viss medicin när du ska köra bil?",
    type: "mc",
    answers: [
      {
        text: "A Jag måste fråga läkaren eller apotekspersonalen",
        correct: true
      },
      {
        text: "B Om medicinen är receptfri går det alltid bra att använda den",
        correct: false
      },
      {
        text:
          "C Det räcker att kontrollera att det finns någon varningstext om bilkörning på förpackningen",
        correct: false
      },
      {
        text:
          "D Det räcker att jag kontrollerar det inte finns en röd triangel på förpackningen",
        correct: false
      }
    ]
  },
  {
    text:
      "88. Är du skyldig att underrätta polisen om du kört och skadat en älg?",
    type: "mc",
    answers: [
      { text: "A Nej, inte om älgen kan springa från platsen", correct: false },
      { text: "B Ja, jag måste alltid underrätta polisen", correct: true },
      { text: "C Ja, men enbart om älgen dödas vid krocken", correct: false }
    ]
  },
  {
    text:
      "89. Bilen framför dig är parkerad på denna plats och du ser ingen förare i närheten. Får du köra förbi bilen?",
    type: "mc",
    image: "P8Q89.png",
    answers: [
      {
        text:
          "A Ja, men enbart om jag inte överskrider spärrlinjen med något hjul.",
        correct: false
      },
      {
        text: "B Ja, med låg fart och om jag inte hindrar mötande",
        correct: true
      },
      { text: "C Nej, jag måste stanna och vänta", correct: false }
    ]
  },
  {
    text:
      "90. Du ser att det inte kommer något tåg. Måste du ändå stanna innan du passerar järnvägen i någon av situationerna?",
    type: "mc",
    image: "P8Q90.png",
    answers: [
      { text: "A Ja, men enbart i situation A", correct: true },
      { text: "B Ja, men enbart i situation B", correct: false },
      { text: "C Ja, i båda situationerna", correct: false },
      { text: "D Nej", correct: false }
    ]
  },
  {
    text:
      "91. Du upptäcker under körning att kontrollampan med den här symbolen tänds. Vad betyder det?",
    type: "mc",
    image: "P8Q91.png",
    answers: [
      { text: "A Batteriet är överhettat", correct: false },
      { text: "B Batteriet laddas inte tillräckligt", correct: true },
      { text: "C Det har blivit kortslutning i någon elkrets", correct: false }
    ]
  },
  {
    text:
      "92. Vad är mest avgörande för hur allvarliga följderna av en trafikolycka blir?",
    type: "mc",
    answers: [
      { text: "A Fordonets skick", correct: false },
      { text: "B Fordonets hastighet", correct: true },
      { text: "C Fordonets tyngd", correct: false },
      { text: "D Fordonets ålder", correct: false }
    ]
  },
  {
    text:
      "93. Vilken av dessa personer löper normalt störst risk att bli en fara i trafiken?",
    type: "mc",
    answers: [
      { text: "A Den som har självkontroll", correct: false },
      {
        text: "B Den som tillåter andra förare att göra misstag",
        correct: false
      },
      { text: "C Den som har gott självförtroende", correct: false },
      { text: "D Den som söker spänning och äventyr", correct: true }
    ]
  },
  {
    text:
      "94. Vad är viktigast för trafiksäkerheten när du kör i tät dimma på en landsväg?",
    type: "mc",
    answers: [
      { text: "A Att jag har dimljusen framtill tända", correct: false },
      {
        text: "B Att jag håller tillräckligt långt avstånd till framförvarande",
        correct: true
      },
      {
        text: "C Att jag kör nära framförvarande så jag kan följa baklyktorna",
        correct: false
      },
      { text: "D Att jag har helljuset tänt", correct: false }
    ]
  },
  {
    text:
      "95. Du har kört och skadat ett rådjur som sedan springer in i skogen Vad ska du göra?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag ser till att någon kontaktar polisen och är därför skyldig  att stanna på platsen tills polisen kommer",
        correct: false
      },
      {
        text: "B Jag märker ut olycksplatsen och kontaktar därefter polisen",
        correct: true
      },
      {
        text: "C Jag åker till närmaste samhälle där jag kontaktar polisen",
        correct: false
      },
      {
        text:
          "D Eftersom rådjuret sprang in i skogen behöver jag inte göra någonting",
        correct: false
      }
    ]
  },
  {
    text:
      "96. En ung förare reagerar i allmänhet långsammare när det händer något oväntat i trafiken än vad en erfaren förare i 50-årsåldern gör. Vad kan det bero på?",
    type: "mc",
    answers: [
      { text: "A Unga förare är oftast osäkra på sig själva", correct: false },
      {
        text:
          "B Erfarna förare är oftast mera beredda på att dat kan hända något oväntat",
        correct: true
      },
      {
        text: "C Erfarna förare kör oftast betydligt långsammare",
        correct: false
      }
    ]
  },
  {
    text:
      "97. Bilen är parkerad. Är bilen parkerad rätt i någon av situationerna?",
    type: "mc",
    image: "P8Q97.png",
    answers: [
      { text: "A Ja, men enbart i situation A", correct: false },
      { text: "B Ja, men enbart i situation B", correct: false },
      { text: "C Ja i både situationerna", correct: false },
      { text: "D Nej", correct: true }
    ]
  }
];

module.exports = { quizData, questions };
