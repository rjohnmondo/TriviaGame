$(document).ready(function(){

	//Upon Pressing "Play Ball" button - game and Clock starts //
	$(".playBall").click(function(){
		runGame();

	});

	// Clock
	var seconds = 60;

	// Sets up the Clock to count down from 60
	function runGame(){
		counter=setInterval(countDown, 1000);
		gameInfo();
	}

	function countDown (){
		seconds --
		document.getElementById("clock").innerHTML =("<h3>Time Left :"+ seconds + " seconds</h2>");
		if (seconds === 0){
			stopTimer();
		}
	}

	function stopTimer() {
		clearInterval(counter);
	}


	var correct =0;
	var incorrect =0;


	// Question 1
	function gameInfo(){
	// $("#question").append("<h4> How many Home Runs did Babe Ruth hit ?</h4>");
	// $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>523<br>");
	// $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>756<br>");
	// $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>762<br>");
	// $("#question").append("<input type='radio' id='question1' name='group1' value='correct'>714<br>");

	// // Question 2

	// $("question").append("<h4> What was the name of the first professional Baseball Team ?</h4>");
	// $("question").append("<input type='radio' id='question2' name='group2' value='wrong'>St. Louis Riverboats.</br>");
	// $("question").append("<input type='radio' id='question2' name='group2' value='correct'>Cincinatti Red Stockings</br>");
	// $("question").append("<input type='radio' id='question2' name='group2' value='correct'>New York Yankees/br>");
	// $("question").append("<input type='radio' id='question2' name='group2' value='correct'>Hartford Yard Goats</br>");

	$("#question").append("<h4>How many Home Runs did Babe Ruth hit ?</h4>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>523<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>756<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='correct'>714<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>762<br>");

		//Question 2
		$("#question").append("<h4>What was the name of the first professional Baseball team ?</h4>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>New York Yankees<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Hartford Yard Goats<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Pillsbury Dough Boys<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='correct'>Cincinatti Red Stockings<br>");

		//Question 3
		$("#question").append("<h4>Which player had the nickname 'The Splendid Splinter' ?</h4>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Duke Snider<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Ozzie Smith<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='correct'>Ted Williams<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Mike Trout<br>");
	
		//Question 4
		$("#question").append("<h4>How many World Championships have the St. Louis Cardinals won ?</h4>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='correct'>11<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>4<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>0<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>27<br>");
		

		//Question 5
		$("#question").append("<h4>Which team has never won a World Series ?</h4>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Toronto Blue Jays<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='correct'>San Diego Padres<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Atlanta Braves<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Minnesota Twins<br>");
		
		//Question 6
		$("#question").append("<h4>Which of these players is NOT a real player ?<h4>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Oil Can Boyd<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Coco Crisp<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='correct'>Jasper Catullo<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Boof Bonser<br>");
		

		//Question 7
		$("#question").append("<h4>How many consecutive games did Cal Ripken Jr. play ?</h4>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>235<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>78<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>3982<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='correct'>2632<br>");

		//Question 8
		$("#question").append("<h4>What was the original name of the Washington Nationals ?</h4>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='correct'>Montreal Expos<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Washington Senators<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Washington Presidents<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>New York Giants<br>");
		

		$("#question").append("<br>");

		$('input[id=question1]').on('change', function() {
	   		var answer = $('input[name=group1]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question2]').on('change', function() {
	   		var answer = $('input[name=group2]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question3]').on('change', function() {
	   		var answer = $('input[name=group3]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});	

		$('input[id=question4]').on('change', function() {
	   		var answer = $('input[name=group4]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question5]').on('change', function() {
	   		var answer = $('input[name=group5]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question6]').on('change', function() {
	   		var answer = $('input[name=group6]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question7]').on('change', function() {
	   		var answer = $('input[name=group7]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question8]').on('change', function() {
	   		var answer = $('input[name=group8]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});	
		
		//Submit Button for Page Two
		var s=$('<button class="btn btn-success" id="submit" type="submit"><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span> Submit</button>');
		$("#question").append(s);

		$("#submit").click(function(){
			stopTimer();
			finalAlert();
		});

    }

	//HTML Content Appended -- Total Scores
	//HTML Content Appended -- Total Scores
	function finalAlert(){

		document.getElementById("done").innerHTML = ("<h2>Complete!</h2>");	
		
		$("#done").append("<h3>Correct Answers: " + correct + "</h3>");
		$("#done").append("<h3>Incorrect Answers: " + incorrect + "</h3>");

	}



});	