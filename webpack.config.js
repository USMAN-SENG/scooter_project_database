const path = require('path')

module.exports = {
  mode: 'development',
  entry:  {
    index: './src/index.js',
    employee: './src/employee.js',
    scooter: './src/scooter.js',
    scooterRecord: './src/scooterRecord.js',

  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  watch: true
}
