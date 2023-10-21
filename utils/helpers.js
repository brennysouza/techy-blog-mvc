// This code is a helper function that will format the date to be more readable and user-friendly. Furthermore it will be used in the handlebars files to format the date.

module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    }
}
