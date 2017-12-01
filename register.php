<html>
<!-- Display Header & Navigation -->
<?php
include('./includes/common.php');
outputHeader("Create An Account");
outputNavigationBar("register");
?>

<!-- Body Container -->
<div class="body-container-b">
    <!-- Register Container -->
    <form class="register-container" onsubmit="return createAccount()" action="login.php">
        <!-- Registration Title -->
        <div class="logo title">Create An Account</div>

        <!-- Registration Row 1: Contains Username and E-mail elements -->
        <div class="register-row">
            <!-- Username Container -->
            <div class="register-username-container">
                <!-- Username Icon -->
                <div class="register-username-title"><i class="fa fa-user register-icons"></i></div>
                <!-- Username Field -->
                <input type="text" id="username" class="register-username-field" placeholder="* Username" oninput="validate(this.id)">
                <!-- Tooltip Container -->
                <div class="register-tooltip">
                    <!-- Username Tooltip: Aria-label is added via jQuery $(document).ready() -->
                    <span id="username-tooltip" class="hint--right hint--large hint--info">
                        <!-- Username Tooltip Icon -->
                        <i id="username-icon" class="fa fa-question register-icons"></i>
                    </span>
                </div>
            </div>
            <!-- Email Container -->
            <div class="register-email-container">
                <!-- Email Icon -->
                <div class="register-email-title"><i class="fa fa-at register-icons"></i></div>
                <!-- Email Field -->
                <input type="text" id="email" class="register-email-field" placeholder="* E-mail Address" oninput="validate(this.id)">
                <!-- Tooltip Container -->
                <div class="register-tooltip">
                    <!-- Email Tooltip: Aria-label is added via jQuery $(document).ready() -->
                    <span id="email-tooltip" class="hint--right hint--medium hint--info">
                        <!-- Email Tooltip Icon -->
                        <i id="email-icon" class="fa fa-question register-icons"></i>
                    </span>
                </div>
            </div>
        </div>

        <!-- Registration Row 2: Contains Password and Phone elements -->
        <div class="register-row">
            <!-- Password Container -->
            <div class="register-password-container">
                <!-- Password Icon -->
                <div class="register-password-title"><i class="fa fa-key register-icons"></i></div>
                <!-- Password Field -->
                <input type="password" id="password" class="register-password-field" placeholder="* Password" oninput="validate(this.id)">
                <!-- Tooltip Container -->
                <div class="register-tooltip">
                    <!-- Password Tooltip: Aria-label is added via jQuery $(document).ready() -->
                    <span id="password-tooltip" class="hint--right hint--medium hint--info">
                        <!-- Password Tooltip Icon-->
                        <i class="fa fa-question register-icons"></i>
                    </span>
                </div>
            </div>
            <!-- Phone Container -->
            <div class="register-phone-container">
                <!-- Phone Icon -->
                <div class="register-phone-title"><i class="fa fa-mobile register-icons"></i></div>
                <!-- Phone Field -->
                <input type="text" id="phone" class="register-phone-field" placeholder="UK Phone Number" oninput="validate(this.id)">
                <!-- Tooltip Container -->
                <div class="register-tooltip">
                    <!-- Phone Tooltip: Aria-label is added via jQuery $(document).ready() -->
                    <span id="phone-tooltip" class="hint--right hint--medium hint--info">
                        <!-- Phone Tooltip Icon -->
                        <i class="fa fa-question register-icons"></i>
                    </span>
                </div>
            </div>
        </div>

        <!-- Displays required -->
        <div class="required">* Indicates required field.</div>

        <!-- Registration Button Container -->
        <div class="button-container">
            <!-- Register Button -->
            <button type="submit" class="register-button"><i class="fa fa-sign-in register-icons"></i></button>
        </div>
    </form>
</div>

<!-- Display Footer -->
<?php
outputFooter();
?>

</body>
</html>