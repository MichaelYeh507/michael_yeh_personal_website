import $ from 'jquery';


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
            // alert("Found Banana in " + i);
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
                // alert("We found a banana in the first array");
            } else {
                // alert("Found Banana in the second array");
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

if (window.location.href.includes("index.html") || window.location.href.endsWith("website/")) {
    greetingFunc();
}


var path = window.location.href;
function splitPathBySlash(p){
    let res = [];
    let str = "";
    for(let i =0; i < p.length; i++){
        if (p[i] == "/"){
            if(str != "") res [res.length] = str;
            str = "";
            continue;
        }
        str+=p[i];
    }
    if(str!= "") res[res.length] = str;
    return res;
}

var path_split = splitPathBySlash(path);
if(path_split[path_split.length-1] == "index.html") greetingFunc(); 

//add year
//FOOTER
function addYear() {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("copyYear").innerHTML = year;
}

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showListBtn").style.display = "none";
// }


//jquery
$(document).ready(function () {
    // Initially hide the full bio and Read Less button
    $("#fullBio").hide();
    $("#readLessBtn").hide();

    // Show full bio and hide Read More button when clicked
    $("#readMoreBtn").click(function () {
        $("#fullBio").slideDown();
        $("#shortBio").hide();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    // Hide full bio and show Read More button when clicked
    $("#readLessBtn").click(function () {
        $("#fullBio").slideUp();
        $("#shortBio").show();
        $("#readMoreBtn").show();
        $("#readLessBtn").hide();
    });
});



function validateForm(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");
    let errorMessage = document.getElementById("formError");
    if(!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()){
        errorMessage.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    } else {
        errorMessage.innerHTML = '';
    }
}



/*get advice */
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        document.getElementById('adviceText').innerText = data.slip.advice;
    })
}



/*toggleMenu*/
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
