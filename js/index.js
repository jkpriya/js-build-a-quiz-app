window.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  start.addEventListener("click", function (e) {
    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";
  });
  
  const quizArray = [
    {
      q: "Which is the third planet from the sun?",
      o: ["Saturn", "Earth", "Pluto", "Mars"],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: "Which is the largest ocean on Earth?",
      o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      a: 3,
    },
    {
      q: "What is the capital of Australia?",
      o: ["Sydney", "Canberra", "Melbourne", "Perth"],
      a: 1,
    },
    //1. Add 2 more questions to the app
    {
      q: "How many colors are there in a rainbow?",
      o: ["Seven", "Eight", "Three", "Six"],
      a: 0,
    },
    {
      q: "What do you call a type of shape that has five sides?",
      o: ["Square", "Octagon", "Hexagon", "Pentagon"],
      a: 3,
    },
    {
      q: "What colors are the stars on the American flag?",
      o: ["White", "Orange", "Red", "Blue"],
      a: 0,
    },
    {
      q: "Where is the Great Pyramid of Giza?",
      o: ["Australia", "Egypt", "Hungary", "Italy"],
      a: 1,
    },
    {
      q: "In the nursery rhyme, who sat on a wall before having a great fall?",
      o: ["Jack and Jill", "Johnny Johnny", "Rain Rain", "Humpty Dumpty"],
      a: 3,
    },
    {
      q: "Who wrote Hamlet?",
      o: ["Einstein", "Roald Dahl", "Shakespeare", "Ptolemy"],
      a: 2,
    },
    {
      q: " Which is the fastest land animal",
      o: ["Monkey", "Tiger", "Lion", "cheetah"],
      a: 3,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector("#quizWrap");
    let quizDisplay = "";
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector("#" + li);
        radioElement = document.querySelector("#" + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = "#e4f5d3";
        }

        if (radioElement.checked) {
          // code for task 2 goes here
          //2. Calculate the score as the total of the number of correct answers
          if(i == quizItem.a)
            ++score;
          else
            liElement.style.backgroundColor = "#f7dfda";

        }
      }
    });

    document.querySelector("#score").innerHTML = ` Your Score is: ${score}/${quizArray.length}`
  };

  // call the displayQuiz function
  displayQuiz();

  //3.Add Submit button event Listener

  function submitAnswers() {
    clearInterval(refresh);
    clearTimeout(timeout);

    calculateScore();
  }
  document.querySelector("#btnSubmit").addEventListener("click", submitAnswers);

  //4. Reload the page when the reset button is clicked 
  document.querySelector("#btnReset").addEventListener("click", () => { window.location.reload(); });

  //5. Add a countdown timer

  let totalSeconds = 60;
  var refresh = setInterval(refreshTimer, 1000);
  var timeout = setTimeout(timeRunOut, totalSeconds * 1000);

  function refreshTimer() {
    var timer = document.querySelector("#time");
    if (totalSeconds > 10)
      timer.innerHTML = `0:${--totalSeconds}`;
    else {
      timer.innerHTML = `0:0${--totalSeconds}`;
      timer.style.backgroundColor = "red";
      timer.style.color = "yellow";
    }
  }

  function timeRunOut() {
    submitAnswers();
  }

});






