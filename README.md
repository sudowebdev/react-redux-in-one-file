![](http://i.imgur.com/DUiL9yn.png)

# React/Sass/Redux Boilerplate

[Boilerplate and guide for a React/Sass/Redux build](https://github.com/buckyroberts/React-Redux-Boilerplate).

## Getting Started

To get started, first install all the necessary dependencies.
```
> npm install
```

Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)


## Commit history

#### Commit 1: 
[Default environment set-up](https://github.com/sudowebdev/react-redux-default-environment)

#### Commit 2:
Basic functionality of the features of **Redux** such as ***store, reducers, actions*** implemented.

#### Commit 3:
Made the app work with **multiple reducers** ie. userReducer and tweetReducer. But, there is one **problem** till now. **The previous state is getting modified**. What we want is to keep that **state immutable** and ***create a new state object everytime***.

#### Commit 4:
The issue in the previous commit is solved now. Everytime, **a new state object** is created and fed to createStore.
