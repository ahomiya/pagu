// Gulpfile.js
// Require Plugin Dependencies
// 19 FEB 2015
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat');
// -----------------------------------------------------------------------------
// Objects Path
var htdocs = {
  js: {
    custom          : './htdocs/js/',
    vendor          : './htdocs/js/vendor'
  },
  sass: {
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
  gulp.src(packages.features)
    .pipe(concat('features.js'))
    .pipe(gulp.dest(htdocs.js.vendor));
});

// JavaScript libraries
gulp.task('library', function() {
  gulp.src(packages.jsLibraries)
    .pipe(concat('libraries.js'))
    .pipe(gulp.dest(htdocs.js.vendor));
});

gulp.task('normalize', function() {
  gulp.src(packages.normalize)
    .pipe(gulp.dest(htdocs.sass.vendor));
});

gulp.task('sukiyaki', function() {
  gulp.src(packages.sukiyaki)
    .pipe(gulp.dest(htdocs.sass.vendor));
});

gulp.task('css-reset', function() {
  gulp.src(packages.css_reset)
    .pipe(rename({
      prefix   : '_',
      basename : 'reset'
    }))
   .pipe(gulp.dest(htdocs.sass.vendor))
});

gulp.task('foundation_import', function() {
  gulp.src(packages.framework.import_components)
    .pipe(rename({prefix   : '_'}))
    .pipe(gulp.dest(htdocs.framework.zurbFoundation));
});

gulp.task('foundation5', function() {
  gulp.src(packages.framework.core)
    .pipe(rename({
      dirname : 'foundation/'
    }))
    .pipe(gulp.dest(htdocs.framework.zurbFoundation));
});

gulp.task('foundation_mixins', function() {
  gulp.src(packages.framework.mixin)
    .pipe(gulp.dest(htdocs.framework.componentMixins));
});

gulp.task('default',
  [
    'features',
    'library',
    'normalize',
    'sukiyaki',
    'css-reset',
    'foundation_import',
    'foundation5',
    'foundation_mixins'
  ]
);













