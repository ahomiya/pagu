// Gulpfile.js
// Require Plugin Dependencies
// 19 FEB 2015
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync');
    // reload      = browserSync.reload,
    // devUrl      = 'lpagu.buzzwoo.de';

// -----------------------------------------------------------------------------
// Objects Path
var htdocs = {
  page : {
    site            : './htdocs/*.html'
  },
  css : {
    main            : './htdocs/css'
  },
  js: {
    custom          : './htdocs/js/main.js',
    vendor          : './htdocs/js/vendor'
  },
  sass: {
    all             : './htdocs/sass/**/*.scss',
    vendor          : './htdocs/sass/vendor/'
  },
  framework: {
    zurbFoundation  : './htdocs/sass/vendor/zurb_foundation',
    componentMixins : './htdocs/sass/vendor/zurb_foundation/foundation/components'
  }
};

var packages = {
  // Feature detection library
  features: [
    './vendor/package/modernizr/modernizr.js'
  ],

  // JavaScript libraries
  jsLibraries: [
    './vendor/package/jquery/dist/jquery.min.js',
    './vendor/package/enquire/dist/enquire.min.js'
  ],

  // Normalize
  normalize: [
    './vendor/package/normalize-scss/_normalize.scss'
  ],

  // Function and mixin library
  sukiyaki: [
    './vendor/package/sukiyaki/scss/**/*'
  ],

  // Mayer reset
  css_reset: [
    './vendor/package/meyer-reset/stylesheets/_meyer-reset.scss'
  ],

  // Zurb Foundation 5
  framework: {
    import_components: [
      './vendor/package/foundation/scss/foundation.scss'
    ],
    core: [
      './vendor/package/foundation/scss/foundation/*'
    ],
    mixin: [
      './vendor/package/foundation/scss/foundation/components/_global.scss',
      './vendor/package/foundation/scss/foundation/components/_grid.scss'
    ]
  }
};

// -----------------------------------------------------------------------------
// Gulp Tasks

// Feature detection
gulp.task('features', function() {
  return gulp.src(packages.features)
    .pipe(concat('features.js'))
    .pipe(gulp.dest(htdocs.js.vendor));
});

// JavaScript libraries
gulp.task('library', function() {
  return gulp.src(packages.jsLibraries)
    .pipe(concat('libraries.js'))
    .pipe(gulp.dest(htdocs.js.vendor));
});

// CSS Libraries
gulp.task('normalize', function() {
  return gulp.src(packages.normalize)
    .pipe(gulp.dest(htdocs.sass.vendor));
});

gulp.task('sukiyaki', function() {
  return gulp.src(packages.sukiyaki)
    .pipe(gulp.dest(htdocs.sass.vendor));
});

gulp.task('css-reset', function() {
  return gulp.src(packages.css_reset)
    .pipe(rename({
      prefix   : '_',
      basename : 'reset'
    }))
   .pipe(gulp.dest(htdocs.sass.vendor))
});

// Foundation 5 Framwork
gulp.task('foundation_import', function() {
  return gulp.src(packages.framework.import_components)
    .pipe(rename({prefix   : '_'}))
    .pipe(gulp.dest(htdocs.framework.zurbFoundation));
});

gulp.task('foundation5', function() {
  return gulp.src(packages.framework.core)
    .pipe(rename({
      dirname : 'foundation/'
    }))
    .pipe(gulp.dest(htdocs.framework.zurbFoundation));
});

gulp.task('foundation_mixins', function() {
  return gulp.src(packages.framework.mixin)
    .pipe(gulp.dest(htdocs.framework.componentMixins));
});

// Running gulp-sass based on Node-sass
gulp.task('sass', function() {
  gulp.src(htdocs.sass.all)
    .pipe(sass({
      includePaths: require('node-sass').includePaths,
      indentedSyntax: true,
      errLogToConsole: true
    }))
    .pipe(gulp.dest(htdocs.css.main));
    //.pipe(reload({stream: true}));
});

gulp.task('watch', function() {
  gulp.watch(htdocs.sass.all, ['sass']);
});

//  BrowserSync Tasks
// start browser-sync with proxy to our local dev url
// gulp.task('browser-sync', function() {
//   browserSync({
//     proxy: devUrl
//   });
//   gulp.watch(htdocs.sass.all, ['sass']);
//   gulp.watch(htdocs.page.site).on('change', reload);
//   gulp.watch(htdocs.js.custom).on('change', reload);
// });

// -----------------------------------------------------------------------------
// Gulp Call by default
gulp.task('default',
  [
    'sass',
    'features',
    'library',
    'normalize',
    'sukiyaki',
    'css-reset',
    'foundation_import',
    'foundation5',
    'foundation_mixins',
    'watch'
    //'browser-sync'
  ]
);













