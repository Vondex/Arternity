const registerValidation = (values) => {
    const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    let errors = {};
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!EMAIL_PATTERN.test(values.email)){
        errors.email = "Email is invalid"
    }
    if (!values.username) {
        errors.username = "Username is required"
    } else if (values.username.length < 4) {
        errors.password = "Username must be at least 4 characters!"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters!"
    }

    return errors;
}

export default registerValidation;