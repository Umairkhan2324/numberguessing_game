"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guesss(b/w 1 to 10): ",
    }
]);
const { userGuess } = answers;
if (userGuess === systemGeneratedNo) {
    console.log(userGuess, "userGuess", systemGeneratedNo, "SYs");
    console.log("your answer is correct \n you win!");
}
else {
    console.log("your answer is incorrect \n you loose!");
}
