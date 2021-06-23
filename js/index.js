// JavaScript Assessment by Sebastian Castillo 2021


window.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  start.addEventListener("click", function (e) {
    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";
  });

  // I changed the questions and added it two more

  const quizArray = [
    {
      q: "Which one is considere the happiest animal in Australia?",
      o: ["Koala", "Quokka", "Kangaroo", "Tasmanian Devel"],
      a: 1,  //Ansewer Quoka
    },
    {
      q: "Which one is the national sport of Australia?",
      o: ["Rugby", "Footy", "Soccer", "Cricket"],
      a: 3, //Answer Cricket
    },
    {
      q: "What is the capital of Northern Territory",
      o: ["Canberra", "Darwin", "Melbourne", "Perth"],
      a: 1, //Answer Darwin
    },
    {
      q: 'What is the name of the prime minister of Australia',
      o: ['Daniel Andrews', 'Scott Morrison', 'Daniel Mulino', 'Mark McGowan'],
      a: 1, //Answer Scott Morrison

    },
    {
      q: 'What is the highest residential building in Australia',
      o: ['Adelaide', 'Melbourne', 'Sydney', 'Perth'],
      a: 1, //Answer Melbourne

    },
  ];

  // function to Display the quiz questions and answers from the object

  const displayQuiz = () => {
    const quizWrap = document.querySelector("#quizWrap");
    let quizDisplay = "";
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">

                   Q - ${quizItem.q}
                    <li class="list-group-item" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the final score out of 5

  const calculateScore = () => {
    let score = 0;

    // Loop here

    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector("#" + li);
        radioElement = document.querySelector("#" + r);

        // Added a green color

        if (quizItem.a == i) {
          liElement.style.backgroundColor = "#00FF00";
        }
        // Question #1 solved

        if (radioElement.checked && quizItem.a === i) score++;
      }
      //console.log(quizArray)
    });

    //Return here

    return score;

  };

  // The submitt button goes here

  const btnSubmit = document.querySelector("#btnSubmit");
  const scoreSpan = document.querySelector("#score");
  btnSubmit.addEventListener("click", () => {
    submitTrigger();
  });

  //Add submitt fuction here

  function submitTrigger() {
    calculateScore(); // this function tell us the total score 
    btnSubmit.style.display = "none";
    scoreSpan.innerHTML = `Your final score is: ${calculateScore()} / 5`; // by 5 questions in total
  };

  // Add fuctionality to the reset button here

  const btnReset = document.querySelector("#btnReset");
  btnReset.addEventListener("click", () => location.reload());

  // Add a EventListerner here Task #2

  start.addEventListener("click", () => {
    const timeString = document.querySelector("#time");
    const timeMin = parseInt(timeString.innerHTML.split(":")[0]);
    const timeSec = parseInt(timeString.innerHTML.split(":")[1]);

      // Timer here 1 minute equal to 60 seconds

    let totalSec = timeMin * 60 + timeSec;
    const interval = setInterval(function () {
      let minLeft, secLeft;
      totalSec--;
      minLeft =
        Math.floor(totalSec / 60) < 10 // this math fuction does the count for the remaining time
          ? "0" + Math.floor(totalSec / 60)
          : Math.floor(totalSec / 60);
      secLeft = totalSec % 60 < 10 ? "0" + (totalSec % 60) : totalSec % 60;

      timeString.innerHTML = `${minLeft}:${secLeft}`;

      if (totalSec === 0) {
        clearInterval(interval);
        submitTrigger();
      }
    }, 1000);
    //console.log(timeSec)
  });

  // Finaly here I DisplayQuiz Function

  displayQuiz();
});

// Submitted on Wednesday 23rd of June 2021

