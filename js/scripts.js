// var quizes = [quiz1];
var options = ["a","b","c","d"];



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
    // total = questionOne+questionTwo+questionThree+questionFour+questionFive+questionSix+questionSeven+questionEight+questionNine+questionTen;
    // // alert(total);
    //
    // if (total === NaN){
    //   alert("Ensure you answer all the questions first.")
    // }else{
    //   // $("p#output").text("Your score is "+total+" out of 10");
    // }
    var total = 0;
    var points = 10;
    if (questionOne === undefined || questionTwo===undefined ||) {
      alert("Answer all the questions first");
    }else{
      if(questionOne===options[1]){total+=points}
      if(questionTwo===options[2]){total+=points}
      alert(total);
    }

    event.preventDefault();
  });
});
