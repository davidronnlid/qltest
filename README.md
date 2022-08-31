### String and array algos

- I am not an algorithms pro and don't pretend to be one. While I tried to have basic time and space complexity considerations in mind while writing the code, my main goal with the algos was to solve the problems in the QLTest specs. I'd love to become better at writing performance-optimized code but currently do not have the knowledge or experience required to expand on the performance questions in the specs regarding how different solutions might be preferred if larger amounts of data were provided as inputs to the algorithms.
- The reason I mostly used for loops and if statements instead of array methods (forEach, map, reduce, filter, etc.) was because I thought through the problems while coding to save time and for me it is easier to get an overview of the problem when every part of the algorithm is explicitly stated as in the code I wrote. I don't think it would be hard for me to refactor the code I wrote to array methods if I were to spend more time improving the code.

### Credit card component

** Focus should be on validation and ease of use. (So styling and testing were not prioritized. One might argue well-styled UI improves ease of use (UX). So I made sure to style what was necessary for good UX but not more than that.)**

- Material UI was included for styling of the component to reduce development time spent on UI and to ensure ease of use as per task specs
- CRA (create-react-app) comes with default webpack module bundling which I decided not to configure manually specifically for performance optimization due to time constraints and because it wasn't stated as a requirment in the specs
- The styling was not focused on barely at all due to specs stating ease of use and form validation were the focus areas. Please see https://davidronnlidportfolio.netlify.app for examples of web apps I created were I put more effort into styling the UI.
- Client-side form validation implementation inspired by:
  - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
  - Neha Jain's SO answer was used for number maxLength validation : https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
  - RegEx could be used for more specific client-side name format validation, bus was not implemented here due to time constraints
- Tests were implemented with Cypress and written in TypeScript just like the CreditCard component. I am aware that these tests are not extensively testing all the client-side form input value format validation constraints, or even all elements of the credit card component but decided that this was an appropriate level of detail of testing considering the time constraints of the project.
-
