import { join } from 'path';
import gulp from 'gulp';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('copy', () => {
  return gulp.src([
      join(process.cwd() , 'node_modules/material-components-web/dist/material-components-web.min.css'),
      join(process.cwd() , 'node_modules/material-components-web/dist/material-components-web.min.js'),
      join(SOURCE_ROOT, 'app.css')
    ])
    .pipe(gulp.dest(DIST_ROOT));
});
