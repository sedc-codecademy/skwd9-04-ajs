// Requirements:
// Login form that contains: email, password. This is the first form the user sees, there is a link to signup form from here if he doesn't have an account
// Sing up form that contains: name, email, password. There is a link at the bottom that takes the user to the login form
// If the user enters improper values in the inputs (both on signup and login forms), or hasn't entered any value and tries to submit the form, an error message should appear.
// When the user has singed up successfully, he is navigated to the login form to login.
// When the user has logged in successfully, he is navigated to the homepage.
// If the uer has entered improper credentials, an error message should appear.
// Homepage contains a message welcoming the user, containing the users name. A link for logout should be present at the bottom.
// When the user logged out, he is taken to the login page.

// [Selectors]

// Login form
const loginForm = document.querySelector('#login-form');
const loginTitle = loginForm.querySelector('#login-title');
const loginEmail = loginForm.querySelector('#login-email');
const loginPassword = loginForm.querySelector('#login-password');
const loginBtn = loginForm.querySelector('#login-button');
const loginError = loginForm.querySelector('#login-error');
const loginInputs = [loginEmail, loginPassword];

// Signup form
const signupForm = document.querySelector('#signup-form');
const signupTitle = signupForm.querySelector('#signup-title');
const signupName = signupForm.querySelector('#signup-name');
const signupEmail = signupForm.querySelector('#signup-email');
const signupPassword = signupForm.querySelector('#signup-password');
const signupBtn = signupForm.querySelector('#signup-button');
const signupError = signupForm.querySelector('#signup-error');
const signupInputs = [signupName, signupEmail, signupPassword];

// Other elements, pages, etc.
const links = document.querySelectorAll('.link')
const homePage = document.querySelector('#home-page')
const authPage = document.querySelector('#auth-page')
const logOutBtn = homePage.querySelector('a')
const homePageTitle = homePage.querySelector('h1')

// [Data]
let showLoginForm = true;
const users = [];

// [Functions]

function signUp() {
    // Reset signup form errors
    signupError.innerText = '';
    // if we have invalid inputs, show error
    if (!validateInputs(signupInputs)) {
        signupError.innerText = 'Please check inputs';
        // Return to stop the further execution of code
        return;
    }
    // creating the User
    const user = new User(
        signupEmail.value,
        signupPassword.value,
        signupName.value
    )
    // adding the user to the users list
    users.push(user);

    // cleanup the inputs
    cleanUpInputs(signupInputs);

    // navigate to the login form
    showLoginForm = true;
    showForm();
}

function logIn() {
    // reset error message
    loginError.innerText = '';
    // if we have invalid inputs we are showing error
    if (!validateInputs(loginInputs)) {
        loginError.innerText = 'Please check inputs';
        return;
    } 

    // this will be undefined until a user is found
    let loggedInUser;

    // searching for a user with the same email and password as entered in the login form
    for (const user of users) {
        if (user.email === loginEmail.value && user.password === loginPassword.value) {
            // if a user is found, stop searching and save the user to the loggedInUser variable
            loggedInUser = user;
            break;
        }
    }

    // if no user is found, show error
    if (!loggedInUser) {
        loginError.innerText = 'Entered credentials are wrong, please check and try again';
        return;
    }

    // clean input values
    cleanUpInputs(loginInputs);

    // Show logged in info to the logged in user
    homePageTitle.innerText = `Hi, you are logged in as ${loggedInUser.name}`;

    // show the homepage and hide the forms
    changeView(homePage, authPage)
}

function logOut() {
    // Reset the title on homepage
    homePageTitle.innerText = '';

    // show authentication page and hide homepage
    changeView(authPage, homePage);

    // making sure that we show the login form
    showLoginForm = true;
    showForm();
}

function cleanUpInputs(inputs) {
    for (const input of inputs) {
        // setting the values to default
        input.value = '';
    }
}

// Determines if an array of inputs is valid or not
function validateInputs(inputs) {
    // go over all the inputs
    for (const input of inputs) {
        // checking if the value is not empty string, not undefined, not NaN, not null etc.
        if (!input.value) {
            // if we find an invalid input, we are stopping the loop
            return false;
        }
    }
    // if we don't find anything invalid, we are saying that the whole array is valid
    return true;
}

// Determine which form should be shown
function showForm() {
    if (showLoginForm) {
        // hide signup, show login
        changeView(loginForm, signupForm)
    } else {
        // hide login, show signup
        changeView(signupForm, loginForm)
    }
}

// Show elements / Hide elements
function changeView(show, hide) {
    show.style.display = 'block';
    hide.style.display = 'none';
}

// Run the functions that need to be run at the start up of the app
function init() {
    showForm();
    setLinkEventHandlers();
    changeView(authPage, homePage);
}

// [Event Handlers]

function setLinkEventHandlers() {
    // go though all the link elements
    for (const link of links) {
        // attach event listeners to each single one of them
        link.addEventListener('click', function () {
            // Show the opposite of whatever is shown at the moment
            showLoginForm = !showLoginForm;
            showForm();
        })
    }
}

// passing a reference to the functions to be called when event is triggers
signupBtn.addEventListener('click', signUp)
loginBtn.addEventListener('click', logIn)
logOutBtn.addEventListener('click', logOut)

// [Models]
function User(email, password, name) {
     this.email = email;
     this.password = password;
     this.name = name;
}

// [Initialization]

init();