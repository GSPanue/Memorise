<html>
<!-- Display Header -->
<?php require 'includes/header.php';?>
<body>
<!-- Display Navigation Bar -->
<?php require 'includes/navigation.php';?>

<!-- Body Container -->
<div class="body-container-a">
    <!-- Game Info: Contains time, level, score, highscore and rank information -->
    <div class="game-info">
        <!-- Time Remaining container -->
        <div class="game-info-col-a">Time Remaining
            <div id="time" class="game-info-content">2 : 30</div>
        </div>
        <!-- Level container -->
        <div class="game-info-col-a">Level
            <div id="level" class="game-info-content">1</div>
        </div>
        <!-- Score container -->
        <div class="game-info-col-a">Score
            <div id="score" class="game-info-content">0</div>
        </div>
        <!-- Highscore container -->
        <div class="game-info-col-a">High Score
            <div id="highscore" class="game-info-content"></div>
        </div>
        <!-- Rank container -->
        <div class="game-info-col-b">Rank
            <div id="rank" class="game-info-content"></div>
        </div>
    </div>

    <!-- Game Window: Contains all gameplay elements -->
    <div class="game-window">
        <!-- Row 1: Cards 0 - 5 -->
        <div class="game-window-row-container-a">
            <!-- Card 0 -->
            <div id="card-0" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 0 (Front) -->
                <div id="front-0" class="front">?</div>
                <!-- Card 0 (Back) -->
                <div id="back-0" class="back">?</div>
            </div>
            <!-- Card 1 -->
            <div id="card-1" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 1 (Front) -->
                <div id="front-1" class="front pointer">?</div>
                <!-- Card 1 (Back) -->
                <div id="back-1" class="back pointer">?</div>
            </div>
            <!-- Card 2 -->
            <div id="card-2" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 2 (Front) -->
                <div id="front-2" class="front pointer">?</div>
                <!-- Card 2 (Back) -->
                <div id="back-2" class="back pointer">?</div>
            </div>
            <!-- Card 3 -->
            <div id="card-3" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 3 (Front) -->
                <div id="front-3" class="front pointer">?</div>
                <!-- Card 3 (Back) -->
                <div id="back-3" class="back pointer">?</div>
            </div>
            <!-- Card 4 -->
            <div id="card-4" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 4 (Front) -->
                <div id="front-4" class="front pointer">?</div>
                <!-- Card 4 (Back) -->
                <div id="back-4" class="back pointer">?</div>
            </div>
            <!-- Card 5 -->
            <div id="card-5" class="card pointer game-window-column-container-b" onclick="flipCard(this.id)">
                <!-- Card 5 (Front) -->
                <div id="front-5" class="front pointer">?</div>
                <!-- Card 5 (Back) -->
                <div id="back-5" class="back pointer">?</div>
            </div>
        </div>

        <!-- Row 2: Cards 6 - 11 -->
        <div class="game-window-row-container-a">
            <!-- Card 6 -->
            <div id="card-6" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 6 (Front) -->
                <div id="front-6" class="front pointer">?</div>
                <!-- Card 6 (Back) -->
                <div id="back-6" class="back pointer">?</div>
            </div>
            <!-- Card 7 -->
            <div id="card-7" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 7 (Front) -->
                <div id="front-7" class="front pointer">?</div>
                <!-- Card 7 (Back) -->
                <div id="back-7" class="back pointer">?</div>
            </div>
            <!-- Card 8 -->
            <div id="card-8" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 8 (Front) -->
                <div id="front-8" class="front pointer">?</div>
                <!-- Card 8 (Back) -->
                <div id="back-8" class="back pointer">?</div>
            </div>
            <!-- Card 9 -->
            <div id="card-9" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 9 (Front) -->
                <div id="front-9" class="front pointer">?</div>
                <!-- Card 9 (Back) -->
                <div id="back-9" class="back pointer">?</div>
            </div>
            <!-- Card 10 -->
            <div id="card-10" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 10 (Front) -->
                <div id="front-10" class="front pointer">?</div>
                <!-- Card 10 (Back) -->
                <div id="back-10" class="back pointer">?</div>
            </div>
            <!-- Card 11 -->
            <div id="card-11" class="card pointer game-window-column-container-b" onclick="flipCard(this.id)">
                <!-- Card 11 (Front) -->
                <div id="front-11" class="front pointer">?</div>
                <!-- Card 11 (Back) -->
                <div id="back-11" class="back pointer">?</div>
            </div>
        </div>

        <!-- Row 3: Cards 12 - 17 -->
        <div class="game-window-row-container-b">
            <!-- Card 12 -->
            <div id="card-12" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 12 (Front) -->
                <div id="front-12" class="front pointer">?</div>
                <!-- Card 12 (Back) -->
                <div id="back-12" class="back pointer">?</div>
            </div>
            <!-- Card 13 -->
            <div id="card-13" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 13 (Front) -->
                <div id="front-13" class="front pointer">?</div>
                <!-- Card 13 (Back) -->
                <div id="back-13" class="back pointer">?</div>
            </div>
            <!-- Card 14 -->
            <div id="card-14" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 14 (Front) -->
                <div id="front-14" class="front pointer">?</div>
                <!-- Card 14 (Back) -->
                <div id="back-14" class="back pointer">?</div>
            </div>
            <!-- Card 15 -->
            <div id="card-15" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 15 (Front) -->
                <div id="front-15" class="front pointer">?</div>
                <!-- Card 15 (Back) -->
                <div id="back-15" class="back pointer">?</div>
            </div>
            <!-- Card 16 -->
            <div id="card-16" class="card pointer game-window-column-container" onclick="flipCard(this.id)">
                <!-- Card 16 (Front) -->
                <div id="front-16" class="front pointer">?</div>
                <!-- Card 16 (Back) -->
                <div id="back-16" class="back pointer">?</div>
            </div>
            <!-- Card 17 -->
            <div id="card-17" class="card pointer game-window-column-container-b" onclick="flipCard(this.id)">
                <!-- Card 17 (Front) -->
                <div id="front-17" class="front pointer">?</div>
                <!-- Card 17 (Back) -->
                <div id="back-17" class="back pointer">?</div>
            </div>
        </div>
    </div>

    <!-- Game state: Contains the start button and login status -->
    <div class="game-state">
        <!-- Start Button -->
        <div id="startButton" class="start-button pointer" onclick="startGame(), addClass(1, this.id)">Start Game</div>

        <!-- Login Status -->
        <div id="status" class="status-update">
        </div>
    </div>
</div>

<!-- Display Footer -->
<?php require 'includes/footer.php';?>

</body>
</html>