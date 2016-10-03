#!/usr/bin/env node

"use strict";

/** Dependencies */
const clear = require("clear");
const fsys = require("./fsys");
const msgs = require("./msgs");
const program = require("commander");

let appName;
let appPath;

/** 1. Clear the terminal */
clear();

/** 2. Print the nginit title */
console.log(msgs.getTitle());

/** 3. Parse the command */
program
    .version("0.0.5")
    .description("This is a simple CLI util to create Angular 2 applications.")
    .usage("<app name>")
    .arguments("<app>")
    .action((app) => {
        appName = app;
        appPath = fsys.resolvePath(app);
    })
    .parse(process.argv);

/** 4. Check if the app name is given */
if (typeof appName === "undefined" || typeof appPath === "undefined") {
    console.log(msgs.getUsageText());
    process.exit(1);
}

/** 5. Check if the app path already exists */
if (fsys.directoryExists(appPath)) {
    console.log(msgs.getAppExistsText(appPath));
    process.exit(1);
}

/** 6. Clone the repository */
fsys.cloneRepo(appPath, (err) => {
    if (err) {
        console.log(msgs.getCloneErrorText());
        process.exit(1);
    }
    else {
        console.log(msgs.getCloneSuccessText());
        process.exit(0);
    }
});
