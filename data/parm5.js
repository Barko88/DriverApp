const quizData = {
  title: "Pärm 5"
};

const questions = [
  {
    text:
      "1. Du ser ett fordon med ett hängande skylt där bak. Vad betyder skylten?",
    type: "mc",
    image: "P5Q1.png",
    answers: [
      { text: "A Det finns en olycka.", correct: false },
      { text: "B Det är en grönsaksbil.", correct: false },
      { text: "C Det är ett långsamgående fordon", correct: true },
      { text: "D Detta är ett släpfordon", correct: false }
    ]
  },
  {
    text: "2. Vilken fordonskombination ska ha denna skylt baktill?",
    type: "mc",
    image: "P5Q2.png",
    answers: [
      { text: "A Buss med släpvagn", correct: false },
      { text: "B Lastbil med släpvagn", correct: false },
      { text: "C Personbil med släpvagn", correct: false },
      { text: "D Traktor med släpvagn", correct: true }
    ]
  },
  {
    text:
      "3. För vilket av följande fordon eller fordonskombinationer är hastigheten begränsad till 80 km/h på en väg där dessa vägmärken finns uppsatta?",
    type: "mc",
    image: "P5Q3.png",
    answers: [
      { text: "A Lätt lastbil", correct: false },
      { text: "B Tung lastbil", correct: false },
      { text: "C Personbil med tillkopplad bromsad släpvagn", correct: true },
      { text: "D Buss med totalvikt över 3,5 ton", correct: false }
    ]
  },
  {
    text:
      "4. Du kopplar en lätt släpvagn som är försedd med bromsar till den personbil. Vilken är högsta tillåtna hastighet?",
    type: "mc",
    answers: [
      { text: "A 30 km/h", correct: false },
      { text: "B 80 km/h", correct: true },
      { text: "C 90 km/h", correct: false },
      { text: "D 110 km/h", correct: false }
    ]
  },
  {
    text:
      "5. Vilken högsta tillåtna hastighet gäller för närmast framförvarande fordon?",
    type: "mc",
    image: "P5Q5.png",
    answers: [
      { text: "A. 70 km/h", correct: false },
      { text: "B. 80 km/h", correct: true },
      { text: "C. 90 km/h", correct: false },
      { text: "D. 110 km/h", correct: false }
    ]
  },
  {
    text: "6. Vad menas med situationsanpassad hastighet?",
    type: "mc",
    answers: [
      { text: "A Att köra sakta genom alla korsningar", correct: false },
      {
        text:
          "B Att anpassa hastigheten till bakomvarande trafik, även om jag då överträder hastighetsbegränsningen.",
        correct: false
      },
      {
        text: "C Att alltid köra i högsta tillåtna hastighet.",
        correct: false
      },
      {
        text:
          "D Att köra i den hastighet som trafiksäkerheten kräver, utan att överträda gällande hastighetsbegränsning.",
        correct: true
      }
    ]
  },
  {
    text: "7. Vad är oftast orsaken till att en singelolycka inträffar?",
    type: "mc",
    answers: [
      { text: "A Att det är halt väglag.", correct: false },
      { text: "B Det regnar eller snöar kraftigt.", correct: false },
      {
        text: "C Att föraren inte anpassar körningen efter förhållandena.",
        correct: true
      },
      { text: "D Att däcken är slitna.", correct: false }
    ]
  },
  {
    text: "8. Vad är mest förrädisk i denna situation?",
    type: "mc",
    image: "P5Q8.png",
    answers: [
      { text: "A Utfarten på vänster sida från gårdsplanet", correct: false },
      { text: "B Utfarten från höger före ladan", correct: false },
      { text: "C Utfarten från höger efter ladan", correct: true }
    ]
  },
  {
    text:
      "9. Risken för fartblindhet är bl.a beroende av miljön. Vilket av nedanstående trafikmiljö ökar risken?",
    type: "mc",
    answers: [
      { text: "A Vid körnings av tyst bil.", correct: true },
      { text: "B Vid körnings på kvällstid", correct: false },
      { text: "C Vid körnings i tätort", correct: false }
    ]
  },
  {
    text: "10. Hur påverkas du av fartblindhet?",
    type: "mc",
    answers: [
      { text: "A Jag kör fortare än vad jag är medveten om.", correct: true },
      {
        text:
          "B Jag upplever att trafiken i min omgivning kör långsammare än vad jag själv gör.",
        correct: false
      },
      {
        text: "C Jag kör långsammare än vad jag är medveten om.",
        correct: false
      }
    ]
  },
  {
    text:
      "11. Hur påverkas förmågan att utnyttja periferiseendet om du ökar hastigheten?",
    type: "mc",
    answers: [
      {
        text: "A Jag får lättare att upptäcka föremål som kommer från sidan",
        correct: false
      },
      { text: "B Det påverkar inte", correct: false },
      {
        text:
          "C Jag får svårare att upptäcka föremål som kommer från varje sidan",
        correct: true
      }
    ]
  },
  {
    text: "12. Kan risken för tunnelseende påverkas av hastigheten?",
    type: "mc",
    answers: [
      {
        text: "A Nej, hastigheten har inget samband med tunnelseende.",
        correct: false
      },
      {
        text: "B Nej, tunnelseende beror på sjuklig förändring i ögat.",
        correct: false
      },
      {
        text: "C Ja, hög hastighet ökar risken för tunnelseende",
        correct: true
      },
      {
        text: "D Ja, hög hastighet minskar risken för tunnelseende.",
        correct: false
      }
    ]
  },
  {
    text:
      "13. Du ska svänga vänster ut på vägen. Lastbilen blinkar till höger. Hur ska du uppträda?",
    type: "mc",
    image: "P5Q13.png",
    answers: [
      {
        text: "A Jag kan köra direkt eftersom lastbilen blinkar till höger",
        correct: false
      },
      {
        text: "B Jag väntar till att lastbilen har genomfört svängen",
        correct: true
      },
      {
        text:
          "C Jag kör när lastbilen påbörjat svängen eftersom jag då kan vara säker att den inte ska fortsätta rakt fram.",
        correct: false
      }
    ]
  },
  {
    text:
      "14. Vilket alternativ beskriver bäst hur du ska uppträda när du svängt in på en huvudled där högsta tillåtna hastigheten är 90km/h?",
    type: "mc",
    answers: [
      {
        text: "A Jag är särskilt uppmärksammad bakåt och accelererar.",
        correct: true
      },
      {
        text:
          "B Jag accelererar försiktigt för att inte skada miljön oavsett hur trafiksituationen ser ut.",
        correct: false
      },
      {
        text: "C Jag använder alltid vägrenen som accelerationsfält.",
        correct: false
      }
    ]
  },
  {
    text:
      "15. Vilken är den lämpligaste placeringen vid högersväng i korsningen på bilden?",
    type: "mc",
    image: "P5Q15.png",
    answers: [
      {
        text: "A Jag ska placera bilen väl till höger på vägrenen.",
        correct: true
      },
      { text: "B Jag ska placera bilen nära mittlinjen.", correct: false },
      {
        text: "C Jag ska placera bilen väl till höger i körfältet.",
        correct: false
      },
      { text: "D Jag ska placera bilen mitt i körfältet.", correct: false }
    ]
  },
  {
    text: "16. Du ska svänga till Hult. Vad ska du göra?",
    type: "mc",
    image: "P5Q16.png",
    answers: [
      {
        text:
          "A Jag placerar mig intill mittlinjen för att svänga till vänster",
        correct: false
      },
      {
        text:
          "B Jag placerar mig mitt på körfältet för att kunna svänga vänster eller höger",
        correct: false
      },
      {
        text: "C Jag placerar mig till kantlinjen för att svänga till Hult",
        correct: true
      }
    ]
  },
  {
    text:
      "17. Du har råkat hamna i det vänstra körfältet. Din avsikt var egentligen att köra rakt fram. Hur ska jag göra i den här situationen?",
    type: "mc",
    image: "P5Q17.png",
    answers: [
      { text: "A Svänga till vänster.", correct: true },
      { text: "B Byta körfält och köra rakt fram.", correct: false },
      { text: "C Fortsätta rakt fram", correct: false }
    ]
  },
  {
    text:
      "18. Du tänker köra in på vägen till vänster. Vad är lämpligast i denna situation?",
    type: "mc",
    image: "P5Q18.png",
    answers: [
      {
        text:
          "A Eftersom sikten är begränsad svänger jag till höger, vänder och kör rakt fram över korsningen",
        correct: true
      },
      {
        text:
          "B Jag blinkar till vänster i god tid och placerar mig nära mitten för att svänga in på vägen",
        correct: false
      },
      {
        text:
          "C Jag kör nära högra kanten, stannar och därefter svänger vänste",
        correct: false
      }
    ]
  },
  {
    text:
      "19. Du ska köra in på vägen till vänster. Vilket alternativ är det säkraste sättet i den här situationen?",
    type: "mc",
    image: "P5Q19.png",
    answers: [
      {
        text:
          "A Att jag kör nära höger kanten, stannar där och sen svänga vänster.",
        correct: false
      },
      {
        text: "B Att jag svänger till vänster enligt skylten.",
        correct: false
      },
      {
        text:
          "C Att jag fortsätter vägen rakt fram, vänder och gör en högersväng.",
        correct: true
      },
      {
        text:
          "D Att jag saktar in, släpper förbi bakomvarande trafik och därefter svänger jag till vänster.",
        correct: false
      }
    ]
  },
  {
    text:
      "20. Du kör på en smal och krokig landsväg, med mycket trafik och upptäcker att du måste vända. Vilket är vanligtvis säkraste sättet att vända i denna situation?",
    type: "mc",
    image: "P5Q20.png",
    answers: [
      { text: "A Att göra en U-sväng på landsvägen.", correct: false },
      {
        text: "B Att svänga in på en mindre väg och vända där.",
        correct: true
      },
      {
        text:
          "C Att svänga in på en mindre väg och sedan backa ut på landsvägen.",
        correct: false
      },
      {
        text: "D Att från landsvägen backa in på en korsande väg.",
        correct: false
      }
    ]
  },
  {
    text:
      "21. Du närmar dig en korsning på landsväg och ska svänga vänster. Vilket mötande fordon är det svårast att bedömda hastigheten på?",
    type: "mc",
    answers: [
      { text: "A Traktor", correct: false },
      { text: "B Motorcykel", correct: true },
      { text: "C Lastbil", correct: false },
      { text: "D Personbil", correct: false }
    ]
  },
  {
    text:
      "22. Du kör på en landsväg och tänker köra om en lastbil. Vilket påstående beskriver bäst hur du ska förbereda omkörningen?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag placerar mig tätt bakom lastbilen för att minska omkörningssträckan.",
        correct: false
      },
      {
        text:
          "B Jag placerar mig närmare mittlinjen och håller ett tillräckligt avstånd till lastbilen för att kunna se långt fram.",
        correct: true
      },
      {
        text: "C Jag blinkar med helljuset för att varna mötande trafik.",
        correct: false
      },
      {
        text:
          "D Jag ger ljudsignal för att få lastbilen att gå ut på vägrenen.",
        correct: false
      }
    ]
  },
  {
    text: "23. Vilket påstående om vägrenen är riktigt?",
    type: "mc",
    answers: [
      {
        text: "A Vägrenen är avsedd för bl.a. oskyddade trafikanter.",
        correct: true
      },
      { text: "B Vägrenen är ett körfält.", correct: false },
      {
        text:
          "C Samtliga trafikkanter får använda vägrenen men ingen har skyldighet att göra det.",
        correct: false
      },
      {
        text:
          "D Jag är alltid skyldig att använda vägrenen om jag blir omkörd.",
        correct: false
      }
    ]
  },
  {
    text:
      "24. Hur kan du som nybliven körkortstagare på bästa sätt undvika att hamna i risksituationer?",
    type: "mc",
    answers: [
      {
        text: "A Jag kör i intensiv trafik för att träna på svåra situationer.",
        correct: false
      },
      { text: "B Jag kör långsamt hela tiden.", correct: false },
      { text: "C Jag har stora säkerhetsmarginaler.", correct: true },
      { text: "D Jag bromsar ofta.", correct: false }
    ]
  },
  {
    text: "25. Vilken är den vanligaste orsaken till påkörning bakifrån?",
    type: "mc",
    answers: [
      { text: "A För kort avstånd mellan fordonen", correct: true },
      { text: "B Onormalt lång reaktionstid hos föraren", correct: false },
      { text: "C Dåliga bromsar", correct: false },
      { text: "D Dåliga däck eller fel typ av däck", correct: false }
    ]
  },
  {
    text:
      "26. Många farliga situationer uppstår när förare gör omkörning trots att det finns mötande trafik. Vad kan orsaken vara?",
    type: "mc",
    answers: [
      {
        text:
          "A Svårt att bedöma hur långt bort och hur fort mötande fordon kör.",
        correct: true
      },
      {
        text: "B Svårt att bedöma hur fort framför varande fordon kör.",
        correct: false
      },
      { text: "C Svårt att bedöma den egna hastigheten.", correct: false }
    ]
  },
  {
    text: "27. Du tänker köra om lastbilen. Vad gäller?",
    type: "mc",
    image: "P5Q27.png",
    answers: [
      { text: "A Jag måste ge ljudsignal", correct: false },
      { text: "B Lastbilen måste köra ut på vägrenen", correct: false },
      {
        text:
          "C Jag måste vänta med att köra om tills det blir fritt från mötande trafik",
        correct: true
      },
      { text: "D Mötande måste köra ut på vägren", correct: false }
    ]
  },
  {
    text:
      "28. Du har börjat köra om lastbilen. Vad ska du göra i den här situationen?",
    type: "mc",
    image: "P5Q28.png",
    answers: [
      {
        text: "A Jag ökar farten för att köra om så fort som möjligt.",
        correct: false
      },
      {
        text: "B Jag avbryter omkörning och kör tillbaka till högra körfältet.",
        correct: true
      },
      {
        text: "C Jag ska blinka med helljuset för att varna mötande trafik.",
        correct: false
      }
    ]
  },
  {
    text:
      "29. Får du köra om strax före backkrön där sikten är skymd om vägen har ett körfält i vardera riktning?",
    type: "mc",
    answers: [
      { text: "A Nej", correct: true },
      {
        text:
          "B Ja, om fordonet jag vill köra om ger tecken att det inte finns mötande trafik.",
        correct: false
      },
      {
        text: "C Ja, om fordonet jag vill köra om är en traktor med släp.",
        correct: false
      }
    ]
  },
  {
    text: "30. Du tänker köra om bilen framför. När kan du börja omkörningen?",
    type: "mc",
    image: "P5Q30.png",
    answers: [
      {
        text: "A-När bilen som jag vill köra om blinkar åt höger",
        correct: false
      },
      {
        text: "B-När bilen som jag vill köra om kör ut på vägrenen",
        correct: false
      },
      {
        text: "C-När bilen som jag vill köra om sänker hastigheten",
        correct: false
      },
      {
        text:
          "D-När jag själv förvissat mig om att det är klart för omkörningen",
        correct: true
      }
    ]
  },
  {
    text:
      "31. Du tänker köra om lastbilen. Får du köra över mittlinjen med vänster hjulpar samtidigt som du har mötande trafik?",
    type: "mc",
    image: "P5Q31.png",
    answers: [
      { text: "A-Nej", correct: true },
      {
        text: "B-Ja eftersom mötande bilar kan köra ut på vägrenen",
        correct: false
      },
      { text: "C-Ja eftersom lastbilen kör på vägrenen", correct: false }
    ]
  },
  {
    text:
      "32. Du kör 90 och detta är högsta tillåtna hastighet på vägen. Får du andvända vägrenen för att underlätta för omkörningen?",
    type: "mc",
    image: "P5Q32.png",
    answers: [
      { text: "A Ja efter jag ِöverblicka vägen framför mig.", correct: true },
      {
        text:
          "B Nej det är endast tillåtet på vägerna där hastigheten är 70 km/h",
        correct: false
      },
      {
        text: "C Nej eftersom bilarna bakom kör fortare än tillåtet hastighet",
        correct: false
      }
    ]
  },
  {
    text:
      "33. Du kör i 80 km/h och bilen bakom dig vill köra om dig. Vad bör du göra?",
    type: "mc",
    image: "P5Q33.png",
    answers: [
      { text: "A Placera bilen på vägrenen", correct: false },
      { text: "B Öka farten", correct: false },
      { text: "C Placera bilen intill kantlinjen", correct: true },
      { text: "D Bromsa", correct: false }
    ]
  },
  {
    text: "34. Hur ska du uppträda när du blir omkörd?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag är skyldig att försöka hindra omkörningen eftersom den som kör om uppträder omdömeslöst och bryter mot trafikreglerna",
        correct: false
      },
      {
        text: "B Jag är skyldig att köra ut på vägrenen om jag blir omkörd",
        correct: false
      },
      {
        text:
          "C Jag är skyldig att underlätta omkörningen även om han som kör om uppträder omdömeslöst och bryter mot trafikreglerna",
        correct: true
      }
    ]
  },
  {
    text:
      "35. Vilken av dessa situationer är det lämpligt att använda vägrenen för att underlätta en omkörning?",
    type: "mc",
    image: "P5Q35.png",
    answers: [
      { text: "A Bild A", correct: true },
      { text: "B Bild B", correct: false },
      { text: "C Bild C", correct: false },
      { text: "D Bild D", correct: false }
    ]
  },
  {
    text:
      "36. Du ser att en bil kör i körfältet till höger om ditt. Ni kör med samma hastighet. Vad gäller när körfälten strax går ihop?",
    type: "mc",
    image: "P5Q36.png",
    answers: [
      {
        text:
          "A Pilarna i mitt körfält betyder att jag har väjningsplikt mot den andra bilen.",
        correct: false
      },
      {
        text: "B Jag har enligt högerregel väjningsplikt mot den andra bilen.",
        correct: false
      },
      {
        text:
          "C Pilarna i mitt körfält betyder att jag ska köra före den andra bilen.",
        correct: false
      },
      {
        text:
          "D Vi ska visa varandra hänsyn och anpassa körningen för ett säkert samspel.",
        correct: true
      }
    ]
  },
  {
    text:
      "37. Du kör på vägrenen. Vilken regel gäller om du ska in på körbanan igen?",
    type: "mc",
    image: "P5Q37.png",
    answers: [
      {
        text: "A Jag har väjningsplikt mot fordonen på körbanan.",
        correct: true
      },
      {
        text:
          "B Fordon på körbanan har väjningsplikt mot mig när jag blinkar vänster.",
        correct: false
      }
    ]
  },
  {
    text:
      "38. Vilken regel gäller när en förare ska köra in på körbanan från vägrenen?",
    type: "mc",
    answers: [
      { text: "A Högerregeln ska tillämpas.", correct: false },
      { text: "B Kugghjulsprincipen ska tillämpas.", correct: false },
      { text: "C Förare på vägrenen har väjningsplikt.", correct: true },
      { text: "D Förare på körbanan har väjningsplikt.", correct: false }
    ]
  },
  {
    text: "39. I vilken av situationerna är omkörning förbuden?",
    type: "mc",
    image: "P5Q39.png",
    answers: [
      { text: "A I situation A", correct: false },
      { text: "B I situation B", correct: false },
      { text: "C I situation C", correct: false },
      { text: "D I situation D", correct: true }
    ]
  },
  {
    text: "40. Du kör på motorväg. Vid vilket tillfälle får du inte köra om?",
    type: "mc",
    answers: [
      { text: "A Då en bakomvarande påbörjat en omkörning", correct: true },
      { text: "B Strax före en kurva", correct: false },
      { text: "C Strax före backkrön", correct: false }
    ]
  },
  {
    text:
      "41. Du bogserar en bil med bogserlina. Vilket vägmärke visar vilken väg som du inte får köra in på?",
    type: "mc",
    image: "P5Q41.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: true },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "42. Vilket av följande vägmärken innebär bland annat att det är förbjudet att vända?",
    type: "mc",
    image: "P5Q42.png",
    answers: [
      { text: "A Vägmärke A", correct: true },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "43. Vad är viktigt att veta när du planerar att köra om fordonet på bilden?",
    type: "mc",
    image: "P5Q43.png",
    answers: [
      {
        text: "A Fordonet framför mig är en lastbil utan släpvagn",
        correct: false
      },
      {
        text: "B Fordonet framför mig är en lastbil med släpvagn",
        correct: true
      },
      {
        text: "C Fordonet framför mig är ett långsamt gående fordon",
        correct: false
      }
    ]
  },
  {
    text:
      "44. Finns det några skillnader mellan en motortrafikled och en motorväg?",
    type: "mc",
    answers: [
      {
        text: "A Ja, på motortrafikled är det tillåtet at stanna.",
        correct: false
      },
      {
        text: "B Ja, på motortrafikled är det tillåtet att vända.",
        correct: false
      },
      {
        text:
          "C Ja, på motortrafikled kan mötande trafik förekomma på samma körbana.",
        correct: true
      },
      {
        text:
          "D Ja, på motortrafikled kan det finnas korsningar på samma plan.",
        correct: false
      },
      { text: "E Nej, det finns inga skillnader.", correct: false }
    ]
  },
  {
    text:
      "45. Du lämnar en motorväg och kommer in på väg som är försedd med detta vägmärke. Vad innebär det för dig?",
    type: "mc",
    image: "P5Q45.png",
    answers: [
      {
        text: "A Att mötande trafik får förekomma på samma körbana.",
        correct: true
      },
      { text: "B Cykel och moped trafik får förekomma.", correct: false },
      { text: "C Korsande trafik får förekomma.", correct: false }
    ]
  },
  {
    text:
      "46. Du kör på en motorväg och ser en person som liftar vid vägkanten. Får du stanna för att ta upp liftaren?",
    type: "mc",
    answers: [
      {
        text: "A Nej, det är förbjudet att stanna på en motorväg.",
        correct: true
      },
      { text: "B Ja, om jag slår på varningsblinkern.", correct: false },
      {
        text: "C Ja, om hastigheten på motorvägen inte överstiger 90km/h",
        correct: false
      }
    ]
  },
  {
    text:
      "47. Vilken högsta tillåtna hastighet gäller när du passerar detta vägmärke om inget annat anges",
    type: "mc",
    image: "P5Q47.png",
    answers: [
      { text: "A- 50 km/h", correct: false },
      { text: "B- 70 km/h", correct: false },
      { text: "C- 90 km/h", correct: false },
      { text: "D- 110 km/h", correct: true }
    ]
  },
  {
    text: "48. Vilka av samtliga fordon får köra på motorväg?",
    type: "mc",
    answers: [
      { text: "A Tung lastbil, bil och lätt motorcykel", correct: true },
      { text: "B Buss, bil och traktor", correct: false },
      { text: "C Tung motorcykel, bil och traktor", correct: false },
      { text: "D Bil, lastbil och moped", correct: false }
    ]
  },
  {
    text:
      "49. Du kör på motorväg och närmar dig en anslutning till ett accelerationsfält som en förare är på väg att lämna. Vad gäller?",
    type: "mc",
    image: "P5Q49.png",
    answers: [
      {
        text:
          "A Jag behöver inte anpassa hastigheten för att inkörningen underlättas.",
        correct: false
      },
      { text: "B Jag måste byta till vänster körfält", correct: false },
      {
        text:
          "C Jag måste anpassa hastigheten för att inkörningen underlättas.",
        correct: true
      }
    ]
  },
  {
    text:
      "50. Du ska från motorvägen bogsera en bil till närmaste avfart. Får du använda vägrenen?",
    type: "mc",
    answers: [
      {
        text: "A Ja, men enbart om båda bilarna har varningsblinkers påslagen.",
        correct: false
      },
      {
        text: "B Nej, det är enbart bärgningsbil som får använda vägrenen.",
        correct: false
      },
      {
        text: "C Nej, jag får aldrig köra på vägrenen på motorväg.",
        correct: false
      },
      { text: "D Ja, jag måste använda vägrenen.", correct: true }
    ]
  },
  {
    text: "51. Du möter en bil som kör på fel sida av vägen. Hur bör du göra?",
    type: "mc",
    image: "P5Q51.png",
    answers: [
      {
        text: "A Jag styr åt till vänster för att undvika kollision",
        correct: false
      },
      { text: "B Jag bromsar och styr till höger", correct: true }
    ]
  },
  {
    text:
      "52. Vad bör du i första hand ha beredskap för i den här situationen?",
    type: "mc",
    image: "P5Q52.png",
    answers: [
      { text: "A Möte med omkörande fordon", correct: true },
      { text: "B Gående efter vägkanten", correct: false },
      { text: "C Cyklisten i mitt körfält", correct: false }
    ]
  },
  {
    text:
      "53. Vilken högsta tillåtna hastighet gäller för lastbilen framför dig när den kör på motorväg?",
    type: "mc",
    image: "P5Q53.png",
    answers: [
      { text: "A - 50 km/h", correct: false },
      { text: "B - 70 km/h", correct: false },
      { text: "C - 90 km/h", correct: true },
      { text: "D - 110 km/h", correct: false }
    ]
  },
  {
    text:
      "54. Du kör på en påfart till en motorväg. Hur skall du uppträda här?",
    type: "mc",
    image: "P5Q54.png",
    answers: [
      {
        text:
          "A Jag accelererar på påfartssträckan så att jag anpassar hastigheten till motorvägstrafikens hastighetstempo.",
        correct: true
      },
      {
        text:
          "B Jag väntar med att öka farten tills jag lämnat accelerationsfältet.",
        correct: false
      },
      {
        text:
          "C Jag minskar farten för att kunna stanna på slutet av accelerationsfältet.",
        correct: false
      }
    ]
  },
  {
    text:
      "55. Du närmar dig backkrönet på bilden. Var ska du placera bilen i den här situationen?",
    type: "mc",
    image: "P5Q55.png",
    answers: [
      {
        text:
          "A Nära vägens mitt för att inte riskera att köra på gående och cyklister på vägens högra sida.",
        correct: false
      },
      {
        text:
          "B Väl till höger för att ha god marginal i sidled om jag får möte.",
        correct: true
      },
      {
        text:
          "C Placeringen har ingen betydelse om jag anpassat hastigheten efter situationen?",
        correct: false
      }
    ]
  },
  {
    text:
      "56. Du kör i en kö och bilen bakom håller för kort avstånd. Vad är det bästa du kan göra för att öka säkerheten?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag ökar farten så att avståndet till bilen bakom mig blir längre.",
        correct: false
      },
      {
        text:
          "B Jag bromsar kraftigt så att föraren i bilen bakom mig förstår att han eller hon ska öka avståndet till min bil.",
        correct: false
      },
      {
        text:
          "C Jag lättar på gasen och ökar avståndet till bilen framför mig.",
        correct: true
      }
    ]
  },
  {
    text:
      "57. Får du i den här situationen köra om fordonet som kör sakta framför dig?",
    type: "mc",
    image: "P5Q57.png",
    answers: [
      {
        text: "A. Ja, eftersom det inte kommer mötande trafik",
        correct: false
      },
      { text: "B. Ja, eftersom fordonet kör långsamt", correct: false },
      {
        text: "C. Ja, eftersom fordonet är försett med LGF-skylt",
        correct: false
      },
      { text: "D. Nej", correct: true }
    ]
  },
  {
    text:
      "58. Bilen framför dig kör mycket långsamt. Får du köra om i denna situation?",
    type: "mc",
    image: "P5Q58.png",
    answers: [
      {
        text: "A. Ja, eftersom bilen hindrar trafiken genom sitt körsätt",
        correct: false
      },
      {
        text: "B. Ja, om jag inte överskrider spärrlinjen med något hjul",
        correct: false
      },
      { text: "C. Nej", correct: true }
    ]
  },
  {
    text:
      "59. Innebär något av vägmärkena att högsta tillåtna hastigheten är 110 km/h om inget annat anges",
    type: "mc",
    image: "P5Q59.png",
    answers: [
      { text: "A. Ja, men enbart vägmärke A", correct: true },
      { text: "B. Ja, men enbart vägmärke B", correct: false },
      { text: "C. Ja, i både vägmärkena", correct: false },
      { text: "D. Nej", correct: false }
    ]
  },
  {
    text:
      "60. Du kör i 90 km/h en solig sommardag. Ungefär hur stort avstånd bör du minst hålla till framförvarande fordon?",
    type: "mc",
    answers: [
      { text: "A 90 m", correct: true },
      { text: "B 50 m", correct: false },
      { text: "C 30 m", correct: false }
    ]
  }
];

var shuffledQuestionArray = shuffle(questions);

function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

module.exports = { quizData, shuffledQuestionArray };
