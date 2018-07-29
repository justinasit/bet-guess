# BetGuess Overview

* The primary motivation for creating this application was the ability to guess the odds of sports matches. The app gives a list of matches with open input boxes where the user can write a wininng percentage (chance to win) for each team. With another button click the user can reveal the odds from a betting API and compare his predictions to bookmakers' odds.
* Secondary motivation is to showcase basic Angular skills like setting up modules, components, clicking events, conditional elements, calling a 3rd party API etc.
* Using Betfair API (https://developer.betfair.com/).

# Prerequisites:
* Node & NPM
* Angular CLI
* Funded BetFair (betfair.com) account

# Set up BetGuess:
1. Clone bet-guess repository.
2. Run `npm install` to download all dependencies.
3. Copy over and modify the environment file with your BetFair credentials - `cp src/environments/environment.example.ts src/environments/environment.ts`.
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# To-do list
* Allow user to place a bet from within the app.
* Transfer all BetFair API related logic to a separate service and make the app agnostic of the API in use. This would allow the BetFair API to be easily replaced in the future.
* Add more sports categories.
* Improve UI.
* Write more tests.

# Notes
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.
* In principle, the project, in its current state, is too light to be using Angular framework. Similar result could be achieved by using many other lighter tools that would make the website run faster. However, I've decided to use Angular to test out some of its features and to make it easily extendable in case the project gets bigger.
