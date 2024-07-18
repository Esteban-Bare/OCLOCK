<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alarm Clock</title>
    <link rel="stylesheet" href="./assets/css/stylealarm.css">
    <link rel="stylesheet" href="./assets/css/header.css">
</head>

<body>
    <header>
        <a href="index.php">Horloge</a>
        <a href="chrono.php">Chronomètre</a>
        <a href="minuteur.php">Minuteur</a>
    </header>

    <main>

        <div class="container">
            <h1>Alarm</h1>
            <label for="alarm-time">Configurer l'heure de l'alarme:</label>
            <input type="time" id="alarm-time">
            <button id="set" onclick="setAlarm()">Set Alarm</button>
            <button id="stop" onclick="stopAlarm()">Stop Alarm</button>
        </div>
    </main>
    <script src="./assets/js/alarm.js"></script>
</body>

</html>