const quizData = {
  title: "Pärm 4"
};

const questions = [
  {
    text:
      "1. Vilken är den största tillåtna hastighet efter detta vägmärke om inget annat anges?",
    type: "mc",
    image: "P4Q1.png",
    answers: [
      { text: "A 30km/h", correct: false },
      { text: "B 50km/h", correct: true },
      { text: "C 70km/h", correct: false }
    ]
  },
  {
    text:
      "2. Vilken är den högsta tillåtna hastighet efter detta vägmärke om inget annat anges?",
    type: "mc",
    image: "P4Q2.png",
    answers: [
      { text: "A 30 km/h", correct: false },
      { text: "B 50 km/h", correct: false },
      { text: "C 70 km/h", correct: true },
      { text: "D 90 km/h", correct: false }
    ]
  },
  {
    text:
      "3. Vilket av trafiksignaler vid något alternativ anger att det är tillåtet att svänga till vänster?",
    type: "mc",
    image: "P4Q3.png",
    answers: [
      { text: "A Ja, enbart på bild A", correct: false },
      { text: "B Ja, enbart på bild B", correct: false },
      { text: "C Ja, både på bild A och B", correct: true },
      { text: "D Nej, varken på bild A eller B", correct: false }
    ]
  },
  {
    text:
      "4. Du ska svänga vänster. I vilken situation kan fordon som korsar din färdväg kan ha grönt ljus samtidigt?",
    type: "mc",
    image: "P4Q4.png",
    answers: [
      { text: "A-Bild A", correct: true },
      { text: "B-Bild B", correct: false }
    ]
  },
  {
    text:
      "5. Du har grönt ljus och ska svänga till vänster i korsningen. Hur ska du uppträda?",
    type: "mc",
    image: "P4Q5.png",
    answers: [
      {
        text: "A. Jag kör sakta framåt medan mötande trafik passerar",
        correct: true
      },
      {
        text:
          "B. Jag stannar vid stopplinjen och väntar medan mötande trafik passerar",
        correct: false
      },
      {
        text: "C. Jag kör eftersom mötande trafik har rött ljus",
        correct: false
      },
      {
        text: "D. Jag kör eftersom mötande trafik ska lämna företräde",
        correct: false
      }
    ]
  },
  {
    text:
      "6. Du ska svänga till vänster. Fotgängaren är på väg att korsa gatan och har grönt ljus samtidigt som dig. Vad gäller?",
    type: "mc",
    image: "P4Q6.png",
    answers: [
      {
        text:
          "A Jag måste lämna fotgängaren företräde även om hon/han inte hunnit lämna refugen",
        correct: true
      },
      {
        text: "B Jag får inte stanna i korsningen när jag har grönt ljus",
        correct: false
      },
      {
        text:
          "C Jag behöver inte lämna fotgängaren företräde eftersom hon/han är skyldig att stanna på refugen i mitten av gatan",
        correct: false
      }
    ]
  },
  {
    text:
      "7. Du kör i 50km/h och befinner dig i situationen på bilden. Signalen ändras plötsligt till fast gult ljus. Hur ska du uppträda?",
    type: "mc",
    image: "P4Q7.png",
    answers: [
      {
        text:
          "A Jag kör vidare eftersom att jag inte kan stanna på ett betryggande sätt.",
        correct: true
      },
      {
        text: "B Jag kör som om det är på väg att bli grönt ljus.",
        correct: false
      },
      {
        text: "C Jag stannar eftersom att fast gult ljus betyder stopp.",
        correct: false
      }
    ]
  },
  {
    text:
      "8. Du ska köra rakt fram i vägkorsningen. Trafiksignalen är ur funktion. Har du väjningsplikt mot någon trafik i korsningen?",
    type: "mc",
    image: "P4Q8.png",
    answers: [
      { text: "A Nej", correct: false },
      { text: "B Ja, mot trafik både från vänster och höger", correct: true },
      { text: "C Ja, men enbart mot trafik från höger", correct: false },
      { text: "D Ja, men enbart från trafik från vänster.", correct: false }
    ]
  },
  {
    text:
      "9. Signalen på bilden visar blinkande gult ljus. Vilket påstående om situationen på bilden är riktig?",
    type: "mc",
    image: "P4Q9.png",
    answers: [
      { text: "A Högerregeln gäller vid korsningen.", correct: false },
      {
        text:
          "B Om du har stannat vid stopplinjen får du inte köra igång förrän du har grönt ljus.",
        correct: false
      },
      {
        text:
          "C Du behöver inte stanna eftersom signalen gäller före vägmärket.",
        correct: false
      },
      {
        text:
          "D Du måste stanna vid stopplinjen även om det inte kommer några fordon på den korsande vägen.",
        correct: true
      }
    ]
  },
  {
    text:
      "10. Du ska fortsätta rakt fram. Vad är viktigast att du först har beredskap för i denna situation?",
    type: "mc",
    image: "P4Q10.png",
    answers: [
      {
        text: "A. Att cyklisten i mitt körfält svänger vänster",
        correct: true
      },
      {
        text: "B. Att mötande fordon svänger vänster i korsningen",
        correct: false
      },
      {
        text:
          "C. Att jag kanske måste stanna för fotgängarna på övergångsstället",
        correct: false
      },
      {
        text: "D. Att fordon från höger i korsningen kör mot rött ljus",
        correct: false
      }
    ]
  },
  {
    text:
      "11. Du ska svänga höger. Vilken dold fara måste du vara beredd på i denna situation?",
    type: "mc",
    image: "P4Q11.png",
    answers: [
      {
        text: "A Gående som går ut på övergångstället framför mig.",
        correct: false
      },
      { text: "B Cyklister som kommer bakifrån på cykelbanan", correct: true },
      {
        text: "C Cyklister som kommer framifrån på cykelbanan.",
        correct: false
      },
      {
        text:
          "D Fordon som kommer framifrån och ska svänga vänster i korsningen",
        correct: false
      }
    ]
  },
  {
    text:
      "12. Du ska fortsätta rakt fram. Vad är viktigast att vara beredd på i den här situationen?",
    type: "mc",
    image: "P4Q12.png",
    answers: [
      {
        text: "A Att föraren framför ångrar sig  och fortsätter rakt fram.",
        correct: false
      },
      { text: "B Att föraren framför stannar", correct: true },
      {
        text:
          "C Att föraren i vänster körfält byter till mitt körfält i korsningen.",
        correct: false
      }
    ]
  },
  {
    text: "13. Du ska svänga höger i korsningen. Vad gäller?",
    type: "mc",
    image: "P4Q13.png",
    answers: [
      {
        text:
          "A. Jag får köra men jag har väjningsplikt mot trafiken på den korsande vägen",
        correct: true
      },
      {
        text: "B. Jag måste stanna eftersom trafiksignalen visar rött ljus",
        correct: false
      },
      {
        text:
          "C. Jag måste stanna eftersom fordon på korsande vägen har grönt ljus.",
        correct: false
      },
      {
        text: "D. Jag måste stanna eftersom korsande vägen har huvudled",
        correct: false
      }
    ]
  },
  {
    text:
      "14. Ett tåg har precis kört förbi. Får du passera järnvägsstationen i den här situationen?",
    type: "mc",
    image: "P4Q14.png",
    answers: [
      { text: "A Ja, om det inte kommer något tåg", correct: false },
      { text: "B Ja, om sikten är bra", correct: false },
      { text: "C Nej, eftersom det är rött ljus.", correct: true },
      { text: "D Ja, eftersom bommarna är uppe.", correct: false }
    ]
  },
  {
    text: "15. För vilka gäller det här vägmärket?",
    type: "mc",
    image: "P4Q15.png",
    answers: [
      { text: "A Trafiken som ska svänga till höger", correct: false },
      { text: "B Trafiken som ska svänga till vänster", correct: false },
      { text: "C Trafiken som ska köra rakt fram", correct: true },
      { text: "D Vägmärket gäller för alla riktningar", correct: false }
    ]
  },
  {
    text: "16. Får du svänga till höger?",
    type: "mc",
    image: "P4Q16.png",
    answers: [
      { text: "A Ja", correct: true },
      { text: "B Nej", correct: false }
    ]
  },
  {
    text:
      "17. Vilka fordon får köra på ett körfält som är markerat med det här vägmärket om inget annat anges?",
    type: "mc",
    image: "P4Q17.png",
    answers: [
      {
        text: "A Bara cyklar, mopeder och fordon i linjetrafik",
        correct: true
      },
      { text: "B Bara fordon i linjetrafik", correct: false },
      { text: "C Bara LGF fordon och fordon i linjetrafik", correct: false },
      {
        text: "D Bara cyklar, mopeder, traktorer och fordon i linjetrafik",
        correct: false
      }
    ]
  },
  {
    text:
      "18. Det är lördag och klockan är 08.00. Du ska strax svänga till höger. Får du använda körfältet om den är markerad med A?",
    type: "mc",
    image: "P4Q18.png",
    answers: [
      {
        text:
          "A Nej, eftersom körfältet enbart är avsedd till bussar i linjetrafik oavsett tid.",
        correct: false
      },
      {
        text:
          "B Ja, eftersom körfältet är reserverad för bussen i linjetrafik mellan kl. 10.00 och 14.00",
        correct: true
      },
      {
        text:
          "C Nej, eftersom körfältet är reserverad för bussen i linjetrafik mellan kl. 07.00 och 09.00",
        correct: false
      }
    ]
  },
  {
    text:
      "19. Får du i någon av de här situationerna överskrida den heldragna linjen?",
    type: "mc",
    image: "P4Q19.png",
    answers: [
      { text: "A Ja, men enbart i A och B", correct: true },
      { text: "B Ja men enbart i A och C", correct: false },
      { text: "C Ja, men enbart i B och C", correct: false },
      { text: "D Ja, i samtliga situationer", correct: false },
      { text: "E Nej", correct: false }
    ]
  },
  {
    text:
      "20. Lastbilen på bilden är uppställd på grund av arbete. Får du köra över spärrlinjen för att köra förbi lastbilen?",
    type: "mc",
    image: "P4Q20.png",
    answers: [
      { text: "A-Ja", correct: true },
      { text: "B-Nej", correct: false }
    ]
  },
  {
    text: "21. Får du köra om en cykel före ett obevakat övergångsställe?",
    type: "mc",
    image: "P4Q21.png",
    answers: [
      { text: "A Ja", correct: false },
      { text: "B Nej", correct: true }
    ]
  },
  {
    text:
      "22. Du kör på en gata med två körfält med din körriktning. Varför är det förbjudet att köra om i den här situationen?",
    type: "mc",
    image: "P4Q22.png",
    answers: [
      { text: "A Mittlinjen", correct: false },
      { text: "B korsningen", correct: false },
      { text: "C framförvarande fordon kan byta körfält", correct: false },
      { text: "D Övergångsstället", correct: true }
    ]
  },
  {
    text: "23. I vilket fall anses det att du har parkerat?",
    type: "mc",
    image: "P4Q23.png",
    answers: [
      {
        text:
          "A När jag har stannat och sitter kvar i bilen för att vänta på någon som har gått för att utföra ett ärende.",
        correct: true
      },
      {
        text: "B När jag har stannat bilen för att släppa av en passagerare.",
        correct: false
      },
      {
        text: "C När jag har stannat bilen för att ta upp en passagerare",
        correct: false
      },
      { text: "D När jag har stannat bilen för att", correct: false }
    ]
  },
  {
    text: "24. Får du parkera som den inringade bilen?",
    type: "mc",
    image: "P4Q24.png",
    answers: [
      {
        text: "A Ja, men endast om jag har särskilt parkeringst illstånd.",
        correct: false
      },
      {
        text:
          "B Nej, eftersom jag måste parkera på höِgersida i färdriktningen.",
        correct: true
      },
      {
        text: "C Ja, eftersom det är en allmän parkeringsplats.",
        correct: false
      }
    ]
  },
  {
    text: "25. Vad gäller efter detta märke?",
    type: "mc",
    image: "P4Q25.png",
    answers: [
      { text: "A Du får inte stanna", correct: false },
      { text: "B Du får inte parkera", correct: false },
      { text: "C Du får parkera", correct: true }
    ]
  },
  {
    text: "26. Vad innebär vägmärkets kombination?",
    type: "mc",
    image: "P4Q26.png",
    answers: [
      { text: "A Det är förbjudet att stanna efter vägmärket", correct: false },
      {
        text: "B Det är förbjudet att parkera efter detta vägmärke",
        correct: false
      },
      {
        text: "C Det är förbjudet att parkera före detta vägmärke",
        correct: true
      },
      {
        text: "D Det är förbjudet att stanna före detta vägmärke",
        correct: false
      }
    ]
  },
  {
    text:
      "27. Du parkerar din bil lördag kl. 20.00. När får du senast hämta den?",
    type: "mc",
    image: "P4Q27.png",
    answers: [
      { text: "A Söndag kl. 7.00", correct: false },
      { text: "B Söndag kl. 24.00", correct: false },
      { text: "C Måndag kl. 7.00", correct: true },
      { text: "D Lördag kl. 24.00", correct: false }
    ]
  },
  {
    text: "28. Vilket påstående är riktigt?",
    type: "mc",
    image: "P4Q28.png",
    answers: [
      {
        text: "A Det är tillåtet att parkera helgfria lördagar kl. 09.00.",
        correct: true
      },
      {
        text: "B Det är tillåtet att parkera söndagar kl. 08.00.",
        correct: false
      },
      {
        text: "C Det är tillåtet att parkera vardagar kl. 15.00",
        correct: false
      }
    ]
  },
  {
    text: "29. Vad är rätt ?",
    type: "mc",
    image: "P4Q29.png",
    answers: [
      { text: "A Du får stanna måndag kl. 15.00.", correct: false },
      { text: "B Du får stanna söndag kl. 10.00.", correct: false },
      { text: "C Du får stanna söndag kl. 15.00.", correct: true }
    ]
  },
  {
    text: "30. Vilket påstående är riktigt?",
    type: "mc",
    image: "P4Q30.png",
    answers: [
      {
        text: "A Det är förbjudet att parkera vardagar kl. 20.00",
        correct: false
      },
      {
        text: "B Det är förbjudet att stanna söndagar kl 16.00",
        correct: false
      },
      { text: "C Det är förbjudet att stanna vardagar kl.15.00", correct: true }
    ]
  },
  {
    text: "31. Vilket alternativ stämmer?",
    type: "mc",
    image: "P4Q31.png",
    answers: [
      { text: "A Du får inte stanna måndag kl. 15.00", correct: false },
      { text: "B Du får inte parkera lördag kl. 20.00", correct: true },
      { text: "C Du får inte stanna lördag kl. 18.00", correct: false }
    ]
  },
  {
    text: "32. Vilken alternativ stämmer inte?",
    type: "mc",
    image: "P4Q32.png",
    answers: [
      { text: "A Du får stanna måndag kl. 15.00", correct: false },
      { text: "B Du får parkera måndag kl. 20.00", correct: true },
      { text: "C Du får stanna söndag kl. 16.00", correct: false }
    ]
  },
  {
    text:
      "33. Du har parkerat bilen lördag kl. 20.00. När måste du senast hämta bilen?",
    type: "mc",
    image: "P4Q33.png",
    answers: [
      { text: "A Måndag kl.10.00", correct: true },
      { text: "B Måndag kl 9.00", correct: false },
      { text: "C Lördag kl. 15.00", correct: false },
      { text: "D Söndag kl. 10.00", correct: false }
    ]
  },
  {
    text:
      "34. Du parkerar din bil en måndag klockan 07.00. När måste du senast hämta bilen?",
    type: "mc",
    image: "P4Q34.png",
    answers: [
      { text: "A Måndag kl 09.00", correct: false },
      { text: "B Måndag kl 10.00", correct: true },
      { text: "C Tisdag kl. 08.00", correct: false },
      { text: "D Tisdag kl. 10.00", correct: false }
    ]
  },
  {
    text:
      "35. Du parkerar din bil måndag klockan 13.00 och följande dag är en vardag. När måste du senast hämta bilen?",
    type: "mc",
    image: "P4Q35.png",
    answers: [
      { text: "A Måndag kl 15.00", correct: false },
      { text: "B Tisdag kl 8.00", correct: false },
      { text: "C Tisdag kl 10.00", correct: true }
    ]
  },
  {
    text:
      "36. Du parkerar din bil onsdag kl. 16.00 och följande dag är en vardag. När måste du senast hämta bilen",
    type: "mc",
    image: "P4Q36.png",
    answers: [
      { text: "A Onsdag kl. 18.00", correct: false },
      { text: "B Torsdag kl. 10.00", correct: true },
      { text: "C Torsdag kl. 8.00", correct: false }
    ]
  },
  {
    text: "37. Vilka får parkera på en parkeringsplats för rörelsehindrade?",
    type: "mc",
    image: "P4Q37.png",
    answers: [
      { text: "A Den som är rullstolsbundna", correct: false },
      { text: "B Rörelsehindrade med särskilt tillstånd", correct: true },
      { text: "C Alla som är rörelsehindrade", correct: false }
    ]
  },
  {
    text:
      "38. Vilket avstånd måste det minst vara före ett övergångställe när du ska parkera?",
    type: "mc",
    answers: [
      { text: "A 10 meter", correct: true },
      { text: "B 20 meter", correct: false },
      { text: "C 30 meter", correct: false },
      { text: "D 40 meter", correct: false }
    ]
  },
  {
    text: "39. Vilken bil har parkerat rätt?",
    type: "mc",
    image: "P4Q39.png",
    answers: [
      { text: "A-Den ljusa bilen", correct: true },
      { text: "B-Den mörka bilen", correct: false },
      { text: "C-Båda bilarna", correct: false },
      { text: "D-Ingen", correct: false }
    ]
  },
  {
    text:
      "40. I vilken bild eller i vilka av bilderna har den gröna bilen parkerat rätt?",
    type: "mc",
    image: "P4Q40.png",
    answers: [
      { text: "A Endast i bild A", correct: true },
      { text: "B Endast i bild B", correct: false },
      { text: "C Endast i bild C", correct: false },
      { text: "D Endast i bild A och B", correct: false },
      { text: "E I alla bilder.", correct: false }
    ]
  },
  {
    text:
      "41. Vilket avstånd måste det minst vara före en vägkorsning när du ska parkera?",
    type: "mc",
    answers: [
      { text: "A 8 meter", correct: false },
      { text: "B 10 meter", correct: true },
      { text: "C 12 meter", correct: false },
      { text: "D 30 meter", correct: false }
    ]
  },
  {
    text:
      "42. På vilken av dessa platser är det förbjudet att stanna för att släppa av en passagerare?",
    type: "mc",
    answers: [
      { text: "A På en huvudled .", correct: false },
      { text: "B Där bilen skymmer ett vägmärke .", correct: true },
      { text: "C På körbanan bredvid en parkerad bil.", correct: false },
      { text: "D Framför en infart.", correct: false }
    ]
  },
  {
    text: "43. På vilken av följande plats får du inte stanna?",
    type: "mc",
    answers: [
      { text: "A På huvudled utanför tättbebyggt område.", correct: false },
      { text: "B På vanlig väg.", correct: false },
      { text: "C I vägport eller tunnel.", correct: true }
    ]
  },
  {
    text:
      "44. Du ska hämta en passagerare. Får du stanna som föraren i den här bilen gjort?",
    type: "mc",
    image: "P4Q44.png",
    answers: [
      { text: "A Ja, men högst 1 minut", correct: false },
      {
        text: "B Ja, om jag på så sätt kan underlätta för övrig trafik",
        correct: false
      },
      { text: "C Nej", correct: true },
      { text: "D Ja, eftersom gatan är smal", correct: false }
    ]
  },
  {
    text: "45. Får du stanna som bilen på bilden?",
    type: "mc",
    image: "P4Q45.png",
    answers: [
      { text: "A Ja, om avståndet till mittlinje är 1 meter", correct: false },
      { text: "B Ja, om avståndet till mittlinje är 2 meter", correct: false },
      { text: "C Ja, om avståndet till mittlinje är 3 meter", correct: true }
    ]
  },
  {
    text:
      "46. Du har fått motorhaveri på din bil på en plats där det är förbjudet att stanna. Vilket påstående är riktigt?",
    type: "mc",
    answers: [
      {
        text:
          "A Jag måste flytta bilen snarast möjligt om den står på en väg där högsta  tillåtna hastigheten är 70km/h eller högre.",
        correct: false
      },
      {
        text:
          "B Jag behöver inte flytta bilen om jag sätter ut en varningstriangel",
        correct: false
      },
      {
        text:
          "C Jag måste flytta bilen snarast möjligt om den står på en väg där högsta tillåtna hastigheten är 50km/h eller lägre.",
        correct: false
      },
      {
        text:
          "D Jag måste flytta på bilen snarast möjligt oavsett vilken hastighet som gäller på vägen.",
        correct: true
      }
    ]
  },
  {
    text: "47. Får du parkera din bil så som på bilden?",
    type: "mc",
    image: "P4Q47.png",
    answers: [
      { text: "A Ja, jag får parkera som på bilden.", correct: false },
      { text: "B Nej, jag får inte parkera som på bilden.", correct: true },
      {
        text:
          "C Ja, jag får parkera här men bara om jag slagit på varningsblinken.",
        correct: false
      }
    ]
  },
  {
    text:
      "48. Du behöver stanna för att släppa av en passagerare. Vad gäller här?",
    type: "mc",
    image: "P4Q48.png",
    answers: [
      { text: "A Jag får stanna intill trottoarkanten.", correct: false },
      { text: "B Jag får stanna intill den heldragna linjen.", correct: true },
      { text: "C Jag får inte stanna.", correct: false }
    ]
  },
  {
    text:
      "49. Du tänker parkera nära en järnvägskorsning. Hur långt måste det minst vara till korsningen för att du ska få parkera?",
    type: "mc",
    answers: [
      { text: "A 5 meter", correct: false },
      { text: "B 10 meter", correct: false },
      { text: "C 30 meter", correct: true },
      { text: "D 50 meter", correct: false },
      { text: "E 100 meter", correct: false }
    ]
  },
  {
    text: "50. Får du parkera bilen på denna väg?",
    type: "mc",
    image: "P4Q50.png",
    answers: [
      { text: "A Du får parkera i 5 minuter", correct: false },
      { text: "B Du får parkera i 10 minuter", correct: false },
      { text: "C Nej det får du inte", correct: true },
      {
        text: "D Du får parkera om du slår på varningsblinkers",
        correct: false
      }
    ]
  },
  {
    text:
      "51. Vilket vägmärke innebär bland annat att parkeringen är förbjuden?",
    type: "mc",
    image: "P4Q51.png",
    answers: [
      { text: "A Vägmärke på bild A", correct: false },
      { text: "B Vägmärke på bild B", correct: false },
      { text: "C Vägmärke på bild C", correct: true },
      { text: "D Vägmärke på bild D", correct: false }
    ]
  },
  {
    text: "52. Vilket alternativ är rätt?",
    type: "mc",
    answers: [
      {
        text: "A Du får parkera bredvid ett fordon som har stannat.",
        correct: false
      },
      {
        text:
          "B Du får stanna bredvid ett parkerat fordon för att släppa av passagerare.",
        correct: true
      },
      {
        text:
          "C Du får stanna så att du skymmer ett vägmärke eller trafiksignal",
        correct: false
      }
    ]
  },
  {
    text: "53. Är det tillåtet att stanna eller parkera vid en busshållplats?",
    type: "mc",
    answers: [
      {
        text: "A Ja, jag får parkera om jag sitter kvar i bilen.",
        correct: false
      },
      {
        text:
          "B Ja, om jag inte hindrar någon buss och jag stannar för att lasta ur eller i någon gods.",
        correct: false
      },
      {
        text:
          "C Ja, om jag inte hindrar någon buss och jag stannar för att låta passagerare stiga ur eller i bilen.",
        correct: true
      },
      {
        text: "D Nej, jag får aldrig stanna vid en busshållsplats.",
        correct: false
      }
    ]
  },
  {
    text:
      "54. Du vill parkera när en busshållplats som saknar markering. Inom vilket område är det förbjudet att parkera?",
    type: "mc",
    answers: [
      {
        text: "A Från 12 meter före till 12 meter efter hållplatsmärket.",
        correct: false
      },
      {
        text: "B Från 24 meter före till direkt efter hållplatsmärket",
        correct: false
      },
      {
        text: "C Från 20 meter före till 5 meter efter hållplatsmärket.",
        correct: true
      },
      {
        text: "D Från 10 meter före till 10 meter efter hållplatsmärket.",
        correct: false
      }
    ]
  },
  {
    text:
      "55. Du parkerar din bil den 31 augusti kl 18.30 och planerar att åka iväg den 1 september kl 9.00. På vilken sida av vägen ska du parkera?",
    type: "mc",
    image: "P4Q55.png",
    answers: [
      { text: "A På den sida som har jämna husnummer.", correct: true },
      { text: "B På den sida som har ojämna husnummer.", correct: false }
    ]
  },
  {
    text:
      "56. Du tänker parkera din bil på kvällen den 28 januari och hämta den på morgonen den 29 januari. Får du parkera där vägmärket gäller?",
    type: "mc",
    image: "P4Q56.png",
    answers: [
      {
        text: "A Ja, på den sida av gatan som har ojämna husnummer",
        correct: false
      },
      {
        text: "B Ja, på den sida av gatan som har jämna husnummer",
        correct: true
      },
      { text: "C Ja, på båda sidorna av gatan", correct: false },
      { text: "D Nej", correct: false }
    ]
  },
  {
    text:
      "57. Du tänker parkera din bil på kvällen den 15 mars och ska hämta den på morgonen den 16 mars. Var ska du parkera?",
    type: "mc",
    image: "P4Q57.png",
    answers: [
      {
        text: "A På den sidan av gatan som har jämna husnummer.",
        correct: false
      },
      {
        text: "B På den sida av gatan som har ojämna husnummer.",
        correct: true
      }
    ]
  },
  {
    text: "58. När är det särskilt viktigt att du kollar döda vinkeln?",
    type: "mc",
    answers: [
      { text: "A När jag stannar på rött ljus.", correct: false },
      { text: "B När jag accelererar på en motorväg", correct: false },
      { text: "C När jag startar från vägkanten och kör", correct: true }
    ]
  },
  {
    text:
      "59. Du ska svänga till höger i korsningen. Vilken dold fara måste du räkna med före svängen?",
    type: "mc",
    image: "P4Q59.png",
    answers: [
      { text: "A Fordon som kommer från vänster i korsningen", correct: false },
      { text: "B Fotgängare på övergångstället", correct: false },
      { text: "C Fordon som kommer från höger i korsningen", correct: false },
      { text: "D Fordon som kommer bakifrån i kollektivfältet.", correct: true }
    ]
  },
  {
    text:
      "60. I vilken eller vilka av situationerna gäller max 70 km/h när du passerat vägmärket med ortsnamnet?",
    type: "mc",
    image: "P4Q60.png",
    answers: [
      { text: "A Enbart i situation A", correct: false },
      { text: "B Enbart i situation B", correct: true },
      { text: "C I båda situationerna", correct: false }
    ]
  }
];

module.exports = { quizData, questions };
