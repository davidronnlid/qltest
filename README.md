### Credit card component

- Material UI was included for styling of the component to reduce development time spent on UI and to ensure ease of use as per task specs
- CRA (create-react-app) comes with default webpack module bundling which I decided not to configure manually specifically for performance optimization due to time constraints and because it wasn't stated as a requirment in the specs
- The styling was not focused on barely at all due to specs stating ease of use and form validation were the focus areas. Please see https://davidronnlidportfolio.netlify.app for examples of web apps I created were I put more effort into styling the UI.
- Client-side form validation implementation inspired by:
  - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
  - Neha Jain's SO answer was used for number maxLength validation : https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
  - RegEx could be used for more specific client-side name format validation, bus was not implemented here due to time constraints
