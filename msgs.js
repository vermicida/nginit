"use strict";

/** Dependencies */
const chalk = require("chalk");
const figlet = require("figlet");

/** Get the nginit title */
const getTitle = () => {
    const ascii = figlet.textSync("nginit", {
        font: "Larry 3D",
        horizontalLayout: "default"
    });
    return `${chalk.gray(ascii)}\n`;
};

/** Get the text that recommends to check the nginit help */ 
const getUsageText = () => {
    return chalk.yellow("Run nginit with --help to get info about the usage.\n");
};

/** Get the text to use when the app name already exists */ 
const getAppExistsText = (appPath) => {
    return chalk.red(`The directory ${appPath} already exists.\n`);
};

/** Get the text to use when an error occurs while cloning the repository */
const getCloneErrorText = () => {
    return chalk.red("An error occurred while cloning the repository.\n");
}

/** Get the text to use when the repository cloning was successfully */
const getCloneSuccessText = () => {
    return chalk.green("Ready! Remember to run 'npm install' within the app folder.\n");
};

/** Module */
module.exports = {
    "getTitle": getTitle,
    "getUsageText": getUsageText,
    "getAppExistsText": getAppExistsText,
    "getCloneErrorText": getCloneErrorText,
    "getCloneSuccessText": getCloneSuccessText
};
