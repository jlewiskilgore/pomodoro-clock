$( document ).ready(function() {
    updateTimeDisplays(25,5); //initial values of slider
    var isBreak = 0;
    var timer; //To hold the SetInterval object for the timer
});

function showTimeValue(pomTime) {
	var pomTime = document.getElementById("sessionTimeSelector").value;
	var breakTime = document.getElementById("breakTimeSelector").value;

	updateTimeDisplays(pomTime, breakTime);
}

function updateTimeDisplays(sessionTime, breakTime) {
	var sTimer = document.getElementById("sessionTimeAmount");
	sTimer.innerHTML = sessionTime + ":00";
	var bTimer = document.getElementById("breakTimeAmount");
	bTimer.innerHTML = breakTime + ":00";
}

function initTimerScreen() {
	//Hide Setup Div
	var pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "none";

	startTimer();
}

function startTimer() {
	isBreak = 0;
	console.log("start pom");
	document.getElementById("mainTimerLabel").innerHTML = "Get to work!";
	//Update Timer With Starting Time
	var startingTime = document.getElementById("sessionTimeAmount").innerHTML;
	var timerDisplay = document.getElementById("mainTimerDisplay");
	timerDisplay.innerHTML = startingTime;
	//Show Timer Div
	var pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "inline";
	//Start Countdown
	countdownTimer(startingTime);
}

function startBreak() {
	isBreak = 1;
	console.log("start break");
	document.getElementById("mainTimerLabel").innerHTML = "Good Job! Let's take a quick break now.";
	//Update Timer With Break Time
	var startingTime = document.getElementById("breakTimeAmount").innerHTML;
	var timerDisplay = document.getElementById("mainTimerDisplay");
	timerDisplay.innerHTML = startingTime;
	//Show Timer Div
	var pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "inline";
	//Start Countdown
	countdownTimer(startingTime);
}

function timerPauseButton() {
	var isPaused = document.getElementById("pauseTimer");
	//If "Pause" button is pressed, pause timer
	if(isPaused.value == "Pause") {
		isPaused.value = "Resume";
	}
	//Otherwise, "Resume" button will unpause timer
	else {
		isPaused.value = "Pause";
	}
}

function endTimer() {
	//Hide Timer Div
	var pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "none";
	//Show Setup Div
	var pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "inline";
	//Destroy current timer object
	clearInterval(timer);
}

function countdownTimer(startTime) {
	startTime = startTime.split(":");
	startTime = startTime[0];

	var startTimeSec = startTime * 60; //convert to seconds

	var timerDisplay = document.getElementById("mainTimerDisplay");
	var timeDisplayStr;

	var isPaused = document.getElementById("pauseTimer");

	timer = setInterval(function() {
		//If "Resume" button is displayed, timer should be paused
		if(isPaused.value !== "Resume") {
			if(startTimeSec > 0){
				startTimeSec--;
				timeDisplayStr = formatClockDisplay(startTimeSec);
				timerDisplay.innerHTML = timeDisplayStr;
			}
			else{
				clearInterval(timer);
				if(isBreak) {
					startTimer();
				}
				else {
					startBreak();
				}
			}
		}
	}, 1000);
}

function formatClockDisplay(timeSeconds) {
	var minutes;
	var seconds;

	if(timeSeconds > 59) {
		minutes = Math.floor(timeSeconds / 60);
	}
	else {
		minutes = 0;
	}

	seconds = timeSeconds % 60;
	if(seconds < 10) {
		seconds = "0"+seconds;
	}
	return minutes + ":" + seconds;
}