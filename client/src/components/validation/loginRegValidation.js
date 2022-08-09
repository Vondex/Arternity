const loginRegValidation = (values) => {
    const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let errors = {};
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!EMAIL_PATTERN.test(values.email)){
        errors.email = "Email is invalid"
    }
    if (!values.username) {
        errors.username = "Username is required"
    } else if (values.username.length < 4) {
        errors.username = "Username must be at least 4 characters!"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters!"
    }
    if (!values.confirm) {
        errors.confirm = "Password is required"
    } else if (values.confirm != values.password) {
        errors.password = "Passwords don't match!"
    }

    return errors;
}

export default loginRegValidation;