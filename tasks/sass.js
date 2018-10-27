const sass = require('node-sass');

module.exports = {
  options: {
    implementation: sass,
    includePaths: ['./node_modules']
  },
  build: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './build/assets/styles',
    ext: '.css'
  },
  dev: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './tmp/assets/styles',
    ext: '.css'
  }
};
