/*
-Npm vs npx--------------------------------
npm (Node Package Manager): is a tool used to install and manage packages (libraries) for Node.js and JavaScript projects. It helps you handle dependencies, versioning, and running scripts for tasks in your projects.
It is installed in your system with specific version and everytime there is change we need to install latest version which agains occupies space.

npx (Node Package Runner): is a tool that comes with npm. It lets you run command-line tools without installing them globally or locally. It's handy for running tools temporarily or using ones that you don't want to keep permanently installed.
It comes with all lastest version and does not occupies space. 

In short, npm is for managing packages, while npx is for running command-line tools.


-Explain closures---------------------------------
is a fundamental concept in JavaScript that allows a function to access variables from its outer (enclosing) lexical scope even after the outer function has finished executing. In simpler terms, a closure is a function bundled together with its surrounding state (variables).
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

-Output based question

- Life cycle of React----------------------------



-ES6 features in JavaScript
-React 18 features

"-DSA object based
-Double shorting- agewise and name wise
-Promise in JavaScript
-Callback in JavaScript
-Event Loop
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


"1)CSS- what is a difference between relative and absolute positions
2)CSS-What are pseudo selectors?
3)CSS-Whats is Z index?
4)HTML-What is span and div?
5)Javascript-How to host a function?
6)Difference b/w let, var and const?
7)Java script Code-Create an object-delete last key value pair?
8)React-Creat an array and show that array in a ordered or unordered list?
9)React code- create a button and apply on-click event?(basically show an alert message)
10)What is web storage in HTML5?
11)CSS-Explain iframe?
12)CSS-Diff. b/w display none and visibility hidden?
13)CSS- dIFF b/w transition and transform?
14)Javascript code-create an object?
15)Create an array and delete a property from object?
16)Javascript code- create a div element?"


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