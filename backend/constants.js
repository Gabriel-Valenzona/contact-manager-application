// Using a constants.js file centralizes important values like HTTP status codes in one place.
// This improves code readability, prevents "magic numbers," ensures consistency across the project,
// and makes updates easier in the future. It's also a best practice for teamwork and reduces bugs from typos.

exports.constants = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,  
};