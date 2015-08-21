module.exports = {
    dev: {
        options: {
            style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: '<%= path.src %>sass',
            src: ['*.{scss,sass}'],
            dest: '<%= path.dest %>css',
            ext: '.css'
        }]
    },
    dist: {
        options: {
            style: 'compressed'
        },
        files: [{
            expand: true,
            cwd: '<%= path.src %>sass',
            src: ['*.{scss,sass}'],
            dest: '<%= path.dest %>css',
            ext: '.css'
        }]
    }
};