
## ---ANSWER Interview Questions---



1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
- map(): - return a new array 
         - does not manipulate teh orginal array
         -access memory and stores return values.
                     

- forEach(): - does not return a new array
             - allow a callback function to mutate the current array. 
             - interate through every item in the array without stopping

2. Explain the difference between a callback and a higher order function.

 - higher order functions can receive other functions as parameters
 - callback functions are the functions that are passed into other functions as arguments

3. What is closure?

- Closure is the keys for development to manipulate functions: parent function level which already terminated can acess to its child.

4. Describe the four rules of the 'this' keyword.

-  the value of “this” will be the window/console Object inside the global scope.
-  on left the of the dot that is what "this" refers to when we invoke a function.
- "this" refers to the specific instance of the object that is created and returned by the constructor function
-  when a function is invoked as constructor function using the new keyword 'this' points to the new object that's created 

5. Why do we need super() in an extended class?

- To call it's parent instructor. 
