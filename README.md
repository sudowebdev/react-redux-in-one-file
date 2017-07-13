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


## Commit history (listing important things done in respective commits)

#### Commit 1: 
[Default environment set-up](https://github.com/sudowebdev/react-redux-default-environment)

#### Commit 2:
Basic functionality of the features of **Redux** such as ***store, reducers, actions*** implemented.

#### Commit 3:
Made the app work with **multiple reducers** ie. userReducer and tweetReducer. But, there is one **problem** till now. **The previous state is getting modified**. What we want is to keep that **state immutable** and ***create a new state object everytime***.

#### Commit 4:
The issue in the previous commit is solved now. Everytime, **a new state object** is created and fed to createStore.


## Thunk Middleware

By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk. Thunk allows you to write action creators that return a function instead of an action. The inner function can receive the store methods dispatch and getState as parameters, but we'll just use dispatch.

Without redux-thunk, action creators can only return actions which are objects, but with applying middleware thunk in the process, action-creators get the power to return functions also. Inside these functions, we can dispatch action objects whenever needed and also use our favorite xhr request npm package to get the data asynchronously.

##### For more, **[click here](https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3)**


### One more thing to keep in mind

You must have seen import statement from **many different npm packages**. So, you must be wondering as to how to remember all of these or which **function/object comes from which package**? So here is a basic thing to keep in mind:  

There are basically **3 types of packages** related to **Redux**:  
1. ***redux***: For **core-redux** functionality like createStore, combineReducers, applyMiddleware etc...   
2. ***redux-middlewareName***: These types of packages are made specially for **redux middlewares**. Examples of which are redux-logger, redux-thunk, etc...  
3. ***react-redux***: The functions defined in this category are used for **connecting your React app to Redux**. For example: connect, etc...  


## Promise Middleware

If you are using thunk just to serve a **single xhr request**, then there is a more **elucid** implementation of it with **promise** middleware.  
So, at the time of using promise-middleware, just write a **simple action-creator** which returns an **action as an object** (just like before). The **difference** comes only at the time of writing the **value of payload**. So, promise middleware comes into action whenever it sees a **payload that is a promise type** and thus will **dispatch some default actions**. 

So, if you are using **'FOO'** as type, then it will dispatch actions with 'FOO_PENDING' type and then 'FOO_FULLFILLED' or 'FOO_REJECTED' as and when the request gets served or not.