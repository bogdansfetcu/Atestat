
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
	var intrebari_corecte = 0;


  if(question1 == 2544){
  intrebari_corecte++;
  }
  if(question2 =="Almăjului" ){
   intrebari_corecte++;
  }
  if(question3 =="true" ){
   intrebari_corecte++;
  }
  if(question4 =="Varful Moldoveanu"){
   intrebari_corecte++;
  }
  if(question5 =="2" ){
   intrebari_corecte++;
  }
  if(question6 =="2"){
   intrebari_corecte++;
  }
  if(question7 =="true" ){
   intrebari_corecte++;
  }
  if(question8 =="campie" ){
   intrebari_corecte++;
  }
  if(question9 == "Meridionali" ){
   intrebari_corecte++;
  }
  if(question10 == "Fliș" ){
   intrebari_corecte++;
  }
  if(question11 == "munte" ){
   intrebari_corecte++;
  }

	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Felicitări!", "Un rezultat mediocru ", "Nivelul tău este sub medie"];
	var score;

	if (intrebari_corecte <5) {
		score = 2;
	}

	if (intrebari_corecte > 4  && intrebari_corecte < 8) {
		score = 1;
	}

	if (intrebari_corecte >7 ) {
		score = 0;
	}
var scor= intrebari_corecte*10/11;
if(intrebari_corecte==1){
	alert("Ai raspuns corect la o  intrebare "+"\n" + "Nota: " + scor.toFixed(1));
}
//	document.getElementById("after_submit").style.visibility = "visible";
else {
	alert("Felicitări"+"\n"+"Ai raspuns corect la  "+ intrebari_corecte +" intrebari "+"\n" + "Nota: " + scor.toFixed(1));

}

	//document.getElementById("message").innerHTML = messages[score] + "<br>" + "Ai nimerit " +intrebari_corecte+" raspunsuri corecte"  +"<br>"+"Nota: " + scor.toFixed(1) + "/100";

	//document.getElementById("picture").src = pictures[score];
  }
