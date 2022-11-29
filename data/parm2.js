const quizData = {
  title: "Pärm 2"
};

const questions = [
  {
    text: "1. Vilket alternativ anger rätt rangordning på trafik anvisningar?",
    type: "mc",
    answers: [
      {
        text: "A Polismans tecken, trafikregler, trafiksignal, vägmärken.",
        correct: false
      },
      {
        text: "B Polismans tecken, trafiksignal, trafikregler, vägmärken.",
        correct: false
      },
      {
        text: "C Polismans tecken, vägmärken, trafiksignal, trafikregler",
        correct: false
      },
      {
        text: "D Polismans tecken, trafiksignal, vägmärken, trafikregler",
        correct: true
      }
    ]
  },
  {
    text: "2. Vad innebär anvisningarna?",
    type: "mc",
    image: "P2Q2.png",
    answers: [
      {
        text:
          "A Jag får köra eftersom jag har företräde mot mötande enligt vägmärket.",
        correct: false
      },
      {
        text: "B Jag ska stanna eftersom trafiksignalen visar rött.",
        correct: true
      },
      {
        text:
          "C Jag får köra men ska lämna företräde mot för mötande enligt vägmärket.",
        correct: false
      }
    ]
  },
  {
    text:
      "3. Vad ska du göra när du i backspegeln ser en polismotorcykel som signalerar först med helljuset och därefter växelvis med rött och blått ljus?",
    type: "mc",
    image: "P2Q3.png",
    answers: [
      { text: "A Sänka hastigheten.", correct: false },
      { text: "B Öka hastigheten.", correct: false },
      { text: "C Lämna fri väg.", correct: false },
      { text: "D Stanna.", correct: true }
    ]
  },
  {
    text: "4. Vad innebär polisens tecken?",
    type: "mc",
    image: "P2Q4.png",
    answers: [
      { text: "A Stop enbart för trafik som kommer framför", correct: false },
      { text: "B Minska hastigheten", correct: true },
      {
        text: "C Stop för trafik som både kommer bakifrån och framifrån",
        correct: false
      },
      { text: "D Stop för trafik som kommer bakifrån", correct: false }
    ]
  },
  {
    text: "5. Vad innebär polisens tecken?",
    type: "mc",
    image: "P2Q5.png",
    answers: [
      { text: "A Mötande ska stanna och du ska stanna", correct: true },
      { text: "B Mötande ska stanna och du ska köra", correct: false },
      { text: "C Båda ska köra men långsamt", correct: false }
    ]
  },
  {
    text: "6. Vad innebär polismannens tecken.",
    type: "mc",
    image: "P2Q6.png",
    answers: [
      { text: "A Mötande ska stanna och jag får köra.", correct: false },
      { text: "B Jag ska minska hastigheten.", correct: false },
      { text: "C Jag ska stanna och mötande får köra.", correct: true },
      { text: "D Både mötande och jag ska stanna.", correct: false }
    ]
  },
  {
    text: "7. Vilket påstående är rätt om ett defensiv körsätt?",
    type: "mc",
    answers: [
      {
        text: "A Jag lämnar alltid företräde till all korsande trafik.",
        correct: false
      },
      {
        text:
          "B Jag är alltid beredd att anpassa mig till situationer som uppstår.",
        correct: true
      },
      {
        text: "C Jag kör med låg hastighet i alla situationer",
        correct: false
      },
      { text: "D Jag kör offensivt", correct: false }
    ]
  },
  {
    text:
      "8. Du ska svänga vänster i korsningen. Vilket påstående är sant eller riktigt?",
    type: "mc",
    image: "P2Q8.png",
    answers: [
      {
        text:
          "A Jag har vänjningsplikt mot alla fordon på den korsande  vägen.",
        correct: false
      },
      {
        text: "B Jag måste stanna innan jag svänger ut i korsningen.",
        correct: false
      },
      {
        text:
          "C Jag har väjningsplikt mot fordon som kommer från höger i korsningen.",
        correct: true
      }
    ]
  },
  {
    text:
      "9. Du tänker fortsätta att köra rakt fram. Gäller högerregel i någon av korsningarna?",
    type: "mc",
    image: "P2Q9.png",
    answers: [
      { text: "A Ja, men endast i korsningen på bild A", correct: false },
      { text: "B Ja, men endast i korsningen på bild B", correct: false },
      { text: "C Ja, i både korsningen på bild A och B.", correct: true },
      { text: "D Nej, inte i någon av korsningarna", correct: false }
    ]
  },
  {
    text: "10. Du ska köra rakt fram och cyklisten kör sakta. Vad ska du göra?",
    type: "mc",
    image: "P2Q10.png",
    answers: [
      { text: "A Jag kör först eftersom jag ska rakt fram", correct: false },
      {
        text: "B Jag kör först eftersom jag kör på den större vägen",
        correct: false
      },
      {
        text: "C Jag låter cyklisten köra först eftersom hon kommer från höger",
        correct: true
      }
    ]
  },
  {
    text: "11. Vilket påstående är riktigt om närmaste korsningen på bilden?",
    type: "mc",
    image: "P2Q11.png",
    answers: [
      {
        text:
          "A Vägmerket är bara föِr korsande trafik, därföِr ska jag skärpa uppmärksamheten och vara beredd på att eventuellt stanna.",
        correct: false
      },
      {
        text:
          "B Vägmerket betyder att jag köِr på huvudled, därföِr behöِver jag inte vara beredd på något särkskild i den här korsningen.",
        correct: false
      },
      {
        text:
          "C Eftersom hِögerregel gäller anpassar jag farten och göِr mig beredd på att eventuellt stanna",
        correct: true
      }
    ]
  },
  {
    text:
      "12. Du har precis passerat det här vägmärket. Vad gäller i korsningen du kommer till om inget annat anges?",
    type: "mc",
    image: "P2Q12.png",
    answers: [
      {
        text: "A Jag ska låta trafik från höger köra före mig .",
        correct: true
      },
      {
        text: "B All korsande trafik skall låta mig köra först.",
        correct: false
      },
      {
        text: "C Jag ska låta all korsande trafik köra före mig .",
        correct: false
      },
      {
        text: "D Jag ska låta trafik från vänster köra före mig .",
        correct: false
      }
    ]
  },
  {
    text: "13. Vad gäller i korsningen när du ska fortsätta rakt fram?",
    type: "mc",
    image: "P2Q13.png",
    answers: [
      { text: "A Jag har väjningsplikt enligt högerregeln", correct: true },
      { text: "B Jag kör först eftersom jag ska rakt fram", correct: false },
      {
        text:
          "C Föraren i bilen som kommer från höger har väjningsplikt eftersom han kommer från en enskild väg.",
        correct: false
      },
      {
        text: "D Jag kör först eftersom jag kör på en allmän väg.",
        correct: false
      }
    ]
  },
  {
    text:
      "14. Du ska svänga vänster i korsningen. Vilka har du väjningsplikt mot?",
    type: "mc",
    image: "P2Q14.png",
    answers: [
      {
        text:
          "A Enbart fordon från höger samt gående som är på väg över gatan?",
        correct: false
      },
      { text: "B Enbart gående som är på väg över gatan.", correct: false },
      {
        text:
          "C Endast fordon från vänster samt gående som är på väg över gatan.",
        correct: false
      },
      {
        text:
          "D Fordon från vänster och höger samt gående som är på väg över gatan.",
        correct: true
      }
    ]
  },
  {
    text:
      "15. Du ska fortsätta rakt fram. Gäller högerregel i någon av korsningarna?",
    type: "mc",
    image: "P2Q15.png",
    answers: [
      { text: "A-Ja endast på korsning på bild A", correct: true },
      { text: "B-Ja endast på korsning på bild B", correct: false },
      { text: "C-Ja i korsningarna A och B", correct: false },
      { text: "D-Inte i någon av korsningarna", correct: false }
    ]
  },
  {
    text:
      "16. Du ska svänga till höger i korsningen. Vilket påstående är riktigt?",
    type: "mc",
    image: "P2Q16.png",
    answers: [
      {
        text: "A Jag har väjningsplikt mot alla fordon på den korsande vägen",
        correct: false
      },
      {
        text:
          "B Jag måste iaktta försiktighet innan jag svänger ut i korsningen",
        correct: true
      },
      {
        text:
          "C Jag har väjningsplikt mot fordon som kommer fån vänster i korsningen",
        correct: false
      },
      {
        text: "D Jag måste alltid stanna innan jag svänger ut i korsningen",
        correct: false
      }
    ]
  },
  {
    text: "17. Stopplinjen saknas i den här situationen. Var ska du stanna?",
    type: "mc",
    image: "P2Q17.png",
    answers: [
      { text: "A Omedelbart före vägmärket", correct: false },
      { text: "B Omedelbart före spårområdet", correct: true },
      { text: "C 30 meter före spårområdet", correct: false }
    ]
  },
  {
    text: "18. Vad gäller i korsningen på bilden?",
    type: "mc",
    image: "P2Q18.png",
    answers: [
      { text: "A- Jag måste svänga till vänster.", correct: false },
      { text: "B- Jag måste svänga till höger.", correct: false },
      {
        text: "C- Jag får svänga både till höger och till vänster.",
        correct: true
      }
    ]
  },
  {
    text:
      "19. Du närmar dig en korsning där detta vägmärke finns uppsatt. Hur ska du uppträda?",
    type: "mc",
    image: "P2Q19.png",
    answers: [
      {
        text:
          "A Jag behåller farten och gör sedan en hastig inbromsning vid väjningslinjen",
        correct: false
      },
      {
        text: "B Jag saktar in i god tid och måste stanna vid väjningslinjen",
        correct: false
      },
      {
        text: "C Jag saktar in i god tid och stannar om det behövs.",
        correct: true
      }
    ]
  },
  {
    text: "20. Vad innebär vägmärket?",
    type: "mc",
    image: "P2Q20.png",
    answers: [
      {
        text:
          "A Jag har väjningsplikt mot fordon som kommer från höger och vänster.",
        correct: false
      },
      { text: "B Föraren på anslutande väg har väjningsplikt", correct: true },
      {
        text: "C Jag har väjningsplikt mot fordon som kommer från höger.",
        correct: false
      }
    ]
  },
  {
    text: "21. Du ska svänga vänster mot huvudleden. Vad gäller?",
    type: "mc",
    image: "P2Q21.png",
    answers: [
      {
        text: "A Jag ska lämna företräde till all korsande trafik",
        correct: false
      },
      { text: "B Jag ska lämna företräde till  höger", correct: false },
      { text: "C Jag skal lämna företräde till vänster", correct: false },
      {
        text: "D De som kommer rakt fram ska lämna mig företräde",
        correct: true
      }
    ]
  },
  {
    text:
      "22. Du ska svänga vänster direkt efter övergångsstället. Vad gäller?",
    type: "mc",
    image: "P2Q22.png",
    answers: [
      {
        text: "A All korsande trafik ska låta mig köra först.",
        correct: false
      },
      {
        text: "B Jag ska låta trafik från höger köra före mig.",
        correct: true
      },
      {
        text: "C Jag ska låta trafik från vänster köra före mig.",
        correct: false
      },
      {
        text: "D Jag ska låta all korsande trafik köra före mig",
        correct: false
      }
    ]
  },
  {
    text:
      "23. Du ska svänga till vänster. Är du skyldig att lämna fordon från höger företräde i någon av korsningarna?",
    type: "mc",
    image: "P2Q23.png",
    answers: [
      { text: "A-Ja i korsning på bild A", correct: false },
      { text: "B-Ja i korsning på bild B", correct: true },
      { text: "C-Ja i korsning på bilderna A och B", correct: false },
      { text: "D-Nej", correct: false }
    ]
  },
  {
    text: "24. Du skall fortsätta rakt fram i korsningen. Hur ska du uppträda?",
    type: "mc",
    image: "P2Q24.png",
    answers: [
      { text: "A Du måste lämna bussens företräde", correct: false },
      { text: "B För att inte hindra bussen ökar du farten", correct: false },
      {
        text: "C Du ska anpassa farten så att kunna stanna om bussen svänger",
        correct: true
      }
    ]
  },
  {
    text: "25. Du ska fortsätta rakt fram. Vad gäller?",
    type: "mc",
    image: "P2Q25.png",
    answers: [
      {
        text: "A Jag låter cyklisten köra först eftersom hon ska svänga.",
        correct: false
      },
      {
        text:
          "B Jag kör före cyklisten eftersom det är tillåtet att köra före henne.",
        correct: false
      },
      {
        text:
          "C Jag kör före cyklisten men är beredd på att stanna eftersom hon kanske svänger.",
        correct: true
      },
      {
        text: "D Jag låter cyklisten köra först eftersom högerregel gäller.",
        correct: false
      }
    ]
  },
  {
    text: "26. På vilken av de två situationer gäller högerregel?",
    type: "mc",
    image: "P2Q26.png",
    answers: [
      { text: "A På bild A", correct: false },
      { text: "B På bild B", correct: false },
      { text: "C Ingen A", correct: true }
    ]
  },
  {
    text:
      "27. Är du skyldig att ge bussen möjlighet att lämna hållplatsen och köra före dig i någon av situationerna?",
    type: "mc",
    image: "P2Q27.png",
    answers: [
      { text: "A Ja, men enbart i situation A", correct: true },
      { text: "B Ja, men enbart i situation B", correct: false },
      { text: "C Ja, i båda situationerna", correct: false },
      { text: "D Nej", correct: false }
    ]
  },
  {
    text:
      "28. Vilket är den viktigaste anledning till att anpassa hastigheten efter detta vägmärke?",
    type: "mc",
    image: "P2Q28.png",
    answers: [
      { text: "A Vägmärken kan saknas eller vara ändrade.", correct: false },
      { text: "B Vägen kan vara i sämre skick", correct: false },
      { text: "C Det kan finnas vägarbetare på vägen.", correct: true },
      {
        text: "D Vägmärken kan saknas eller vara missvisande.",
        correct: false
      },
      { text: "E Det kan finnas trånga passager.", correct: false }
    ]
  },
  {
    text: "29. Vilket påstående om vårt seende är riktigt?",
    type: "mc",
    answers: [
      {
        text: "A Direktseendet utgör en riktigt liten del av synfältet.",
        correct: true
      },
      {
        text: "B Direktseendet utgör en riktigt stor del av synfältet.",
        correct: false
      },
      {
        text: "C Med periferiseendet ser man skarpt i hela synfältet.",
        correct: false
      }
    ]
  },
  {
    text: "30. Varför måste du ha en rörlig blick när du kör bil?",
    type: "mc",
    answers: [
      {
        text:
          "A Därför att jag endast i en liten del av mitt synfält kan upptäcka föremål som är i rörelse.",
        correct: true
      },
      {
        text:
          "B Därför endast en lite den av mitt synfält kan bedöma hastighet och avstånd.",
        correct: false
      },
      {
        text:
          "C Därför att jag endast i en liten del av mitt synfält kan se färger.",
        correct: false
      }
    ]
  },
  {
    text:
      "31. När är risken störst att en förare kan råka ut för feltolkningar och synvillor?",
    type: "mc",
    answers: [
      { text: "A Vid körning i snöyra med helljuset tänt.", correct: true },
      {
        text: "B Vid körning på en motorväg en varm sommardag.",
        correct: false
      },
      {
        text: "C Vid körning på en rak grusväg en varm (torr) sommardag.",
        correct: false
      }
    ]
  },
  {
    text:
      "32. Vad är sant om oerfarna förares avsöknings-beteende i jämförelse med erfarna förare?",
    type: "mc",
    answers: [
      {
        text: "A Oerfarna förare har ett längre och bredare avsökningsområde",
        correct: false
      },
      {
        text: "B Oerfarna förare har blicken riktad närmare bilen",
        correct: true
      },
      { text: "C Deras avsökningsbeteende skiljer sig inte åt", correct: false }
    ]
  },
  {
    text:
      "33. Vilken är den vanligaste orsaken till att risksituationer uppstår i trafiken?",
    type: "mc",
    answers: [
      { text: "A Brister hos föraren uppmärksamhet", correct: true },
      { text: "B Brister i trafikmiljön", correct: false },
      { text: "C Brister på fordonet.", correct: false }
    ]
  },
  {
    text:
      "34. Du har villkor glasögon på körkortet. Vad gäller när du ska köra bil?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag måste ha glasögon med mig i bilen men använder de enbart vid behov, t.ex. i mörker.",
        correct: false
      },
      { text: "B Jag behöver använda glasögon eller linser.", correct: false },
      { text: "C Jag måste använda glasögon eller linser.", correct: true }
    ]
  },
  {
    text: "35. Vad betyder tilläggstavlan?",
    type: "mc",
    image: "P2Q35.png",
    answers: [
      { text: "A Nedsatt rörelseförmåga", correct: false },
      { text: "B Nedsatt hörsel", correct: true },
      { text: "C Nedsatt syn", correct: false }
    ]
  },
  {
    text: "36. Vad betyder tilläggstavlan?",
    type: "mc",
    image: "P2Q36.png",
    answers: [
      { text: "A Nedsatt rörelseförmåga", correct: false },
      { text: "B Nedsatt hörsel", correct: false },
      { text: "C Nedsatt syn", correct: true }
    ]
  },
  {
    text: "37. Du ska köra om ekipaget på bilden. Hur bör du göra?",
    type: "mc",
    image: "P2Q37.png",
    answers: [
      {
        text: "A Jag kör långsamt förbi och är beredd att bromsa.",
        correct: true
      },
      {
        text: "B Jag blinkar med helljuset, för att påkalla uppmärksamhet.",
        correct: false
      },
      {
        text: "C Jag ger ljudsignal för att påkalla uppmärksamhet.",
        correct: false
      },
      { text: "D Jag ökar farten för att snabbt komma förbi.", correct: false }
    ]
  },
  {
    text: "38. Vad måste du i första hand ha beredskap för i denna situation?",
    type: "mc",
    image: "P2Q38.png",
    answers: [
      {
        text: "A Att bilen från vänster i korsningen kan köra ut framför mig",
        correct: false
      },
      {
        text: "B Att ett barn kan springa ut framför den parkerade bilen",
        correct: true
      },
      { text: "C Att gående kan gå ut på övergångstället", correct: false },
      {
        text: "D Att en bil kan komma från höger i korsningen.",
        correct: false
      }
    ]
  },
  {
    text: "39. Vad är mest förrädisk i denna situation?",
    type: "mc",
    image: "P2Q39.png",
    answers: [
      { text: "A Att det är dålig sikt i korsningen.", correct: false },
      { text: "B Att det kan vara halt väglag", correct: false },
      { text: "C Att cyklister på cykelbanan är svåra att se.", correct: true }
    ]
  },
  {
    text:
      "40. Vad bör du särskilt tänka på när en skolskjuts blinkar enligt bilden?",
    type: "mc",
    image: "P2Q40.png",
    answers: [
      {
        text: "A Inga barn får passera vägen förrän bussen åkt.",
        correct: false
      },
      { text: "B Det kan komma barn springande.", correct: true },
      {
        text:
          "C Eftersom skolskylten blinkar måste jag lämna företräde åt bussen.",
        correct: false
      },
      {
        text:
          "D Inga barn får stiga av bussen förrän skolskylten slutar att blinka.",
        correct: false
      }
    ]
  },
  {
    text:
      "41. Taxin har stannat vid vägkanten och lyktorna på skylten blinkar gult. Hur ska du uppträda?",
    type: "mc",
    image: "P2Q41.png",
    answers: [
      {
        text:
          "A Jag måste släppa fram taxin när den ska starta från vägkanten.",
        correct: false
      },
      {
        text: "B Jag måste stanna eftersom lyktorna på skylten blinkar.",
        correct: false
      },
      {
        text: "C Jag får passera taxin utan att stanna om jag kör långsamt.",
        correct: true
      },
      {
        text: "D- Jag måste ge ljudsignal innan jag passerar taxin.",
        correct: false
      }
    ]
  },
  {
    text:
      "42. Du ska köِra ut på gatan på bilden. Vad är mest förrädisk i den här situationen?",
    type: "mc",
    image: "P2Q42.png",
    answers: [
      { text: "A Fordon som kan komma från vänster på gatan.", correct: false },
      { text: "B Bilarna på parkeringen som kan backa ut.", correct: false },
      { text: "C Fordon som kan komma från hِöger på gatan.", correct: false },
      { text: "D Fotgängare som kan komma på gångbanan.", correct: true }
    ]
  },
  {
    text: "43. Har du väjningsplikt mot fotgängaren i den här situationen?",
    type: "mc",
    image: "P2Q43.png",
    answers: [
      { text: "A Nej, eftersom det finns trafiksignal", correct: false },
      { text: "B Ja, eftersom övergångstället är obevakat", correct: true },
      {
        text: "C Nej, eftersom fotgängaren ännu inte är ute på övergångstället",
        correct: false
      }
    ]
  },
  {
    text: "44. Hur ska du uppträda i den här situationen?",
    type: "mc",
    image: "P2Q44.png",
    answers: [
      {
        text:
          "A Jag ska sakta in eller stanna för att visa att jag tänker väja.",
        correct: true
      },
      {
        text:
          "B Jag kan köra vidare utan att stanna eftersom jag ser att fotogängaren har sett mig",
        correct: false
      },
      {
        text:
          "C Jag kan köra vidare eftersom fotogängaren befinner sig på mittrefugen",
        correct: false
      }
    ]
  },
  {
    text:
      "45. Får du med din personbil köra på en gata där detta vägmärke finns uppsatt?",
    type: "mc",
    image: "P2Q45.png",
    answers: [
      { text: "A Ja, men endast i 30 km/h", correct: false },
      { text: "B Nej, endast varutransport får köra här", correct: false },
      { text: "C Nej, trafik med motorfordon är förbjudet", correct: false },
      { text: "D Ja, men bara med lugn gångfart", correct: true }
    ]
  },
  {
    text: "46. Efter vilket vägmärke måste du hålla lägst hastighet?",
    type: "mc",
    image: "P2Q46.png",
    answers: [
      { text: "A Vägmärke A", correct: true },
      { text: "B Vägmärke B", correct: false },
      { text: "C Vägmärke C", correct: false },
      { text: "D Vägmärke D", correct: false }
    ]
  },
  {
    text: "47. Vad är sant angående parkering på en gårdsgata?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag måste ha särskilt tillstånd för att få parkera på en gårdsgata.",
        correct: false
      },
      {
        text:
          "B På en gårdsgata får jag parkera var som helst om jag inte hindrar annan trafik.",
        correct: false
      },
      {
        text:
          "C På en gårdsgata får jag parkera endast på markerade parkeringsplatser.",
        correct: true
      },
      { text: "D Man får aldrig parkera på en gårdsgata.", correct: false }
    ]
  },
  {
    text:
      "48. Du ska fortsätta rakt fram. Vilka fordon har du väjningsplikt mot i korsningen?",
    type: "mc",
    image: "P2Q48.png",
    answers: [
      { text: "A. Endast fordon från vänster", correct: false },
      { text: "B. Endast fordon från höger", correct: false },
      { text: "C. Fordon från vänster och höger", correct: true }
    ]
  },
  {
    text:
      "49. Du ska köra en släkt som bor i denna väg där vägmärket är uppsatt. Får du köra i denna här vägen?",
    type: "mc",
    image: "P2Q49.png",
    answers: [
      { text: "A-Ja i gångfart", correct: true },
      { text: "B-Ja i 30 km/h", correct: false },
      { text: "C-Ja i 50 km/h", correct: false }
    ]
  },
  {
    text:
      "50. Vilket av följande påståenden är riktig vid passerande av järnvägkorsning?",
    type: "mc",
    image: "P2Q50.png",
    answers: [
      {
        text:
          "A Så fort ett tåg passerar så kan  jag köra vidare även om ljudsignalen har fortsatt att ljuda",
        correct: false
      },
      { text: "B Jag ska köra så sakta som möjligt", correct: false },
      {
        text:
          "C Oavsett hur korsningen ser ut så måste jag kontrollera så att jag kan passera utan risk",
        correct: true
      },
      {
        text: "D När korsningen är bevakad kan jag passera utan risk .",
        correct: false
      }
    ]
  },
  {
    text:
      "51. Vad är det i första hand som avgör hur fort du ska köra när du passerar järnvägkorsningen på bilden?",
    type: "mc",
    image: "P2Q51.png",
    answers: [
      { text: "A Hastighetsbestämmelse på vägen", correct: false },
      { text: "B Sikten i järnkorsningen", correct: true },
      { text: "C Säkerhets anordning i Järnkorsningen", correct: false }
    ]
  },
  {
    text: "52. På bilden ser du skolpatrull. Vad är rätt?",
    type: "mc",
    image: "P2Q52.png",
    answers: [
      {
        text:
          "A Alla trafikanter är skyldiga att följa skolpatrullens anvisningar.",
        correct: false
      },
      {
        text: "B Deras uppgift är att stoppa trafiken på gatan.",
        correct: false
      },
      {
        text:
          "C Deras uppgift är att hjälpa barnen som ska till och från skolan.",
        correct: true
      },
      { text: "D Skolpatrullen har polismans befogenhet.", correct: false }
    ]
  },
  {
    text:
      "53. Vad kallar man ett körsätt där föraren anpassar sig efter medtrafikanterna och planerar sin körning?",
    type: "mc",
    image: "P2Q53.png",
    answers: [
      { text: "A Defensiv", correct: true },
      { text: "B Offensiv", correct: false },
      { text: "C Stressigt", correct: false },
      { text: "D Impulsiv", correct: false }
    ]
  },
  {
    text:
      "54. Vad är riktigt om den järnvägskorsning som vägmärket varnar för?",
    type: "mc",
    image: "P2Q54.png",
    answers: [
      {
        text:
          "A Korsningen har bommar som alltid är nedfällda när ett tåg närmar sig.",
        correct: false
      },
      {
        text:
          "B Korsningen har bommar, men dessa kan vara uppfällda trots att ett tåg närmar sig.",
        correct: false
      },
      {
        text:
          "C Korsningen saknar bommar, så jag måste själv kontrollera att inget tåg närmar sig.",
        correct: true
      }
    ]
  },
  {
    text:
      "55. Du ska följa huvudledens fortsättning i korsningen. Är du skyldig att använda körriktningsvisare?",
    type: "mc",
    image: "P2Q55.png",
    answers: [
      { text: "A Ja, alltid", correct: true },
      {
        text: "B Ja, men enbart när det finns annan trafik i korsningen.",
        correct: false
      },
      { text: "C Nej", correct: false }
    ]
  },
  {
    text:
      "56. Hur gör du för att visa de bakomvarande dina avsiktar när du tänker stanna?",
    type: "mc",
    answers: [
      { text: "A Jag använder mig av motorbromsen", correct: false },
      { text: "B Jag intar bromsberedskap", correct: false },
      { text: "C Jag bromsar i god tid före situationen", correct: true },
      {
        text: "D Jag väntar med inbromsningen och gör ett markerat stopp",
        correct: false
      }
    ]
  },
  {
    text: "57. Vad ska du göra i den här situationen?",
    type: "mc",
    image: "P2Q57.png",
    answers: [
      {
        text: "A. Jag stannar bakom polisbilen när den stannar",
        correct: true
      },
      {
        text:
          "B. Jag svänger in till kanten och stannar vid första möjliga tillfälle",
        correct: false
      },
      {
        text: "C. Jag kör förbi polisbilen och stannar därefter vid kanten",
        correct: false
      }
    ]
  },
  {
    text: "58. Hur ska du uppträda mot fotgängaren i den här situationen?",
    type: "mc",
    image: "P2Q58.png",
    answers: [
      {
        text: "A. Jag kör, eftersom hon är skyldig att vänta på mig.",
        correct: false
      },
      {
        text:
          "B. Jag saktar in eller stannar för att visa att jag tänker låta henne gå först.",
        correct: true
      },
      {
        text:
          "C. Jag kör, eftersom vi har ögonkontakt och jag ser att hon tänker vänta",
        correct: false
      }
    ]
  },
  {
    text:
      "59. Du kör inne på en stor parkeringsplats och ska fortsätta rakt fram. Bilen som kommer från höger kör sakta. Vad ska du göra?",
    type: "mc",
    image: "P2Q59.png",
    answers: [
      {
        text:
          "A Jag låter den andra bilen köra först eftersom den kommer från höger.",
        correct: true
      },
      {
        text: "B Jag kör först eftersom den andra bilen kommer från höger.",
        correct: false
      },
      {
        text: "C Jag kör först eftersom jag  ska köra rakt fram",
        correct: false
      }
    ]
  },
  {
    text:
      "60. Du ska fortsätta rakt fram. Gäller högerregeln i någon av korsningarna?",
    type: "mc",
    image: "P2Q60.png",
    answers: [
      { text: "A. Ja, men enbart i korsning A", correct: false },
      { text: "B. Ja, men enbart i korsning B", correct: true },
      { text: "C. Ja, i både korsningarna", correct: false },
      { text: "D. Nej.", correct: false }
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