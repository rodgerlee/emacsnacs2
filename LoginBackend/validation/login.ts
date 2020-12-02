const Valid = require("validtaor");
const Empty = require("is-empty");

module.exports = function validateLoginInput(data:any) {
    let errors: any = {};

    data.email = !Empty(data.email) ? data.email : "";
    data.password = !Empty(data.password) ? data.password : "";

    if (Valid.Empty(data.email)){
        errors.email = "Email field required";
    }
    else if (!Valid.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if (Valid.Empty(data.password)){
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: Empty(errors)
    };
};