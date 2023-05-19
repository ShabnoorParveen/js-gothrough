
//---------sort by age
const people = [
  { name: "shab", age: 23 },
  { name: "meenu", age: 22 },
  { name: "tiyaba", age: 16 },
  { name: "nayab", age: 12 },
];

//for age in ascending order
people.sort(function (a, b) {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name);
  } else {
    return a.age - b.age;
  }
});
console.log(people);


//------sort by name
const data = [
  { name: "shab", age: 23 },
  { name: "meenu", age: 22 },
  { name: "tiyaba", age: 16 },
  { name: "nayab", age: 12 },
];

data.sort(function (a, b) {
  // for name
  if (a.name === b.name) {
    // if name is the same, sort by age
    return a.age - b.age;
  } else {
    // sort by name
    return a.name.localeCompare(b.name);
  }
});
console.log(data);

//Callbacks-  in js are the arguments that are passed to the function and are involked later when specific action or events occur. they are a way to handle asyncronous operations and ensure that code is executed in desired sequence.

function hiringCompany(name, callback){
    console.log('Hey, '+name+"!");
    callback();
} 
function hired() {
    console.log('You are Hired!')
}
hiringCompany('Shabnoor', hired);

/*
Promises---> they are a built in feature that helps to handle asyncronous operations and manage results. they provide a more elegant and readable way to write async code 
A Promise represents a value that may not be available yet or may fail in the future. It has three states: pending, fulfilled, or rejected.
.promise // promise.all // promise.allSettle
*/

 function wait(ms) {
  // The promise is resolved after a given number of milliseconds specified in the function argument using the setTimeout function
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Log "start" to the console
console.log("start");
// Call the wait function with a delay of 2000 milliseconds and use the then method to log "done" to the console after the promise has resolved
wait(2000).then(() => console.log("done"));
// Log "end" to the console
console.log("end");


//Closure---> is a fundamental concept in JavaScript that allows a function to access variables from its outer (enclosing) lexical scope even after the outer function has finished executing. In simpler terms, a closure is a function bundled together with its surrounding state (variables).

function counter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const increment = counter();
  increment(); // Output: 1
  increment(); // Output: 2
  increment(); // Output: 3

  //Event bubbling, capturing, and delegation are all concepts related to how events are handled in the event propagation model of the Document Object Model (DOM) in JavaScript.

/*Event Bubbling:
Event bubbling is the default behavior in the event propagation model.
When an event is triggered on an element, it first fires on that element, then on its parent element, and continues to bubble up through its ancestors in the DOM hierarchy.
This bubbling behavior allows events to be handled at different levels of the DOM tree. Event handlers on parent elements can catch and handle events triggered on their child elements.

Event Capturing:
Event capturing is the opposite of event bubbling.
In event capturing, the event starts at the topmost ancestor element and propagates down to the target element.
Event capturing is less commonly used compared to event bubbling but can be useful in specific scenarios where you want to handle events at a higher level in the DOM hierarchy.

Event Delegation:
Event delegation is a technique that takes advantage of event bubbling to handle events efficiently.
Instead of attaching event handlers to individual elements, you attach a single event handler to a common ancestor element.
When an event is triggered on a child element, it bubbles up to the ancestor element where the event handler is attached. The event handler can then determine the target element and perform the appropriate action.
Event delegation is useful when you have a large number of elements that need event handling or when elements are dynamically added or removed from the DOM.
*/

const lists = document.getElementById('myList');

lists.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked:', event.target.textContent);
  }
});

/*
Debouncing is a technique used in JavaScript to limit the number of times a function is called during a rapid series of events. It helps in optimizing performance and preventing unnecessary function executions, especially for event-driven functions.

The basic idea behind debouncing is to delay the execution of a function until a certain amount of time has passed since the last invocation of that function. If the function is invoked again within the specified time, the timer is reset, and the countdown starts again. This ensures that the function is only executed once the event has stopped firing for a specific duration.
*/ 

function debounce(func, delay) {
    let timeoutId;
  
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

function handleScroll() {
    console.log('Scrolled!');
  }
  
  const debouncedScroll = debounce(handleScroll, 200);
  
  window.addEventListener('scroll', debouncedScroll);

  /**
   Throttling is a technique used in JavaScript to limit the rate at which a function is executed. It ensures that a function is called at a specified interval, regardless of how frequently the event triggering the function occurs. Throttling helps to optimize performance and prevent excessive function invocations.

The basic concept of throttling is to set a specific interval during which the function can be executed, and any subsequent function calls within that interval are ignored. Once the interval has elapsed, the function can be invoked again.
   */
function throttle(func, delay) {
    let timeoutId;
    let isThrottled = false;
   
    return function(...args) {
      if (isThrottled) {
        return;
      }
  
      isThrottled = true;
      func.apply(this, args);
  
      timeoutId = setTimeout(() => {
        isThrottled = false;
      }, delay);
    };
  }
  
  function handleClick() {
    console.log('Button clicked!');
  }
  
  const throttledClick = throttle(handleClick, 1000);
  
  const button = document.getElementById('myButton');
  button.addEventListener('click', throttledClick);
  
  /**
   Routing is the process of determining how an application responds to different URLs or paths requested by the user. It involves mapping URLs to specific actions or components within an application and managing the navigation between different pages or views.

In web development, routing is essential for creating dynamic and interactive applications. It allows users to navigate between different sections or pages, access specific content, and perform actions based on the URL they visit.

Routing is commonly used in single-page applications (SPAs) where the entire application runs within a single HTML page. Instead of loading separate HTML pages for each view, the application dynamically updates the content based on the requested route, providing a smoother and more responsive user experience.
   */

/**
 *n React, props, state, and hooks are fundamental concepts used to manage data and control the behavior of components.

Props:

Props (short for "properties") are used to pass data from a parent component to its child components.
Props are read-only and cannot be modified by the child components.
They provide a way to customize the behavior or appearance of a component based on the data passed to it.
Props are defined in the parent component and passed down to child components as attributes.
State:

State represents the internal data and mutable values of a component.
Unlike props, state can be modified by the component itself using the setState() method.
State is managed within a component and can be updated based on events, user interactions, or asynchronous operations.
When the state is updated, React re-renders the component to reflect the changes in the UI.
Hooks:

Hooks are functions introduced in React 16.8 that allow functional components to have stateful behavior and access other React features.
They provide a way to use state and other React features in functional components without using class components.
The most commonly used hooks are useState(), useEffect(), and useContext().
useState() hook is used to add state to functional components.
useEffect() hook allows performing side effects, such as data fetching or subscribing to events, in functional components.
useContext() hook is used to access context values in functional components.
Hooks enable a more concise and readable way of managing state and other React features in functional components, promoting code reuse and easier testing.

Overall, props are used for passing data from parent to child components, state represents the internal mutable data of a component, and hooks provide a way to add state and other React features to functional components. Understanding and utilizing props, state, and hooks is crucial for building dynamic and interactive React applications.


 */
// function Counter() {
//     const [count, setCount] = useState(0);
  
//     const increment = () => {
//       setCount(count + 1);
//     };
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>Increment</button>
//       </div>
//     );
//   }

// Given two strings, return true if they are anagrams of one another
// function solution(text1,text2){
// }

// solution("army","mary") //true
// solution("army","man") //false
function solution(text1, text2) {

  const sortText1 = text1.split('').sort().join('');
  const sortText2 = text2.split('').sort().join('');


  return sortText1 === sortText2;
 
}

console.log(solution("army", "mary")); // true
console.log(solution("army", "man")); // false

// //reverse string 
// function solution(text11,text22){
//   const text11 = 'army';
//   const text22 = 'mary'
//   const reversedStr = str.split('').reverse().join('');
//   console.log(reversedStr); // Output: "!dlroW ,olleH"

// }

const str1 = 'Hello, World!';
const reversedString = str1.split(' ').reverse().join(' ');
console.log(reversedString); // Output: "World! Hello,"

//he filter method in JavaScript is used to create a new array with all elements that pass a certain condition specified in a callback function. It iterates over each element in the array and invokes the callback function with the element as an argument. The callback function returns true or false based on the condition, and the elements that return true are included in the new filtered array.

const number =[1,7,4,8,10,12,3];

const filteredNumber = number.filter(function (num) {
    return num>5;
});
console.log(filteredNumber);

// Use var if you need function-level scope and want the ability to redeclare and reassign the variable.
// Use let if you need block-level scope and want the ability to reassign the variable within its scope.
// Use const if you need block-level scope and want to declare a variable whose value should not be changed.

var list = [
    { date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 },
    { date: '13/1/2011', reading: 5, id: 20051 },
  ];
  
  function customFilter(list, keyName, value) {
    var filteredList = [];
    
    for (var i = 0; i < list.length; i++) {
      if (list[i][keyName] === value) {
        filteredList.push(list[i]);
      }
    }
    
    return filteredList;
  }
  
  var outputList = customFilter(list, 'reading', 5);
  console.log(outputList);
  
  