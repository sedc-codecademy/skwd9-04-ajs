
function User(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin
}

let admin = new User("admin", "admin123", true);
let admin1 = new User("admin1", "admin456", true);
let users = [];
users.push(admin);
users.push(admin1);
let loggedUser = null;

$(document).ready(function() {

    // REGISTER
    let registerUserName = $("#register-username");
    let registerUserPassword = $("#register-password");
    let registerDiv = $("#register-form");
    let registerDisplay = $("#register-display");
    let registerButton = $("#register");
    let registerOption = $("#reg-opt");

    // LOGIN

    let loginOption = $("#login-opt");
    let loginUserName = $("#login-username");
    let loginUserPassword = $("#login-password");
    let loginDiv = $("#login-form");
    let loginDisplay = $("#login-display");
    let loginButton = $("#login");
    let logoutButton = $("#logout");

    // PANELS
    let userDisplay = $("#user-display");
    let adminPanel = $("#adminPanel");

    // Vanilla JS
    // loginDiv.style.display = "none"

    loginDiv.hide();
    registerOption.hide();
    userDisplay.hide();
    adminPanel.hide();
    logoutButton.hide();

    loginOption.click(function() {
        loginOption.hide();
        registerDiv.hide();
        loginDiv.show();
        registerOption.show();
    })

    registerOption.click(function() {
        registerOption.hide();
        loginOption.show();
        loginDiv.hide();
        registerDiv.show();
    })

    function register() {
        let userAlreadyExist = false;
        let isUserNameValid = false;
        let isUserPasswordValid = false;

        for(user of users) {
            if (user.username === registerUserName.val()) {
                userAlreadyExist = true;
            }
        }

        if (registerUserName.val().length > 3) {
            isUserNameValid = true;
        }

        if (registerUserPassword.val().length > 3) {
            isUserPasswordValid = true;
        }

        if (!isUserNameValid || !isUserPasswordValid || userAlreadyExist) {
            registerDisplay.text("usename or password are invalid, or username already exist!");
            registerDisplay.css("color", "red")
        } else {
            let newUser = new User(registerUserName.val(), registerUserPassword.val(), false);
            users.push(newUser);
            registerDisplay.text("User successfully added");
            registerDisplay.css("color", "green")
            console.log(users)
        }
        // VANILA JS
        // registerUserName.value = ""
        registerUserName.val("");
        registerUserPassword.val("");
    }

    // VANILA JS
    // registerButton.addEventListener("click", register)

    registerButton.click(register);

    function hideAdminPanel() {
        adminPanel.hide();
    }
    function showAdminPanel() {
        adminPanel.show();
        let listOfUserCredentials = $("#registeredUsers");
        for(let user of users) {
            // VANILA JS
            // listOfUserCredentials.appendChild();
            listOfUserCredentials.append(`<li> UserName: ${user.username}, Password: ${user.password}`);
        }
    }

    function login() {
        for(let i = 0; i < users.length; i++) {
            if (users[i].username === loginUserName.val() && users[i].password === loginUserPassword.val()) {
                loggedUser = users[i];
                console.log(loggedUser)
            }
        }

        if (!loggedUser) {
            loginDisplay.text("Invalid username or password");
            loginDisplay.css("color", "red");
        } else {
            userDisplay.show();
            userDisplay.text(`Hello, ${loggedUser.username}`);
            loginDiv.hide();
            registerOption.hide();
            logoutButton.show();
            loginUserName.val("");
            loginUserPassword.val("")
            if (loggedUser.isAdmin === true) {
                showAdminPanel();
            } else {
                hideAdminPanel();
            }
        }
    }


    loginButton.click(login);

    function logout() {
        loggedUser = null;
        userDisplay.hide();
        hideAdminPanel();
        loginDiv.show();
        registerOption.show();
        logoutButton.hide();
    }

    logoutButton.click(logout);

})