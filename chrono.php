<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/stylechrono.css">
    <link rel="stylesheet" href="./assets/css/header.css">
</head>

<body>
    <header>
        <a href="index.php">Horloge</a>
        <a href="minuteur.php">Minuteur</a>
    </header>
    <div id="flex">
        <div id="wrapper">
            <div id="main">
                <h1>Chronometre</h1>
                <div class="container">
                    <div id="chronometre">
                        00:00:00:00
                    </div>
                    <div class="button">
                        <button id="start" onclick="start()">Start</button>
                        <button id="stop" onclick="stop()">Stop</button>
                        <button id="reset" onclick="reset()">Reset</button>
                        <button id="console" onclick="consoleEsteban()">Console</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./assets/js/js.js"></script>
    <script src="1.js"></script>
    <script src="2.js"></script>
</body>

</html>