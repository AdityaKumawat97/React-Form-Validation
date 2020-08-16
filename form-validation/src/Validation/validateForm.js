const formValid = async ({ formErrors, ...rest }) => {
    let valid = true;

    // Checking Error array if error array has a value the valid is set to false and vice versa
    await Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // to check if user presses the button leaving all fields empty
    await Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default formValid;