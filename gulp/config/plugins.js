import replace from "gulp-replace"; // search and replace
import plumber from "gulp-plumber"; // error processing
import notify from "gulp-notify"; // message (hints)
import browserSync from "browser-sync"; // local server
import newer from "gulp-newer";
import ifPlugin from "gulp-if";


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
};