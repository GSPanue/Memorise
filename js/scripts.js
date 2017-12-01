/********************************************************************
 * Author: Gurdev S. Panue - Middlesex University, London - M00582831
 * Date: 02/10/2017
 */

/********************
 * Table of Contents:
 * 1. Account
 * 1.1 Account: Creation
 * 1.1.1 Creation: Helper Functions
 * 1.2 Account: Authentication
 * 1.2.1 Authentication: Helper Functions
 * 1.3 Account: Helper Functions
 *
 * 2. Game
 * 2.1 Game: Objects
 * 2.2 Game: Grid
 * 2.2.1 Grid: Helper Functions
 * 2.3 Game: State
 * 2.3.1 State: Helper Functions
 * 2.4 Game: Evaluation
 * 2.4.1 Evaluation: Helper Functions
 * 2.5 Game: Levels
 * 2.5.1 Levels: Helper Functions
 * 2.6 Game: Scores
 * 2.6.1 Scores: Helper Functions
 * 2.7 Game: Timer
 *
 * 3. Helper Functions
 */

/************
 * 1. Account
 */

/***********************
 * 1.1 Account: Creation
 */

/**
 * validate: Dynamically validates username, password, e-mail and phone text field input. An input is valid if
 * it meets the regular expressions requirements. Additionally, the input for username and e-mail must not be already
 * in use. The optional argument, response, enables the ability to check if the input of a specific text field is valid.
 * This is primarily used in createAccount() as a way to double check that everything is valid before storing
 * account data into localStorage.
 *
 * Other features:
 * - Dynamically changes the text field background colour; red if invalid string and/or username/e-mail already in use, green if valid.
 * - Dynamically changes the tooltip icon and its text if a username or e-mail is already in use.
 * - If the parameter, response, is true, the specified ID's 'isValidString' variable is returned.
 * - An empty text field will restore the field back to its initial state.
 */
function validate(id, response) {
    if (id == 'username') {
        /**
         * Regular Expression for Username:
         * - The string must:
         * (1) Begin and contain 4-16 alphanumeric characters
         * - The string must not:
         * (1) Begin with: a dash or underscore
         * (2) Contain two consecutive dashes or underscores
         * (3) End with: any characters in the negated set (-_"@'£$%^&*()§±)
         */

        var isValidString = /^(?!-)(?!_)(?!.*--)(?!.*__)[A-Za-z0-9-_]{3,15}[^-_"@'£$%^&*()§±]$/.test(getElementById(id).value);

        if (usernameExists(getElementById(id).value)) { // Check if the username input matches a username in localStorage
            isValidString = false;
        }

        if (response) { // Return isValidString if response is true
            return isValidString;
        }

        setAttributes(id, isEmptyString(id), "* Username"); // Restore text field back to initial state if input is empty
        setBackground(id, isValidString); // Change the text field's background colour if the username is valid/invalid
        setAlert(id); // Change alert icon and tooltip text if the username is already in use
    }
    else if (id == 'password') {
        /**
         * Regular Expression for Password:
         * - The string must:
         * (1) Begin with: a uppercase letter
         * (2) Contain 3 numeric characters
         * (3) Have 8-16 characters
         * - The string can:
         * (1) Contain the following special characters: !@#$%
         */

        var isValidString = /^[A-Z]{1}(?=(.*[0-9]){3})[A-Za-z0-9!@#$%]{7,15}$/.test(getElementById(id).value);

        if (response) { // Return isValidString if response is true
            return isValidString;
        }

        setAttributes(id, isEmptyString(id), "* Password"); // Restore text field back to initial state if input is empty
        setBackground(id, isValidString); // Change the text field's background colour if the username is valid/invalid
    }
    else if (id == 'email') {
        /**
         * Regular Expression for E-mail:
         * - The string must:
         * (1) Begin and contain: 1 or more upper or lowercase letter(s)/numeric character(s)/special character(s), i.e. !#$%&'*+-/=?^_`{|}~
         * (2) Be followed by: a period, followed by 2-64 upper and lowercase characters
         * - The string can:
         * (1) Be optionally followed by (2), 0-2 times
         */

        var isValidString = /^[A-Za-z0-9!#$%&'*+-/=?^_`{|}~]+@[A-Za-z]+\.[A-Za-z]{2,64}(\.[A-Za-z]{2,64}){0,2}$/.test(getElementById(id).value);

        if (emailExists(getElementById(id).value)) { // Check if the e-mail input matches an e-mail in localStorage
            isValidString = false;
        }

        if (response) { // Return isValidString if response is true
            return isValidString;
        }

        setAttributes(id, isEmptyString(id), "* E-mail Address"); // Restore text field back to initial state if input is empty
        setBackground(id, isValidString); // Change the text field's background colour if the email is valid/invalid
        setAlert(id); // Change alert icon and tooltip text if the email is already in use
    }
    else if (id == 'phone') {
        /**
         * Regular Expression for Phone:
         * - The string must:
         * (1) Begin with +44 or 0
         * (2) Be followed by 10 numeric characters
         */

        var isValidString = /^\+44[\s]?[0-9]{10}|^[0]{1}[0-9]{10}$/.test(getElementById(id).value);

        if (response) { // Return isValidString if response is true
            if (getElementById(id).value.length == 0) {
                isValidString = true;
            }

            return isValidString;
        }

        setAttributes(id, isEmptyString(id), "UK Phone Number"); // Restore text field back to initial state if input is empty
        setBackground(id, isValidString); // Change the text field's background colour if the phone is valid/invalid
    }

    /**
     * isEmptyString: Returns true or false if an IDs value is equal to an empty string.
     */
    function isEmptyString(id) {
        return getElementById(id).value == ""; // Compare the value of ID to an empty string
    }

    /**
     * setAttributes: Restores a text field back to its initial state if isEmptyString is true, otherwise
     * it will remove the placeholder attribute if false.
     */
    function setAttributes(id, isEmptyString, placeHolderValue) {
        if (isEmptyString) {
            getElementById(id).setAttribute('placeholder', placeHolderValue); // Set the placeholder attribute to ID and assign placeHolderValue to placeholder
            getElementById(id).removeAttribute('style'); // Remove the style attribute, which removes the text field background colour
        }
        else {
            getElementById(id).removeAttribute('placeholder'); // Remove the placeholder attribute from ID if the input is not empty
        }
    }

    /**
     * setBackground: Changes the background colour of a text field. Green if the input is valid, red if invalid.
     */
    function setBackground(id, isValidString) {
        if (isValidString) {
            document.getElementById(id).style.background = "rgb(41, 140, 84)";
        }
        else if (!isValidString && !isEmptyString(id)) {
            document.getElementById(id).style.background = "rgba(203, 6, 1, 0.81)";
        }
    }

    /**
     * setAlert: Changes the alert icon and tooltip text if an ID (username or e-mail) is already in use.
     */
    function setAlert(id) {
        var iconID = id + "-icon";
        var tooltipID = (id + "-tooltip");

        if (id == 'username') {
            if (usernameExists(getElementById(id).value)) {
                /**
                 * If the input in the username text field is found in localStorage:
                 * (1) Replace the question mark icon with an exclamation mark icon
                 * (2) Replace the tooltip size class for large with medium
                 * (3) Change the tooltip aria-label
                 */

                removeClass(0, iconID, 'fa-question');
                addClass(0, iconID, 'fa-exclamation');
                removeClass(0, tooltipID, 'hint--large');
                addClass(0, tooltipID, 'hint--medium');
                getElementById(tooltipID).setAttribute('aria-label', "This username is already in use.");
            }
            else {
                /**
                 * Otherwise restore back to initial state:
                 * (1) Replace the exclamation mark icon with a question mark icon
                 * (2) Replace the tooltip size class for medium with large
                 * (3) Change the tooltip aria-label
                 */

                removeClass(0, iconID, 'fa-exclamation');
                addClass(0, iconID, 'fa-question');
                removeClass(0, tooltipID, 'hint--medium');
                addClass(0, tooltipID, 'hint--large');
                getElementById(tooltipID).setAttribute('aria-label', getAriaLabel(id));
            }
        }
        else if (id == 'email') {
            if (emailExists(getElementById(id).value)) {
                /**
                 * If the input in the e-mail text field is found in localStorage:
                 * (1) Replace the question mark icon with an exclamation mark icon
                 * (2) Change the tooltip aria-label
                 */

                removeClass(0, iconID, 'fa-question');
                addClass(0, iconID, 'fa-exclamation');
                getElementById(tooltipID).setAttribute('aria-label', "This e-mail address is already in use.");
            }
            else {
                /**
                 * Otherwise restore back to initial state:
                 * (1) Replace the exclamation mark icon with a question mark icon
                 * (2) Change the tooltip aria-label
                 */

                removeClass(0, iconID, 'fa-exclamation');
                addClass(0, iconID, 'fa-question');
                getElementById(tooltipID).setAttribute('aria-label', getAriaLabel(id));
            }
        }
    }
}

/**
 * createAccount: Creates an account by validating the text field input for all account creation fields,
 * storing the input in an object and storing that object in localStorage in the form of a JSON string.
 *
 * The account creation validation will pass if the username, password and e-mail input is valid.
 * The phone input is optional and will not effect the default value for phone in the account object if empty.
 */
function createAccount() {
    var data = [];

    getData();

    function getData() {
        var flag = true; // A flag variable is used to check if the following validation process passes
        var tempArray = ['username', 'password', 'email', 'phone']; // Contains text field IDs

        /**
         * Retrieve isValidString from the validate function for username, password and e-mail
         * by passing true for the response parameter. If isValidString is false for one ID, flag is set to false.
         * The purpose is to assert that the required fields are valid.
         */
        for (var i = 0; i < tempArray.length; i++) {
            if (!validate(tempArray[i], true)) {
                flag = false;
            }
        }

        /**
         * If flag is still true, the required fields are all valid. The following for loop will
         * assign all text field input to the data array. It will validate text field input again so that if the phone
         * input is empty, an empty string is not assigned.
         */
        if (flag) {
            for (var i = 0; i < tempArray.length; i++) {
                if (validate(tempArray[i], true) && getElementById(tempArray[i]).value.length > 0) {
                    data[i] = getElementById(tempArray[i]).value;
                }
            }
        }
    }

    /**
     * If the data array has more than zero elements, the username, password, e-mail and phone will be assigned to
     * the account object literal, account, using setters. If the data array is empty, a required field is invalid
     * and the account creation process will end here.
     */
    if (data.length > 0) {
        /**
         * Account Object: An object literal used for storing account information such as the username, password, e-mail, etc.
         * Every property's value, aside from the highscore and rank, will be mutated using setters.
         */
        var account = {
            username: null,
            password: null,
            email: null,
            phone: null,
            highscore: 0,
            rank: 0,

            setUsername: function(username) {
                this.username = username;
            },
            setPassword: function(password) {
                this.password = hash(password).toString();
            },
            setEmail: function(email) {
                this.email = email;
            },
            setPhone: function(phone) {
                this.phone = phone;
            }
        };

        account.setUsername(data[0]); // Sets the username to the account object
        account.setPassword(data[1]); // Sets the password to the account object, this will be hashed using MD5
        account.setEmail(data[2]); // Sets the e-mail to the account object
        account.setPhone((data.length == 4) ? data[3] : null); // Sets the phone number to the account object

        storeAccount(account); // Store the account in localStorage

        /**
         * storeAccount: Stores the account object in the form of a JSON string using a key returned by getNewKey()
         * in localStorage. All account ranks are updated afterwards as the default rank for a new account is 0.
         */
        function storeAccount(accountObject) {
            setItem(getNewKey(), JSON.stringify(accountObject)); // Convert object to JSON string and store in localStorage
            updateRanks(); // Update all account ranks
        }
    }
    else {
        return false;
    }
}

/**********************************
 * 1.1.1 Creation: Helper Functions
 */

/**
 * emailExists: Returns true if a given e-mail already exists in localStorage, false otherwise.
 */
function emailExists(email) {
    /**
     * Traverse through localStorage using i as key, parse the object of key i and compare
     * the objects e-mail with the e-mail passed into the functions parameter.
     *
     * Return true if there is a match, otherwise return false.
     */
    for (var i = 1; i <= localStorage.length; i++) {
        if ((JSON.parse(getItem(1, i))['email']) == email) {
            return true;
        }
    }

    return false;
}

/**
 * getAriaLabel: Returns a string for an ID's aria-label.
 */
function getAriaLabel(id) {
    if (id == 'username') {
        return "Username must be between 4-16 characters long and cannot begin or end with a dash or underscore, " +
            "or contain the following special characters: -_\"@'£$%^&*()§±. Use of double underscore " +
            "or dash (e.g. --) is prohibited.";
    }
    else if (id == 'password') {
        return "Password must start with 1 upper-case letter, contain 3 digits and be between 8-16 characters long. " +
            "Special characters such as '!@#$%' are accepted.";
    }
    else if (id == 'email') {
        return "E-mail address can contain special characters such as '!#$%&'*+-/=?^_`{|}~'.";
    }
    else if (id == 'phone') {
        return "Telephone number must be 11 digits long, or contain '+44' followed by 10 digits.";
    }
}

/**
 * getNewKey: Returns a localStorage key that is greater than zero.
 */
function getNewKey() {
    return localStorage.length + 1;
}

/***********************************
 * 1.2 Account: Authentication
 */

/**
 * logIn: Authenticates the entered username and password by checking if the username exists, and if the password
 * matches the username's account in localStorage.
 */
function logIn() {
    var username = getElementById('username').value; // Assigns the value in the username text field
    var password = getElementById('password').value; // Assigns the value in the password text field

    var validUsername = usernameExists(username); // Checks if the username entered exists, returns true or false

    /**
     * If the validUsername variable is true, the password will be checked for authenticity. If it is false,
     * the authentication process ends and an invalid credentials notification will appear.
     */
    if (validUsername) {
        var usernameKey = getUsernameKey(username); // Assigns the username's localStorage key

        /**
         * A hashed version of the password is checked for equality by parsing the hashed password
         * stored in the username's account.
         */
        var validPassword = (hash(password).toString() == JSON.parse(getItem(1, usernameKey))["password"]);

        /**
         * If validPassword is true, a new sessionStorage item is created with its key being 'loggedIn', and
         * value being the username converted to a JSON string. Otherwise, an invalid credentials notification will appear.
         */
        if (validPassword) {
            var status = true;
            sessionStorage.setItem('loggedIn', JSON.stringify(username));

            /**
             * An AJAX POST request is used to pass a variable, 'loggedIn', which has 'true' assigned to it.
             * This is used so that the navigation bar removes the 'Log-in' and 'Create An Account' buttons
             * and replaces it with just 'Logout'.
             */
            $.ajax({
                url: 'ajax/request.php',
                method: 'POST',
                data: {loggedIn: status}
            });

            updateRanks(); // Updates all account ranks
        }
        else {
            /**
             * An invalid credentials notification will be displayed.
             */
            addClass(0, 'login-alert', 'invalid-credentials'); // Add the 'invalid-credentials' class to login-alert
            getElementById('login-alert').innerHTML = "The username or password entered is incorrect."; // Set login-alert's text

            return false;
        }
    }
    else {
        /**
         * An invalid credentials notification will be displayed.
         */
        addClass(0, 'login-alert', 'invalid-credentials'); // Add the 'invalid-credentials' class to login-alert
        getElementById('login-alert').innerHTML = "The username or password entered is incorrect."; // Set login-alert's text

        return false;
    }
}

/**
 * logOut: Logs a user out by removing the 'loggedIn' key from sessionStorage and using an AJAX POST request
 * to pass a variable to ajax/request.php.
 */
function logOut() {
    var status = false;

    sessionStorage.removeItem('loggedIn'); // Removes the 'loggedIn' key from sessionStorage

    /**
     * An AJAX POST request is used to pass a variable, 'loggedIn', which has 'false' assigned to it.
     * The navigation bar will be reset to its initial state, displaying 'Log In' and 'Create An Account'.
     */
    $.ajax({
        url: 'ajax/request.php',
        method: 'POST',
        data: {loggedIn: status}
    });
}

/****************************************
 * 1.2.1 Authentication: Helper Functions
 */

/**
 * getUsernameKey: Returns the key of a given username in localStorage.
 */
function getUsernameKey(username) {
    for (var i = 1; i <= localStorage.length; i++) {
        if (username.toLowerCase() == JSON.parse(getItem(1, i))['username'].toLowerCase()) {
            return i;
        }
    }
}

/*******************************
 * 1.3 Account: Helper Functions
 */

/**
 * setItem: Stores an item in localStorage when passed a key and value.
 */
function setItem(key, value) {
    localStorage.setItem(key, value);
}

/**
 * getItem: Returns an item in localStorage or sessionStorage when passed an action and key.
 */
function getItem(action, key) {
    if (action == 1) {
        return localStorage.getItem(key);
    }
    else if (action == 2) {
        return sessionStorage.getItem(key);
    }
}

/**
 * usernameExists: Return true if a given username already exists in localStorage, false otherwise.
 */
function usernameExists(username) {
    /**
     * Traverse through localStorage using i as key, parse the object of key i, convert the objects
     * username to lowercase and compare with the username passed into the functions parameter.
     *
     * Return true if there is a match, otherwise return false.
     */
    for (var i = 1; i <= localStorage.length; i++) {
        if ((JSON.parse(getItem(1, i))['username']).toLowerCase() == username.toLowerCase()) {
            return true;
        }
    }

    return false;
}

/**
 * hash: Takes a string and returns it hashed using MD5.
 */
function hash(password) {
    return CryptoJS.MD5(password);
}

/**
 * updateRanks: Updates the ranks of all accounts in localStorage.
 */
function updateRanks() {
    var tempArray = sortRanks(); // Assign an array of account objects sorted by highscore

    update(); // Update ranks

    /**
     * update: Updates the ranks of all accounts by:
     * (1) Obtaining the key of the current objects username
     * (2) Assigning i + 1 to the objects rank (as tempArray is sorted in descending order)
     * (3) Converting the updated object to a JSON string and replacing the key's value in localStorage with a new value
     */
    function update() {
        for (var i = 0; i < tempArray.length; i++) {
            var key = getUsernameKey(tempArray[i]['username']);
            tempArray[i]['rank'] = i + 1;

            setItem(key, JSON.stringify(tempArray[i]));
        }
    }
}

/**
 * sortRanks: Returns an array of account objects sorted by highscore in descending order using
 * the selection sort algorithm, e.g. tempArray[0]['highscore'] = 20, ..., tempArray[10]['highscore'] = 1.
 */
function sortRanks() {
    var tempArray = getAccounts(); // Assign an array of unordered account objects

    for (var i = 0; i < tempArray.length; i++) {
        var max = i;

        /**
         * j is initially assigned i + 1 so that the first iteration compares tempArray[i] with the index after it.
         * j is assigned to max if tempArray[j]'s highscore is greater than tempArray[max]'s highscore.
         */
        for (var j = i + 1; j < tempArray.length; j++) {
            if (tempArray[j]['highscore'] > tempArray[max]['highscore']) {
                max = j;
            }
        }

        /**
         * TempArray[i] and tempArray[max] are swapped if i isn't equal to max.
         */
        if (i != max) {
            var temp = tempArray[i];
            tempArray[i] = tempArray[max];
            tempArray[max] = temp;
        }
    }

    return tempArray; // Returns an array of sorted account objects
}

/**
 * getAccounts: Returns an array of unsorted account objects.
 */
function getAccounts() {
    var accounts = [];

    /**
     * Traverses through localStorage using key i, parses key i's value and assigns it to the accounts array.
     */
    for (var i = 1; i <= localStorage.length; i++) {
        accounts[i - 1] = (JSON.parse(getItem(1, i)));
    }

    return accounts; // Returns an array of account objects.
}

/**
 * getLoggedIn: Returns the localStorage key for the account currently logged in.
 */
function getLoggedIn() {
    /**
     * Uses 'loggedIn' as the key for sessionStorage, which returns a value that is parsed.
     * The parsed value is passed into getUsernameKey's parameter which then returns the localStorage
     * key for the account currently logged in.
     *
     * However, if the value of 'loggedIn' is null, null is returned.
     */
    if (getItem(2, 'loggedIn') === null) {
        return null;
    }

    return getUsernameKey(JSON.parse(getItem(2, 'loggedIn')));
}

/**
 * updateAccount: Updates the currently logged in accounts score by replacing the existing account item with a new
 * account item.
 */
function updateAccount() {
    var account = JSON.parse(getItem(1, getLoggedIn())); // Assigns the account object
    var key = getLoggedIn(); // Assigns the localStorage key for the account

    if (player.getHighScore() > account.highscore) {
        /**
         * If the player object accessor, getHighScore(), is greater than the highscore stored in localStorage,
         * assign the highscore in the player object to the account object.
         */

        account.highscore = player.getHighScore();
    }

    setItem(key, JSON.stringify(account)); // Convert the account variable to a JSON string and replace the account in localStorage
    updateRanks(); // Update all account ranks
}

/*********
 * 2. Game
 */

/*******************
 * 2.1 Game: Objects
 */

/**
 * Game Object: An object literal used for tracking game state.
 */
var game = {
    status: false,
    gameOver: false,
    levelCompleted: false,
    totalFlipped: 0,
    cardIDs: [],
    matchedIDs: [],
    maxNumber: 10,

    getStatus: function() {
        return this.status;
    },

    getGameOver: function() {
        return this.gameOver;
    },

    getLevelCompleted: function() {
        return this.levelCompleted;
    },

    getTotalFlipped: function() {
        return this.totalFlipped;
    },

    getCardIDs: function() {
        return this.cardIDs;
    },

    getMatchedIDs: function() {
        return this.matchedIDs;
    },

    getMaxNumber: function() {
        return this.maxNumber;
    },

    setStatus: function(status) {
        this.status = status;
    },

    setGameOver: function(gameOver) {
        this.gameOver = gameOver;
    },

    setLevelCompleted: function(levelCompleted) {
        this.levelCompleted = levelCompleted;
    },

    setTotalFlipped: function(totalFlipped) {
        this.totalFlipped = totalFlipped;
    },

    setCardIDs: function(cardIDs) {
        this.cardIDs = cardIDs;
    },

    setMatchedIDs: function(matchedIDs) {
        this.matchedIDs = matchedIDs;
    },

    setMaxNumber: function(maxNumber) {
        this.maxNumber = maxNumber;
    },

    reset: function() {
        this.setStatus(false);
        this.setGameOver(false);
        this.setLevelCompleted(false);
        this.setTotalFlipped(0);
        this.setCardIDs([]);
        this.setMatchedIDs([]);
        this.setMaxNumber(10);
    }
};

/**
 * Player Object: An object literal used for tracking game progression.
 */
var player = {
    level: 1,
    score: 0,
    highScore: 0,

    getLevel: function() {
        return this.level;
    },

    getScore: function() {
        return this.score;
    },

    getHighScore: function() {
        return this.highScore;
    },

    setLevel: function(level) {
        this.level = level;
    },

    setScore: function(score) {
        this.score = score;
    },

    setHighScore: function(highScore) {
        this.highScore = highScore;
    },

    reset: function() {
        this.setLevel(1);
        this.setScore(0);
    }
};

/****************
 * 2.2 Game: Grid
 */

var grid = shuffleArray(getCardNumbers()); // Assigns a shuffled array of values


/**
 * shuffleArray: Returns a shuffled array.
 */
function shuffleArray(array) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

/**
 * getCardNumbers: Returns an array of 18 numbers, 9 are unique and the remaining 9 are duplicates,
 * e.g. [2, 2, 4, 4, 3, 3, ..., 9, 9].
 */
function getCardNumbers() {
    var tempArray = []; // Assigns an empty array which is used to store 18 numbers

    /**
     * 18 numbers are needed, i is incremented by 2 because a unique number is duplicated.
     */
    for (var i = 0; i < 18; i = i + 2) {
        var randomNumber, flag = true;

        /**
         * A while loop is used to generate a random number and check if it's unique, i.e. it doesn't
         * already exist in tempArray.
         */
        while (flag) {
            var tempNumber = getRandomNumber(); // Assigns a random number to tempNumber

            if (!(numberExists(tempArray, tempNumber))) { // Checks if tempNumber is unique
                randomNumber = tempNumber; // Assigns tempNumber to randomNumber
                flag = false;
            }
        }

        /**
         * The unique number is assigned to i and duplicated in i + 1.
         */
        tempArray[i] = randomNumber;
        tempArray[i + 1] = randomNumber;
    }

    return tempArray;
}

/******************************
 * 2.2.1 Grid: Helper Functions
 */

/**
 * getRandomNumber: Returns a random integer between 1 and game.getMaxNumber().
 */
function getRandomNumber() {
    return parseInt(1 + (Math.random() * game.getMaxNumber())); // The floating point number is truncated using parseInt()
}

/**
 * numberExists: Traverses through a given array and checks if n exists. Returns true if n is found, false if it is not.
 */
function numberExists(array, n) {
    for (var i = 0; i < array.length; i++) {
        if (n == array[i]) { // Returns true if n is found in the array
            return true;
        }
    }

    return false; // Returns false if n is not found in the array
}

/**********************
 * 2.3 Game: State
 */

/**
 * startGame: Initialises the game.
 */
function startGame() {
    game.setStatus(true); // Status is set to true
    startTimer(); // Countdown timer is started
    addClass(0, 'startButton', 'start-button-active'); // The 'start-button-active' class is added to the start button
}

/**
 * resetGame: Restores the game back to its initial state.
 */
function resetGame() {
    game.reset();
    player.reset();
}

/**
 * flipCard: Flips a card to display its hidden number.
 */
function flipCard(id, action) {
    if (action == 1) {
        /**
         * Action 1: Used to flip both cards when they do not match.
         */
        $('#' + id).toggleClass('flipped');
    }
    else if (canFlip(id)) {
        if (game.getTotalFlipped() !== 2) {
            /**
             * Flips a card if 2 cards are not already flipped.
             */
            $('#' + id).toggleClass('flipped');
            evaluateGame(getIDNumber(id));
        }
    }

    /**
     * canFlip: Determines if a card can be flipped or not.
     */
    function canFlip(id) {
        var flag = game.getStatus(); // Assigns game.status

        if (flag) {
            if (alreadySelected(getIDNumber(id)) || alreadyMatched(getIDNumber(id))) {
                /**
                 * If a given card ID has already been selected
                 * or matched, false is assigned to flag.
                 */

                flag = false;
            }
        }

        return flag;
    }
}

/*******************************
 * 2.3.1 State: Helper Functions
 */

/**
 * alreadySelected: Validates whether an card has already been selected. Returns true if it has
 * been selected already, false if not.
 */
function alreadySelected(id) {
    /**
     * Compares the card id to index 0 and 1 of game.getCardIDs(), which is an array that contains
     * recently selected cards.
     */
    if (id == game.getCardIDs()[0] || game.getCardIDs()[1]) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * alreadyMatched: Validates whether a card has already been matched. Returns true if it has been
 * matched already, false if not.
 */
function alreadyMatched(id) {
    /**
     * Compares the card id to an element in game.getMatchedIDs(). If the same card id is found, the card
     * has already been matched. False is returned when the loop-continuation condition is no longer met.
     */
    for (var i = 0; i < game.getMatchedIDs().length; i++) {
        if (id == game.getMatchedIDs()[i]) {
            return true;
        }
    }

    return false;
}

/**
 * getIDNumber: Returns a number in a given card ID string, e.g. "card-14" returns "14".
 */
function getIDNumber(id) {
    if (id.length < 7) {
        return id.substr(id.length - 1);
    }
    else {
        return id.substr(id.length - 2);
    }
}

/**********************
 * 2.4 Game: Evaluation
 */

/**
 * evaluteGame: Evaluates game interaction by obtaining the value of each card
 * selected and verifying if the cards match.
 */
function evaluateGame(id) {
    game.setTotalFlipped(game.getTotalFlipped() + 1); // Increments totalFlipped by 1

    storeCardID(id); // Store the card ID
    setCardValue(id); // Display hidden number

    /**
     * Check if 2 cards have been flipped and if they match.
     */
    if (game.getTotalFlipped() == 2) {
        if (cardsMatch()) {
            var ids = [game.getCardIDs()][0]; // Assigns the 2 matched card IDs

            addMatches(); // Store the 2 matched card IDs

            setTimeout(function() {
                /**
                 * After 1000ms:
                 * (1) Reset game.cardIDs and game.totalFlipped
                 * (2) Add the animated 'matched' effects to both card IDs
                 * (3) Update the players score
                 * (4) Update level
                 */

                clearSelections(1, ids);
                addClass(2, ids);
                updateScore();
                updateLevel();
            }, 1000);
        }
        else {
            setTimeout(function () {
                /**
                 * After 1000ms:
                 * (1) Flip both cards back to their front
                 * (2) Reset game.cardIDs, game.totalFlipped and hide both card numbers
                 */

                flipCard('card-' + game.getCardIDs()[0], 1);
                flipCard('card-' + game.getCardIDs()[1], 1);
                clearSelections();
            }, 1000);
        }
    }
}

/************************************
 * 2.4.1 Evaluation: Helper Functions
 */

/**
 * storeCardID: Stores a card ID number in either index[0] or index[1], depending on the value of totalFlipped.
 */
function storeCardID(n) {
    var tempArray = game.getCardIDs(); // Assigns an array of recently selected cards

    /**
     * If 1 card has been flipped, the card ID number is assigned to index[0] of tempArray.
     * Otherwise, it is assigned to index[1]. tempArray is then assigned to game.cardIDs,
     * using setCardIDs.
     */
    if (game.getTotalFlipped() == 1) {
        tempArray[0] = n;
        game.setCardIDs(tempArray);
    }
    else {
        tempArray[1] = n;
        game.setCardIDs(tempArray);
    }
}

/**
 * setCardValue: Replaces the text of a given card ID number and replaces it with its associated grid value,
 * e.g. back-0's initial HTML content, '?', is replaced with grid[0].
 */
function setCardValue(n) {
    var id = 'back-' + n; // Concatenates 'back-' with a card ID number
    getElementById(id).innerHTML = grid[n]; // The HTML content for id is replaced with its associated grid value
}

/**
 * cardsMatch: If two selected cards match each other, true is returned. If they do not match each other
 * false is returned.
 */
function cardsMatch() {
    var id1 = 'back-' + game.getCardIDs()[0]; // Concatenates 'back-' with the card ID number in game.cardIDs[0]
    var id2 = 'back-' + game.getCardIDs()[1]; // Concatenates 'back-' with the card ID number in game.cardIDs[1]


    if (getElementById(id1).innerHTML == getElementById(id2).innerHTML) { // Compares the HTML content of id1 and id2 for equality
        return true;
    }

    return false;
}

/**
 * addMatches: Adds two new matching card IDs to the end of the game.matchedIDs array.
 */
function addMatches() {
    var tempArray = game.getMatchedIDs(); // Assigns an array of matched card IDs

    /**
     * Add card ID 1 (index 0) and card ID 2 (index 1) of the game.cardIDs array to
     * the end of tempArray.
     */
    tempArray[tempArray.length] = game.getCardIDs()[0];
    tempArray[tempArray.length++] = game.getCardIDs()[1];

    game.setMatchedIDs(tempArray); // Assigns tempArray to game.matchedIDs
}

/**
 * clearSelections: Resets the game.cardIDs game.totalFlipped.
 * The HTML content of both cards are reset if 1 is passed into the action parameter,
 * and the HTML content of both cards are set to empty if 2 is passed into the action parameter.
 */
function clearSelections(action, id) {
    if (action == 1) {
        for (var i = 0; i < 2; i++) {
            /**
             * The HTML content of both cards is set to empty.
             */
            getElementById('front-' + id[i]).innerHTML = "";
            getElementById('back-' + id[i]).innerHTML = "";
        }
    }
    else {
        /**
         * The HTML content of both cards is reset to '?'.
         */
        removeCardValues();
    }
    /**
     * game.cardIDs and game.totalFlipped are reset after 125ms.
     */

    setTimeout(function() {
        game.setCardIDs([]);
        game.setTotalFlipped(0);
    }, 125);
}

/**
 * removeCardValues: Resets the HTML content of a card back to its default value.
 */
function removeCardValues() {
    getElementById('back-' + game.getCardIDs()[0]).innerHTML = "?";
    getElementById('back-' + game.getCardIDs()[1]).innerHTML = "?";
}

/******************
 * 2.5 Game: Levels
 */

/**
 * updateLevel: Updates a players level.
 */
function updateLevel() {
    if (isComplete()) {
        /**
         * If the level has been completed:
         * (1) Increment player.level and set game.levelCompleted to true
         * (2) Update the maximum number a card can be
         * (3) Start a new level
         */

        player.setLevel(player.getLevel() + 1);
        game.setLevelCompleted(true);
        updateMaxNumber(player.getLevel());
        newLevel();
    }
    else if (isGameOver()) {
        /**
         * If the game is over, the game is reset back to its initial state.
         */

        resetGame(); // Resets the player and game objects
        grid = shuffleArray(getCardNumbers()); // Assigns a shuffled array of values

        setTimeout(function () {
            /**
             * Classes and HTML content are reset after 1000ms.
             */

            resetCardValues();
            addClass(3);
            removeClass(2);
            removeClass(0, 'startButton', 'start-button-active');

            getElementById('level').innerHTML = "" + player.getLevel();
            getElementById('score').innerHTML = "" + player.getScore();
            getElementById('time').innerHTML = "2 : 30";
        }, 1000);

        setTimeout(function () {
            /**
             * The cards are displayed after 1800ms.
             */

            removeClass(3);
        }, 1800);
    }
}

/********************************
 * 2.5.1 Levels: Helper Functions
 */

/**
 * isComplete: Returns true if game.matchedIDs has a length of 18, false otherwise.
 */
function isComplete() {
    return (game.getMatchedIDs().length == 18) ? true : false;
}

/**
 * updateMaxNumber: Increases the maximum number a card can be.
 */
function updateMaxNumber(level) {
    var tempArray = [3, 5, 7, 9];

    for (var i = 0; i < tempArray.length; i++) {
        /**
         * game.maxNumber is increased by its current value multiplied by 2 if the
         * current level is equal to an element in tempArray.
         */

        if (level == tempArray[i])
            game.setMaxNumber(game.getMaxNumber() * 2);
    }
}

/**
 * newLevel: Initialises a new level.
 */
function newLevel() {
    grid = shuffleArray(getCardNumbers()); // Assigns a shuffled array of values

    setTimeout(function () {
        resetCardValues(); // Every cards HTML content is reset
        addClass(3); // Adds the transition effect 'flipInX'
        removeClass(2); // Removes all classes that aren't needed

        /**
         * The HTML content for 'time' and 'level' is set with a new time and the players current level.
         */
        getElementById('time').innerHTML = getTime();
        getElementById('level').innerHTML = player.getLevel();

        game.setLevelCompleted(false); // game.levelCompleted is set to false
    }, 1000);

    setTimeout(function () {
        /**
         * After 1800ms, the 'flipInX' class is removed from all cards and the timer is started.
         */
        removeClass(3);
        startTimer();
    }, 1800);

    game.setMatchedIDs([]); // game.matchedIDs is reset
}

/**
 * resetCardValues: Resets all cards back to their initial state.
 */
function resetCardValues() {
    for (var i = 0; i < 18; i++) {
        getElementById('front-' + i).innerHTML = "?";
        getElementById('back-' + i).innerHTML = "?";
    }
}

/**
 * isGameOver: Returns game.gameOver.
 */
function isGameOver() {
    return game.getGameOver();
}

/**
 * getTime: Returns a new time for every level milestone reached.
 */
function getTime() {
    /**
     * When a player reaches a level such as 3, 5, 7 or 9 a new time is returned.
     * The time returned decreases as the players level increases.
     */

    if (player.getLevel() <= 2) {
        return "2 : 30";
    }
    else if (player.getLevel() <= 4) {
        return "2 : 00";
    }
    else if (player.getLevel() <= 6) {
        return "1 : 30";
    }
    else if (player.getLevel() <= 8) {
        return "1 : 00";
    }
    else {
        return "1 : 00";
    }
}

/*******************
 * 2.6 Game: Scores
 */

/**
 * updateScore: Updates the player score in both the player object, and HTML content.
 */
function updateScore() {
    player.setScore(getScore()); // Assigns a new score to player.score

    /**
     * If the players new score is greater than the players highscore,
     * the players highscore becomes the players new score.
     */
    if (player.getScore() > player.getHighScore()) {
        player.setHighScore(player.getScore());
    }

    /**
     * If an account is logged in, the accounts highscore and ranks HTML content is updated.
     */
    if (getItem(2, 'loggedIn') !== null) {
        updateAccount();
        getElementById('rank').innerHTML = "" + JSON.parse(getItem(1, getLoggedIn()))['rank'];
    }

    /**
     * The HTML content for score and highscore is updated.
     */
    getElementById('score').innerHTML = "" + player.getScore();
    getElementById('highscore').innerHTML = "" + player.getHighScore();
}

/********************************
 * 2.6.1 Scores: Helper Functions
 */

/**
 * Returns a number that has 2 x n added onto the current score, where n is the multiplier. The value
 * of the multiplier depends on which level the player is currently on.
 */
function getScore() {
    var multiplier;

    if (player.getLevel() <= 2) {
        multiplier = 1;
    }
    else if (player.getLevel() <= 4) {
        multiplier = 2;
    }
    else if (player.getLevel() <= 6) {
        multiplier = 3;
    }
    else if (player.getLevel() <= 8) {
        multiplier = 4;
    }
    else if (player.getLevel() <= 10) {
        multiplier = 5;
    }

    return player.getScore() + (2 * multiplier);
}

/*****************
 * 2.7 Game: Timer
 */

/**
 * startTimer: Initialises the timer.
 */
function startTimer() {
    /**
     * The HTML content of time is split into an array of strings. The Number() function is used
     * to convert the strings into a number, e.g. 2 : 30 is converted to 230.
     */
    var currentTime = (getElementById('time').innerHTML).match(/[^\s:]/g);
    currentTime = Number(currentTime[0] + currentTime[1] + currentTime[2]);

    /**
     * Reduces the current time every 1000ms.
     */
    var timeInterval = setInterval(function () {
        checkTime(currentTime, timeInterval); // Checks if the timer has reached 0:00 or if the level has been completed

        if (currentTime % 100 == 0 && currentTime != 0)
            currentTime -= 41;
        else if (currentTime != 0)
            currentTime -= 1;

        updateTime(currentTime); // Formats and updates the time remaining
    }, 1000);

    /**
     * updateTime: Formats currentTime, and updates the HTML content of time.
     */
    function updateTime(currentTime) {
        if (currentTime.toString().length == 1) {
            getElementById('time').innerHTML = ("0 : 0" + currentTime);
        }
        else if (currentTime.toString().length == 2) {
            getElementById('time').innerHTML = ("0 : " + currentTime);
        }
        else {
            var tempString = currentTime.toString().split("");
            getElementById('time').innerHTML = ("" + tempString[0] + " : " + tempString[1] + tempString[2]);
        }
    }

    /**
     * checkTime: Stops the timer if the level has been completed, or if the timer has run out.
     */
    function checkTime(currentTime, timeInterval) {
        if (currentTime == 0) {
            /**
             * The game is reset if the timer reaches 0.
             */
            clearInterval(timeInterval);
            game.setGameOver(true);

            updateLevel();
        }
        else if (game.getLevelCompleted()) {
            /**
             * The timer is stopped and will be reset soon.
             */
            clearInterval(timeInterval);
        }
    }
}

/*********************
 * 3. Helper Functions
 */

/**
 * getElementByID: Returns element when given an ID.
 */
function getElementById(id) {
    return document.getElementById(id);
}

/**
 * addClass: Adds a class to a given ID.
 */
function addClass(action, id, newClass) {
    if (action == 1) {
        /**
         * Action 1: Initiates the start button animation effect by adding classes 'animated' and 'pulse'.
         */
        getElementById(id).classList.add('animated', 'pulse');

        /**
         * Removes the two classes after 700ms.
         */
        setTimeout(function() {
            removeClass(action, id);
        }, 700);
    }
    else if (action == 2) {
        /**
         * Action 2: Adds an animation effect to two cards when they have been matched.
         */
        for (var i = 0; i < 2; i++) {
            getElementById('card-' + id[i]).classList.add('animated');
            getElementById('card-' + id[i]).classList.add('flipOutX');
            getElementById('front-' + id[i]).classList.add('fa');
            getElementById('front-' + id[i]).classList.add('fa-check');
            getElementById('back-' + id[i]).classList.add('fa');
            getElementById('back-' + id[i]).classList.add('fa-check');
        }
    }
    else if (action == 3) {
        /**
         * Adds an animation effect to all cards when the game is over. The effect transitions
         * all cards that were matched back on to the screen.
         */
        for (var i = 0; i < 18; i++) {
            getElementById('card-' + i).classList.add('flipInX');
        }
    }
    else
        getElementById(id).classList.add(newClass);
}

/**
 * removeClass: Removes a class in a given ID.
 */
function removeClass(action, id, newClass) {
    if (action == 1)
        /**
         * Action 1: Removes the classes 'animated' and 'pulse' from the start button.
         */
        getElementById(id).classList.remove('animated', 'pulse');
    else if (action == 2) {
        /**
         * Action 2: Removes the classes below from all cards when the game is over.
         */
        for (var i = 0; i < 18; i++) {
            getElementById('card-' + i).classList.remove('flipped');
            getElementById('card-' + i).classList.remove('flipOutX');
            getElementById('front-' + i).classList.remove('fa', 'fa-check');
            getElementById('back-' + i).classList.remove('fa', 'fa-check');
        }
    }
    else if (action == 3) {
        /**
         * Action 3: Removes the classes below from all cards. This occurs just before
         * the game has been completely reset.
         */
        for (var i = 0; i < 18; i++) {
            getElementById('card-' + i).classList.remove('animated');
            getElementById('card-' + i).classList.remove('flipInX');
        }
    }
    else
        getElementById(id).classList.remove(newClass);
}