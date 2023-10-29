const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: '[name].js',
    }
}