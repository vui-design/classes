var gulp = require("gulp");
var minjs = require("gulp-uglify");
var rename = require("gulp-rename");
var del = require("del");

var tasks = {
  minjs: function() {
    return gulp.src("src/*.js").pipe(minjs()).pipe(rename({ suffix: ".min" })).pipe(gulp.dest("dist"));
  }
}

gulp.task("clear", function(callback) {
  return del(["dist/*"], callback);
});
gulp.task("minjs", tasks.minjs);

gulp.task("default", ["clear"], function() {
  for (var key in tasks) {
    tasks[key]();
  }
});
