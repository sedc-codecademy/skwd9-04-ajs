function validateInput(input) {
    if (input.length <= 5) {
        throw new Error("Input must me more that 5 characters long.");
    }

    if (input.length > 15) {
        throw new Error("Input must not be more that 15 charachters long.");
    }
}

function validateInputDefensive(input) {
    if (input.length <= 5) {
        return {
            isValid: false,
            message: "Input must me more that 5 characters long."
        }
    }

    if (input.length > 15) {
        return {
            isValid: false,
            message: "Input must not be more that 15 charachters long."
        }
    }

    return {
        isValid: true,
        message: null
    }
}

// try {
//     validateInput("asd");
// }
// catch (error) {
//     alert(error);
//     //location.replace(`https://www.google.com?q=${error}`);
// }

let isValidInput = validateInputDefensive("asd");

if (!isValidInput.isValid) {
    alert(isValidInput.message);
}