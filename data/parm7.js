const quizData = {
  title: "Pärm 7"
};

const questions = [
  {
    text: "1. Hur långt före faran är detta vägmärke uppsatt?",
    type: "mc",
    image: "P7Q1.png",
    answers: [
      { text: "A 50-150 m", correct: false },
      { text: "B 150-250 m", correct: true },
      { text: "C 250-350 m", correct: false }
    ]
  },
  {
    text: "2. Vad betyder följande vägmärke?",
    type: "mc",
    image: "P7Q2.png",
    answers: [
      { text: "A Dålig väggrepp och slirig körbana", correct: false },
      { text: "B Risk för sladd och längre bromssträcka", correct: true },
      { text: "C Gropig väg och risk för stenskott.", correct: false }
    ]
  },
  {
    text: "3. Vilket vägmärke anger att högerregel gäller?",
    type: "mc",
    image: "P7Q3.png",
    answers: [
      { text: "A Vägmärke A", correct: true },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "4. Anger något av märkena att du närmar dig en plats där högerregel gäller?",
    type: "mc",
    image: "P7Q4.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false },
      { text: "E Nej ,inget av de här märken", correct: true }
    ]
  },
  {
    text:
      "5. Du kör på huvudled. Vilken vägmärke anger att det kan finnas komplicerade korsning?",
    type: "mc",
    image: "P7Q5.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: true }
    ]
  },
  {
    text:
      "6. Du kör på huvudled. Vilket av vägmärkena varnar för en farlig korsning?",
    type: "mc",
    image: "P7Q6.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: true },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text: "7. Vad innebär den inringade vägmärkeskombinationen?",
    type: "mc",
    image: "P7Q7.png",
    answers: [
      {
        text:
          "A Det finns en järnvägskorsning med bommar ca 150-250 meter längre fram.",
        correct: true
      },
      {
        text:
          "B Det finns en järnvägskorsning utan bommar ca 50 meter längre fram",
        correct: false
      },
      {
        text:
          "C Det finns en järnvägskorsning med bommar ca 50 meter längre fram.",
        correct: false
      },
      {
        text:
          "D Det finns en järnvägskorsning utan bommar ca 150-250 meter längre fram.",
        correct: false
      }
    ]
  },
  {
    text: "8. Vad innebär vägmärkeskombinationen?",
    type: "mc",
    image: "P7Q8.png",
    answers: [
      {
        text:
          "A 400 m efter vägmärkena kommer det en farlig vänsterkurva och därefter kurvig väg i 2,0 km",
        correct: false
      },
      {
        text: "B Strax efter vägmärkena kommer det en farlig högerkurva",
        correct: false
      },
      {
        text:
          "C 400 m efter vägmärkena kommer det en farlig vänsterkurva och därefter kurvig väg i 1,6 km",
        correct: true
      },
      {
        text:
          "D 400 m efter vägmärkena kommer det en farlig högerkurva och därefter kurvig väg i 2,0 km",
        correct: false
      }
    ]
  },
  {
    text:
      "9. Du kommer till detta vägmärke en varm sommardag. Varför bör du sänka hastigheten?",
    type: "mc",
    image: "P7Q9.png",
    answers: [
      {
        text: "A Vägsträckan kan vara hal på grund av asfalten.",
        correct: true
      },
      { text: "B Vägsträckan är särskild olycksdrabbad.", correct: false },
      {
        text: "C Vägsträckan har en eller flera tvära kurvor efter vägmärket.",
        correct: false
      }
    ]
  },
  {
    text: "10. Vid vilken skylt skall du ha lägsta hastighet?",
    type: "mc",
    image: "P7Q10.png",
    answers: [
      { text: "A Vid skylt A", correct: false },
      { text: "B Vid skylt B", correct: false },
      { text: "C Vid skylt C", correct: true }
    ]
  },
  {
    text: "11. Vad anger vägmärket?",
    type: "mc",
    image: "P7Q11.png",
    answers: [
      { text: "A Korsande järnväg med bommar.", correct: false },
      { text: "B Korsande järnväg med ett spår.", correct: false },
      { text: "C Korsande järnväg med flera spår.", correct: true },
      { text: "D Korsande järnväg utan bommar.", correct: false }
    ]
  },
  {
    text: "12. Vad ska du göra då du kommer fram till följande vägmärke?",
    type: "mc",
    image: "P7Q12.png",
    answers: [
      {
        text:
          "A Du ska lämna de gående företräde genom att sänka hastigheten i god tid eller genom att stanna.",
        correct: true
      },
      {
        text:
          "B Du bör ej lämna företräde då gående ej börjat korsa vägen (står stilla vid kanten).",
        correct: false
      }
    ]
  },
  {
    text:
      "13. Du kör på landsväg. Vilket av vägmärkena förbereder dig på att det kommer ett övergångsställe längre fram?",
    type: "mc",
    image: "P7Q13.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: true },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "14. Du kör på en enkelriktad gata och ser detta vägmärke längre fram. Vad innebär märket?",
    type: "mc",
    image: "P7Q14.png",
    answers: [
      { text: "A Vägen smalnar strax av", correct: false },
      { text: "B Jag kan strax få mötande trafik", correct: true },
      { text: "C Jag ska lämna företräde åt mötande fordon", correct: false },
      { text: "D Varning för korsande trafik", correct: false },
      { text: "E Mötande fordon ska lämna företräde åt mig", correct: false }
    ]
  },
  {
    text: "15. Vilket av följande vägmärken är ett varningsmärke?",
    type: "mc",
    image: "P7Q15.png",
    answers: [
      { text: "A Vägmärke A", correct: true },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text: "16. Vilken av de här märkerna är förbudsmärke?",
    type: "mc",
    image: "P7Q16.png",
    answers: [
      { text: "A- Vägmärke A", correct: false },
      { text: "B- Vägmärke B", correct: true },
      { text: "C- Vägmärke C", correct: false },
      { text: "D- Vägmärke D", correct: false }
    ]
  },
  {
    text: "17. Vilken information ger vägmärket om gatan rakt fram?",
    type: "mc",
    image: "P7Q17.png",
    answers: [
      { text: "A Återvändsgatan", correct: false },
      { text: "B Förbud att stanna och parkera", correct: true },
      { text: "C Förbud mot fordonstrafik", correct: false },
      { text: "D Förbud mot infart mot fordon.", correct: false }
    ]
  },
  {
    text: "18. Vilket påstående om vägmärkerna är riktigt?",
    type: "mc",
    image: "P7Q18.png",
    answers: [
      {
        text: "A-Vägmärke A innebär att vägen är fri från fordonstrafik.",
        correct: false
      },
      {
        text:
          "B-Vägmärke B innebär att infart med motordrivna fordon är förbjuden , men att det är tillåtet att cykla på vägen.",
        correct: false
      },
      {
        text: "C-Vägmärke B innebär att vägen är enkel riktad.",
        correct: false
      },
      { text: "D-Vägmärke A innebär att vägen är enkelriktad", correct: true }
    ]
  },
  {
    text: "19. Vad innebär vägmärket?",
    type: "mc",
    image: "P7Q19.png",
    answers: [
      {
        text:
          "A Endast cyklister och förare av moped klass 2 får passera vägmärket.",
        correct: false
      },
      { text: "B All fordonstrafik är förbjuden på vägen.", correct: false },
      {
        text: "C Samtliga fordon får passera märket de backas in på vägen.",
        correct: false
      },
      { text: "D Vägen är enkelriktad.", correct: true }
    ]
  },
  {
    text:
      "20. Vilka fordon får inte köra in på den väg där detta märke är uppsatt?",
    type: "mc",
    image: "P7Q20.png",
    answers: [
      { text: "A Endast personbilar", correct: false },
      { text: "B Alla motordrivna fordon", correct: false },
      { text: "C Motordrivet fordon som har flera hjul än två", correct: true }
    ]
  },
  {
    text: "21. Vad innebär vägmärket?",
    type: "mc",
    image: "P7Q21.png",
    answers: [
      {
        text: "A Förbud mot omkörning av motordrivna fordon med två hjul.",
        correct: false
      },
      {
        text: "B Förbud mot trafik med större fordon än personbilen.",
        correct: false
      },
      { text: "C Förbud mot omkörning av personbilen.", correct: false },
      {
        text:
          "D Förbud mot trafik med motordrivna fordon med flera än två hjul.",
        correct: true
      }
    ]
  },
  {
    text:
      "22. Vilket av följande vägmärken upphör att gälla vid nästa korsning?",
    type: "mc",
    image: "P7Q22.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: true },
      { text: "C Vägmärke C", correct: false }
    ]
  },
  {
    text:
      "23. Du kör en bil med tillkopplad enaxlad släpvagn. Vilket vägmärke får du inte köra förbi?",
    type: "mc",
    image: "P7Q23.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: true },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text: "24. Vad innebär det inringade vägmärket?",
    type: "mc",
    image: "P7Q24.png",
    answers: [
      { text: "A. Trafiken på bron är enkelriktad", correct: false },
      {
        text: "B. Endast ett fordon i taget får vistas på bron",
        correct: false
      },
      {
        text:
          "C. Mötande trafik ska lämna mig företräde om utrymmet inte räcker till för möte",
        correct: false
      },
      {
        text:
          "D. Jag ska lämna företräde till mötande trafik om utrymmet inte räcker till för möte",
        correct: true
      }
    ]
  },
  {
    text:
      "25. Vilket vägmärke anger att du är skyldig att lämna företräde för den mötande trafiken?",
    type: "mc",
    image: "P7Q25.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: true },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text: "26. Vad innebär vägmärket?",
    type: "mc",
    image: "P7Q26.png",
    answers: [
      { text: "A Förbud att köra om alla motordrivna fordon.", correct: false },
      {
        text: "B Förbud att köra om motordrivna fordon med fler hjul än två.",
        correct: true
      },
      { text: "C Enbart förbud att köra om personbilar.", correct: false }
    ]
  },
  {
    text: "27. Hur långt gäller den här förbudsmärket?",
    type: "mc",
    image: "P7Q27.png",
    answers: [
      { text: "A Så länge heldragen linje finns", correct: false },
      { text: "B 150 – 250 meter", correct: false },
      { text: "C Till det kommer ett slutmärke", correct: true },
      { text: "D Till nästa korsning", correct: false }
    ]
  },
  {
    text: "28. Du kommer strax ikapp fordonet på bilden. Får du köra om den?",
    type: "mc",
    image: "P7Q28.png",
    answers: [
      {
        text: "A Ja, eftersom fordonet framför är på vägrenen",
        correct: false
      },
      {
        text: "B Ja, om jag inte med något hjul passerar spärr linjen",
        correct: false
      },
      { text: "C Nej", correct: true },
      {
        text: "D Ja, eftersom fordonet framför är ett långsamt gående fordon.",
        correct: false
      }
    ]
  },
  {
    text:
      "29. Vilket av dessa vägmärken kräver ett slutmärke för att förbjudet inte längre ska gälla?",
    type: "mc",
    image: "P7Q29.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: true },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "30. Vilket av vägmärkena innebär att du måste svänga till vänster i korsningen?",
    type: "mc",
    image: "P7Q30.png",
    answers: [
      { text: "A Vägmärke A", correct: true },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false }
    ]
  },
  {
    text:
      "31. Vilka av dessa vägmärken innebär att du inte får fortsätta rakt fram?",
    type: "mc",
    image: "P7Q31.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: true },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text:
      "32. Vilket vägmärke innebär att möِtande fordon ska lämna dig fِöreträde?",
    type: "mc",
    image: "P7Q32.png",
    answers: [
      { text: "A Vägmärke A", correct: false },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: true }
    ]
  },
  {
    text: "33. Vad betyder det här vägmärket",
    type: "mc",
    image: "P7Q33.png",
    answers: [
      {
        text:
          "A Vägvisare till enskild väg och bara de som har tillstånd får köra här.",
        correct: false
      },
      {
        text: "B Vägvisare till enskild väg som saknar vägmärken",
        correct: true
      },
      { text: "C Vägvisare till tätbyggt område.", correct: false }
    ]
  },
  {
    text:
      "34. Du kommer till en vägkorsning där detta vägmärke finns uppsatt. Vad betyder märket?",
    type: "mc",
    image: "P7Q34.png",
    answers: [
      { text: "A Det är en allmän väg", correct: false },
      {
        text: "B Det är en tillfällig trafikomläggning på grund av vägarbete",
        correct: true
      },
      { text: "C Jag måste svänga vänster.", correct: false },
      { text: "D Det är en enskild väg", correct: false }
    ]
  },
  {
    text: "35. Vad innebär vägmärket?",
    type: "mc",
    image: "P7Q35.png",
    answers: [
      {
        text: "A Jag kör på en väg som tillfälligt ersätter riksväg 58",
        correct: false
      },
      { text: "B Jag kör på en väg som leder till riksväg 58.", correct: true },
      { text: "C Jag kör på riksväg 58.", correct: false }
    ]
  },
  {
    text: "36. Vad innebär följande vägmärke?",
    type: "mc",
    image: "P7Q36.png",
    answers: [
      { text: "A Vägvisare till enskild väg", correct: false },
      { text: "B Vägvisare till allmän väg", correct: true },
      { text: "C Vägvisare till lokal väg", correct: false }
    ]
  },
  {
    text: "37. Vad innebär det vägmärket?",
    type: "mc",
    image: "P7Q37.png",
    answers: [
      { text: "A Det är olämpligt att köra fortare än 30km/h", correct: true },
      { text: "B Det är förbjudet att köra fortare än 30km/h", correct: false },
      { text: "C Det är påbjudet att köra i 30km/h", correct: false }
    ]
  },
  {
    text: "38. Vilka veckodagar gäller den anvisade hastighetsbegränsningen?",
    type: "mc",
    image: "P7Q38.png",
    answers: [
      { text: "A Lördagar", correct: false },
      { text: "B Söndagar", correct: false },
      { text: "C Vardagar utom dag före söndag och helgdag.", correct: true },
      { text: "D Alla dagar.", correct: false }
    ]
  },
  {
    text: "39. Vad varnar den inringade skylten för?",
    type: "mc",
    image: "P7Q39.png",
    answers: [
      { text: "A Vägarbete.", correct: false },
      { text: "B Svag vägkant.", correct: false },
      { text: "C Backkrön.", correct: false },
      { text: "D Fast hinder", correct: true }
    ]
  },
  {
    text:
      "40. På väg mot Nyköping så upptäcker du att vägen är avspärrad på grund av vägarbete. Vilken skylt är uppsatt för att visa förbifart till Nyköping?",
    type: "mc",
    image: "P7Q40.png",
    answers: [
      { text: "A Skylt 1", correct: false },
      { text: "B Skylt 2", correct: true },
      { text: "C Skylt 3", correct: false },
      { text: "D Skylt 4", correct: false },
      { text: "E Skylt 5", correct: false }
    ]
  },
  {
    text:
      "41. Du kommer med din bil fram till en plats där det finns både vita och oranga linjer på körbanan. Vad innebär detta för dig?",
    type: "mc",
    image: "P7Q41.png",
    answers: [
      { text: "A Jag ska följa de vita linjerna", correct: false },
      { text: "B Jag ska följa de oranga linjerna.", correct: true },
      {
        text:
          "C Jag kan välja att följa antingen de vita eller de oranga linjerna",
        correct: false
      }
    ]
  },
  {
    text: "42. Vilket av följande påståenden är riktigt?",
    type: "mc",
    image: "P7Q42.png",
    answers: [
      {
        text:
          "A Om jag fortsätter i det högra körfältet så måste jag svänga till höger mot LÄNNA N",
        correct: false
      },
      {
        text:
          "B Eftersom vägmarkeringar saknas är vägen inte uppdelad i körfält.",
        correct: false
      },
      {
        text:
          "C Om jag placerar mig i det vänstra körfältet så måste jag svänga till vänster mot NYNÄSHAMN",
        correct: false
      },
      {
        text:
          "D Om jag ska fortsätta mot E4 så kan jag stanna kvar i det högra körfältet.",
        correct: true
      }
    ]
  },
  {
    text: "43. Vilken väg är hastigheten lägst?",
    type: "mc",
    image: "P7Q43.png",
    answers: [
      { text: "A Vid väg A", correct: false },
      { text: "B Vid väg B", correct: true },
      { text: "C Vid väg C", correct: false }
    ]
  },
  {
    text:
      "44. Vad innebär vägmarkeringen som finns rakt framför dig i höger körfält?",
    type: "mc",
    image: "P7Q44.png",
    answers: [
      { text: "A Vägen smalnar av längre fram", correct: false },
      {
        text: "B Jag närmar mig en korsning där jag har väjningsplikt.",
        correct: true
      },
      {
        text: "C Vägen är huvudled även efter nästa korsning.",
        correct: false
      },
      {
        text: "D Vägen får snart två körfält i min färdriktning.",
        correct: false
      }
    ]
  },
  {
    text:
      "45. Du ser följande vägmarkeringen intill vägens kant. I vilken situation är det förbjudet att stanna och parkera?",
    type: "mc",
    image: "P7Q45.png",
    answers: [
      { text: "A I situation på bild A", correct: false },
      { text: "B I situation på bild B", correct: true },
      { text: "C I situation på bild C", correct: false }
    ]
  },
  {
    text: "46. Vad innebär vägmärket?",
    type: "mc",
    image: "P7Q46.png",
    answers: [
      {
        text:
          "A-Den som kör i vänster körfält ska som regel väja  för trafiken i höger körfält",
        correct: false
      },
      {
        text:
          "B-Förarna i båda körfälten ska ömsesidigt anpassa sig till att det blir ett körfält",
        correct: true
      },
      {
        text:
          "C-Den som kör i höger körfält ska som regel väja för trafiken i vänster körfält",
        correct: false
      }
    ]
  },
  {
    text:
      "47. Kan det här vägmärket få någon särskild betydelse när det är halt väglag?",
    type: "mc",
    image: "P7Q47.png",
    answers: [
      {
        text:
          "A Ja, där vinden är kraftig blir vägbanan sträv med bra väggrepp.",
        correct: false
      },
      {
        text: "B Nej, det innebär endast farlig sidvind från vänster.",
        correct: false
      },
      {
        text: "C Ja, i halt väglag kan plötslig sidvind göra att jag får sladd",
        correct: true
      }
    ]
  },
  {
    text: "48. Får du svänga vänster i korsningen?",
    type: "mc",
    image: "P7Q48.png",
    answers: [
      { text: "A Nej jag måste kör rakt fram", correct: false },
      { text: "B Ja, det är tillåtet", correct: false },
      { text: "C Nej, jag måste svänga till höger", correct: true }
    ]
  },
  {
    text:
      "49. Vilken av dessa skyltar skall du vara försiktig för att inte glida av vägen på halt väglaget.",
    type: "mc",
    image: "P7Q49.png",
    answers: [
      { text: "A- Skylt A", correct: false },
      { text: "B- Skylt B", correct: true },
      { text: "C- Skylt C", correct: false },
      { text: "D- Skylt D", correct: false }
    ]
  },
  {
    text:
      "50. Vem bör stanna på mötesplatsen om utrymmet inte räcker till för att mötas",
    type: "mc",
    image: "P7Q50.png",
    answers: [
      { text: "A. Den som kommer först till mötesplatsen", correct: true },
      { text: "B. Den som har skylten på sin sida av vägen", correct: false }
    ]
  },
  {
    text: "51. Är omkörningen tillåten i någon av situationerna på bilderna?",
    type: "mc",
    image: "P7Q51.png",
    answers: [
      { text: "A. Ja, i situation A", correct: false },
      { text: "B. Ja, i situation B", correct: false },
      { text: "C. Ja, i situation C", correct: false },
      { text: "D. Ja, i situation D", correct: true },
      { text: "E. Nej", correct: false }
    ]
  },
  {
    text:
      "52. Får du köra lätt lastbil med tillkopplad släpvagn där detta vägmärke gäller?",
    type: "mc",
    image: "P7Q52.png",
    answers: [
      {
        text: "A Ja, men enbart om både bilen och släpvagnen är olastade",
        correct: false
      },
      {
        text:
          "B Ja, vägmärket anger minsta tillåtna avstånd mellan motordrivna fordon",
        correct: true
      },
      {
        text: "C Nej, vägmärket anger att det inte är tillåtet med släpvagn",
        correct: false
      },
      { text: "D Nej, vägen är enbart avsedd för peronbilar", correct: false }
    ]
  },
  {
    text: "53. Vilka tre fordon får du köra om med detta vägmärke?",
    type: "mc",
    image: "P7Q53.png",
    answers: [
      {
        text: "A Moped med två hjul, cykel motorcykel med två hjul",
        correct: true
      },
      {
        text: "B Personbil Lätt motorcykel Moped med två hjul.",
        correct: false
      },
      {
        text: "C Långsam gående fordon Cykel Motorcykel med sidovagn",
        correct: false
      }
    ]
  },
  {
    text: "54. Denna skylt kan finnas i en tunnel. Vad innebär den?",
    type: "mc",
    image: "P7Q54.png",
    answers: [
      { text: "A Den visar väg till brandsläckaren", correct: false },
      { text: "B Den visar väg till nödtelefon", correct: false },
      { text: "C Den visar väg till utrymningsplats", correct: true },
      { text: "D Den visar väg till gående", correct: false }
    ]
  },
  {
    text: "55. Vilket av följande påståenden är riktigt?",
    type: "mc",
    image: "P7Q55.png",
    answers: [
      {
        text:
          "A Om jag ska fortsätta mot väg 73 så kan jag stanna kvar i det högra körfältet.",
        correct: true
      },
      {
        text:
          "B Om jag ska fortsätta mot väg 73 så måste jag flytta till ett av de vänstra körfälten",
        correct: false
      },
      { text: "C Om jag ska fortsätta mot LÄNNA så måste jag", correct: false }
    ]
  },
  {
    text: "56. Du har fått bensinstopp i en järnvägskorsning. Vad ska du göra?",
    type: "mc",
    answers: [
      { text: "A Jag lämnar bilen och försöker stoppa tåget.", correct: false },
      {
        text:
          "B Jag lägger i femmans växel och med hjälp av startmotorn kör jag undan bilen.",
        correct: false
      },
      {
        text:
          "C Jag lägger i en låg växel och med hjälp av startmotorn kör jag undan bilen.",
        correct: true
      },
      {
        text: "D Jag lämnar bilen och ställer mig på ett säkert ställe. ",
        correct: false
      }
    ]
  }
];

module.exports = { quizData, questions };
