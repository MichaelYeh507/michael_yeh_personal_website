//STEP 4
var x = 5;
var y = 7;

var z = x + y;

console.log(z); // Output: 12

var A = "Hello ";
var B = "world!";

var C = A + B;

console.log(C); // Output: Hello world!


//STEP 5
function SumNPrint(x1, x2) {
    const x3 = x1 + x2;
    console.log(x3); 
}

SumNPrint(x, y);
SumNPrint(A, B);  


//STEP 6
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!"); 
}


//STEP 7
const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Found Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2); 


//STEP 8
function findTheBanana(arr) {
    arr.forEach(item => {
        if (item === "Banana") {
            if (arr === L1) {
                alert("We found a banana in the first array");
            } else {
                alert("Found Banana in the second array");
            }
        }
    });
}


//STEP 9
function greetingFunc() {
    let d = new Date(); 
    let h = d.getHours(); 
    let greeting = "";
    
    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greeting = "Good night";
    }

    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = greeting;
    }
}

if (window.location.href.includes("index.html") || window.location.href == "https://michaelyeh507.github.io/michael_yeh_personal_website") {
    greetingFunc();
}
