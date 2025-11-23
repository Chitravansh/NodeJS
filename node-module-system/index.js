//module.exports - to export functions, objects, or values from a module so that they can be used in other files.
//require - to import functions, objects, or values from other modules into the current file.

const firstModule = require('./first_module');

console.log(firstModule.add(10,5));

try {
    console.log('trying to divide by zero:');
    let result = firstModule.divide(10,0);
    console.log(result);

} catch (error){
    console.log('caught an error :', error.message);
}

// module wrapper 
(
    function(exports, require, module, __filename, __dirname){
        //youur module code goes here
    }
)