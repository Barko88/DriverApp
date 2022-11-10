const quizData = {
  title: "Pärm 6"
};

const questions = [
  {
    text:
      "1. Hur många människor har årligen blivit dödade i trafiken de senaste fem åren?",
    type: "mc",
    answers: [
      { text: "A 200-300 personer", correct: false },
      { text: "B 500-600 personer", correct: true },
      { text: "C 900-1000 personer", correct: false },
      { text: "D 1200-1300 personer", correct: false }
    ]
  },
  {
    text: "2. Vilken belysning måste finnas framtill på en personbil?",
    type: "mc",
    answers: [
      {
        text: "A Helljus, halvljus, parkeringsljus och körriktningsvisare.",
        correct: true
      },
      {
        text: "B Helljus, halvljus, körriktningsvisare och dimljus",
        correct: false
      },
      {
        text: "C Helljus, varselljus, dimljus och körriktningsvisare.",
        correct: false
      }
    ]
  },
  {
    text: "3. Får du köra bil med endast parkeringsljus.",
    type: "mc",
    answers: [
      { text: "A Ja, om du kör på dagen och sikten är bra", correct: false },
      { text: "B Ja, om vägen är dimmig och disig.", correct: false },
      { text: "C Nej.", correct: true },
      { text: "D Ja, om det inte finns några mötande fordon", correct: false }
    ]
  },
  {
    text:
      "4. Du stannar vid vägkanten och väntar på en passagerare som dröjer. Det är mörkt och vägen saknar belysning. Vilket ljus ska du ha tänt i bilen?",
    type: "mc",
    answers: [
      { text: "A Parkeringsljus", correct: true },
      { text: "B Halvljus", correct: false },
      { text: "C Varningsblinkers", correct: false },
      { text: "D Helljus", correct: false }
    ]
  },
  {
    text: "5. När ska parkeringsljus användas under mörker?",
    type: "mc",
    answers: [
      { text: "A Vid körning i tunnel.", correct: false },
      { text: "B Vid körning i tätort.", correct: false },
      {
        text: "C Vid ofrivilligt stop på vägen för att exempelvis byta hjul.",
        correct: true
      },
      {
        text:
          "D Vid parkering på en gata med tillfredsställande gatubelysning.",
        correct: false
      }
    ]
  },
  {
    text:
      "6. Vilka belysning får inte användas samtidigt vid färd av personbil?",
    type: "mc",
    answers: [
      { text: "A Helljus och dimljus", correct: false },
      { text: "B Halvljus och dimljus", correct: true },
      { text: "C Halvljus och parkeringsljus", correct: false },
      { text: "D Helljus och parkeringsljus", correct: false }
    ]
  },
  {
    text:
      "7. En mörk kväll kör du på en landsväg. Du får möte med en annan personbil och bländar av till halvljus. När bör du slå på helljuset igen?",
    type: "mc",
    image: "P6Q7.png",
    answers: [
      { text: "A Strax efter mötet", correct: false },
      { text: "B Vid själva mötet.", correct: true },
      { text: "C Ca 30 m efter mötet", correct: false },
      { text: "D Ca 30 m före mötet", correct: false }
    ]
  },
  {
    text:
      "8. Du kör i mörker. I vilket alternativ är det förbjudet att använda helljus?",
    type: "mc",
    answers: [
      { text: "A När jag passerar ett parkerat fordon.", correct: false },
      { text: "B Vid möte med cyklist", correct: true },
      { text: "C Vid möte med gående", correct: false }
    ]
  },
  {
    text: "9. Vilken belysning får du använda när du kör i dimma under dagtid?",
    type: "mc",
    answers: [
      { text: "A Parkeringsljus", correct: false },
      { text: "B Dimljus tillsammans med halvljus", correct: false },
      { text: "C Dimljus tillsammans med parkeringsljus", correct: true }
    ]
  },
  {
    text:
      "10. Genom en kontrollbesiktning upptäcker du att halvljuset har gått sönder och du ska köra till en verkstad under dagen och vädret är bra. Vilken ljus ska du använda ?",
    type: "mc",
    answers: [
      { text: "A Dimljus", correct: true },
      { text: "B Parkeringsljus", correct: false },
      { text: "C Helljus", correct: false }
    ]
  },
  {
    text: "11. Vilken situation får du inte ha dimbakljuset tänt?",
    type: "mc",
    answers: [
      { text: "A-Vid lätt duggregn i mörker", correct: true },
      { text: "B-Vid dimma i dagsljus", correct: false },
      { text: "C-Vid dimma i mörker", correct: false },
      { text: "D-Vid kraftig snörök i dagsljuset", correct: false }
    ]
  },
  {
    text:
      "12. I vilken av dessa situationer kan du vänta längst med att blända av till halvljus före ett möte i mörker?",
    type: "mc",
    image: "P6Q12.png",
    answers: [
      { text: "A I situation A", correct: false },
      { text: "B I situation B", correct: false },
      { text: "C I situation C", correct: true },
      { text: "D I situation D", correct: false }
    ]
  },
  {
    text:
      "13. På bilden ovan ser du dimma (snö) över vägen. Vilken ljus bör du använda?",
    type: "mc",
    image: "P6Q13.png",
    answers: [
      { text: "A Parkeringsljus tillsammans med helljus", correct: false },
      { text: "B Parkeringsljus tillsammans med halvljus", correct: true },
      { text: "C Parkeringsljus tillsammans med varselljus", correct: false },
      { text: "D Dimljus tillsammans med halvljus", correct: false }
    ]
  },
  {
    text: "14. Det är mörkt och dimma.Vilket ljus får du inte använda?",
    type: "mc",
    answers: [
      { text: "A-Helljus.", correct: true },
      { text: "B-Halvljus", correct: false },
      { text: "C-Dimljus", correct: false }
    ]
  },
  {
    text: "15. Hur reagerar bilen om du lastar den tungt i bagageluckan?",
    type: "mc",
    answers: [
      {
        text: "A Om bilen är överstyrd kan den bli understyrd",
        correct: false
      },
      {
        text: "B Om bilen är understyrd kan den bil normalstyrd",
        correct: false
      },
      { text: "C Om bilen är normalstyrd kan den bli överstyrd", correct: true }
    ]
  },
  {
    text:
      "16. När du styr i en kurva känner du att bilen svänger mer än vad som motsvarar av rattens vridning. Vad kan orsaken vara?",
    type: "mc",
    answers: [
      { text: "A Bilen är baktung", correct: true },
      { text: "B Bilen är framtung", correct: false },
      { text: "C Bilens styrservo fungerar inte", correct: false },
      {
        text: "D Bilens framdäck är i betydligt sämre skick än bakdäcken",
        correct: false
      }
    ]
  },
  {
    text: "17. Vad innebär att en personbil är understyrd?",
    type: "mc",
    answers: [
      {
        text: "A Personbilen vill svänga mer än vad föraren tänkt sig.",
        correct: false
      },
      {
        text: "B Personbilen svänger lika mycket som rattutslag.",
        correct: false
      },
      {
        text: "C Personbilen vill fortsätta rakt fram i kurvor.",
        correct: true
      }
    ]
  },
  {
    text: "18. Vad ska du göra om du råkar ut för vattenplaning?",
    type: "mc",
    answers: [
      { text: "A Bromsa hårt och styra ut mot högerkanten.", correct: false },
      {
        text:
          "B Släppa gasen så att farten sjunker och undvik stora rattrörlser.",
        correct: true
      },
      {
        text:
          "C Öka farten snabb och styra över åt det håll där det är minst vatten.",
        correct: false
      },
      { text: "D Bromsa hårt och håll ratten stilla.", correct: false }
    ]
  },
  {
    text: "19. Hur ska du göra för att undvika vattenplaning?",
    type: "mc",
    answers: [
      { text: "A Köra med tillräckligt breda däck", correct: false },
      {
        text: "B Köra med däck som har minst 3.0 mm mönsterdjup",
        correct: false
      },
      { text: "C Köra med tillräckligt låg hastighet.", correct: true }
    ]
  },
  {
    text:
      "20. Du kör i 70km/h på en landsväg. Höger hjulpar har hamnat utanför asfalten. Hur bör du göra?",
    type: "mc",
    answers: [
      {
        text: "A Jag släpper gasen och styr försiktigt upp på körbanan.",
        correct: true
      },
      {
        text:
          "B Jag bromsar mjukt och vrider kraftigt på ratten för att snabbt  komma upp på körbanan.",
        correct: false
      },
      {
        text: "C Jag bromsar hårt och styr försiktigt upp på körbanan.",
        correct: false
      },
      {
        text: "D Jag behåller hastigheten och styr försiktigt upp på körbanan.",
        correct: false
      }
    ]
  },
  {
    text:
      "21. Du kör i halt vinterväg. Vid vilket tillfälle kan du räkna med att det är extra halt?",
    type: "mc",
    answers: [
      { text: "A Då du kör över backkrön.", correct: false },
      { text: "B Då du kör genom en kurva.", correct: false },
      { text: "C Då du ökar farten kraftigt.", correct: true }
    ]
  },
  {
    text:
      "22. Du kör en bil utan ABS bromsar. Hur bör du göra om du får sladd i halt väglag?",
    type: "mc",
    answers: [
      { text: "A Jag frikopplar och styr mot vägens riktning", correct: true },
      {
        text: "B Jag bromsar hårt och styr mot vägen riktning",
        correct: false
      },
      { text: "C Jag bromsar mjukt och styr åt höger", correct: false },
      { text: "D Jag frikopplar och bromsar hårt", correct: false }
    ]
  },
  {
    text:
      "23. Om du ska byta ut alla fyra hjul. Var ska du lägga de två bästa?",
    type: "mc",
    answers: [
      { text: "A På fram axlar", correct: false },
      { text: "B Valfritt", correct: false },
      { text: "C På bak axlar", correct: true }
    ]
  },
  {
    text:
      "24. Du har börjat att svänga in på en lokalväg. Hur bör du göra i det här väglaget?",
    type: "mc",
    image: "P6Q24.png",
    answers: [
      {
        text:
          "A Jag bromsar hårt samtidigt som jag snabbt förflyttar mig åt höger för att hamna på rätt körfält",
        correct: false
      },
      {
        text: "B Jag styr snabbt ut på vägren för att inte fastna i snödrivor",
        correct: false
      },
      {
        text:
          "C Jag sänker hastigheten och styr försiktigt åt höger för att inte få sladd",
        correct: true
      }
    ]
  },
  {
    text:
      "25. Du har fel på bilen på en landsväg. Var ska du sätta varningstriangeln för att varna andra trafikanter?",
    type: "mc",
    answers: [
      { text: "A Över bilens tak så att detta syns bra", correct: false },
      { text: "B 5-10 meter före bilen", correct: false },
      { text: "C Så att trafikanterna varnas i god tid", correct: true },
      { text: "D Direkt bakom bilen", correct: false }
    ]
  },
  {
    text:
      "26. Du har blivit tvungen att stanna på en väg eller vägren. I vilken situation måste du ställa ut en godkänd varningstriangel?",
    type: "mc",
    answers: [
      { text: "A Där den tillåtna hastigheten är 50km/h", correct: false },
      {
        text: "B Där den tillåtna hastigheten är mer än 50km/h",
        correct: true
      },
      { text: "C Där den tillåtna hastigheten är 30km/h", correct: false }
    ]
  },
  {
    text:
      "27. En trafikolycka inträffar när en bil som kör om dig krockar med mötande fordon. Måste du stanna på olycksplatsen?",
    type: "mc",
    answers: [
      { text: "A Ja, men endast om mitt fordon blir skadat.", correct: false },
      { text: "B Ja, alltid", correct: true },
      {
        text: "C Ja, men endast om jag avser att vittna om olyckan.",
        correct: false
      }
    ]
  },
  {
    text:
      "28. Du har som föِrare blivit inblandad i en trafikolycka. Måste du uppge namn och adress om någon annan inbladad i samma olycka frågar efter det.",
    type: "mc",
    answers: [
      { text: "A Ja, men endast om mitt fordon blir skadat.", correct: false },
      { text: "B Ja, alltid", correct: true },
      {
        text: "C Ja, men endast om jag avser att vittna om olyckan.",
        correct: false
      }
    ]
  },
  {
    text: "29. För vilket trafikbrott återkallas normalt körkortet?",
    type: "mc",
    answers: [
      { text: "A Vid smitning från trafikolycka.", correct: true },
      { text: "B Vid enstaka felparkering.", correct: false },
      { text: "C När en förare kört över spärrlinje.", correct: false }
    ]
  },
  {
    text:
      "30. Du har kommit till en trafikolycka. Hur ska du hjälpa en person som är medvetslös och slutat andas?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag ger en konstgjord andning och när personen andas lägger jag honom  eller henne med benet högt samt lägger en filt på personen",
        correct: false
      },
      {
        text:
          "B Jag ger konstgjord andning och när han eller hon andas lägger jag personen på ryggen",
        correct: false
      },
      {
        text:
          "C Jag ser till att personen har fri luftvägar, ger konstgjord andning och när han eller hon andas lägger jag personen i framstupa sidoläge",
        correct: true
      }
    ]
  },
  {
    text:
      "31. Du har kommit till en trafikolycka där en man som är inblandad i trafikolyckan är chockad. Hur hjälper du honom bäst?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag lägger honom med huvudet lågt och benen högt, talar lugnt med honom och lägger varma kläder under och över honom.",
        correct: true
      },
      {
        text:
          "B Jag låter honom arbeta på olycksplatsen så att han får annat att tänka på.",
        correct: false
      },
      {
        text: "C Jag sätter honom när vänd bort från olycksplatsen.",
        correct: false
      }
    ]
  },
  {
    text:
      "32. Du kör bil och är trött. Kan du bli straffad om polisen stoppar dig?",
    type: "mc",
    answers: [
      { text: "A Ja, alltid", correct: false },
      { text: "B Nej", correct: false },
      {
        text: "C Ja, om det händer ett olycka på grund av trötthet .",
        correct: true
      }
    ]
  },
  {
    text:
      "33. Vid vilken tid på dygnet är det farligast att passera ett viltstråk?",
    type: "mc",
    answers: [
      {
        text: "A Vid gryning och skymning då djuren förflyttar sig mest.",
        correct: true
      },
      {
        text: "B Nattetid eftersom djuren söker efter föda då.",
        correct: false
      },
      {
        text: "C Mitt på dagen eftersom djuren är mest är aktiva då.",
        correct: false
      }
    ]
  },
  {
    text: "34. Hur kan du bl.a. märka att börjar bli trött under en körning?",
    type: "mc",
    answers: [
      { text: "A Jag känner mig frusen.", correct: true },
      { text: "B Jag känner mig hungrig.", correct: false },
      { text: "C Jag känner mig törstig.", correct: false },
      { text: "D Jag känner mig varm.", correct: false }
    ]
  },
  {
    text:
      "35. Du har kört på och skadat ett rådjur så att det blir liggande på vägen. Vad måste du göra?",
    type: "mc",
    answers: [
      {
        text: "A Kontakta polisen men enbart om en människa har skadats",
        correct: false
      },
      { text: "B Kontakta din försäkrings bolag", correct: false },
      {
        text:
          "C Låta djuret ligga kvar tills polis eller markägare kommer till platsen",
        correct: false
      },
      {
        text: "D Varna andra trafikanten och om möjligt flytta djuret",
        correct: true
      }
    ]
  },
  {
    text:
      "36. Var ska du placera din bil när du i mörker möter ett annat fordon?",
    type: "mc",
    image: "P6Q36.png",
    answers: [
      { text: "A Intill kantlinjen", correct: false },
      { text: "B Intill mittlinjen", correct: true },
      { text: "C På vägrenen", correct: false },
      { text: "D Mitt i körfältet", correct: false }
    ]
  },
  {
    text:
      "37. Du möter en bil när du kör på en landsväg. Det är mörkt och vägen saknar belysning.Vart ska du rikta blicken för att inte bli bländad och för att göra mötet säkert?",
    type: "mc",
    answers: [
      { text: "A Långt fram utmed höger vägkant", correct: true },
      { text: "B I backspegeln", correct: false },
      {
        text: "C Till vänster om strålkastarna på den mötande bilen",
        correct: false
      },
      {
        text: "D Mitt emellan strålkastarna på den mötande bilen",
        correct: false
      }
    ]
  },
  {
    text:
      "38. Bilar blir allt säkrare och utrustas med allt fler säkerhetssystem t.ex. ABS-bromsar och antisladdsystem. Kan det på något sätt vara negativt för säkerheten?",
    type: "mc",
    answers: [
      {
        text: "A Nej, alla säkerhetssystem är enbart positiva",
        correct: false
      },
      {
        text: "B Ja, det kan medföra att förarna tar större risker",
        correct: true
      },
      { text: "C Ja, bilen blir svårare att manövrera", correct: false },
      {
        text:
          "D Nej, säkerhetssystem gör att förarna kan koncentrera sig mer på trafiken.",
        correct: false
      }
    ]
  },
  {
    text:
      "39. Hur kan jag som förare minska risken för att trafikolyckor inträffar?",
    type: "mc",
    answers: [
      { text: "A Vara utvilad när du kör.", correct: true },
      { text: "B Jag ser till att bilen är vid bra skick.", correct: false },
      {
        text: "C Jag väljer en väg där vägegenskaperna är bra.",
        correct: false
      },
      {
        text: "D Jag ser till att samtliga passagerare använder bilbälte.",
        correct: false
      }
    ]
  },
  {
    text: "40. Det är en solig vinterdag. Var är det mest halt väglag?",
    type: "mc",
    answers: [
      { text: "A I en skuggad väg.", correct: true },
      { text: "B I en backrön.", correct: false },
      { text: "C I en kurva.", correct: false }
    ]
  },
  {
    text:
      "41. Du lånar en bakhjulsdriven bil istället för den framhjulsdrivna som du är van att köra. Vilken skillnad är viktig att känna till när du ska köra i halt väglag?",
    type: "mc",
    answers: [
      {
        text: "A En bakhjulsdriven bil sladdar oftast med bakvagnen",
        correct: true
      },
      {
        text: "B En bakhjulsdriven bil sladdar oftast med framvagn",
        correct: false
      },
      {
        text: "C En bakhjulsdriven bil har oftast bättre väggrepp i motlut.",
        correct: false
      }
    ]
  },
  {
    text:
      "42. Vilken av dessa djur måste du ringa polisen om du har kört över?",
    type: "mc",
    answers: [
      { text: "A. Rådjur", correct: true },
      { text: "B. Hare", correct: false },
      { text: "C. Grävling", correct: false },
      { text: "D. Räv", correct: false }
    ]
  },
  {
    text:
      "43. Du har kommit ifatt den vita bilen och vill köra om. Hur ska du göra?",
    type: "mc",
    image: "P6Q43.png",
    answers: [
      {
        text:
          "A. Jag lägger mig tätt bakom den vita bilen så att föraren upptäcker mig och förstår att han ska köra ut på vägrenen",
        correct: false
      },
      {
        text:
          "B. Jag planerar omkörningen så att jag kan köra om utan att föraren i den vita bilen behöver köra ut på vägrenen",
        correct: true
      },
      {
        text:
          "C.Jag blinkar med helljuset för att få föraren framför att köra ut på vägrenen, vilket han är skyldig att göra.",
        correct: false
      }
    ]
  },
  {
    text:
      "44. Du kör en bil utrustad med ABS-bromsar. Vilket alternativ beskriver bäst hur du ska agera för att få kortast möjliga bromssträcka?",
    type: "mc",
    answers: [
      {
        text: "A. Jag bromsar hårt, frikopplar och styr i vägens riktning",
        correct: true
      },
      {
        text:
          "B. Jag bromsar först hårt och frikopplar och lättar sedan trycket på bromsen om det behövs för att undvika att hjulen låser sig",
        correct: false
      },
      {
        text: "C. Jag bromsar mjukt, frikopplar och styr i vägens riktning",
        correct: false
      },
      {
        text:
          "D. Jag bromsar först mjukt och frikopplar och ökar sedan trycket på bromsen för att undvika att hjulen låser sig",
        correct: false
      }
    ]
  },
  {
    text:
      "45. En person har fått andningstillstånd och saknar puls. Du måste göra s.k. hjärt- och lungräddning. Hus ska du göra?",
    type: "mc",
    answers: [
      {
        text: "A Jag ska göra lika många inblåsningar som bröstkompressioner",
        correct: false
      },
      {
        text:
          "B Jag ska göra dubbelt så många inblåsningar som bröstkompressioner",
        correct: false
      },
      { text: "C Jag ska göra enbart bröstkompressioner", correct: false },
      {
        text: "D Jag ska göra många fler bröstkompressioner än inblåsningar",
        correct: true
      },
      { text: "E Jag ska göra enbart inblåsningar", correct: false }
    ]
  },
  {
    text:
      "46. Vad kan hända om du lastar släpvagnen så att det medför ett för lågt kultryck?",
    type: "mc",
    answers: [
      { text: "A Släpvagnen kan börja åla", correct: true },
      { text: "B Slitage på bilens bakdäck kan öka.", correct: false },
      { text: "C Släpvagnens bromsar fungerar sämre", correct: false },
      { text: "D Bilens halvljus kan bli bländande.", correct: false }
    ]
  },
  {
    text:
      "47. Du har krockat och en person har blivit svårt skadat vid olyckan. Din bil har blivit stående så att den hindrar andra trafikanter. Vad bör du göra?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag får aldrig flytta bilen när någon har blivit svårt skadat.",
        correct: false
      },
      {
        text:
          "B Jag bör flytta bilen om det är möjligt, men enbart om den utgör en fara för andra trafikanter.",
        correct: true
      },
      {
        text:
          "C Jag bör flytta bilen om det är möjligt, även om den inte utgör en fara för andra trafikanter.",
        correct: false
      }
    ]
  },
  {
    text:
      "48. Vilken ljus skall du ha tänt i den här situationen vid körning i mörker?",
    type: "mc",
    image: "P6Q48.png",
    answers: [
      { text: "A Parkeringsljus", correct: false },
      { text: "B Halvljus", correct: true },
      { text: "C Helljus", correct: false },
      { text: "D Varsellljus", correct: false }
    ]
  },
  {
    text:
      "49. Du kör en bil som är full lastad. När du styr i en kurva känner du att bilen svänger mer än vad som motsvarar av rattens vridning. Vad kan du göra att åt detta problem?",
    type: "mc",
    answers: [
      {
        text: "A Jag fördelar lasten så att bilen blir lättare där bak",
        correct: true
      },
      { text: "B Jag byter ut framhjulen till bättre hjul.", correct: false },
      { text: "C Jag ökar lufttrycket i framhjulen", correct: false }
    ]
  },
  {
    text: "50. Vilket påstående är rätt angående trafikolyckor?",
    type: "mc",
    answers: [
      {
        text:
          "A De flesta dödsolyckor inträffar inom tätbebyggt område, eftersom det är tät och snabb trafik där.",
        correct: false
      },
      {
        text:
          "B De flesta dödsolyckor inträffar hos förare som är över 65 år eftersom de oftast har sämre reaktionsförmåga.",
        correct: false
      },
      {
        text:
          "C De flesta dödsolyckor inträffar utanför tätbebyggt område, eftersom hastigheten är hög där.",
        correct: true
      }
    ]
  }
];

module.exports = { quizData, questions };
