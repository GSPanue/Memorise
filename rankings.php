<html>
<!-- Display Header & Navigation -->
<?php
include('./includes/common.php'); // Includes PHP Functions
outputHeader("Rankings");
outputNavigationBar("rankings");
?>

<!-- Body Container -->
<div class="body-container-c">
    <!-- Rankings Title -->
    <div class="rankings-title-container">
        <div class="rankings-title">Player Rankings</div>
    </div>

    <!-- Rankings Info: Contains rank, username and score titles -->
    <div class="rankings-info-container">
        <!-- Ranking section container -->
        <div class="rankings-section-container">
            <!-- Rank (Section 1) -->
            <div class="rankings-section-a">Rank</div>
            <!-- Username (Section 2) -->
            <div class="rankings-section-a">Username</div>
            <!-- Score (Section 3) -->
            <div class="rankings-section-b">Score</div>
        </div>

        <!-- Updates all account ranks and displays the top 5 accounts -->
        <script>
            updateRanks(); // Update all account ranks

            var accounts = sortRanks(); // Assign an array of sorted accounts by rank to accounts.
            var accountsLength = (accounts.length >= 5) ? 5 : accounts.length; // Length is 5 if 5 or more accounts exist

            for (var i = 0; i < accountsLength; i++) { // Traverse through accounts and output the rank, username and highscore
                document.write('<div class="rankings-section-container">' +
                    '<div class="rankings-info-a">' + ("#" + accounts[i]['rank']) + '</div>');
                document.write('<div class="rankings-info-a">' + accounts[i]['username'] + '</div>');
                document.write('<div class="rankings-info-b">' + accounts[i]['highscore'] + '</div>' +
                    '</div>');
            }
        </script>
    </div>
</div>

<!-- Display Footer -->
<?php
outputFooter();
?>

</body>
</html>