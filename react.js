/*
-What is React?
  React is a JavaScript library used for building user interfaces. It's component-based, which means you can create reusable and independent parts of your application. React uses a virtual DOM to efficiently update only the necessary parts of the webpage, improving performance. It's popular because of its simplicity and large community support.

-Advantages of React over JS?
  *JSX: React utilizes JSX (JavaScript XML), which is an extension of JavaScript that allows you to write HTML-like code within your JavaScript files.
  *Component-Based Architecture: React follows a component-based approach, allowing developers to build reusable and modular UI components. '
  *Virtual DOM: React uses a virtual DOM to efficiently update the user interface. Instead of directly manipulating the actual DOM, React compares the virtual DOM with the real DOM and applies only the necessary changes. 
  *Unidirectional Data Flow: React enforces a unidirectional data flow, which means that data flows in a single direction within the component hierarchy. 

-How does Virtual DOM work?
  *Initial Render: When you write React components, they are initially rendered into a virtual representation of the DOM in memory called the     virtual DOM.

  *Virtual DOM vs. Real DOM: The virtual DOM is a lightweight copy of the real DOM. It is a tree-like structure that mirrors the structure of the actual HTML elements in your application.

  *Component Updates: When a component's state or props change, React re-renders that component and creates a new virtual DOM representation of it.

  *Diffing: React performs a process called "diffing" by comparing the new virtual DOM with the previous version. It analyzes the differences between the two virtual DOM representations to identify what has changed.

  *Update Strategy: React determines the most efficient way to update the actual DOM based on the identified changes. Instead of directly manipulating the entire real DOM, React only applies the necessary changes to bring it in sync with the new virtual DOM.

  *Minimal Updates: By updating only the necessary parts of the real DOM, React minimizes the performance impact. This approach significantly improves the efficiency of UI updates, especially for complex applications with many components.

  *Reconciliation: After applying the required changes to the real DOM, React triggers the reconciliation process. It updates the component tree,  calling the necessary lifecycle methods and re-rendering the affected components.

-How do you handle invalid url in React? To answer this refer React Router
  *Route Configuration: Define your routes using a router library like React Router. Specify the routes that your application supports, including both valid routes and a catch-all route for handling invalid URLs.

  *NotFound Component: Create a NotFound component that will be rendered when an invalid URL is encountered. This component serves as a fallback UI, displaying an appropriate error message or a custom 404 page.

  *Switch Component: Wrap your route components with a Switch component from React Router. The Switch component ensures that only the first matching route is rendered.

  *Order of Routes: Place the NotFound component as the last route within the Switch component. This ensures that if none of the valid routes match, the NotFound component will be rendered as the fallback.

-What are the new additions of HTML? Have you ever worked with any HTML APIs
  New form controls, including dates and times, email, number, range, tel, url, search, color, and datalist.
  Numerous new elements, including video, nav, aside, progress, canvas, section, meter, and time.
  New APIs with various functionalities such as drag-and-drop support, browser history manipulation, and reading and locking screen orientation state.

-How to share data in between components in React without using any external library?
  *Pass Data via Props: Pass the data from the common parent component to the child components as props. This involves passing both the data value and a callback function to update the data as props to the child components.

  *Update Data through Callbacks: When the child components need to update the shared data, they can call the provided callback function from the props. This function, defined in the common parent component, can modify the shared data state accordingly.


-Difference between State & Prop?
  *State: State is a built-in feature of React components and represents the internal data of a component. It is defined and managed within the component itself. Each component can have its own state, which can be updated and accessed using the setState() method.
  Props: Props (short for properties) are data passed from a parent component to its child component. Props are immutable and cannot be modified within the child component. They are defined in the parent component and passed down to child components during their instantiation.
  Mutability:
  *State: State is mutable and can be updated using the setState() method provided by React. When state changes, the component re-renders to reflect the updated state.
  Props: Props are read-only and cannot be modified directly within the child component. They are passed down from parent components and remain constant throughout the child component's lifecycle.

-Difference between arrow function and normal function

-Promises
-Life Cycle of React
-Class Component
-Amazon website cart was shown, asked to insert a button near cart using React
-How to store in package.jsm.
-What is package.jsm
*/



/*
-Npm vs npx--------------------------------
npm (Node Package Manager): is a tool used to install and manage packages (libraries) for Node.js and JavaScript projects. It helps you handle dependencies, versioning, and running scripts for tasks in your projects.
It is installed in your system with specific version and everytime there is change we need to install latest version which agains occupies space.

npx (Node Package Runner): is a tool that comes with npm. It lets you run command-line tools without installing them globally or locally. It's handy for running tools temporarily or using ones that you don't want to keep permanently installed.
It comes with all lastest version and does not occupies space. 

In short, npm is for managing packages, while npx is for running command-line tools.


-Explain closures---------------------------------
is a fundamental concept in JavaScript that allows a function to access variables from its outer (enclosing) lexical scope even after the outer function has finished executing. In simpler terms, a closure is a function bundled together with its surrounding state (variables).

-Output based question
*/
function counter() {
  let cnt = 0;

  return function() {
    cnt++;
    console.log(cnt);
  };
}

const incrmnt = counter();
incrmnt(); // Output: 1
incrmnt(); // Output: 2
incrmnt(); // Output: 3
/*
- Life cycle of React----------------------------

In React, the component lifecycle refers to the sequence of events that occur during the lifespan of a component. It consists of different phases: mounting, updating, and unmounting. Each phase has associated lifecycle methods that can be overridden to perform certain actions at specific points in the component's lifecycle.

Here is an overview of the lifecycle methods in React class components:

->Mounting Phase:

constructor(): Initializes the component, sets initial state, and binds event handlers.
static getDerivedStateFromProps(): Allows updating the state based on changes in props before the component is rendered.
render(): Returns the JSX representation of the component's UI structure.
componentDidMount(): Executes after the component is mounted to the DOM. It is commonly used to perform side effects like data fetching, subscriptions, or DOM manipulations.

->Updating Phase:

static getDerivedStateFromProps(): Similar to the mounting phase, it allows updating the state based on changes in props before re-rendering.
shouldComponentUpdate(): Determines whether the component should re-render or not, based on changes in props or state. It can be used for performance optimization.
render(): Re-renders the component with updated props or state.
componentDidUpdate(): Executes after the component is re-rendered. It is commonly used for side effects like fetching updated data or interacting with the DOM based on changes.

->Unmounting Phase:

componentWillUnmount(): Executes just before the component is removed from the DOM. It is used for cleanup tasks like canceling timers or removing event listeners.
In addition to these lifecycle methods, there are also error handling methods:

componentDidCatch(): Catches and handles errors within the component's subtree.
getSnapshotBeforeUpdate(): Captures a value or state from the DOM before it changes.
It's important to note that with the introduction of React Hooks, functional components can also manage lifecycle-like functionality using the useEffect hook.

-ES6 features in JavaScript---------------------------------------
Arrow Functions: Provide a more concise syntax for writing function expressions.

Classes: Introduce a class syntax for creating objects, constructor functions, and inheritance.

let and const: Offer block-scoped variables (let) and constants (const) that provide better control over variable scoping and immutability.

Template Literals: Allow embedding expressions within string literals using backticks ( ), enabling multiline strings and string interpolation.

Destructuring Assignment: Enable extracting values from arrays or objects into individual variables, making it easier to work with complex data structures.

Default Parameters: Allow defining default values for function parameters, which are used when the corresponding arguments are not provided.

Rest and Spread Operators: The rest operator (...) allows capturing multiple arguments into an array, while the spread operator (...) expands an array or object into individual elements.

Enhanced Object Literals: Provide shorthand syntax for defining object properties, methods, and computed property names.

Modules: Introduce a standardized module system for JavaScript, allowing code organization and reuse across different files.

Promises: Offer a built-in mechanism for handling asynchronous operations, providing a more structured and readable approach compared to callbacks.

Iterators and Generators: Enable creating iterable objects and defining custom iteration behavior using iterator and generator functions.

Enhanced Array Manipulation: Introduce several new array methods like map(), filter(), reduce(), and find() that provide more concise and expressive ways to work with arrays.

-React 18 features-----------------------------------------------------------
Concept:	Concurrent React
Features:	Automatic Batching, Transitions, Suspense on the server
updation: Strict mode 
https://www.freecodecamp.org/news/react-18-new-features/

*/
/*
-Event Loop-------------------------------------------------------------
The event loop is a mechanism in JavaScript that manages the execution of asynchronous tasks and handles event-driven programming. It ensures that tasks are executed in an orderly manner without blocking the main execution thread.
*/
console.log("Start");
setTimeout(() => {
  console.log("async task 1");
}, 2000);
setTimeout(() => {
  console.log("async task 2");
}, 1000);
console.log("End");
/*


-Javastring
-Shorting array object
-Sort array of object on the basis of title and id
-Filter a word in the  object
-Closures
-Screen reversal
-Search in Object"
"-Project based-asked to explain the React based project.
-React Routing explanation in detail
--React Map
-CSS-text properties, tags, align to centre or how will you move it."
"ES6 vs ES5
This keyword
Call bind apply
Usestate
Useref
Usedispatch
Reduc
Reduc toolkit
JS vs JSX
== Vs ===
Let var const
Hoisting
Closures
Block scope
Global variables
Class component
Lifecycle
Prop drilling
Context api
Use context
Create context
Prop vs state
Ref and state
Component
Folder structure
Dom
Sent data from parent to child
One and half an hour from projects"
"-Basic  DSA- Syllables, Palindrome
-How to find all multiples of 3 and 5 upto number N"
"Assignment-
-To create a second hand car selling website where dealers can add the deals and buyers can select.
-All the questions asked were from the assignment given. Eg-
What new features can be added to the website, how can you make it work better?"
"-Basic JavaScript question related to keyword ==, ===
-Questions related to project-
Which tech stack and designing packages used in project?
-Situation based-
 To create a simple tab, sidebar was there which has to be replaced by tab. After tab creation,on clicking tab item, route should also be changed (Object Clouding)
"





-Explain redux and  how it works
-Advantage of Redux (Optional)
-Use effect works




"-Code given, asked to align the box in the centre
-Life-Cycle in React JS
-Project related questions asked"
"-JavaScript:
-Array given, add number 10 at index no. 0
-Number of arrays given, add number randomly anywhere
-Create array recursively and short on your own
-React:
-Create app- To do list
-Hook- Use State and Use Effect-code given, output based
1. Is there a problem with the below component? If yes, what is it?
function Test(props)  {
 const [state1, setState1] = useState();
 const [state2, setState2] = useState();
 const condition = props.isCondition;
 if (condition) {
   return null;
 }
 const [state3, setState3] = useState();
 return (
   <h1>Saurabh</h1>
 );
}
2. 1. What is the use of useEffect?
 2. And what does this do?
 > useEffect({ }, [])
 function Test() {
   const [state, setState] = useState('gaurav');
   useEffect(()=>{
     console.log('Saurabh');
     setState('tom');
   });
   const handleClick = () => {
     setState('tom');
   };
   return (
     <button onClick={handleClick}>Saurabh</button>
   );
 }
 useEffect(()=>{
   //fetch
   conunt
   return ()=>{
     console.log(""UnMounted "")
   }
 }, [count])
 3. Any issues in the above Test component?
3. (OPTIONAL) What's the advantage of Redux over normal state management using useState()?
4. What will be displayed in the console on calling the decrementCount function and why?
 const [count, setCount] = useState(4);
 function decrementCount() {
   setCount(count - 1);
   setCount(count - 1);
   console.log(count);
 }
5. Difference between state initialization in 1. and 2. :
 function runOnce() {
   console.log(""run"");
   return 4;
 }
 1. const [state, setState] = useState(runOnce());
 2. const [state, setState] = useState(() => {
   console.log(""run"");
   return 4;
 });
6. What will be in State now?
 const [state, setState] = useState({count: 4, theme: 'blue'});
  // onCLick operation you call below method
 function handleClick() {
    setState((prevState) => {
     return { ...prevState, count : prevState.count + 1};
   });
 }
state value?
[APPS]
7. Have a textbox with a button called Submit.
Below this we want to print the text,
My name is <current value in textbox>
and it used to be <previous value in textbox>.
My name is <current value in textbox> and it used to be <previous value in textbox>
textbox is empty initially
> My name is '' and it used to be ''
textbox updated to ""Saurabh"" and click on submit
> My name is Saurabh and it used to be ''
textbox updated to ""tom"" and click on submit
> My name is tom and it used to be Saurabh
8. On the above page add a line called ""I rendered <x> times"".
<x> should be updated each time the component is rendered.
9. Write ToDo app Textbox : [Add]
- After clicking Add show the Todo below the textbox.
- Each row should have [Completed] [Deleted] button.
- Clicking Completed should grey out the corresponding ToDo
- Clicking Delete should delete the ToDo
TEXTBOX : ADD
todo list item 1 'C' 'D'
todo list item 2 'C' 'D'
enter 'get some groceries' in the textbox and click ADD button
>
todo list item 1 'C' 'D'
todo list item 2 'C' 'D'
get some groceries 'C' 'D'
on clicking deleted button the todo item will be removed from list
>
todo list item 1 'C' 'D'
get some groceries 'C' 'D'
[7:46 PM] JS =>
[7:46 PM] Q1.
Write a function:  insert_at_start(array: arr, integer: item)
The function should insert item at the beginning of arr.
Note: arr can be empty but will never be null.
For example, if arr = [2, 6, 1] and item is 10, after the call arr should be modified to [10, 2, 6, 1].
Q2.
Write a function:  insert_at_correct_position(array: sortedList, integer: item)
It should insert item at the correct position in the sortedList using the splice function. Correct means that the sortedList is still sorted.
Note: sortedList can be empty but will never be null.
Examples:
If sortedList is [1, 8, 12, 20] and item is 10, after this function call, sortedList should be [1, 8, 10, 12, 20].
If sortedList is [1, 8, 12, 20] and item is -1, after this function call, sortedList should be [-1, 1, 8, 10, 12, 20].
If sortedList is [1, 8, 12, 20] and item is 50, after this function call, sortedList should be [1, 8, 10, 12, 50].
If sortedList is [] and item is 50, after this function call, sortedList should be [50].
Q3.
Write a function useless_sort(array: unsortedList) that sorts an array of integers and returns a sorted array of integers without affecting the original unsortedList.
The implementation should roughly follow this algorithm:
remove the first element from the array using the splice function
sort the remaining array recursively using useless_sort
insert the first element, found in step 1, into the correct position in the sorted array resulting from step 2 using the insert_at_correct_position function you implemented earlier."

"HTML-
-What is HTML?
-What elements are using HTML?
CSS-
-What is x-index?
-What is z-index?
-Flexbox
-Grid
JavaScript-
-Synchrous VS Asynchrous
-Callbacks
-Promises
-Map
React.JS-
-JSX
-What are props and how to use?
-Explain usestate
-UseRef
-Components
-Life Cycle in React.JS explanation
-Build function component in h1 tag in redering in display

"

"Q1.) What are the key features of Node.js?
Q.2) what is hosting in js.
Q.3) what is Promises in js.
Q.4) What is Node.js.
Q.6) why use node.js
Q7.) What are higher order functions
Q.8) what is hosting and closures in js.
Q.9) what is V8 engine.
Q.10) What gives Nodejs asynchronous behaviour.
Q.11) what is difference between let and const
Q.12) Difference between map, filter and reduce"



React vs JS
What is Props and what is State
Lifecycle of React
Explain MongoDB
what is Async and Sync API
what is Synthetic Events
Check whether the two trees are identical or not.
Sub two numbers represented by linked list and Trim Binary Search
find out the volume of cube and cuboid using function parameters were passed(3)(3,4)(3,4,7)?
perform bitwise and operation with array elements and give output that will change
{1,2,3,4} AND 2 -> output 0,2,2,0 second remains same rest changes?
question-related to override give output??
How many edges are in a null graph??
How many test cases will be needed to find the second largest element in bubble sort??
what is sleep() method??
Abstraction statement question which one is correct?
Scorched earth optimization?

https://docs.google.com/document/d/1bA8bEOvwl20rIfw6uwA4C39JpVDv5JmIYrg62BwHCuw/edit?usp=sharing

"

"-Make an input field for credit card number like we get on websites having 4 fields of 4 digit
WAP to reverse the given string 
WAP to count words in the given string
WAp to reverse words in a string
-anagram program
-palindrome program
-Explain promises with coding example
-Explain using resolve
-Explain reject
-write  a program to find a substring is exist or not in a string.
""WAP to remove the lowest occurrence  in a sequence  of the character from an string every time till the end and return the last character.
Ex -  aaaabbcccaadddaaaaa (given string)
         aaaacccaadddaaaaa  (1st removeal)
        aaaacccdddaaaaa       (2nd removel)
        aaaadddaaaaa             (3rd)
        aaaaaaaaa                   (4th and return it)""
https://docs.google.com/document/d/1GnzE7CB6fxKJasBira8D1FqrLanzenBvFkIGOB0a0yQ/edit?usp=sharing
String b is a alternating substring of string a, to find the endpoint node of a simple network java script
Check if a string is substring of another
remove the 2 consecutive characters in a string till no consecutive repeating character is left
faafc gives output => c

-""It's almost the Summer Sales!

You work for a shop that wishes to give a discount of discounts to the most expensive item purchased by a given customer during the sales period. Only one product can benefit from the discount.

You are tasked by the shop owner to implement the function calculate total price(prices, discount) which takes the list of prices of the products purchased by a customer and the percentage discount as parameters and returns the total purchase price as an integer (rounded down if the total is a float number).

Constraints:

• Os discount ≤ 100

• 0 <price of a product < 100000

• <number of products - 100"""
"-Poject based questions
-Questions based on assignment
-Write algorithm for prime numbers
-What is Caching?"
"1) Explain React .
2) What is hook? 
3) Why React is more popular than other technology? 
4) Explain redux. 
5)Expalin how to access object.
*/