# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Mounting Lifecycle Methods

 - constructor(props)
   - A special method that will get called whenever a new component is created
   - Initializing state
   - Binding the event handlers
   - Do not cause side effects
   - Usually contains
     - super(props)
     - Directly overwrite this.state
- static getDerivedStateFromProps(props, state)
  - When the state of the component depends on changes in props over time.
  - As it's static method therefore it does not have access to `this` context and we can not make use of `this.setState`, we need to simply return an `Object` that represent the new state or `null`.
  - Do not cause side effects. Ex: HTTP requests
- Render
  - Only required method in component
  - Read props & state and return JSX which describe the UI.
  - render function is a pure function.
  - Do not change state or interact with DOM or make AJAX calls.
  - Children components lifecycle methods are also executed.
 - componentDidMount
   - It gets called only once in the whole lifecycle of a given component. It's invoked immediately after a component and all it's children component have been rendered to the DOM. 
   - Pefect place to cause side effect.
     - Side effect means interact with DOM or perform any AJAX calls to load data