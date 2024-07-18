<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/styleminuteur.css">
    <link rel="stylesheet" href="./assets/css/header.css">
</head>

<body>
    <header>
        <a href="index.php">Horloge</a>
        <a href="chrono.php">Chronomètre</a>
    </header>
    <main>
        <div class="container">
            <h1>Minuteur</h1>
            <div id="controls">
                <label for="timeInput">Temps (in minutes) :</label>
                <input type="number" id="timeInput" value="0">
                <button id="increaseTime">+</button>
                <button id="decreaseTime">-</button>
            </div>
            <div class="submit">
                <div id="timerDisplay"></div>
                <button id="startStop">Démarrer</button>
            </div>
        </div>
    </main>
    <script src="./assets/js/minuteur.js"></script>
</body>

</html>