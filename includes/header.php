<?php

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
 * $pageTitles: An associative array containing page names as keys,
 * and page titles as values.
 */

$pageTitles = array('index' => 'Home', 'rankings' => 'Rankings',
    'login' => 'Log In', 'register' => 'Create An Account', 'logout' => 'Logout');

/**
 * $title: Assigned a page title.
 */
$title = $pageTitles[substr($currentPathArray[$fileNameIndex], 0, $extensionPosition)];

/**
 * Outputs the header.
 */
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
?>
<script>
    $(document).ready(function() {
        /**
         * An AJAX POST request is used to pass 'loggedIn' to ajax/request.php if
         * there is no user logged in. This resets the navigation bar when a user
         * forgets to logout and closes the browser.
         */
        if (typeof getLoggedIn() !== "number") {
            var status = false;

            $.ajax({
                url: 'ajax/request.php',
                method: 'POST',
                data: {loggedIn: status}
            });
        }
    });
</script>
</head>
