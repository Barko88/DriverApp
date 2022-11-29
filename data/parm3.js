const quizData = {
  title: "Pärm 3"
};

const questions = [
  {
    text: "1. Denna kontrollampa tänds under körning. Vad ska du göra?",
    type: "mc",
    image: "P3Q1.png",
    answers: [
      {
        text: "A Du ska stänga av motorn omedelbart för att oljan är slut",
        correct: true
      },
      {
        text: "B Du behöver inte stanna för att motorn är full med olja",
        correct: false
      }
    ]
  },
  {
    text:
      "2. Vad kan hända om du kopplar startkablarna fel mellan två fordons batteri för hjälpstart?",
    type: "mc",
    image: "P3Q2.png",
    answers: [
      { text: "A Batteriet kan explodera", correct: true },
      { text: "B Glödlamporna kan gå sönder", correct: false },
      { text: "C Båda fordon kan bli strömförande", correct: false },
      { text: "D Startmotorn kan börja gå baklänges", correct: false }
    ]
  },
  {
    text:
      "3. Får du köra en bil där färdbromsen är ur funktion om parkeringsbromsen fungerar bra?",
    type: "mc",
    answers: [
      { text: "A Nej jag måste anlita en bärgningsbil.", correct: true },
      { text: "B Ja, men endast i gångfart", correct: false },
      {
        text: "C Ja, men endast närmaste vägen till en verkstad.",
        correct: false
      },
      {
        text: "D Nej, jag måste bogsera bilen med en bogseringslina.",
        correct: false
      }
    ]
  },
  {
    text: "4. Varför rekommenderas regelbundet byte av bromsvätskan?",
    type: "mc",
    answers: [
      {
        text: "A Det är risk att den får paraffinutfällningar med tiden",
        correct: false
      },
      { text: "B Den drar till sig dammpartiklar", correct: false },
      { text: "C Den blir trögflytande med tiden", correct: false },
      {
        text: "D Den drar till sig vatten vilket sänker kokpunkten",
        correct: true
      }
    ]
  },
  {
    text: "5. Vilken typ av vätska finns i den inringade behållaren på bilden?",
    type: "mc",
    image: "P3Q5.png",
    answers: [
      { text: "A. Glykol blandat med vatten", correct: false },
      { text: "B. Bromsvätska", correct: true },
      { text: "C. Styrservoolja", correct: false },
      { text: "D. Spolarvätska", correct: false }
    ]
  },
  {
    text:
      "6. Din bil, som utrustade med bromsservosystem ska bogseras med avstängd motor. Vilken effekt kan du förvänta dig?",
    type: "mc",
    answers: [
      { text: "A Bromsen slutar fungera.", correct: false },
      { text: "B Det blir lätt att trycka ner bromspedalen", correct: false },
      { text: "C Det blir hårdare att trycka ner bromspedalen", correct: true }
    ]
  },
  {
    text: "7. Vilken fördel har ABS-bromsar jämfört med bromsar utan ABS?",
    type: "mc",
    answers: [
      {
        text: "A Vid hård bromsning är risken för sladd mindre med ABS",
        correct: true
      },
      { text: "B Bromssträckan blir alltid kortare med ABS", correct: false },
      {
        text:
          "C Bromssystemet är underhållsfritt eftersom ABS-systemet är slutet",
        correct: false
      }
    ]
  },
  {
    text: "8. Vad är fördelen med ABS-bromsar?",
    type: "mc",
    answers: [
      { text: "A Att förslitningen på bromsarna minskar.", correct: false },
      {
        text: "B Att man inte behöver trycka så hårt på bromspedalen.",
        correct: false
      },
      {
        text: "C Att bilen går att styra även vid maximal inbromsning.",
        correct: true
      },
      {
        text:
          "D Att bromsarna låser sig vid kraftiga inbromsningar och därmed ger kortare bromssträcka.",
        correct: false
      }
    ]
  },
  {
    text:
      "9. Hur kan du med hjälp av en kraftig inbromsning avgöra om ABS bromsarna fungerar?",
    type: "mc",
    answers: [
      { text: "A Jag hör att det tjuter om däcken", correct: false },
      { text: "B Jag känner vibrationer i bromspedalen", correct: true },
      { text: "C Jag märker att hjulen låser sig", correct: false }
    ]
  },
  {
    text: "10. När måste du ha vinterdäck på din personbil?",
    type: "mc",
    answers: [
      {
        text: "A 1 December till 31 Mars även när det inte är vinterväglag.",
        correct: false
      },
      {
        text: "B 1 November till 31 Mars även när det inte är vinterväglag",
        correct: false
      },
      {
        text: "C 1 Oktober till 30 April när det är vinterväglag.",
        correct: false
      },
      {
        text: "D 1 December till 31 Mars när det är vinterväglag",
        correct: true
      }
    ]
  },
  {
    text:
      "11. Du kör en lätt lastbil i januari och det är halt väglag. Måste lastbilen ha vinterdäck?",
    type: "mc",
    answers: [
      { text: "A Ja", correct: true },
      { text: "B Nej", correct: false },
      {
        text: "C Ja, enbart om lastbilen har tillkopplat släp.",
        correct: false
      }
    ]
  },
  {
    text:
      "12. Du tänker köra bil i februari när väglaget är som bilden. Vad är det minsta tillåtna mönsterdjup på däcken?",
    type: "mc",
    image: "P3Q12.png",
    answers: [
      { text: "A 3,0 mm", correct: true },
      { text: "B 1,6 mm", correct: false },
      { text: "C 1,0 mm", correct: false },
      { text: "D 6,0 mm", correct: false },
      { text: "E 5,0 mm", correct: false }
    ]
  },
  {
    text:
      "13. Vilket alternativ anger tidsgränserna för användande av dubbdäck?",
    type: "mc",
    answers: [
      {
        text: "A Från första november till och med sista mars",
        correct: false
      },
      {
        text: "B Från första oktober till och med sista april",
        correct: true
      },
      {
        text: "C Från första oktober till och med Annandag påsk",
        correct: false
      },
      {
        text: "D Från första november till och med första söndagen efter påsk",
        correct: false
      }
    ]
  },
  {
    text: "14. Vad betyder att den här varningslampan lyser?",
    type: "mc",
    image: "P3Q14.png",
    answers: [
      { text: "A. Att bromsvätskenivån i ABS är låg", correct: false },
      { text: "B. Att ABS är kopplat", correct: false },
      { text: "C. Att ABS-bromsar är ur funktion", correct: true }
    ]
  },
  {
    text:
      "15. Det är september månad och det snöar kraftigt. Det är minus grader och snön ligger kvar på vägen. Får du ha dubbdäck på bilen när du kör?",
    type: "mc",
    answers: [
      { text: "A Ja, efter tillstånd av vägverket.", correct: false },
      { text: "B Ja, efter tillstånd av polisen.", correct: false },
      { text: "C Nej, inte förrän den första oktober.", correct: false },
      { text: "D Ja, eftersom det är vinterväglag.", correct: true }
    ]
  },
  {
    text: "16. Varför är däcket ojämnt slitet?",
    type: "mc",
    image: "P3Q16.png",
    answers: [
      { text: "A För lågt lufttryck", correct: false },
      { text: "B Fel på hjulinställning", correct: true },
      { text: "C Obalans", correct: false },
      { text: "D Fel material", correct: false }
    ]
  },
  {
    text: "17. Vilken däck ska du förse din bil när det finns risk för halka?",
    type: "mc",
    answers: [
      { text: "A Däck som märkta med M S", correct: true },
      { text: "B Däck som är märkta med K T", correct: false },
      { text: "C Däck som är märkta med A B", correct: false },
      { text: "D-Däck som är märkta med S F", correct: false }
    ]
  },
  {
    text:
      "18. Vilket är minsta tillåtna mönsterdjup på en personbilsdäck som används på sommartid?",
    type: "mc",
    answers: [
      { text: "A 1,6 mm", correct: true },
      { text: "B 1,0 mm", correct: false },
      { text: "C 0,6 mm", correct: false },
      { text: "D 2,0mm", correct: false },
      { text: "E 2,6 mm", correct: false }
    ]
  },
  {
    text: "19. Vilken begränsning har ett så kallat nödhjul (Temporary spare)?",
    type: "mc",
    answers: [
      {
        text:
          "A Däcket får aldrig monteras på bilen om övriga däck är dubbade.",
        correct: false
      },
      { text: "B Däcket åldras snabbare än vanliga däck.", correct: false },
      {
        text:
          "C Däcket får aldrig köras i högre hastighet än vad som anges på däcket.",
        correct: true
      },
      { text: "D Däcket får endast användas på torr vägbana.", correct: false },
      {
        text: "E Däcket får aldrig köras i högre hastighet än 30km/h.",
        correct: false
      }
    ]
  },
  {
    text:
      "20. Vad är viktigt att tänka på när din bil blir bogserad med motorn avslagen?",
    type: "mc",
    answers: [
      { text: "A Jag ska låta en låg växel ligga i.", correct: false },
      { text: "B Det kan bli svårare att styra.", correct: true },
      { text: "C Belysningen fungerar inte.", correct: false },
      { text: "D Bromsarna kan bli helt slut att fungera.", correct: false }
    ]
  },
  {
    text:
      "21. Hur stort får avståndet mellan fordonet högst vara om bogseringslinan saknar markering?",
    type: "mc",
    image: "P3Q21.png",
    answers: [
      { text: "A 2 meter", correct: true },
      { text: "B 3 meter", correct: false },
      { text: "C 4 meter", correct: false },
      { text: "D 5 meter", correct: false }
    ]
  },
  {
    text:
      "22. Vilken är den högsta tillåtna hastighet vid bogsering med bogseringslina?",
    type: "mc",
    answers: [
      { text: "A 30km/h", correct: true },
      { text: "B 40km/h.", correct: false },
      { text: "C 50km/h.", correct: false }
    ]
  },
  {
    text:
      "23. Hur mycket är det största tillåtna fordonsbredd med lasten inräknad?",
    type: "mc",
    answers: [
      { text: "A 280 cm", correct: false },
      { text: "B 240 cm", correct: false },
      { text: "C 260 cm", correct: true }
    ]
  },
  {
    text:
      "24. Din personbil är 180cm bred. Hur mycket får lasten som mest skjuta ut utanför bilens ena sida där vid färd på allmän väg?",
    type: "mc",
    answers: [
      { text: "A Högst 20 cm", correct: true },
      { text: "B Högst 10 cm", correct: false },
      { text: "C Högst 30 cm", correct: false },
      { text: "D Högst 40 cm", correct: false }
    ]
  },
  {
    text:
      "25. Du ska transportera en säng på takräcket på din bil. Bilen är 160 cm bred och du ska köra på allmän väg. Hur bred får sängen maximalt vara?",
    type: "mc",
    answers: [
      { text: "A 200 cm", correct: true },
      { text: "B 180 cm", correct: false },
      { text: "C 160 cm", correct: false },
      { text: "D 220 cm", correct: false }
    ]
  },
  {
    text:
      "26. Du kör i mörker och du har last som skjuter ut framåt så mycket att du måste markera den. Hur ska markeringen se ut?",
    type: "mc",
    answers: [
      { text: "A Vit lyckta och vit reflex", correct: true },
      { text: "B Röd och gul flagga", correct: false },
      { text: "C Röd lykta och röd reflex", correct: false },
      { text: "D Enbart röda reflexer.", correct: false },
      { text: "E Röda och gula reflexer.", correct: false }
    ]
  },
  {
    text:
      "27. Du har last på bilen som skjuter ut 70cm framför bilen. Måste lasten märkas ut?",
    type: "mc",
    answers: [
      { text: "A Ja, alltid", correct: false },
      { text: "B Ja, om det inte syns tydligt.", correct: true },
      { text: "C Nej", correct: false }
    ]
  },
  {
    text:
      "28. Du kör en bil som har maxlast 360 kg. Du har passagerare som väger ungefär 280kg. Hur mycket kvar får du lasta maximalt?",
    type: "mc",
    answers: [
      { text: "A 30 kg", correct: false },
      { text: "B 80 kg", correct: true },
      { text: "C 150 kg", correct: false }
    ]
  },
  {
    text:
      "29. Registreringsbeviset tillhör din bil. Hur mycket väger bilen med full last?",
    type: "mc",
    image: "P3Q29.png",
    answers: [
      { text: "A 1050", correct: false },
      { text: "B 1370", correct: true },
      { text: "C 1400", correct: false }
    ]
  },
  {
    text:
      "30. Du är ensam i personbilen och har lastat 200kg bagage. Hur stor är bruttovikten?",
    type: "mc",
    image: "P3Q30.png",
    answers: [
      { text: "A 1370 kg", correct: false },
      { text: "B 390 kg", correct: false },
      { text: "C 1180 kg", correct: true }
    ]
  },
  {
    text: "31. Vilket alternativt är riktigt?",
    type: "mc",
    answers: [
      { text: "A Tjänstevikt + maxlast = totalvikt", correct: true },
      { text: "B Tjänstevikt + totalvikt = maxlast", correct: false },
      { text: "C Tjänstevikt + totalvikt = bruttovikt", correct: false },
      { text: "D Totalvikt + maxlast = tjänstevikt", correct: false }
    ]
  },
  {
    text: "32. Anses släpet som lätt släpfordon i något av dessa alternativ?",
    type: "mc",
    image: "P3Q32.png",
    answers: [
      { text: "A Ja, i alternativ A", correct: false },
      { text: "B Ja, i alternativ B", correct: true },
      { text: "C Ja, i alternativ C", correct: false },
      { text: "D Nej", correct: false }
    ]
  },
  {
    text:
      "33. Du tänker koppla en släpvang till din bil. Du har körkort med behörighet B. Får du dra denna släpvagn med din bil?",
    type: "mc",
    image: "P3Q33.png",
    answers: [
      {
        text: "A Ja, om släpvagnens last är inte mer än 430 kg.",
        correct: false
      },
      { text: "B Nej", correct: true },
      { text: "C Ja, om släpvagnen är olastad", correct: false }
    ]
  },
  {
    text:
      "34. Du ska koppla ett släpvagn till denna bil. Vilken regel gäller om du har B behörighet i ditt körkort?",
    type: "mc",
    image: "P3Q34.png",
    answers: [
      {
        text: "A Du får inte koppla släpvagn som har totalvikt över 750 kg.",
        correct: false
      },
      {
        text: "B Du får koppla ett släpvagn som totalvikt 1150 kg",
        correct: true
      },
      {
        text:
          "C Du får koppla en släpvagn som har en totalvikt över 1150 kg förutsatt att den är olastad.",
        correct: false
      },
      {
        text:
          "D Du får koppla till en släpvagn som har totalvikt över 1150 kg förutsatt att du inte överskrider största släpvagnens vikt enligt bilens registreringsbevis.",
        correct: false
      }
    ]
  },
  {
    text: "35. Vilken av fordonskombinationerna får du köra med behörighet B?",
    type: "mc",
    answers: [
      {
        text:
          "A Personbil med tjänstevikt 1300kg som drar en släpvagn med totalvikt 1200 kg.",
        correct: true
      },
      {
        text:
          "B Personbil med tjänstevikt 1100kg som drar en släpvagn med totalvikt 1200 kg.",
        correct: false
      },
      {
        text:
          "C Personbil med totalvikt 1400kg som drar en släpvagn med totalvikt 1400kg.",
        correct: false
      },
      {
        text:
          "D Personbil med totalvikt 2000kg som drar en släpvagn med totalvikt 1600kg.",
        correct: false
      }
    ]
  },
  {
    text:
      "36. En person har BE behörighet i sitt körkort och kör den bil vars registreringsbevis du ser här ovan. Vilket eller vilka av följande släpvagnar får han dra med denna bil?",
    type: "mc",
    image: "P3Q36.png",
    answers: [
      {
        text: "A Ett släp med Tjänstevikt 950 kg och last 750 kg",
        correct: false
      },
      { text: "B Ett släp med Totalvikt 1760 kg", correct: false },
      { text: "C Ett släp som har Bruttovikt 1810 kg", correct: false },
      { text: "D Ett släp med Bruttovikt 1500 kg", correct: true }
    ]
  },
  {
    text:
      "37. Du kopplar en lastad släpvagn till din bil. Hur kan du enklast ändra kultrycket?",
    type: "mc",
    image: "P3Q37.png",
    answers: [
      { text: "A Jag fördelar om lasten på släpet", correct: true },
      { text: "B Jag ökar lufttrycket i släpets däck", correct: false },
      { text: "C Jag minskar lufttrycket i släpets däck", correct: false },
      { text: "D Jag fördelar om lasten i bilen", correct: false }
    ]
  },
  {
    text:
      "38. Vilket fordon skall baktill ha sådan triangelformade reflexer som bilden visar?",
    type: "mc",
    image: "P3Q38.png",
    answers: [
      { text: "A Släpvagn", correct: true },
      { text: "B Motorredskap klass I", correct: false },
      { text: "C Lastbil", correct: false },
      { text: "D Traktor", correct: false }
    ]
  },
  {
    text:
      "39. Du ska kontrollbesiktiga din personbil med registreringsnummer ABC 223. Vilken period gäller?",
    type: "mc",
    image: "P3Q39.png",
    answers: [
      { text: "A 1:a Januari till 31:a Maj", correct: true },
      { text: "B 1:a Januari till 31:a Mars", correct: false },
      { text: "C 1:a Februari till 30 Juni", correct: false },
      { text: "D 1:a December till 31:a Mars", correct: false }
    ]
  },
  {
    text:
      "40. Du ska kontrollbesiktiga din personbil med registreringsnummer OGM 435. Vilken besiktningsperiod gäller?",
    type: "mc",
    image: "P3Q40.png",
    answers: [
      { text: "A 1 maj till 30 september", correct: true },
      { text: "B 1 mars till 31 maj", correct: false },
      { text: "C 1 mars till 31 juli", correct: false },
      { text: "D 1 maj till 31 juli", correct: false }
    ]
  },
  {
    text:
      "41. Vid kontrollbesiktningen på bilprovningen har din bil ett fel som måste åtgärdas. Bilen blir underkänd men du behöver inte återkomma för ny besiktning om du åtgärdar felet snarast. Vad kan följden bli om du inte rättar till felet och du blir stoppad i en poliskontroll?",
    type: "mc",
    answers: [
      {
        text:
          "A Polisen kan ålägga mig att låta bilprovningen göra en ny kontrollbesiktning.",
        correct: true
      },
      { text: "B Bilen får körförbud.", correct: false },
      {
        text:
          "C Polisen kan ålägga mig att åtgärda felet inom tre dagar och därefter kontakta polisen för kontroll.",
        correct: false
      }
    ]
  },
  {
    text:
      "42. Vilken besiktningsperiod är lämplig för att besikta bilen om registreringsnumret sluter med 4.",
    type: "mc",
    image: "P3Q42.png",
    answers: [
      { text: "A Från februari till juni", correct: true },
      { text: "B Från april till augusti", correct: false },
      { text: "C Från februari till juli", correct: false }
    ]
  },
  {
    text:
      "43. Du har inte låtit besikta din personbil inom den tidsperiod som gäller. Vad händer?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag får använda bilen tills jag får besked om körförbud från vägverket.",
        correct: false
      },
      {
        text:
          "B Jag får använda bilen tills jag får besked om körförbud från polisen",
        correct: false
      },
      {
        text: "C Bilen får automatiskt körförbud när perioden är slut.",
        correct: true
      }
    ]
  },
  {
    text:
      "44. Varningslampan för färdbromsen tänds under färd. Vad ska du göra?",
    type: "mc",
    answers: [
      { text: "A Jag kör till närmast verkstad", correct: false },
      { text: "B Jag åtgärdar felet vid nästa service", correct: false },
      {
        text: "C Jag stannar omedelbart för att kontrollera bromsvätskenivån",
        correct: true
      },
      { text: "D Jag fyller på bromsvätska vid nästa tankning", correct: false }
    ]
  },
  {
    text:
      "45. Du har köpt en bil 1 mars. Hur lång tid har du på dig att anmäla ägarbytet till vägverket för att den ska ha registretats den 1 mars?",
    type: "mc",
    answers: [
      { text: "A 7 dagar", correct: false },
      { text: "B 20 dagar", correct: false },
      { text: "C 14 dagar", correct: false },
      { text: "D 10 dagar", correct: true }
    ]
  },
  {
    text:
      "46. Du ändrar din bil så att den inte överensstämmer med registreringsbeviset. När måste du registreringsbesikta bilen?",
    type: "mc",
    answers: [
      { text: "A Inom 1 vecka", correct: false },
      { text: "B Inom 1 månad", correct: true },
      { text: "C Inom 3 veckor", correct: false },
      { text: "D Inom 3 månader", correct: false }
    ]
  },
  {
    text:
      "47. På vilken av följande situationer måste fordonet inställas för en ny registreringsbesiktning ?",
    type: "mc",
    answers: [
      { text: "A Om fordonet försätts med dragordning", correct: true },
      { text: "B Om fordonet försetts med extra ljus", correct: false },
      { text: "C Om fordonet försetts med en barnstol", correct: false }
    ]
  },
  {
    text:
      "48. Vilken försäkring måste finnas för att en personbil ska få användas i trafik?",
    type: "mc",
    answers: [
      { text: "A Trafikförsäkring", correct: true },
      { text: "B Halvförsäkring", correct: false },
      { text: "C Helförsäkring", correct: false },
      { text: "D Vagnskadeförsäkring", correct: false }
    ]
  },
  {
    text:
      "49. Du tvingas väja från ett djur och kör i diket med din bil och bilen skadas. Vilken försäkring måste du ha för att ha ersättning ur din egen försäkring för reparationskostnader och bärgning?",
    type: "mc",
    answers: [
      { text: "A Halvförsäkring", correct: false },
      { text: "B Trafikförsäkring", correct: false },
      { text: "C Helförsäkring", correct: true },
      { text: "D Hemförsäkring", correct: false }
    ]
  },
  {
    text:
      "50. Vilken vätska fyller man i kylen om motortemperaturen blir för hög ?",
    type: "mc",
    answers: [
      { text: "A Glykol och vatten.", correct: true },
      { text: "B Olje och vatten", correct: false },
      { text: "C Destillerat vatten.", correct: false }
    ]
  },
  {
    text: "51. Var fyller du på motorolja?",
    type: "mc",
    image: "P3Q51.png",
    answers: [
      { text: "A I behållare A", correct: false },
      { text: "B I behållare B", correct: true },
      { text: "C I behållare C", correct: false },
      { text: "D I behållare D", correct: false }
    ]
  },
  {
    text:
      "52. Det är vinterväglag och du kör en personbil med dubbdäck och du ska koppla en släpvagn till din bil. Vilka däck måste du ha på släpvagnen?",
    type: "mc",
    answers: [
      { text: "A Sommardäck", correct: false },
      { text: "B Dubbdäck", correct: true },
      { text: "C Vinterdäck", correct: false },
      { text: "D Friktionsdäck", correct: false }
    ]
  },
  {
    text:
      "53. Du kör i dagsljus och har last som skjuter mer än 1 meter bakåt. Hur ska markeringen se ut?",
    type: "mc",
    answers: [
      { text: "A Gul flagga", correct: false },
      { text: "B Röd flagga", correct: false },
      { text: "C Rödgul flagga", correct: true }
    ]
  },
  {
    text:
      "54. Du bör ha de däck som har störst mönsterdjup på bakhjulen på bilen. Varför?",
    type: "mc",
    answers: [
      {
        text: "A Bakhjulen belastas mest av last i bagageutrymmet.",
        correct: false
      },
      {
        text: "B Köregenskaperna blir bättre om bakhjulen har bra grepp.",
        correct: true
      },
      {
        text: "C Vid kraftig inbromsning belastas bakhjulen mest.",
        correct: false
      }
    ]
  },
  {
    text:
      "55. På en säkerhetskontroll upptäcker du att bromsvätskenivån är för låg. Vad kan orsaken vara?",
    type: "mc",
    answers: [
      {
        text: "A.Vätskan har förbrukats så som den gör när man bromsar",
        correct: false
      },
      { text: "B.Vätskan har avdunstat.", correct: false },
      {
        text: "C.Bromsledningarna har gått sönder så att vätskan har läckt ut.",
        correct: true
      }
    ]
  },
  {
    text:
      "56. Varför bör du kontrollera lufttrycket i däcken innan du kör bil?",
    type: "mc",
    answers: [
      { text: "A För att lagen kräver det.", correct: false },
      {
        text: "B För att det inte får vara för högt lufttryck när jag kör bil.",
        correct: false
      },
      {
        text:
          "C För att för högt lufttryck är både bättre för min ekonomi och miljön.",
        correct: true
      }
    ]
  },
  {
    text: "57. Hur kan du veta att bromsservosystemet fungerar?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag trycker på bromspedalen, starta motorn och förvissar mig att bromspedalen inte sjunker.",
        correct: false
      },
      {
        text:
          "B Jag trycker på bromspedalen, starta motorn och förvissar mig att bromspedalen sjunker.",
        correct: true
      },
      {
        text:
          "C Jag förvissar mig om att det finns tillräckligt med bromsvätska.",
        correct: false
      },
      {
        text: "D Jag bromsar och förvissar mig om att däcken låser sig.",
        correct: false
      },
      {
        text: "E Jag bromsar och förvissar mig om att däcken inte låser sig.",
        correct: false
      }
    ]
  },
  {
    text: "58. Får du köra med odubbade vinterdäck på sommaren?",
    type: "mc",
    answers: [
      { text: "A Nej", correct: false },
      {
        text:
          "B Ja, men det är olämpligt ur miljösynpunkt och kan försämra bilens köregenskaper.",
        correct: true
      },
      {
        text:
          "C Ja, men enbart tillfälligt, t.ex. som reservdäck vid punktering.",
        correct: false
      }
    ]
  },
  {
    text:
      "59. Vad innebär det att en bil är utrustad med ett tvåkrets bromssystem?",
    type: "mc",
    answers: [
      {
        text: "A Att bilen är utrustad med både färdbroms och parkeringsbroms",
        correct: false
      },
      {
        text:
          "B Att bilen går att bromsa hjälpligt även om ett av bromsrören går sönder",
        correct: true
      },
      {
        text: "C Att bilens hjul aldrig låser sig vid hårda inbromsningar",
        correct: false
      },
      {
        text: "D Att bilen är utrustad med både färdbroms och bromsservo",
        correct: false
      }
    ]
  },
  {
    text:
      "60. Du ska köra hem ett lass grus med din släpkärra. Släpkärrans totalvikt är 1500 kg och tjänstevikten 350 kg. Du har körkort med behörighet B. Med vilken bil får du dra släpkärran?",
    type: "mc",
    answers: [
      {
        text: "A. En bil som har tjänstevikt 1500 kg och totalvikt 1900 kg.",
        correct: true
      },
      {
        text: "B. En bil som har tjänstevikten 1290 kg och totalvikt1700 kg.",
        correct: false
      },
      {
        text: "C. En bil som har tjänstevikt 1800 kg och totalvikt 2400",
        correct: false
      }
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