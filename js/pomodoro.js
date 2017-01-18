
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
}

function endTimer() {
	//Hide Timer Div
	var pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "none";
	//Show Setup Div
	var pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "inline";
}