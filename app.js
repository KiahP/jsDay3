
// 3. Let's review objects. Declare three new variables that have objects as their values. Each object should have /at least/ three property/value pairs. Each object  should have at least one string, one array, and one number  in the value of a property/value pair.

var mom ={
    'age' : 55,
    'hair' : 'curly',
    'personality' : ['outgoing', 'funny']
} 
var dad ={
    'age' : 59,
    'hair' : 'black',
    'personality' : ['serious', 'confident']
} 
var brother ={
    'age' : 23,
    'hair' : 'short',
    'personality' : ['quirky', 'reserved']
} 

// 4. Use dot notation or bracket notation to console.log a value from each object you created in step 3.

var ageval = dad.age;
var hairVal = brother.hair;
var personalityVal = mom.personality;
var dadHair = dad["hair"];

// Create a function that takes an array as an argument. That function  should then console.log every value in the array using a for-loop. Then call the function on an array. The array can be any array of your making or choosing.

var myArr = [1, 2, 3, 4];

function myArr(a,b,c,d){
for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i])
}
}


