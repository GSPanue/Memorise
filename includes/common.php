<?php

/**
 * A session is started/resumed.
 * $loggedIn: A boolean data type is assigned.
 */
session_start();
$loggedIn = ($_SESSION['loginData'] == "true") ? true : false;

/**
 * Outputs the header.
 */
function outputHeader($title) {
    echo '<head>';
    echo '<title>Memorise | ' . $title . '</title>';
    echo '<link rel="stylesheet" type="text/css" href="css/styles.css">';
    echo '<link rel="stylesheet" type="text/css" href="libraries/font-awesome/font-awesome.css">';
    echo '<link rel="stylesheet" type="text/css" href="libraries/animate/animate.css">';
    echo '<link rel="stylesheet" type="text/css" href="libraries/hint/hint.css">';
    echo '<link href="https://fonts.googleapis.com/css?family=Roboto:100,300" rel="stylesheet">';
    echo '<script src="libraries/jquery/jquery-3.2.1.min.js"></script>';
    echo '<script src="js/scripts.js"></script>';
    echo '<script src="libraries/cryptojs/core.js"></script>';
    echo '<script src="libraries/cryptojs/md5.js"></script>';

    if ($title == "Home") {
        echo '<script>$(document).ready(function() {
    /**
     * An AJAX POST request is used to pass \'loggedIn\' to ajax/request.php if
     * there is no user logged in. This resets the navigation bar when a user
     * closes the tab without logging out.
     */
    if (typeof getLoggedIn() !== "number") {
        var status = false;

        $.ajax({
            url: \'ajax/request.php\',
            method: \'POST\',
            data: {loggedIn: status}
        });
    }
    
    /**
     * If a user is logged in, the users highscore is assigned to the player object.
     * The highscore, status and rank HTML content is then updated.
     *
     * Otherwise, the default text is set.
     */
    if (getItem(2, \'loggedIn\') !== null) {
        player.setHighScore(JSON.parse(getItem(1, getLoggedIn()))[\'highscore\']);
        $("#highscore").text(player.getHighScore());
        $("#status").text("Hello, " + JSON.parse(getItem(1, getLoggedIn()))[\'username\'] + "." + " Your game progress will be saved.");
        $("#rank").text(JSON.parse(getItem(1, getLoggedIn()))[\'rank\']);
    }
    else {
        /**
         * Default text for a user that is not logged in.
         */
        $("#status").text("You are not logged in. Log-in to compete against other players.");
        $("#highscore").text("0");
        $("#rank").text("n/a");
    }
    });</script>';
    }
    else if ($title == "Create An Account") {
        echo '<script>$(document).ready(function() {
        /**
         * The username, password, email and phone tooltip text is set.
         */
        var spanID = [\'username\', \'password\', \'email\', \'phone\'];

        for (var i = 0; i < spanID.length; i++) {
            getElementById(spanID[i] + "-tooltip").setAttribute(\'aria-label\', getAriaLabel(spanID[i]));
        }
    });</script>';
    }
    echo '</head>';
}

/**
 * Outputs the navigation bar.
 */
function outputNavigationBar($currentPage) {
    global $loggedIn;

    /**
     * $pageNames: An array of page names.
     */
    $pageNames = array('index', 'rankings', 'login', 'register', 'logout');

    /**
     * $pageTitles: An associative array containing page names as keys,
     * and page titles as values.
     */
    $pageTitles = array('index' => 'Home', 'rankings' => 'Rankings',
        'login' => 'Log In', 'register' => 'Create An Account', 'logout' => 'Logout');

    echo '<body>';
    echo '<header class="header">';
    echo '<a href="index.php" class="logo">Memorise</a>';
    echo '<nav>';
    echo '<ul>';

    /**
     * Outputs the left-hand side navigation buttons and applies the 'active' CSS class
     * to a button that corresponds with the current page.
     */
    for ($i = 0; $i < count($pageTitles) - 3; $i++) {
        echo '<li><a ';

        if ($currentPage == $pageNames[$i]) {
            /**
             * The 'active' class is added to a button if the current page name is equal
             * to a page name in $pageNames.
             */
            echo 'class="active" ';
        }

        echo 'href="' . $pageNames[$i] . '.php">' . $pageTitles[$pageNames[$i]] . '</a></li>';
    }

    echo '</ul>';
    echo '</nav>';
    echo '<div class="actions">';
    echo '<nav>';
    echo '<ul>';

    /**
     * Outputs the right-hand side navigation buttons and applies the 'active' CSS class to a button that
     * corresponds with the current page. If a user is logged in, the buttons are replaced
     * with a 'Logout' button.
     */
    if ($loggedIn) {
        /**
         * Outputs 'Logout' button if $loggedIn is true.
         */
        echo '<li><a href="login.php"' . ' onclick="logOut()">' . "Logout" . '</a></li>';
    }
    else {
        /**
         * Outputs 'Log In' and 'Create An Account'.
         */
        for ($i = count($pageTitles) - 3; $i < count($pageTitles) - 1; $i++) {
            echo '<li><a ';

            if ($currentPage == $pageNames[$i]) {
                /**
                 * The 'active' class is added to a button if the current page name is equal
                 * to a page name in $pageNames.
                 */

                echo 'class="active" ';
            }

            echo 'href="' . $pageNames[$i] . '.php">' . $pageTitles[$pageNames[$i]] . '</a></li>';
        }
    }

    echo '</ul>';
    echo '</nav>';
    echo '</div>';
    echo '</header>';
}

/**
 * Outputs the footer.
 */
function outputFooter() {
    echo '<div class="footer">';
    echo '© Copyright ' . date("Y") . ' | Gurdev S. Panue';
    echo '</div>';
}