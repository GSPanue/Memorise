<html>
<!-- Display Header & Navigation -->
<?php
include('./includes/common.php'); // Includes PHP Functions
outputHeader("Log In");
outputNavigationBar("login");
?>

<!-- Body Container -->
<div class="body-container-b">
    <!-- Login Container -->
    <form class="login-container" onsubmit="return logIn()" action="index.php">
        <!-- Website Title -->
        <div class="logo title">Memorise</div>
        <!-- Username Container -->
        <div class="username-container">
            <!-- Username Icon -->
            <div class="username-title"><i class="fa fa-user login-icons"></i></div>
            <!-- Username Field -->
            <input type="text" id="username" class="username-field" placeholder="Username">
        </div>

        <!-- Password Container -->
        <div class="password-container">
            <!-- Password Icon -->
            <div class="password-title"><i class="fa fa-key login-icons"></i></div>
            <!-- Password Field -->
            <input type="password" id="password" class="password-field" placeholder="Password">
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
            <button type="submit" class="login-button"><i class="fa fa-sign-in login-icons"></i></button>
        </div>
    </form>
</div>

<!-- Display Footer -->
<?php
outputFooter();
?>

</body>
</html>