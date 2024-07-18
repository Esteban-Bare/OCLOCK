let alarmTimeout;
let audio;

function setAlarm() {
    const alarmTimeInput = document.getElementById('alarm-time').value;
    const [hours, minutes] = alarmTimeInput.split(':');
    
    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);
    
    const currentTime = new Date();
    
    const timeUntilAlarm = alarmTime - currentTime;
    
    if (timeUntilAlarm > 0) {
        alarmTimeout = setTimeout(() => {
            playSound();
            document.getElementById('stopAlarmDiv').style.display = 'block';
        }, timeUntilAlarm);
    } else {
        alert('Invalid time. Please set a future time for the alarm.');
    }
}

function playSound() {
    audio = new Audio('./assets/sounds/alarm_sound.mp3'); // Provide the path to your audio file
    audio.loop = true;
    audio.play();
}

function stopAlarm() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
    document.getElementById('stopAlarmDiv').style.display = 'none';
}