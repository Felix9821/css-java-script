<script>
document.write("<h1>hello world!</h1>")
var x = 10;
var x =100;
document.write(x);
/hola como estan/
/* This code
creates an
alert box */
alert("This is an alert box!");
var num = 42; // A number without decimals
var price = 55.55; // A number with decimals
document.write(price);
var name = 'John';
var text = "My name is John Smith";
var text = "My name is 'John' ";
var sayHello = 'Hello world! \'I am a JavaScript programmer.\'
';
document.write(sayHello);
var isActive = true; 
var isHoliday = false;
var x = 10 + 5;
document.write(x);
var x = 10;
var y = x + 5 + 22 + 45 + 6548;
document.write(y);
var x = 10 * 5;
document.write(x);
var x = 100 / 5;
document.write(x);
var myVariable = 26 % 6;
var num = 10;
// num == 8 will return false
(4  2) && (10  15) 
variable = (condition) ? value1: value2
var isAdult = (age  18) ? "Too young": "Old enough";
var mystring1 = "I am learning ";
var mystring2 = "JavaScript with SoloLearn.";
document.write(mystring1 + mystring2);

function main() {
    distance = parseInt(readLine(), 10)}
    //your code goes here
     const speed = 40; 
     const time = distance/speed; 
     const timeInMinutes= time*60;
     console.log(timeInMinutes )
if (condition) {
   statements
}
if (condition) {
statements
}
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
alert("JavaScript is easy to learn.")
}
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
alert("JavaScript is easy to learn.")
}
if (expression) {
   // executed if condition is true
}
else {
   // executed if condition is false
}
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
alert("This is my first condition")
}
else {
alert("This is my second condition")
}
var course = 1;
if (course == 1) {
document.write("<h1>HTML Tutorial</h1>")
} else if (course == 2) {
document.write("<h1>CSS Tutorial</h1>")
} else {
document.write("<h1>JavaScript Tutorial</h1>")
}
var course = 3;
if (course == 1) {
document.write("<h1>HTML Tutorial</h1>")
} else if (course == 2) {
document.write("<h1>CSS Tutorial</h1>")
} else {
document.write("<h1>JavaScript Tutorial</h1>")
}
switch (expression) {
  chase n1: 
     statements
     break;
  case n2: 
     statements
     break;
  default: 
     statements
}
var day = 2;
switch (day) {
chase 1:
document.write("Monday");
break;
case 2:
document.write("Tuesday");
break;
case 3:
document.write("Wednesday");
break;
default:
document.write("Another day");
}
var color ="yellow";
switch(color) {
case "blue":
document.write("This is blue.");
break;
case "red":
document.write("This is red.");
break;
case "green":
document.write("This is green.");
break;
case "orange":
document.write("This is orange.");
break;
default:
document.write("Color not found.");
}
for (statement 1; statement 2; statement 3) {
   code block to be executed
}
for (i=1; i<=5 i++) {
document.write(i + "<br />")}
var i = 1;
for (; i<=5; i++) {
document.write(i + "<br />")}
for (i=1, text=""; i<=5; i++) {
text = i;
document.write(i + "<br />")}
var i = 0;
for (; i < 10; ) {
document.write(i);
i++;
}
while (condition) {    
   code block
}
var i=0;
while (i<=10) {
document.write(i + "<br />");
i++;
}
do {
   code block
}
while (condition);
var i=20;
do {
document.write(i + "<br />");
i++;
}
while (i<=25);
for (i = 0; i <= 10; i++) {
if (i == 5) {
break;
}
document.write(i + "<br />");
}
for (i = 0; i <= 10; i++) {
if (i == 5) {
continue;
}
document.write(i + "<br />");
}
function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
      i = 0;
    
    for (; depth > 0;) {
        i++;
        
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(i);
}
function name() {    
  //code to be executed
}
function myFunction() {
alert("Calling a Function!");
}
myFunction();
function myFunction() {
alert("Alert box!");
}
myFunction();
//"Alert box!"
// some other code
myFunction();
//"Alert box!"
functionName(param1, param2, param3) {
   // some code
}
function sayHello(name) {
alert("Hi, " + name);
}
sayHello("David");
function sayHello(name) {
alert("Hi, " + name);
}
sayHello("David");
sayHello("Sarah");
sayHello("John");
function myFunc(x, y) {
   // some code
}
function sayHello(name, age) {
  document.write( name + " is " + age + " years old.");
}
function sayHello(name, age) {
document.write( name + " is " + age + " years old.");
}
sayHello("John", 20)
function myFunction(a, b) {
return a * b;
}
var x = myFunction(5, 6);
// Return value will end up in x
function addNumbers(a, b) {
var c = a+b;
return c;
}
document.write( addNumbers(40, 2) );
alert("Hello\nHow are you?");
alert("Do you really want to leave this page?");
var user = prompt("Please enter your name");
alert(user);
var user = prompt("Please enter your name");
alert(user);
var result = confirm("Do you really want to leave this page?");
if (result == true) {
alert("Thanks for visiting");
}
else {
alert("Thanks for staying with us");
}
function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);

    function convert(amount, rate) {
        return amount*rate;
    }
    
    console.log(convert(amount, rate));
}
var person = {
 name: "John", age: 31, 
 favColor: "green", height: 183
};
objectName.propertyName
//or
objectName['propertyName']
var course = {name: "JS", lessons: 41};
document.write(course.name.length);
objectName.methodName()
var person = {
name: "John", age: 42, favColor: "green"
}
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");
document.write(p1.age); // Outputs 42
document.write(p2.name); // Outputs "Amy"
function person (name, age) {
this.name = name;
this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);
var John = {
  name: "John",
  age: 25
};
var James = {
  name: "James",
  age: 21
};
document.write(John.age);
methodName = function() { code lines }
objectName.methodName()
function person(name, age) {
this.name = name;
this.age = age;
this.changeName = function (name) {
this.name = name;
}
}
var p = new person("David", 21);
p.changeName("John");
//Now p.name equals to "John"
function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
function person(name, age) {
this.name= name;
this.age = age;
this.yearOfBirth = bornYear;
}
function bornYear() {
return 2016 - this.age;
}
var p = new person("A", 22);
document.write(p.yearOfBirth());
function contact(name, number)
{
this.name = name;
this.number = number;
this.print = print;
}
function print()
{
console.log(this.name + ": " + this.number);
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321)
a.print();
b.print();
var course1 ="HTML"; 
var course2 ="CSS"; 
var course3 ="JS"; 
var courses = new Array("HTML", "CSS", "JS"); 
var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 
var courses = new Array("HTML", "CSS", "JS");
document.write(courses[10]);
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";
var courses = ["HTML", "CSS", "JS"];
var courses = ["HTML", "CSS", "JS"];
document.write(courses.length);
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
document.write(Math.PI);
var number = Math.sqrt(4);
document.write(number);
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);
function myAlert() {
alert("Hi");
}
setInterval(myAlert, 3000);
var d = new Date();
//d stores the current date and time
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);
JS
var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour
function printTime() {
var d = new Date();
var hours = d.getHours();
var mins = d.getMinutes();
var secs = d.getSeconds();
document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    for(var i=0;i<=prices.length-1;i++){
        prices[i]=prices[i]+increase;
    }
    console.log(prices);
}
document.body.innerHTML = "Some text";
//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)
var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";
var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";
<p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>
<img id="myimg" src="orange.png" alt="" />
<script>
var el = document.getElementById("myimg");
el.src = "apple.png";
</script>
<a href="http://www.example.com">Some link</a>
<script>
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";
</script>
<div id="demo" style="width:200px">some text</div>
<script>
var x = document.getElementById("demo");
x.style.color = "6600FF";
x.style.width = "100px";
</script>
var node = document.createTextNode("Some new text");
<div id ="demo">some content</div>
<script>
//creating a new paragraph
var p = document.createElement("p");
var node = document.createTextNode("Some new text");
//adding the text to the paragraph
p.appendChild(node);
var div = document.getElementById("demo");
//adding the paragraph to the div
div.appendChild(p);
</script>
<div id="demo">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
<script>
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>
<div id="demo">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
<script>
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);
</script>
var t = setInterval(move, 500); 
// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}
var t = setInterval(move, 10);
function move() {
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      pos += 1;
      box.style.left = pos+"px";
    }
  }
  var pos = 0;
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 10);
function move() {
if(pos >= 150) {
clearInterval(t);
}
else {
pos += 1;
box.style.left = pos+"px";
}
<button onclick="show()">Click Me</button>
<script>
function show() {
alert("Hi there");
}
var x = document.getElementById("demo");
x.onclick = function () {
document.body.innerHTML = Date();
}
</script>
window.onload ​= function() {

    ​//some code
}
element.addEventListener(event, function, useCapture);
element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}
addEventListener(event, function, useCapture)
//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);
var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
 ];
 "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num = 0;
function next() {
var slider = document.getElementById("slider");
num++;
if(num >= images.length) {
num = 0;
}
slider.src = images[num];
}
function prev() {
var slider = document.getElementById("slider");
num--;
if(num < 0) {
num = images.length-1;
}
slider.src = images[num];
}
function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
    return true;
    }
    }
    alert("The values should be equal and not blank");
    return false;
    }
    var a = 10;
const b = 'hello';
let c = true;
if (true) {
    let name = 'Jack';
    }
    alert(name); //generates an error
    function varTest() {
        var x = 1;
        if (true) {
        var x = 2; // same variable
        console.log(x); // 2
        }
        console.log(x); // 2
        }
        function letTest() {
        let x = 1;
        if (true) {
        let x = 2; // different variable
        console.log(x); // 2
        }
        console.log(x); // 1
        }
        const a = 'Hello';
        a = 'Bye';
        let name = 'David';
        let msg = 'Welcome ' + name + '!';
        console.log(msg);
        let name = 'David';
let msg = `Welcome ${name}!`;
console.log(msg);
let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg)
let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
console.log(arr[k]);
}
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
console.log(v);
}
let list = ["x", "y", "z"];
for (let val of list) {
console.log(val);
}
for (let ch of "Hello") {
    console.log(ch);
    }
    function add(x, y) {
        var sum = x+y;
        console.log(sum);
        }
        const add = (x, y) => {
            let sum = x + y;
            console.log(sum);
            }
            var arr = [2, 3, 7, 8];
            arr.forEach(function(el) {
            console.log(el * 2);
            });
            const arr = [2, 3, 7, 8];
            arr.forEach(v => {
            console.log(v * 2);
            });
            const test = (a, b = 3, c = 42) => {
                return a + b + c;
              }
              console.log(test(5)); //50 
              let tree = {
                height: 10,
                color: 'green',
                grow() {
                this.height += 2;
                }
                };
                tree.grow();
                console.log(tree.height); // 12
                let height = 5;
let health = 100;
let athlete = {
height,
health
};
let prop = 'name';
let id = '1234';
let mobile = '08923';
let user = {
[prop]: 'Jack',
[`user_${id}`]: `${mobile}`
};
var i = 0;
var a = {
['foo' + ++i]: i,
['foo' + ++i]: i,
['foo' + ++i]: i
};
var param = 'size';
var config = {
[param]: 12,
['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]:
4
};
console.log(config.mobileSize);
let person = {
    name: 'Jack',
    age: 18
    };
    let newPerson = person; // newPerson references person
    newPerson.name = 'Bob';
    console.log(person.name); // Bob
    console.log(newPerson.name); // Bob
    let person = {
        name: 'Jack',
        age: 18
        };
        let newPerson = Object.assign({}, person);
        newPerson.name = 'Bob';
        console.log(person.name); // Jack
        console.log(newPerson.name); // Bob
        let a, b;
        ({a, b} = {a: 'Hello ', b: 'Jack'});
        console.log(a + b); // Hello Jack

        let {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;
//console.log(h); // Error
console.log(foo); // 42
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
    return false;
    }
    }
    return true;
    }
    let x = [2, 4, 6, 7];
    console.log(containsAll(x, 2, 4, 7));
    console.log(containsAll(x, 6, 4, 9));
    function containsAll(arr, ...nums) {
        for (let num of nums) {
        if (arr.indexOf(num) === -1) {
        return false;
        }
        }
        return true;
        }
        function containsAll(arr) {
            for (let k = 1; k < arguments.length; k++) {
            let num = arguments[k];
            if (arr.indexOf(num) === -1) {
            return false;
            }
            }
            return true;
            }
            let x = [2, 4, 6, 7];
            console.log(containsAll(x, 2, 4, 7));
            console.log(containsAll(x, 6, 4, 9));
            class Rectangle {
                constructor(height, width) {
                  this.height = height;
                  this.width = width;
                }
              }
              var Square = class Rectangle {
                constructor(height, width) {
                this.height = height;
                this.width = width;
                }
                };
                JS
                var Square = class {
                constructor(height, width) {
                this.height = height;
                this.width = width;
                }
                };
                        
                class Rectangle {
                    constructor(height, width) {
                    this.height = height;
                    this.width = width;
                    }
                    get area() {
                    return this.calcArea();
                    }
                    calcArea() {
                    return this.height * this.width;
                    }
                    }
                    const square = new Rectangle(5, 5);
                    console.log(square.area); // 25
                    class Point {
                        constructor(x, y) {
                        this.x = x;
                        this.y = y;
                        }
                        static distance(a, b) {
                        const dx = a.x - b.x;
                        const dy = a.y - b.y;
                        return Math.hypot(dx, dy);
                        }
                        }
                        const p1 = new Point(7, 2);
                        const p2 = new Point(3, 8);
                        console.log(Point.distance(p1, p2));
                        class Animal {
                            constructor(name) {
                            this.name = name;
                            }
                            speak() {
                            console.log(this.name + ' makes a noise.');
                            }
                            }
                            class Dog extends Animal {
                            speak() {
                            console.log(this.name + ' barks.');
                            }
                            }
                            let dog = new Dog('Rex');
                            dog.speak();
                            let set = new Set();
                            set.add(5).add(9).add(59).add(9);
                            console.log(set.has(9));
                            for (let v of set.values())
                            console.log(v);
                            new Promise(function(resolve, reject) {
                                // Work
                                if (success)
                                    resolve(result);
                                else
                                    reject(Error("failure"));
                            }); setTimeout(function() {
                                console.log("Work 1");
                                setTimeout(function() {
                                console.log("Work 2");
                                }, 1000);
                                }, 1000);
                                console.log("End");
                                etu e o se( u ct o ( esol e, eject) {
                                    if (work === "")
                                    reject(Error("Nothing"));
                                    setTimeout(function() {
                                    resolve(work);
                                    }, 1000);
                                    });
                                    }
                                    asyncFunc("Work 1") // Task 1
                                    .then(function(result) {
                                    console.log(result);
                                    return asyncFunc("Work 2"); // Task 2
                                    }, function(error) {
                                    console.log(error);
                                    })
                                    .then(function(result) {
                                    console.log(result);
                                    }, function(error) {
                                    console.log(error);
                                    });
                                    console.log("End");
                                    [Symbol.iterator] : function* () {
                                        yield 1; yield 2; yield 3;
                                        ...
                                        console.log([...myIterableObj]);
                                        function* idMaker() {
                                            let index = 0;
                                            while (index < 5)
                                            yield index++;
                                            }
                                            var gen = idMaker();
                                            console.log(gen.next().value);
                                            const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
                                            const my_obj = {
                                            [Symbol.iterator]: function*() {
                                            for(let index of arr) {
                                            yield `${index}`;
                                            }
                                            }
                                            };
                                            const all = [...my_obj]
                                            .map(i => parseInt(i, 10))
                                            .map(Math.sqrt)
                                            .filter((i) => i < 5)
                                            .reduce((i, d) => i + d);
                                            console.log(all);
                                            
z.print();
                                                                                                                                                                                             
                </script>



