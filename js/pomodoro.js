
function showTimeValue(pomTime) {
	console.log(pomTime);
	var breakTime = 60 - pomTime;
	console.log(breakTime);
	updateTimeDisplays(pomTime, breakTime);
}

function updateTimeDisplays(sessionTime, breakTime) {
	sTimer = document.getElementById("sessionTimeAmount");
	sTimer.innerHTML = sessionTime + ":00";
	bTimer = document.getElementById("breakTimeAmount");
	bTimer.innerHTML = breakTime + ":00";
}

function startTimer() {
	//Hide Setup Div
	pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "none";
	//Show Timer Div
	pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "inline";
}

function endTimer() {
	//Hide Timer Div
	pomTimer = document.getElementById("pomodoroTimer");
	pomTimer.style.display = "none";
	//Show Setup Div
	pomTimerSetup = document.getElementById("pomodoroTimerSetup");
	pomTimerSetup.style.display = "inline";
}