<?php

/**
 * A session is created/resumed.
 */
session_start();

/**
 * Data from AJAX POST request is assigned to $_SESSION['loginData'].
 */
$_SESSION['loginData'] = $_POST['loggedIn'];