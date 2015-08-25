module.exports = {
    dist: {
        files: {
            "<%= path.dest %>js/main.js" : [
                "<%= path.src %>lib/**/*.js",
                "<%= path.src %>js/main.js"
            ]
        }
    }
};