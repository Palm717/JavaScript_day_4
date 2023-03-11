var lowercase = ['a', 'b', 'c', 'd', 'e'];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandom(charSet) {
    return charSet[Math.floor(Math.random() * charset.length)];
}

function genPass(data) {
    var result = '';
    var chars = [];

    if (data.lowercase) {
        chars.concat(lowercase);
    }

    if (data.nums) {
        chars.concat(nums);
    }

    for (var i = 0; data.passwordLength; i++) {
        result += getRandom(chars);
    }
    return result;
}

var options = {
    passwordLength: 35,
    lowercase: true,
    nums: true
};

var pass = genPass(options);


// var random = Math.floor(Math.random() * 10) + 1;

// console.log(random);//gives a random number between 1 and 10
// //can make a keygen with this










// // var sloppyData = ['RMP', 'golf', 7, 3,  'pets'];//arrays are good for storing unorganized data that can be sifted thru

// var data = {
//     name: 'RMP',
//     sport: 'golf',
//     pets: 3,
//     number: 7,
//     hobby: 'pets',
//     printName: function() {
//         console.log(this.name);
//     }
// };

// data.printName();//we call the function the same way we call any other function but here it is a property of the object which must be referenced fist before calling the function
// // methods have access to the parent object this. is == to saying this parent object
// console.log(data.sport);
// console.log(data.name);

//every value in JS is also an object
//they are objects because we can also have methods which are functions
//functions are methods and methods are functions
//methods()-- is a function that is assigned to a property of an object



//this represents a data value type. it is not a code block as long as their is not a key word before the curly brackets
// an object is a key:value pair
//example above sport:golf is a key value pair 
// the properties describe the values given




// var nums = [10, 3, 100, 500, 50, 75, 45];

// console.log(typeof nums);//an array is an object but its base value is an array
// console.log(Array.isArray(nums));//proves an array is an array
//JS is an object oriented langauage so everything seen is an object regardless of its base value







// var nums = [10, 3, 100, 500, 50, 75, 45];

// // nums.sort(function(current, next){
// //     return next - current;
// // })

// // console.log(nums);
// console.log(nums.length);
// //this function sorts the array and places the nums in descending order
// //flipping next with current (current - next) would place in ascending order

// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === 500) {
//         break;
//     }

//     console.log(nums[i]);
// }






// // if (true) {
//     let test = 'test';
//     console.log('yep');
// }

// //var is not locked inside a code block or function
// //it is hoisted from the function
// //let does not allow hoisting
// //const does not allow hoisting 
// //function scope is strict

// console.log(test);



// function calc(num1, num2, operator) {
//     // switch(operator) {
//     //     case '+':
//     //         return num1 + num2;

//     //     case '-':
//     //         return num1 - num2;

//     //     case '*':
//     //         return num1 * num2;
// }    
// }
        
        
    
//when you call a function the function call becomes the value    

// function calc(num1, num2, operator) {
//     if(operator === '+') {
//         return num1 + num2;

//     } else if(operator == "-") {
//         return num1 - num2;

//     } else if(operator = '*') {
//         return num1 * num2;
//     }
// }
    
// var sum = calc(5,10,'+');
// var diff = calc(5,10,'-');
// var product = calc(5, 10, '*')

// console.log(sum);
// console.log(diff);
// console.log(product);

// function printName(name) {
//     var something = 'something';
//     var capitalize = function(str) {
//         return str[0] + str.slice[1];
//     }
// }




// function subtract(num1,num2) {
//     return num1 - num2;
// }

// var diff = subtract(10,5);
// var diff1 = subtract(10,3);
// console.log(diff1);






// function diff() {
//     // console.log(num1);
//     return 'yes we can overwrite it!';
//      //return is logged in the memory of the function until it is called and  makes the function obsolete until it is asked to function again
// } //this code block is locked.

// // console.log(num1); this would return an error outside the code block. this is referred to as local scope
// // think of it as a locked box

// var returnedVal = diff();
// console.log(returnedVal);








// function myFunc (num, str) {//the parameters are inside these parentheses
//     console.log(num);
// }

// myFunc(10, 'another');//the argument is inside these parentheses
// //parameter names do not matter