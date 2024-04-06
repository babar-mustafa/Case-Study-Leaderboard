# Case Study Leaderboard

React Native Project.
A React Native project that showcases the implementation of basic App and unit testing with Jest and the usage of Redux for state management.


## Project Setup
<details>
  <summary>Click to expand!</summary>


- Clone this repo `git clone https://github.com/babar-mustafa/Case-Study-Leaderboard`

- Install dependencies `yarn install` .
- Go to the root directory run this command `yarn android or yarn ios`

</details>

## Running the App

### Android and IOS

<details>
  <summary>Click to expand!</summary>


#### Pre-requisite Steps
1. Node.js (v12 or above)
2. npm or Yarn package manager
3. installed React Native Cli
4. Make sure dependencies / node_modules are installed (`yarn install`) (`npx install`)
5. Ensure your devices or simulators (real-device or Android AVD) are set up and running
6. go to the root directory and run this commands `yarn android` or `yarn ios`


</details>


### Redux

<details>
  <summary>Click to expand!</summary>

#### Avoid Passing Inline Functions

Redux is a popular state management library for JavaScript applications, including React and React Native. It helps manage complex application states by providing a predictable and centralized way to store and update data.

In this project, i have implemented Redux for state management. The main concepts in Redux are:

  1. Store: It holds the entire state tree of the application.
  2. Actions: They are plain JavaScript objects that represent an intention to change the state.
  3. Reducers: They specify how the state changes in response to actions.
  4. Selectors: They are functions that extract specific data from the state.
  5. Dispatch: It is a function provided by Redux to send actions to the store.
  6. You can find the Redux-related files and directories inside the src/state directory.
