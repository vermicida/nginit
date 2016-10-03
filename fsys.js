"use strict";

/** Dependencies */
const fs = require("fs-extra");
const git = require("simple-git")();
const path = require("path");
const sanitize = require("sanitize-filename");

/** Settings */
const GITHUB_REPOSITORY = "https://github.com/vermicida/ng2-boilerplate";
const UNNECESSARY_ITEMS = [".git", ".gitignore", "LICENSE", "README.md"];

/** Check if the given directory exists */
const directoryExists = (dir) => {
    let exists;
    try {
        fs.statSync(dir);
        exists = true;
    }
    catch(err) {
        exists = false;
    }
    return exists;
};

/** Resolve the path for the given directory or file */
const resolvePath = (dir) => {
    return path.resolve(process.cwd(), sanitize(dir, { replacement: "-" }));
};

/** Remove the unnecessary directories and files from the app path */
const cleanAppPath = (appPath) => {
    UNNECESSARY_ITEMS.forEach((item) => {
        try { fs.removeSync(`${appPath}/${item}`); } catch(err) { /* Do nothing */ }
    });
};

/** Remove the unnecessary data from the cloned package.json */
const cleanPackageJson = (appPath) => {
    const jsonPath = `${appPath}/package.json`;
    // Read the package.json document.
    const jsonData = fs.readJsonSync(jsonPath, { throw: false });
    if (jsonData) {
        const appName = path.basename(appPath);
        // Set some property values.
        jsonData.name = appName;
        jsonData.description = `My amazing application ${appName}.`;
        jsonData.version = "1.0.0";
        jsonData.license = "ISC";
        // Remove unnecessary properties.
        delete jsonData.author;
        delete jsonData.homepage;
        delete jsonData.repository;
        delete jsonData.bugs;
        delete jsonData.keywords;
        // Write down the changes.
        try { fs.writeJsonSync(jsonPath, jsonData); } catch(err) { /* Do nothing */ }
    }
};

/** Clone the repository into the given path */
const cloneRepo = (appPath, cb) => {
    git.clone(GITHUB_REPOSITORY, appPath, (err) => {
        if (err) {
            cb(err);
        }
        else {
            cleanAppPath(appPath);
            cleanPackageJson(appPath);
            cb();
        }
    });
};

/** Module */
module.exports = {
    "directoryExists": directoryExists,
    "resolvePath": resolvePath,
    "cloneRepo": cloneRepo
};
