const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    console.log("hi");
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.email)){
        errors.email = "Email field required";
    }
    else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.password2)){
        errors.password2 = "Passwords must match";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 20 })){
        errors.password = "Password should be between 6 and 20 characters";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    console.log(errors); //get rid of this

    return {
        errors,
        isValid: isEmpty(errors)
    };
};