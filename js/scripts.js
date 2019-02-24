$(document).ready(function() {
  $("button#submit1").click(function(){
    // var on0e = $("input:radio[name=quizOne]:checked").val();
    // var questionOne = parseInt(on0e);
    var questionOne=parseInt($("input:radio[name=quizOne]:checked").val());
    var questionTwo=parseInt($("input:radio[name=quizTwo]:checked").val());
    var questionThree=parseInt($("input:radio[name=quizThree]:checked").val());
    var questionFour=parseInt($("input:radio[name=quizFour]:checked").val());
    var questionFive=parseInt($("input:radio[name=quizFive]:checked").val());
    var questionSix=parseInt($("input:radio[name=quizSix]:checked").val());
    var questionSeven=parseInt($("input:radio[name=quizSeven]:checked").val());
    var questionEight=parseInt($("input:radio[name=quizEight]:checked").val());
    var questionNine=parseInt($("input:radio[name=quizNine]:checked").val());
    var questionTen=parseInt($("input:radio[name=quizTen]:checked").val());
    total = questionOne+questionTwo+questionThree+questionFour+questionFive+questionSix+questionSeven+questionEight+questionNine+questionTen;
    alert(total);
    // alert("heey");
  });
  // alert("heey");
});
