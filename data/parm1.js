const quizData = {
  title: "Pärm 1"
};

const questions = [
  {
    text: "1. Vilket påstående om körfält är riktig?",
    type: "mc",
    answers: [
      { text: "Vägrenen är ett körfält.", correct: false },
      {
        text: "Ett körfält behöver inte anges med vägmarkering.",
        correct: true
      },
      {
        text: "Ett körfält måste alltid anges med markering.",
        correct: false
      }
    ]
  },
  {
    text: "*2 Du har körkort med prövotid. Vad gäller?",
    type: "mc",
    answers: [
      {
        text:
          "Jag måste göra om både kunskapsprovet och körprovet om körkortet återkallas under periodtiden.",
        correct: true
      },
      {
        text:
          "Jag behöver enbart göra om körprovet om körkortet återkallas under periodtiden",
        correct: false
      },
      {
        text:
          "Körkortet återkallas i två månader om man bötfälls för felparkering.",
        correct: false
      }
    ]
  },
  {
    text: "*3 Vad innebär begreppet lätt lastbil?",
    type: "mc",
    answers: [
      { text: "A Lastbil som har totalvikt på högst 3.5 ton", correct: true },
      {
        text: "B Lastbil som har en maxlastvikt på högst 3.5 ton",
        correct: false
      },
      {
        text: "C Lastbil som har en bruttovit på högst 3.5 ton",
        correct: false
      },
      {
        text: "D Lastbil som har en tjänstevikt på högst 3.5 ton",
        correct: false
      }
    ]
  },
  {
    text: "*4 Vilket fordon får du köra med behörighet B?",
    type: "mc",
    answers: [
      { text: "A Personbil med tillkopplad tungt släpfordon", correct: false },
      { text: "B Buss godkänd för 10 passagerare", correct: false },
      { text: "C Motorcykel med sidovagn", correct: false },
      { text: "D Lastbil med totalvikt på 3.1 ton", correct: true }
    ]
  },
  {
    text:
      "*5 Vilken avgas saknar lukt och smak och påverkar hjärt och kärlsystem?",
    type: "mc",
    answers: [
      { text: "A Kolmonoxid", correct: true },
      { text: "B Koldioxid", correct: false },
      { text: "C Kolväten", correct: false },
      { text: "D Kväveoxid", correct: false }
    ]
  },
  {
    text: "*6 När är risken störst att du drabbas av kolmonoxid förgiftning?",
    type: "mc",
    answers: [
      {
        text: "A När jag kör med fönstren öppna i hög hastighet.",
        correct: false
      },
      {
        text:
          "B När jag kör motorn på tomgång i ett garage med dålig ventilation.",
        correct: true
      },
      {
        text: "C När jag kör sakta i en trafikkö inom tätbebyggt område.",
        correct: false
      },
      {
        text: "D När jag kör med fönstren öppna i låg hastighet.",
        correct: false
      }
    ]
  },
  {
    text:
      "*7 Du kör en bil och har lastat en cykel i bagageutrymmet. Hur ska du göra för att undvika att få avgaser in i bilen?",
    type: "mc",
    answers: [
      {
        text: "A Sätt på luftkonditionering och stäng fönstrerna.",
        correct: true
      },
      {
        text: "B Stäng av fläkten och veva ner fönstrerna en bit.",
        correct: false
      },
      {
        text: "C Stäng av luftkonditionering och stäng fönstrerna.",
        correct: false
      }
    ]
  },
  {
    text:
      "*8 Vilket ämne i avgaserna bidrar mest till att öka växthuseffekten?",
    type: "mc",
    answers: [
      { text: "A Kolväten", correct: false },
      { text: "B Kolmonoxid", correct: false },
      { text: "C Koldioxid", correct: true }
    ]
  },
  {
    text:
      "*9 Du kör en personbil med katalysator. Vilket ämne i avgaserna minskas inte av katalysatorn?",
    type: "mc",
    answers: [
      { text: "A Kolmonoxid (koloxid)", correct: false },
      { text: "B Koldioxid", correct: true },
      { text: "C Kväveoxid", correct: false },
      { text: "D Kolväten", correct: false }
    ]
  },
  {
    text:
      "*10 Vilket ämne i avgaserna bidrar till försurningen i våra skogar och sjöar?",
    type: "mc",
    answers: [
      { text: "A Kolväten", correct: false },
      { text: "B Kväveoxider", correct: true },
      { text: "C Kolmonoxid", correct: false },
      { text: "D Koldioxid", correct: false }
    ]
  },
  {
    text: "*11 Hur kan du på bästa sätt minska utsläppen av koldioxid?",
    type: "mc",
    answers: [
      { text: "A Genom att köra en bil med katalysator", correct: false },
      { text: "B Genom att köra på lågoctanig bensin", correct: false },
      {
        text:
          "C Genom att varmköra motorn till en tillräckligt varm  temperatur före färd.",
        correct: false
      },
      { text: "D Genom att köra med låga varvtal.", correct: true }
    ]
  },
  {
    text: "*12 Hur kan du på bästa sätt minska bränsleförbrukningen?",
    type: "mc",
    answers: [
      {
        text: "A Jag försöker hela tiden köra på höga motorvarv",
        correct: false
      },
      {
        text: "B Jag släpper gasen i god tid för att undvika bromsning",
        correct: true
      },
      { text: "C Jag använder bilens farthållare", correct: false },
      {
        text: "D Jag växlar till en lägre växel i alla uppförsbackar.",
        correct: false
      }
    ]
  },
  {
    text: "*13 På vilket sätt kan du påverka bränsleförbrukningen i din bil?",
    type: "mc",
    answers: [
      {
        text:
          "A Bränsleförbrukningen blir lägre om jag använder  motorvärmare på vintern.",
        correct: true
      },
      {
        text: "B Bränsleförbrukningen blir lägre om jag kör på låga växlar.",
        correct: false
      },
      {
        text:
          "C Bränsleförbrukningen blir högre om bilen får regelbunden  service.",
        correct: false
      },
      {
        text:
          "D Bränsleförbrukningen blir högre om jag har högt lufttryck i  däcken.",
        correct: false
      }
    ]
  },
  {
    text: "*14 Kan du spara bensin genom ditt val av växel?",
    type: "mc",
    answers: [
      {
        text: "A Ja, genom att köra med så hög växel som möjligt.",
        correct: true
      },
      {
        text: "B Ja, genom att köra med så låg växel som möjligt.",
        correct: false
      },
      {
        text: "C Val av växeln har ingen betydelse fِör bensinåtgången.",
        correct: false
      }
    ]
  },
  {
    text:
      "*15 Vilken utrustning är du skyldig att medföra i bilen under körning?",
    type: "mc",
    answers: [
      { text: "A Varningstriangel", correct: true },
      { text: "B Bogserlina.", correct: false },
      { text: "C Hjälpstartkablar.", correct: false },
      { text: "D Reservhjul.", correct: false }
    ]
  },
  {
    text:
      "*16 Vilket alternativ beskriver bäst mogna personers egenskaper som förare?",
    type: "mc",
    answers: [
      {
        text: "A De kan tillämpa gällande regler i varje trafiksituation.",
        correct: false
      },
      {
        text:
          "B De har förståelse för andra trafikanters misstag och svårigheter.",
        correct: true
      },
      {
        text: "C De kan förkorta bromssträckan när de kör i högre hastighet.",
        correct: false
      },
      {
        text:
          "D De kan snabbt ta sig ur riskfyllda situationer genom att köra impulsivt.",
        correct: false
      }
    ]
  },
  {
    text: "*17 Vad måste du först vara beredd på i den här situationen?",
    type: "mc",
    image: "P1Q17.png",
    answers: [
      {
        text: "A Fordon som kommer ut från höger efter övergångsstället.",
        correct: false
      },
      { text: "B Gående som går ut framför bussen.", correct: true },
      { text: "C Gående som går ut på  övergångsstället.", correct: false },
      {
        text: "D Fordon som kommer ut från  vänster efter övergångstället.",
        correct: false
      }
    ]
  },
  {
    text: "*18 Vad är utmärkande för en förare med moget beteende?",
    type: "mc",
    answers: [
      { text: "A Föraren har en impulsiv körstil.", correct: false },
      { text: "B Föraren har en offensiv körstil.", correct: false },
      {
        text: "C Föraren reagerar starkt på medtrafikanternas felbeteende.",
        correct: false
      },
      { text: "D Föraren har god självkännedom.", correct: true }
    ]
  },
  {
    text:
      "*19 Varför blir äldre förare mer sällan inblandade i olyckor än unga förare?",
    type: "mc",
    answers: [
      { text: "A De har mer erfarenhet", correct: true },
      { text: "B De har mer prestigetänkande", correct: false },
      { text: "C De kör oftare på natten", correct: false },
      { text: "D De kör mer offensivt", correct: false }
    ]
  },
  {
    text:
      "*20 Hur påverkas reaktionssträckan av förarens ålder och erfarenhet?",
    type: "mc",
    answers: [
      {
        text:
          "A En 18-årig har vanligtvis kortare reaktionssträcka än en 45-årig erfaren förare, eftersom yngre förare har bättre raktionsförmåga.",
        correct: false
      },
      {
        text:
          "B En 45-årig erfaren förare har vanligtvis kortare reaktionssträcka än en 18-årig, eftersom den erfarne föraren har lärt sig att förutse faror.",
        correct: true
      },
      {
        text:
          "C Reaktionssträckan påverkas inte av förarens ålder eller erfarenhet utan beror bara på hastigheten.",
        correct: false
      }
    ]
  },
  {
    text: "*21 Vad menas med grupptrycket?",
    type: "mc",
    answers: [
      { text: "A Då du bli stressad när du ser en polis bil.", correct: false },
      { text: "B Då du blir irriterad av andra trafikanter", correct: false },
      {
        text:
          "C Då man blir påverkad av sina kamrater i bilen, att man kör på ett sätt som man normalt inte gör.",
        correct: true
      }
    ]
  },
  {
    text:
      "*22 Vilket av följande alternativ är den vanligaste anledningen till singelolyckor?",
    type: "mc",
    answers: [
      { text: "A Halkig väg", correct: false },
      { text: "B Kraftig regn eller snö.", correct: false },
      {
        text: "C Föraren anpassar inte körning efter trafikförhållanden",
        correct: true
      },
      { text: "D Slitna däck", correct: false }
    ]
  },
  {
    text: "*23 Vad kännetecknar förare som kör impulsivt?",
    type: "mc",
    answers: [
      { text: "A De kör alltid med låg hastighet.", correct: false },
      { text: "B De kan plötsligt svänga eller byta körfält", correct: true },
      { text: "C De kör med för hög hastighet", correct: false },
      { text: "D De har alltid dålig uppmärksamhet bakåt.", correct: false }
    ]
  },
  {
    text: "*24 Hur påverkas körförmågan i allmänheten av stress?",
    type: "mc",
    answers: [
      { text: "A Littet stress kan förbättra körförmågan", correct: true },
      { text: "B Stress påverkar inte körförmågan", correct: false },
      { text: "C All sorts av stress försämrar körförmågan", correct: false }
    ]
  },
  {
    text: "*25 Hur påverkas din körförmåga i allmänhet av stress?",
    type: "mc",
    answers: [
      { text: "A Stress påverkar inte körförmågan", correct: false },
      { text: "B Mycket stress kan försämra körförmågan", correct: true },
      { text: "C Stress försämrar alltid körförmågan", correct: false }
    ]
  },
  {
    text:
      "*26 Vilken typ av olyckor drabbar äldre förare oftare än andra förare?",
    type: "mc",
    answers: [
      { text: "A Omkörningsolyckor", correct: false },
      { text: "B Singelolyckor", correct: false },
      { text: "C Korsningsolyckor", correct: true },
      { text: "D Olyckor där föraren är alkoholpåverkad", correct: false }
    ]
  },
  {
    text: "*27 Var går gränsen för rattfylleri, promillehalten mätt i blodet?",
    type: "mc",
    answers: [
      { text: "A 0,2 promille", correct: true },
      { text: "B 0,5 promille", correct: false },
      { text: "C 0,8 promille", correct: false },
      { text: "D 1,0 promille", correct: false }
    ]
  },
  {
    text: "*28 Vad är gränsen för grovt rattfylleri.",
    type: "mc",
    answers: [
      {
        text: "A 0,2 promille i blodet eller 0,1 mg/liter utandningsluften.",
        correct: false
      },
      {
        text: "B 1,0 promille i blodet eller 0,5 mg/liter utandningsluften.",
        correct: true
      },
      {
        text: "C 1,5 promille i blodet eller 0,75 mg/liter utandningsluften.",
        correct: false
      }
    ]
  },
  {
    text: "*29 Hur påverkar synen om du är alkohol påverkad?",
    type: "mc",
    answers: [
      { text: "A Synskärp minskar och synfältet blir bredare", correct: false },
      { text: "B Synskärp starkas och synfält blir bredare", correct: false },
      {
        text: "C  Synskärp starkas och blir lättare att användas",
        correct: false
      },
      { text: "D Synskärp minskas och synfältet blir smalare", correct: true }
    ]
  },
  {
    text:
      "*30 En frisk man konsumerar 40-procentig sprit. Hur många cl alkohol förbränner han på en timme?",
    type: "mc",
    answers: [
      { text: "A 1 cl", correct: false },
      { text: "B 2 cl", correct: true },
      { text: "C 3 cl", correct: false },
      { text: "D 4 cl", correct: false }
    ]
  },
  {
    text:
      "*31 En frisk man (70 kg) konsumerar 25 cl 40-procentig sprit. Hur lång tid dröjer det innan kroppen förbränner innehållet.",
    type: "mc",
    answers: [
      { text: "A 8 timmar", correct: false },
      { text: "B 10 timmar", correct: false },
      { text: "C 14 timmar", correct: true }
    ]
  },
  {
    text:
      "*32 Kan man göra någonting för att påskynda förbränningen av alkoholen i kroppen?",
    type: "mc",
    answers: [
      { text: "A Ja, man kan sova längre.", correct: false },
      { text: "B Ja man kan bada bastu.", correct: false },
      { text: "C Ja man kan ta en lång promenad", correct: false },
      { text: "D Nej, man kan inte öka förbränningen", correct: true },
      { text: "E Ja man kan dricka kaffe med mjölk", correct: false }
    ]
  },
  {
    text:
      "*33 Hur visar föraren bästa omdömet dagen efter att han har druckit en större mängd alkohol?",
    type: "mc",
    answers: [
      {
        text:
          "A Då föraren börjar med att motionerar och sedan badar i vatten som skyndar på alkoholförbränningen.",
        correct: false
      },
      {
        text:
          "B Då föraren håller noga koll på hur mycket han dricker och sedan lista ut vilken tidpunkt åter kan köra",
        correct: false
      },
      {
        text:
          "C Då föraren låter bilen stå hela dagen för att vara säker på att alkoholen inte inverkar vid körning",
        correct: true
      }
    ]
  },
  {
    text:
      "*34 Vilken grupp har störst andel dödade personbilsförare med alkohol i kroppen?",
    type: "mc",
    answers: [
      { text: "A Kvinnor i ålder 18-24 år", correct: false },
      { text: "B Män i ålder 18-24 år", correct: true },
      { text: "C Kvinnor i ålder 30-45 år", correct: false },
      { text: "D Män i ålder 30-45 år.", correct: false }
    ]
  },
  {
    text:
      "*35 Hur kan du veta om ett läkemedel är olämpligt att använda i samband med körning?",
    type: "mc",
    answers: [
      {
        text: "A Jag läser den bifogade informationen om medicinen",
        correct: true
      },
      {
        text: "B Jag läser innehållets ekvationen på förpackningen.",
        correct: false
      },
      {
        text:
          "C Jag kontrollerar om förpackningen är märkt med ett rött kryss.",
        correct: false
      },
      {
        text:
          "D Jag kontrollerar om förpackningen är märkt med en överkorsad bil.",
        correct: false
      }
    ]
  },
  {
    text:
      "*36 På vilket sätt ändras rörelseenergin om hastigheten höjs från 30km/h till 90km/h?",
    type: "mc",
    answers: [
      { text: "A Rörelseenergin blir tre gånger längre", correct: false },
      { text: "B Rörelseenergin blir sex gånger längre", correct: false },
      { text: "C Rörelseenergin blir nio gånger längre", correct: true },
      { text: "D Rörelseenergin blir tolv gånger längre", correct: false }
    ]
  },
  {
    text: "*37 Vad påverkar reaktionssträckans längd?",
    type: "mc",
    answers: [
      { text: "A Fordonets hastighet.", correct: true },
      { text: "B Fordonets tyngd", correct: false },
      { text: "C Fordonets bromsar.", correct: false },
      { text: "D Fordonets däck.", correct: false }
    ]
  },
  {
    text: "*38 Vilket av följande påverkar reaktionssträckans längd?",
    type: "mc",
    answers: [
      { text: "A Väglaget", correct: false },
      { text: "B Fordonets skick", correct: false },
      { text: "C Förarens tillstånd", correct: true },
      { text: "D Väderleken", correct: false }
    ]
  },
  {
    text: "*39 Vad händer med reaktionssträckan om du fördubblas hastigheten?",
    type: "mc",
    answers: [
      { text: "A Reaktionssträckan förändras inte", correct: false },
      { text: "B Reaktionssträckan fördubblas", correct: true },
      { text: "C Reaktionssträckan blir 3 gånger", correct: false },
      { text: "D Reaktionssträckan blir 4 gånger", correct: false }
    ]
  },
  {
    text:
      "*40 Du förutser en fara och minskar farten från 100km/h till 50km/h. Hur påverkas bromssträckan?",
    type: "mc",
    answers: [
      { text: "A Den minskas till en femtedel.", correct: false },
      { text: "B Den minskas till en fjärdedel.", correct: true },
      { text: "C Den minskas till en hälften.", correct: false },
      { text: "D Den minskas till en tredjedel.", correct: false }
    ]
  },
  {
    text:
      "*41 Vad händer med bromssträckan om du ökar farten från 35km/h till 105km/h (tre gånger)?",
    type: "mc",
    answers: [
      { text: "A Bromssträckan blir tre gånger längre", correct: false },
      { text: "B Bromssträckan blir sex gånger längre", correct: false },
      { text: "C Bromssträckan blir nio gånger längre", correct: true },
      { text: "D Bromssträckan blir tolv gånger längre", correct: false }
    ]
  },
  {
    text:
      "*42 Du kör i 30 km/h och det är torrt väglag. Bromssträckan är då ca 6 meter. Hur lång blir bromssträckan om du ökar hastigheten till 90km/h?",
    type: "mc",
    answers: [
      { text: "A Ca 18 meter", correct: false },
      { text: "B Ca 24 meter", correct: false },
      { text: "C Ca 36 meter", correct: false },
      { text: "D Ca 54 meter", correct: true }
    ]
  },
  {
    text: "*43 Vem ansvarar för att en 14 åring använder bilbälten under färd?",
    type: "mc",
    answers: [
      { text: "A Bilens ägare har alltid ansvaret", correct: false },
      {
        text: "B 14-åringens föräldrar om de finns med i bilen.",
        correct: false
      },
      { text: "C Föraren har alltid ansvaret.", correct: true },
      {
        text:
          "D 14 åringen själv eftersom passagerare över 10 år bär själva ansvaret.",
        correct: false
      }
    ]
  },
  {
    text:
      "*44 Din bil har krockkudde på passagerarplatsen fram. Hur ska du placera bilbarnstol?",
    type: "mc",
    answers: [
      {
        text: "A Det är förbjudet att placera bilbarnstol i bilen",
        correct: false
      },
      {
        text:
          "B Jag kan placera en bilbarnstol i framsätet eftersom krockkudden alltid kopplas ur med automatik.",
        correct: false
      },
      {
        text:
          "C Jag måste vända en bilbarnstol så att barnet sitter framåt, om krockkudden är inkopplad",
        correct: false
      },
      {
        text:
          "D Jag måste placera en bilbarnstol i baksätet om krockkudden är inkopplad.",
        correct: true
      }
    ]
  },
  {
    text:
      "*45 Vilken skyddsutrustning bör ett två-årigt barn i första hand använda när de åker bil?",
    type: "mc",
    answers: [
      { text: "A Bilbälte", correct: false },
      { text: "B Bältesstol", correct: false },
      { text: "C Bilbarnstol", correct: true },
      { text: "D Bälteskudde och bilbälte", correct: false },
      { text: "E Bälteskydd", correct: false }
    ]
  },
  {
    text:
      "*46 Hur vet du att en bilbarnstol är godkänd som en skyddsutrustning?",
    type: "mc",
    answers: [
      { text: "A Om bilbarnstol har märke A eller D", correct: false },
      { text: "B Om bilbarnstol har märke T eller E", correct: true },
      { text: "C Alla bilbarnstolar är godkända", correct: false }
    ]
  },
  {
    text:
      "*47 Vilket är de viktigaste skälet till att ha en bilbarnstol monterad bakåtvänd?",
    type: "mc",
    answers: [
      { text: "A Barnet får den bekvämaste sittställningen", correct: false },
      {
        text: "B Barnen får bättre kontakt med övriga passagerare",
        correct: false
      },
      { text: "C Barnets huvud och nacke får bäst skyddet", correct: true },
      {
        text: "D Barnet klarar sig bättre från att bli illamående",
        correct: false
      }
    ]
  },
  {
    text: "*48 När är det dags att byta bilbarnstolen till en bälteskudde?",
    type: "mc",
    answers: [
      { text: "A När barnet kan sitta utan stöd.", correct: false },
      { text: "B När barnet har fyllt två år.", correct: false },
      {
        text: "C När barnets huvud är i höjd med stolens överkant.",
        correct: true
      }
    ]
  },
  {
    text: "*49 När får varningsblinkers användas?",
    type: "mc",
    answers: [
      {
        text: "A Vid av och påstigning strax efter ett backkrön.",
        correct: false
      },
      {
        text:
          "B Vid motorhaveri på sådan plats där man utgör fara för andra trafikanter.",
        correct: true
      },
      {
        text: "C Vid parkering framför utfart till fastighet.",
        correct: false
      },
      {
        text: "D Vid av och pålastning inom 10 meter från vägkorsningen.",
        correct: false
      }
    ]
  },
  {
    text:
      "*50 Vad kan bli följden om du lånar ut din bil till en person som du vet inte har körkort men som ändå kör bilen?",
    type: "mc",
    answers: [
      { text: "A Enbart den som lånat bilen kan bli straffad", correct: false },
      {
        text: "B Både jag själv och den som kör lånat bilen kan bli straffade.",
        correct: true
      },
      {
        text: "C Enbart jag som äger till bilen kan bli straffad.",
        correct: false
      }
    ]
  },
  {
    text: "*51 Hur uppträder förare som har ett moget trafikuppträdande?",
    type: "mc",
    answers: [
      { text: "A De visar hänsyn mot andra trafikanter", correct: true },
      { text: "B De tänker i första hand på sig själv", correct: false },
      {
        text: "C De håller alltid på sin rätt enligt trafikreglerna",
        correct: false
      }
    ]
  },
  {
    text:
      "*52 Vilka krav ställs på en privat handledare för att du ska kunna övningsköra med honom?",
    type: "mc",
    answers: [
      {
        text: "A Handledaren måste ha körkort sedan tre år tillbaka.",
        correct: false
      },
      {
        text: "B Eleven har ansvar för körningen enligt lagen.",
        correct: false
      },
      { text: "C Handledaren måste vara godkänd.", correct: true }
    ]
  },
  {
    text: "*53 Vilket fordon är mest miljövänlig för naturen?",
    type: "mc",
    answers: [
      { text: "A- Bil", correct: false },
      { text: "B- Tåg", correct: false },
      { text: "C- Cykel", correct: true },
      { text: "D- Flyg", correct: false }
    ]
  },
  {
    text:
      "*54 På vilken av bilderna sitter föraren säkrast för att skydda sig mot nackskador vid påkörning bakifrån?",
    type: "mc",
    image: "P1Q54.png",
    answers: [
      { text: "A- Bild A", correct: false },
      { text: "B- Bild B", correct: false },
      { text: "C- Bild C", correct: true },
      { text: "D- Bild D", correct: false }
    ]
  },
  {
    text:
      "*55 Det är viktigt för miljön om du använder motorbromsen istället för att bromsa med fotbromsen vid avfarter och korsningar. Vilken är den viktigaste anledning för det?",
    type: "mc",
    answers: [
      {
        text:
          "A Däcken slits mindre och det minskar spridningen av partiklar från däcken.",
        correct: false
      },
      {
        text:
          "B Motorn får högre arbetstemperatur när den arbetar med  inbromsningen och det minskar avgasutsläppen.",
        correct: false
      },
      {
        text: "C Bensin förbrukningen minskar och därmed även avgasutsläppen.",
        correct: true
      },
      {
        text:
          "D Bromsbeläggen slits inte och därmed sprids inga partiklar från de till naturen.",
        correct: false
      }
    ]
  },
  {
    text: "*56 Hur uppfattar unga förare i allmänhet sin körförmåga?",
    type: "mc",
    answers: [
      {
        text:
          "A De flesta unga kvinnor tror att de kör bättre än genomsnittsbilisten",
        correct: false
      },
      {
        text:
          "B De flesta unga män tror att de kör bättre än genomsnittsbilisten",
        correct: true
      },
      {
        text:
          "C Alla unga förare tror att de kör bättre än genomsnittsbilisten",
        correct: false
      }
    ]
  },
  {
    text:
      "*57 Vilken påföljd är vanligast att en förare får vid grovt rattfylleri?",
    type: "mc",
    answers: [
      { text: "A Enbart körkortsåterkallelse", correct: false },
      { text: "B Körkortsåterkallelse och fängelse", correct: true },
      { text: "C Enbart fängelse", correct: false }
    ]
  },
  {
    text:
      "*58 Kortare bilresor medför större utsläpp av avgaser per km än längre bilresor. Hur stor andel av samtliga bilresor i Sverige är kortare än 5 km?",
    type: "mc",
    answers: [
      { text: "A Ca 15 procent", correct: false },
      { text: "B Ca 30 procent", correct: false },
      { text: "C Ca 45 procent", correct: true },
      { text: "D Ca 60 procent", correct: false }
    ]
  },
  {
    text: "*59 Begreppet lätt lastbil är högst på 3,5 ton. Vilken vikt anses?",
    type: "mc",
    answers: [
      { text: "A Totalvikt", correct: true },
      { text: "B Maxlast", correct: false },
      { text: "C Tjänstevikt", correct: false },
      { text: "D Bruttovikt", correct: false }
    ]
  },
  {
    text:
      "*60 Hos de flesta förare har typen av passagerare betydelse för körsättet. Vilken typ av passagerare har mest positiv effekt hos förare i de flesta åldersgrupper?",
    type: "mc",
    answers: [
      { text: "A Jämnåriga kamrater", correct: false },
      { text: "B Barn", correct: false },
      { text: "C Föräldrar", correct: true },
      { text: "D Kamrater som är äldre", correct: false }
    ]
  },
  {
    text:
      "*61 Du startar bilen en kall vintermorgon för att åka till jobbet. När börjar katalysatorn arbeta?",
    type: "mc",
    answers: [
      { text: "A När katalysatorn är varm", correct: true },
      { text: "B När motorn är varm", correct: false },
      { text: "C När motorn startar", correct: false },
      { text: "D När jag kör under 3000v/min", correct: false }
    ]
  },
  {
    text:
      "*62 Biltrafiken bidrar till att växthusgaserna ökar i atmosfären. Hur påverkas jorden av ökningen?",
    type: "mc",
    answers: [
      { text: "A Medeltemperaturen höjs", correct: true },
      { text: "B Magnetfältet försvagas", correct: false },
      { text: "C Medeltemperaturen sänks", correct: false },
      { text: "D Magnetfältet stärks", correct: false }
    ]
  },
  {
    text:
      "*63 Vilken av de här förarna löper störst risk att dödas i trafiken?",
    type: "mc",
    answers: [
      { text: "A En 20 årig man", correct: true },
      { text: "B En 20 årig kvinna", correct: false },
      { text: "C En 35 årig kvinna", correct: false },
      { text: "D En 50 årig man", correct: false },
      { text: "E En 50 årig kvinna", correct: false }
    ]
  },
  {
    text:
      "*64 Nya bensindrivna bilar måste ha viss utrustning som minskar miljöpåverkan. Vilken?",
    type: "mc",
    answers: [
      { text: "A Katalysatorer", correct: true },
      { text: "B Partikelfilter", correct: false },
      { text: "C Bullerreducerande däck", correct: false },
      { text: "D Motorvärmare", correct: false },
      { text: "E Färddator", correct: false },
      { text: "F Farthållare", correct: false }
    ]
  },
  {
    text: "*65 Hur lång sträcka kör du på 1 sekund när du kör i 90km/h?",
    type: "mc",
    answers: [
      { text: "A 25 meter", correct: true },
      { text: "B 12 meter", correct: false },
      { text: "C 9 meter", correct: false },
      { text: "D 35 meter", correct: false }
    ]
  },
  {
    text:
      "*66 Kan en bilförare bli straffad för rattfylleri om han eller hon har 0,1 promille alkohol i blodet?",
    type: "mc",
    answers: [
      {
        text: "A Ja, eftersom gränsen för rattfylleri går vid 0 promille",
        correct: false
      },
      { text: "B Ja, om föraren bedöms olämplig som bilförare", correct: true },
      { text: "C Nej", correct: false },
      {
        text: "D Ja, men endast om föraren anses vållande till en trafikolycka",
        correct: false
      }
    ]
  },
  {
    text:
      "*67 Vad kan vara orsaken till att en förare får förlängd reaktionstid?",
    type: "mc",
    answers: [
      { text: "A Att det är halt väglag", correct: false },
      { text: "B Att bilen är i dålig skick", correct: false },
      { text: "C Att föraren är sjuk eller trött.", correct: true }
    ]
  },
  {
    text:
      "*68 Hur mycket av koldioxider från bilens avgaser tar en katalysator bort?",
    type: "mc",
    answers: [
      { text: "A Ingenting", correct: true },
      { text: "B Alltihop", correct: false },
      { text: "C Hälften", correct: false }
    ]
  },
  {
    text:
      "*69 Vad kallas hela sträckan från att du upptäcker ett hinder tills bilen står stilla?",
    type: "mc",
    answers: [
      { text: "A Stoppsträcka", correct: true },
      { text: "B Reaktionssträcka", correct: false },
      { text: "C Bromssträcka", correct: false }
    ]
  },
  {
    text: "*70 Du har en takbox på bilen. Påverkar det bränsleförbrukningen?",
    type: "mc",
    answers: [
      {
        text: "A Ja, en takbox ökar alltid bränsleförbrukningen.",
        correct: true
      },
      { text: "B Ja, den ökar men enbart om boxen är lastad.", correct: false },
      { text: "C Nej, den påverkas inte", correct: false }
    ]
  }
];

module.exports = { quizData, questions };
