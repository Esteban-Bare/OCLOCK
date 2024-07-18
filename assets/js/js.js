const chrono = document.getElementById("chronometre");
let Chrono = null;
let startChrono = 0;
let elapsedChrono = 0;
let onChrono = false;

function start() {
    if (!onChrono) {
        startChrono = Date.now() - elapsedChrono;
        Chrono = setInterval(update, 10);
        onChrono = true;
    }

}

function stop() {
    if (onChrono) {
        clearInterval(Chrono);
        elapsedChrono = Date.now() - startChrono;
        onChrono = false;
    }
}

function reset() {
    clearInterval(Chrono);
    startChrono = 0;
    elapsedChrono = 0;
    onChrono = false;
    chrono.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedChrono = currentTime - startChrono;
    let hours = Math.floor(elapsedChrono / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedChrono / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedChrono / 1000 % 60);
    let milliseconds = Math.floor(elapsedChrono % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    chrono.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function consoleEsteban() {
    console.log(chrono.textContent);
}





