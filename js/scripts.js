//backend logic
var options = ["a","b","c","d"];
var total = 0;
var points = 1;

//front-end logic
$(document).ready(function() {
  $("button#submit1").click(function(event){

    var questionOne=$("input:radio[name=quizOne]:checked").val();
    var questionTwo=$("input:radio[name=quizTwo]:checked").val();
    var questionThree=$("input:radio[name=quizThree]:checked").val();
    var questionFour=$("input:radio[name=quizFour]:checked").val();
    var questionFive=$("input:radio[name=quizFive]:checked").val();
    var questionSix=$("input:radio[name=quizSix]:checked").val();
    var questionSeven=$("input:radio[name=quizSeven]:checked").val();
    var questionEight=$("input:radio[name=quizEight]:checked").val();
    var questionNine=$("input:radio[name=quizNine]:checked").val();
    var questionTen=$("input:radio[name=quizTen]:checked").val();


    if (questionOne === undefined || questionTwo===undefined || questionThree === undefined || questionFour===undefined || questionFive === undefined || questionSix===undefined || questionSeven === undefined || questionEight===undefined || questionNine === undefined || questionTen===undefined) {
      alert("Answer all the questions first");
    }else{
      if(questionOne===options[1]){total+=points}
      if(questionTwo===options[2]){total+=points}
      if(questionThree===options[0]){total+=points}
      if(questionFour===options[2]){total+=points}
      if(questionFive===options[1]){total+=points}
      if(questionSix===options[1]){total+=points}
      if(questionSeven===options[3]){total+=points}
      if(questionEight===options[2]){total+=points}
      if(questionNine===options[2]){total+=points}
      if(questionTen===options[2]){total+=points}
      $("p#output").text("Your score is "+total+" out of 10");
    }

    event.preventDefault();
  });
});
