# Brief Testing Guidance

## Clone Repository 
### `git clone https://github.com/MayuriNarute/Celebal-Technologies-Tasks.git.`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing functionality

Add Todo Item: Enter a task in the input field and click "Add Item". The task should appear in the list.

Edit Todo Item: Click the pencil icon next to a task. The task should appear in the input field for editing. Edit the task and submit it again.

Delete Todo Item: Click the trash icon next to a task. The task should be removed from the list.

Mark Todo Item as Complete: Click on a task title to mark it as completed. The task should have a strikethrough and change color.

Clear List: Click the "Clear List" button to remove all tasks from the list.

Filter and Sort: Use the dropdowns to filter and sort tasks by completion status and alphabetical order.

### Check localstorage

Open your browser's Developer Tools (usually F12 or right-click > Inspect).
Go to the Application tab (or Storage in some browsers).
Under Local Storage, check that your tasks are being saved correctly and persist between page reloads.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
