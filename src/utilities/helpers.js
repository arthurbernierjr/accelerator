export const formatModString = (modString) => {
    // Extract the numeric part from the string
    const modNumber = modString.replace('mod', '');
    // Return the formatted string
    return `Module ${modNumber}`;
};

export const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};