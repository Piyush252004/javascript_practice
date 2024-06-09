// Immediately Invoked Function Expression (IIFE)

(function chai() {                          // This is Named IIFE             // ()() This is the syntax of iife which is used to invoked funtion expression immediately and it is used to secure(remove) global scope's variable's values declaration.  
    console.log(`DB Connected`);
})();                                       // compiler did not know where we need to stop this iife function then we need to put one semi-colon after it so that its getting terminated.

((name) => {                                // this is un-named iife
    console.log(`DB connected 2 ${name}`);
})( "Piyush");                                       // We can connect arrow function also in iife.