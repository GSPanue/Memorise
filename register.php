<html>
<!-- Display Header -->
<?php require 'includes/header.php';?>
<script>
    $(document).ready(function() {
        /**
         * The username, password, email and phone tooltip text is set.
         */
        var spanID = ['username', 'password', 'email', 'phone'];

        for (var i = 0; i < spanID.length; i++) {
            getElementById(spanID[i] + "-tooltip").setAttribute('aria-label', getAriaLabel(spanID[i]));
        }
    });
</script>
<body>
<!-- Display Navigation Bar -->
<?php require 'includes/navigation.php';?>

<!-- Body Container -->
<div class="body-container-b">
    <!-- Register Container -->
    <div class="register-container">
        <!-- Registration Title -->
        <div class="logo title">Create An Account</div>

        <!-- Registration Row 1: Contains Username and E-mail elements -->
        <div class="register-row">
            <!-- Username Container -->
            <div class="register-username-container">
                <!-- Username Icon -->
                <div class="register-username-title"><i class="fa fa-user register-icons"></i></div>
                <!-- Username Field -->
                <input id="username" class="register-username-field" placeholder="* Username" oninput="validate(this.id)" onkeydown="submit()">
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
                <input id="email" class="register-email-field" placeholder="* E-mail Address" oninput="validate(this.id)" onkeydown="submit()">
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
                <input id="password" class="register-password-field" type="password" placeholder="* Password" oninput="validate(this.id)" onkeydown="submit()">
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
                <input id="phone" class="register-phone-field" placeholder="UK Phone Number" oninput="validate(this.id)" onkeydown="submit()">
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
            <div class="register-button" onclick="createAccount()"><i class="fa fa-sign-in register-icons"></i></div>
        </div>
    </div>
</div>

<!-- Display Footer -->
<?php require 'includes/footer.php';?>

</body>
</html>