This document gives a brief overview of the app and how it works. 

A: Technology

The app is developped using Typescript and Javascript using a mobile development framework called React Native. React Native interprets JS code and then targets native languages, for IOS platforms that is Swift and Objective C. JS is not getting executed after deployment. 

React Native is based on the popular web development tool React. React Native and React have a large amount of overlap, and most of the time, online materials about React will usually apply to React Native, expect for matters concerning the operating system and hardware.

Importantly, this app is also 'managed by expo' which means it contains a certain set of libraries that are often incompatible with other libraries. 

B: Code Overview

The app starts with the execution of index.js which does nothing but call the function App from App.tsx. All React components, like App from App.tsx, are functions which output a JSX element, which can be rendered on screen. React apps are a series of nested componments with App at the top of the tree. Every other component is either referenced in App.tsx or is referenced by a componenet which is referenced by App.tsx. 

App mainly contains a Navigator, which contains references to all individual screens in the app. It also has ParticipantContext, which is the only way of having a global, stateful, dynamically updating variable in React. 

By default when App.tsx is executed the Home screen is called (and rendered). Home contains links to the Admin page and all other screens. 

In general, a survey screen is a call to another react component. However, the screen (all files under screens) passes paramters to the functions below which then dynamically generate screens. Very little of the application is manually coded, instead it is mostly different functions passing around paramters. 

The screens sends information to the question list (see surveytypes folder), which then generates questions (see questiontypes folder) by passing parameters around different paramters. Finally, the question list calls a final component (SurveyWrappers) which add the final components, this does the final rendering. 


Unfortunately, I had to make all input types from scratch. The buttons in a question are represented using an array of stateful objects which are then passed to wrapper functions and dynamically rendered based on their state. (the object state modifies if the button is on or off, its label, its shape and color etc). The exact implementation details can be seen by looking at 'inputs' and their corresponding wrapper in 'input wrappers'. Essentially, on press these buttons trigger a callback function which modifies the state of the question and the way that they are rendered. 