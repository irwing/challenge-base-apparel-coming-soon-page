// validation email
function validateEmpty(string) {

    return (
        typeof string == 'undefined' || 
        string === null || 
        string.length > 0
    ) ? true: false;
}

// validation email
function validateEmail(email) {

    // validate email is not empty
    validateEmpty(email);

    let expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (expresion.test(email)) ? true: false;
}