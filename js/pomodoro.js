$( document ).ready(function() {
    updateTimeDisplays(30,30); //initial values of slider
});

function showTimeValue(pomTime) {
	console.log(pomTime);
	var breakTime = 60 - pomTime;
	console.log(breakTime);
	updateTimeDisplays(pomTime, breakTime);
}

function updateTimeDisplays(sessionTime, breakTime) {
	var sTimer = document.getElementById("sessionTimeAmount");
	sTimer.innerHTML = sessionTime + ":00";
	var bTimer = document.getElementById("breakTimeAmount");
	bTimer.innerHTML = breakTime + ":00";
}

function startTimer() {
	//Hide Setup Div
	var pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "none";
	//Update Timer With Starting Time
	var startingTime = document.getElementById("sessionTimeAmount").innerHTML;
	var timerDisplay = document.getElementById("mainTimerDisplay");
	timerDisplay.innerHTML = startingTime;
	//Show Timer Div
	pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "inline";
	//Start Countdown
	countdownTimer(startingTime);
}

function endTimer() {
	//Hide Timer Div
	var pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "none";
	//Show Setup Div
	var pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "inline";
}

function countdownTimer(startTime) {
	console.log("starting countdown");
	startTime = startTime.split(":");
	startTime = startTime[0];
	console.log(startTime);
	var startTimeSec = startTime * 60; //convert to seconds

	var timerDisplay = document.getElementById("mainTimerDisplay");
	var timeDisplayStr;

	setInterval(function() {
		if(startTimeSec > 0){
			startTimeSec--;
			timeDisplayStr = formatClockDisplay(startTimeSec);
			timerDisplay.innerHTML = timeDisplayStr;
		}
		else
			return;
	}, 1000);
}

function formatClockDisplay(timeSeconds) {
	var minutes = Math.floor(timeSeconds / 60);
	var seconds = timeSeconds % 60;
	if(seconds < 10) {
		seconds = "0"+seconds;
	}
	return minutes + ":" + seconds;
}