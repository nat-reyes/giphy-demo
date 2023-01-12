# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project simulates a Giphy as a small demo. It uses the giphy API to search a giphy and initially brings the data of the trending giphy.

Functionalities:
- As a user, you can initially see the first 25 trending giphy.
- As a user, you can search a giphy by a specific word.
- As a user, you can click on the heart on the giphy to save it in the bookmarks and click it again to remove it.
  The icon heart indicates the state. If the heart background color is full of red the giphy is currently stored in the bookmarks.
- As a user, you can paginate the searched values.

Technical Considerations:
- Cypress test was added to test the search page. I found the e2e test really powerfull to test features, and it is fast to implement in the project.
- The components inside /components were done to be reusable.

Others:
- I also allow the possibility of an instant search while you are typing. Thinking that the query has a limit there is no time answer problem. I think this behavior is more standard when you search by a word instead a search button.
- The project allows pagination.
- I left the search input on the bookmarks' page because in the future it could be used to filter the bookmarks too. Because is not an API functionality, I did not implement it. But as a production feature probably the bookmark page should also have a search input.
- I also hide the pagination for the initial trending request thinking that is just working as a demo functionality for the initial search and testing. But again as a production feature, this would be ideal too.

**Clone repository**

```
git clone https://github.com/nat-reyes/giphy-demo.git
```
**Install dependencies**
```
npm install
```

**Start development server**

```
npm start
```

## Available Scripts

In the project directory, you can run:

`npm start` Starts development server.

`npm run tests` Runs tests.

`npm run lint` Runs lint . fix command to clean the project files with the linter configuration.

`npm run cypress` Runs cypress.

## Technologies

**React**
-  is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

**Redux**
- You can use [Redux Devtools's extension](https://github.com/zalmoxisus/redux-devtools-extension).

**Styled-Components**
- You can see [Styled-Components](https://styled-components.com/)

**Cypress**
- For e2e testing. [Cypress](https://www.cypress.io/)

**Eslint && Prettier**
- For formatting the project files.
- [Eslint.js](https://eslint.org/)
- [Prettier.js](https://prettier.io/)

**Font awesome **
- For icons [Font-awesome](https://fontawesome.com/)

