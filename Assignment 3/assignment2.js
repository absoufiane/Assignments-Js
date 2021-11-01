// Function to Capitalize First Letter
function capitalize(string) {  
    return string.split(' ').map(string => string.charAt(0).toUpperCase() + string.substring(1)).join(' '); 
}
console.log(capitalize("hi my name is abderrahman soufiane"));   // display on Console the Browser