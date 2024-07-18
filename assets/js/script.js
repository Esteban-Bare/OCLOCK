function realTime() {
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, 0); 
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

realTime();
setInterval(realTime, 1000);