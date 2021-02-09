# Login / Register app

1. Write a simple register program that will take new user's username and password and save it. Display the usernames of all existing users in a list.

- Users should be stored in array of User objects
- Array need to have one admin user by default when the application is started
- User need to have at least 3 properties: Username, Password and isAdmin

2. Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app").

3. Add an option for logging out.

4. Add some further validation to all input fields for the usernames and passwords

- The user has to enter both username and password
- Register or login should not proceed with empty inputs
- Username needs to include more than 3 characters
- Password has to be longer than 6 characters

5. Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usernames and passwords in a list or table.

# Flow

1. HTML!!! (Login form, Register form, Logout, Admin panel (unordered list or table))
2. Global variables array of users and currentUser object of user
3. Function constructor User(username, password, isAdmin)
4. Events and other function (don't forget the checks)
