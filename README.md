# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project simulate a Giphy as small demo. It uses the giphy API to search a giphy and initially bring the data of the trending giphy.

Functionalities:
- As user, you can initially see the trending giphy.
- As user, you can search a giphy by a specific word.
- As user, you can click on the heart on the giphy to save it in the bookmarks and click it again to removed it. 
The icon heart indicates the state. If the  heart background color is full of red the giphy is currently stored in the bookmarks. 
- As user, you can paginate the searched values.

Considerations:
- I also allow the possibility of the instant search while you are typing. Thinking that the query has a limit there is no time answer problem. Again I think it is more standard when you search by a word.
The project allows pagination.
- I left the search input in the bookmarks' page because in the future it could be used to filter the bookmarks too. Because of the API I did not implement it. But as a production probably the most probably scenario of the bookmarks view is with a filter.


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


