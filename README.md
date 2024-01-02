# Code Quiz - Matt Dudman

## Description

This is a my Coding Quiz Challenge web application. The quiz features a timer, questions with multiple-choice answers, and a scoring system.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [About](#about)
- [License](#license)
- [Deployed Link](#deployed-link)
- [Author](#author)


## Introduction

My goal with this application was to build a functioning online quiz where users could compete to get the highest score after answering 5 questions. 

## Installation 

N/A

## About

I started by creating the repo and adding/creating files (index.html, highscores.html, index.js, logic.js and css) some of these such as the CSS were already supplied. Here was what the home screen looks like ![Alt text](<assets/images/Screenshot 2024-01-02 at 19.51.20.png>)

I started by defining the quiz data by adding in the 5 questions using 'Let quizData' with the question, choices and correctAnswer defined. 

The timer and time limit was added as variables. 

I then added a function to start the quixz and display the first question as the quiz begins. Alongside this I added in the DOM elements in the index.js and the event listner for the start button and the submit button. 

You can see this all in action here - ![Alt text](<assets/images/Screenshot 2024-01-02 at 19.51.29.png>)

The function to be able to display the current question and the question title and choices to change with next answer and a alert whether the question was wrong on right is displayed on screen with a delay before moving on. Here is a shot of the alert on screen after a choice was made. - ![Alt text](<assets/images/Screenshot 2024-01-02 at 19.51.38.png>)

Scores were listed and stored in the highscores html and stored locally. Shown here - ![Alt text](<assets/images/Screenshot 2024-01-02 at 19.52.03.png>)

The user now should be able to use the quiz effectively and as asked for, be able to complete the quiz and save their score. 

## License

MIT License

Copyright (c) [2024] [Dudman-Matt]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Deployed Link
 * [See Deployed Link Here](https://atypicalbitter.github.io/Code-Quiz-MD/)

## Author
 * [Matt Dudman](https://github.com/atypicalbitter)