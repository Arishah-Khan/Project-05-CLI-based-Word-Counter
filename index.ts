#! /usr/bin/env node
 
 // Import the 'inquirer' package for user prompts

import inquirer from "inquirer"; 

// Import 'chalk' for colorful console output

import chalk from "chalk";


// Prompt the user to enter a sentence
const answers : {
    Sentence : string
} = await inquirer.prompt(
    [
        {
            type: "input",
            name: "Sentence",
            message: chalk.yellow("Enter your sentence to count the words:"), // Prompt message
        }
    ]
)


// Trim the entered sentence and split it into words based on spaces

const words = answers.Sentence.trim().split(" ");

// Display the array of words

console.log(chalk.cyan("Words in the sentence:") , words);

// Display the word count

console.log(chalk.green.bold(`Word count: ${words.length}`));