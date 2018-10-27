module.exports = {
  options: {
    background: true
  },
  dev: {
    options: {
      files: [
        './public/*.html',
        './tmp/assets/styles/*.css'
      ],
      server: {
        baseDir: ['./public', './tmp'],
        routes: {
          '/assets': './assets'
        }
      }
    }
  }
};
