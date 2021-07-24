# Bink: Frontend app

Written in TypeScript using React, Redux, and Electron

## TODO List

### Foundation
- [x] Linting
- [ ] Global vars
  - [ ] URL (depending on environment)
  - [ ] Action types
- [ ] Redux to store session
    - [ ] Username
    - [ ] Auth token
- [ ] SocketIO
  - [ ] Connect to server
  - [ ] Send message capabilities
- [ ] CSS
  - [ ] Colour scheme
  - [ ] Chatbox layout

### Building out
- [ ] Account system
- [ ] Main menu
- [ ] Chat rooms
  - [ ] Show chat members
  - [ ] Load old message
  - [ ] Create new, add people
- [ ] App setting
- [ ] Profile details
- [ ] Date parsing
  - Show time if same day
  - Else show date

### Late game
- [ ] Online indicator
- [ ] Read receipts
- [ ] Emojis/Stickers/Gifs



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn run electron:dev`

Runs the app in the development mode.<br />
Will open an Electron window, but can also view at `localhost:3000`

The window/page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn run electron:build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
