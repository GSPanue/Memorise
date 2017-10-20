<?php

/**
 * A session is started/resumed.
 * $loggedIn: A boolean data type is assigned.
 */
session_start();
$loggedIn = ($_SESSION['loginData'] == "true") ? true : false;


/**
 * $currentPathArray: Obtains the current file path and splits it into an array of strings.
 */
$currentPathArray = explode('/', $_SERVER['PHP_SELF']);


/**
 * $fileNameIndex: $currentPathArray index that contains '.php'.
 * $extensionPosition: Position of the first occurrence of a dot ('.') in $currentPathArray[$fileNameIndex].
 */
$fileNameIndex; $extensionPosition;

/**
 * Traverses through $currentPathArray until it finds an index that contains '.php'.
 */
for ($i = 0; $i < sizeof($currentPathArray); $i++) {
    if (strpos(($currentPathArray[$i]), $find = '.php') !== false) {
        /**
         * When '.php' is found in an index of $currentPathArray:
         * (1) $fileNameIndex is assigned the current value of i
         * (2) $extensionPosition is assigned the position of the first occurrence of a dot ('.') in $currentPathArray[$i]
         */

        $fileNameIndex = $i;
        $extensionPosition = strpos(($currentPathArray[$i]), $find = '.php');
    }
}


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

/**
 * $currentPageName: Assigned the current page's name, e.g. 'index'.
 */
$currentPageName = substr($currentPathArray[$fileNameIndex], 0, $extensionPosition);


/**
 * $primaryNavigationPage: Assigned a boolean value.
 * $secondaryNavigationPage: Assigned a boolean value.
 */
$primaryNavigationPage; $secondaryNavigationPage;

/**
 * Determines if the current page is a primary page or secondary page:
 * A primary navigation page is a page found in the left-hand side of the navigation bar.
 * A secondary navigation page is a page found in the right-hand side of the navigation bar.
 */
for ($i = 0; $i < sizeOf($pageNames); $i++) {
    if ($currentPageName == $pageNames[$i]) {
        if ($i < 2) {
            /**
             * If $i is less than 2, the current page is a primary page.
             * $primaryNavigationPage is assigned true, $secondaryNavigationPage is assigned false.
             */
            $primaryNavigationPage = true;
            $secondaryNavigationPage = false;
        }
        else {
            /**
             * Otherwise, the current page is not a primary page.
             * $primaryNavigationPage is assigned false, $secondaryNavigationPage is assigned true.
             */
            $primaryNavigationPage = false;
            $secondaryNavigationPage = true;
        }
    }
}


/**
 * primaryNavigationButtons: Outputs the primary navigation buttons and applies the 'active' CSS class
 * to a button that corresponds with the current page.
 */
function primaryNavigationButtons($primaryNavigationPage) {
    global $currentPageName, $pageNames, $pageTitles;

    if ($primaryNavigationPage) {
        for ($i = 0; $i < 2; $i++) {
            echo '<li><a ';

            if ($currentPageName == $pageNames[$i]) {
                /**
                 * The 'active' class is added to a button if the current page name is equal
                 * to a page name in $pageNames.
                 */
                echo 'class="active" ';
            }

            echo 'href="' . $pageNames[$i] . '.php"' . '>' . $pageTitles[$pageNames[$i]] . '</a></li>';
        }
    }
    else {
        /**
         * When $primaryNavigationPage is false, the primary navigation buttons are
         * output without checking if the current page is equal to a page in $pageNames.
         */
        for ($i = 0; $i < 2; $i++) {
            echo '<li><a href="' . $pageNames[$i] . '.php"' . '>' . $pageTitles[$pageNames[$i]] . '</a></li>';
        }
    }
}

/**
 * secondaryNavigationButtons: Outputs the secondary navigation buttons and applies the 'active' CSS class
 * to a button that corresponds with the current page. If a user is logged in, the default buttons are replaced
 * with a 'Logout' button.
 */
function secondaryNavigationButtons($secondaryNavigationPage) {
    global $currentPageName, $pageNames, $pageTitles, $loggedIn;

    if ($loggedIn) {
        /**
         * Outputs 'Logout' button if $loggedIn is true.
         */
        echo '<li><a href="login.php"' . ' onclick="logOut()">' . "Logout" . '</a></li>';
    }
    else if ($secondaryNavigationPage) {
        for ($i = 2; $i < 4; $i++) {
            echo '<li><a ';

            if ($currentPageName == $pageNames[$i]) {
                /**
                 * The 'active' class is added to a button if the current page name is equal
                 * to a page name in $pageNames.
                 */

                echo 'class="active" ';
            }

            echo 'href="' . $pageNames[$i] . '.php"' . '>' . $pageTitles[$pageNames[$i]] . '</a></li>';
        }
    }
    else {
        /**
         * When $secondaryNavigationPage is false, the secondary navigation buttons are
         * output without checking if the current page is equal to a page in $pageNames.
         */
        for ($i = 2; $i < 4; $i++) {
            echo '<li><a href="' . $pageNames[$i] . '.php"' . '>' . $pageTitles[$pageNames[$i]] . '</a></li>';
        }
    }
}

/**
 * Outputs the navigation bar.
 */
echo '<header class="header">';
    echo '<a href="index.php" class="logo">Memorise</a>';
    echo '<nav>';
        echo '<ul>';
            echo primaryNavigationButtons($primaryNavigationPage);
        echo '</ul>';
    echo '</nav>';
    echo '<div class="actions">';
        echo '<nav>';
            echo '<ul>';
                echo secondaryNavigationButtons($secondaryNavigationPage);
            echo '</ul>';
        echo '</nav>';
    echo '</div>';
echo '</header>';