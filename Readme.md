## React is component based architecture
React is designed around the concept of reusable components.
You define small components and you put them together to form bigger components.
What are components?
A component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.
1-  Functional component - the simplest form of react component
```
const Greeting = () => <h1>Hello World!</h1>;
```

2- Class component
Components can also be written using ES6 classes instead of functions. Such components are called class components.
```
class Greeting extends React.Component {
  render(){
    return <h1>Hello World Today!</h1>;
  }
}
The only method you must define in a React.Component subclass is called render().
```

* Functional (Stateless) Vs Class (Stateful) components
Functional components
=> Functional because they are basically functions
=> Stateless because they do not hold and/or manage state
=> Presentational because all they do is output UI elements

* Class Components
=> Class because they are basically classes
=> Smart because they can contain logic
=> Stateful because they can hold and/or manage local state
=> Container because they usually hold/contain numerous other (mostly functional) components

### Props
Props are React’s way of making components easily and dynamically customisable. They provide a way of passing properties/data down from one component to another, typically from a parent to a child component (unidirectional dataflow).
It’s important to note that props are read-only and that a component must never modify the props passed to it

### State
The state property is a special one in any React class component. React monitors every component state for changes. But for React to do so efficiently, we have to change the state field through another React API thing that we need to learn, this.setState

Ref:
https://reactjs.org/docs/react-component.html
### The Component Lifecycle
* Mounting
1- constructor()
Initializing local state by assigning an object to this.state.
Avoid introducing any side-effects or subscriptions in the constructor.
2- static getDerivedStateFromProps()
3- render()
The render() method is the only required method in a class component.
The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked,
4- componentDidMount()
 invoked immediately after a component is mounted (inserted into the tree).
 This method is a good place to set up any subscriptions.
 Note that this method is fired on every render, regardless of the cause.

*Updating
1- static getDerivedStateFromProps()
getDerivedStateFromProps is invoked right before calling the render method,
both on the initial mount and on subsequent updates.
 It should return an object to update the state, or null to update nothing.
2- shouldComponentUpdate(prevProps, prevState, snapshot)
 is invoked before rendering when new props or state are being received.
  Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
  This method only exists as a performance optimization.
  shouldComponentUpdate() returns false, then
  render(), and componentDidUpdate() will not be invoked.
3- render()
4- componentDidUpdate()
is invoked immediately after updating occurs. This method is not called for the initial render.

* Unmounting
1- componentWillUnmount()
invoked immediately before a component is unmounted and destroyed.

// => 
0- 
* explaining React navigation.
* working on Stack navigator.
* working on switch navigator.

1-
* Creating simple add location name view
* integrate navigation [Bottom tabs / Stack]
* creating screen that display list of locations
* creating screen for adding location
* creating location details screen
* adding react-native-vector-icons

2- 
* adding image picker
* adding Google maps

3-
* Explaining HTTP methods
* Link add location screen with api
* Link display locations screen with api
* Link display single location with api

4-
* Adding delete location functionality and liked it with api
* Creating Login / Signup screens
* Linking Login / Signup screens.
* Explaining JWT

5- 
* Continuing on Login / Signup authentication process.
* Adding splash screen
* Exporting release APK => Fatima
