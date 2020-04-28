const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');
const htmlMin = require('gulp-minify-html');
const cleanCss = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const connect = require('gulp-connect');
const open = require('gulp-open');
const { createProxyMiddleware } = require('http-proxy-middleware');
const spriter = require('gulp-css-spriter');
const minifyCSS = require('gulp-minify-css');
const gzip = require('gulp-gzip');
const os = require('os');

const { exec } = require('child_process');

const PORT = 8088;
const PLATFORMS = {
    linux: 'google-chrome',
    darwin: 'google chrome',
    win32: 'chrome'
};

const browser = PLATFORMS[os.platform()];

gulp.task('compileCss', () => gulp.src('./src/scss/**/**.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(spriter({
        spriteSheet: './dist/images/sprite.png',
        pathToSpriteSheetFromCSS: '../images/sprite.png'
    }))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(postcss([autoPrefixer()]))
    .pipe(gzip())
    .pipe(gulp.dest('dist/css')));

gulp.task('compileJs', () => gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify({ mangle: true, output: { comments: 'some' } }))
    .pipe(gzip())
    .pipe(gulp.dest('dist')));

gulp.task('compileImage', () => gulp.src('./src/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/images')));

gulp.task('compileHtml', () => gulp.src(['./src/**/*.html', './src/**/*.tpl'])
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gzip({
        append: true,
        extension: 'zip',
        threshold: 1,
        deleteMode: 'dist'
    }))
    .pipe(gulp.dest('./dist')));

gulp.task('connect', async () => connect.server(
    {
        root: 'dist',
        livereload: true,
        port: PORT,
        middleware: () => [
            createProxyMiddleware('/api', { target: 'http://localhost:8080', changeOrigin: true, pathRewrite: { '^/api/': '' } })
        ]
    }
));

gulp.task('reload', () => gulp.src('dist/**/*.*').pipe(connect.reload()));

gulp.task('watch', () => {
    gulp.watch('package.json', gulp.series(['copy', 'install']));
    // gulp.watch('dist/**/*.*', gulp.series(['reload']));
    gulp.watch('src/**/*.*', gulp.series(['compileCss', 'compileJs', 'compileHtml', 'compileImage']));
});

gulp.task('open', () => gulp.src('dist/index.html')
    .pipe(open({
        uri: `http://localhost:${PORT}`,
        app: browser
    })));

gulp.task('copy', () => gulp.src('package.json').pipe(gulp.dest('./dist')));

gulp.task('install', () => exec('cd dist && npm install --only=prod'));

gulp.task('installDependency', gulp.series(['copy', 'install']));

// gulp4 和 gulp3的写法有所不同在gulp4中 使用series和parallel来设置 任务的执行方式， gulp3中只需要写一个数组就ok
gulp.task('build', gulp.series(['installDependency', 'compileCss', 'compileJs', 'compileImage', 'compileHtml', 'connect', 'open', 'watch']));
