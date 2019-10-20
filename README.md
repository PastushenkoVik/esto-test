# Frontend developer sample test

[DEMO LINK](https://pastushenkovik.github.io/esto-test/docs)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

### Overview
   This task involves creating an Angular webpage using the provided design wireframe.
   
   The task needs to be completed following the specifications as closely as possible. Best practices for every language should be adhered to and
   the development process should resemble how you would develop in an actual work environment (using TDD, committing to VCS, etc). Don’t
   worry about cleaning up boilerplate code.
   
   You can always ask for guidance or details to be specified.
   
### Task description
   Create a single page that looks as similar as possible to this page: https://n26.com/en-de/plans
   
   The page should include
   
   * navbar   
        * no routing necessary
        * “Online banking” “Open account” animation
        * should stay fixed to top
        
   * content
        * try to use the same shadows, sliders, animations, etc
        
   * footer
        * Just include the very bottom, no need to include all the links
        
        
   When any “Open account” button is clicked, redirect to an /account page, where just a title is displayed. The title is “N26”, “N26 You” or “N26
   Metal”, depending on which button was clicked.
   
   The entire page must be responsive from mobile screens to 4k and larger.
   
   
### Requirements and tips

#### Frontend

Use the latest Angular, and SASS instead of CSS. Think carefully about how to structure the code and find best practices (e.g separate and
shared components). Don’t worry about any advanced features like SSR.

#### Bonus
* Use GraphQL for making requests
    https://www.apollographql.com/docs/angular/
    
* Create tests using Jasmine, Karma and Protractor

#### VCS

Use GitHub to store the codebases (one each for frontend and backend).
