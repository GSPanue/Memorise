<html>
<!-- Display Header -->
<?php require 'includes/header.php';?>
<body>
<!-- Display Navigation Bar -->
<?php require 'includes/navigation.php';?>

<!-- Body Container -->
<div class="body-container-b">
    <!-- Login Container -->
    <div class="login-container">
        <!-- Website Title -->
        <div class="logo title">Memorise</div>
        <!-- Username Container -->
        <div class="username-container">
            <!-- Username Icon -->
            <div class="username-title"><i class="fa fa-user login-icons"></i></div>
            <!-- Username Field -->
            <input id="username" class="username-field" placeholder="Username" onkeydown="submit()">
        </div>

        <!-- Password Container -->
        <div class="password-container">
            <!-- Password Icon -->
            <div class="password-title"><i class="fa fa-key login-icons"></i></div>
            <!-- Password Field -->
            <input id="password" class="password-field" type="password" placeholder="Password" onkeydown="submit()">
        </div>

        <!-- Invalid Username/Password Alert -->
        <div id="login-alert" class="placeholder"></div>

        <!-- Create An Account Notification -->
        <div class="notification">
            Don't have an account? <a href="register.php" class="register">Register now!</a>
        </div>

        <!-- Log-in Button Container -->
        <div class="button-container">
            <!-- Log-in button -->
            <div class="login-button" onclick="logIn()"><i class="fa fa-sign-in login-icons"></i></div>
        </div>
    </div>
</div>

<!-- Display Footer -->
<?php require 'includes/footer.php';?>

</body>
</html>