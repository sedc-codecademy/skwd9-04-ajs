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

// Signup form
const signupForm = document.querySelector('#signup-form');
const signupTitle = signupForm.querySelector('#signup-title');
const signupEmail = signupForm.querySelector('#signup-email');
const signupPassword = signupForm.querySelector('#signup-password');
const signupBtn = signupForm.querySelector('#signup-button');
const signupError = signupForm.querySelector('#signup-error');

// [Data]


// [Functions]


// [Event Handlers]

// [Models]


// [Initialization]

