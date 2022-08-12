const commentValidation = (textAreaContent) => {

    let errors = {};
    if (!textAreaContent.comment) {
        errors.comment = "Content is required"
    } 

    return errors;
}

export default commentValidation;