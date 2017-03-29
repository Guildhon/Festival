
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
 
gulp.task('testImagemin', function () {
    gulp.src('images/slider/bg1.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: false, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('images/slider/test'));
});
gulp.task('default', ['testImagemin']);