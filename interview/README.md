# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Run npm audit fix --force

if you run into issue with plugin react was conflicted between package.json and baseconfig run npm audit fix --force

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Change project to add pages

In the current project using Typescript, CSS, HTML, and UI/UX skills, create features that allow users to view, add, and edit comments.

1. Add **mui** to the project
2. Create new pages/components called ***comment-form** and **comment-data**
3. App.tsx
   1. This page is going to hold comment-form and comment-data pages/components
   2. On desktop - using MUI Grid, make columns 6 (comment-data) and 6 (comment-form)
   3. On Table and Phone- make columns 12 (top | comment-data) and 12 (bottom | comment-form)
4. comment-data Page/Component
   1. Fetch list of comments from https://jsonplaceholder.typicode.com/comments and show the list on the component. (you can use a service to do this)
   2. Make a clickable edit section and when user clicks this, a Modal/Dialog will open comment-form component with data already filled in from the API data.
5. comment-form Page/Component
   1. Create a form that accepts **name** and **email**
   2. All fields are required
   3. Email field validates to see if entered string is email
   4. If fields are incorrect and/or left empty, make sure there are validation to let user know
   5. On Submit, use a fake url to post the values (you can use the service that you made earlier) and show form results in the console.
6. After you are done, make a pull request on Github and let us know that you are done.
