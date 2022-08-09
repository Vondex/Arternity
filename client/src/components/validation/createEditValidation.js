const createEditValidation = (values) => {
    const URL_PATTERN = /^https?:\/\/(.+)/;
    let errors = {};
    if (!values.title) {
        errors.title = "Title is required"
    } else if (values.title.length < 3) {
        errors.title = "Title must be at least 3 characters!"
    }
    if (!values.author) {
        errors.author = "Author is required"
    } 
    if (!values.genre) {
        errors.genre = "Genre is required"
    } 
    if (!values.date) {
        errors.date = "Date is required"
    } 
    if (!values.image) {
        errors.image = "Image is required"
    } else if (!URL_PATTERN.test(values.image)){
        errors.image = "ImageURL is invalid"
    }
    if (!values.description) {
        errors.description = "Description is required"
    } else if (values.description.length < 10) {
        errors.description = "Description must be at least 10 characters!"
    }

    return errors;
}

export default createEditValidation;