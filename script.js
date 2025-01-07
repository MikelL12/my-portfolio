// Get the image and the modal elements
const img = document.getElementById('skillImage');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// When the user clicks the image, open the modal
img.onclick = function() {
  modal.style.display = "flex"; // Show the modal
  modalImg.src = this.src; // Set the modal image source to the clicked image
}

// When the user clicks on <span> (close button), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close the modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


// // Placeholder JavaScript for potential future functionality, like smooth scrolling, etc.
// document.addEventListener('DOMContentLoaded', () => {
//     // Example of smooth scrolling when navigating through sections
//     const links = document.querySelectorAll('nav ul li a');
  
//     links.forEach(link => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = e.target.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);
        
//         window.scrollTo({
//           top: targetSection.offsetTop,
//           behavior: 'smooth'
//         });
//       });
//     });
//   });



// const title = document.getElementById("about");
// console.log(title.textContent);

// const items = document.getElementsByClassName("project")
// console.log(items);
// console.log(items[0]);
// console.log(items[0].innerHTML);
// console.log(items[0].innerText);
// console.log(items[0].innerContent);

// const header = document.querySelectorAll("h1");
// const allProjects = document.querySelectorAll(".project");
// console.log(header);
// console.log(allProjects); 

// aboutSection.textContent = "Welcome to my portfolio!";
// aboutSection.innerText = "Welcome to my portfolio!";

// allProjects.forEach((project) => console.log(project.textContent));
// const mYName = "Mikel";
// const aboutMeText = `Hello! My name is ${myName}, and I am a CS student`;
// aboutSection.textContent = aboutMeText;


// const newParagraph = document.createElement("p");
// newParagraph.textContent = aboutMeText;
// aboutSection.innerHTML = "";
// aboutSection.appendChild(newParagraph);

// const skills = ["C++" , "HTML" , "React", "JavaScript"];

// const skillsList = document.querySelector("#skills ul");
// skillsList.textContent = "";
// skills.forEach((skill) => {
//     const skillItem = document.createElement("li");
//     skillItem.textContent = skill;
//     skillsList.appendChild(skillItem);
// })

// aboutSection.style.color = "blue";
// aboutSection.style.fontSize = "24px";

// aboutSection.slassList.add("highlight");

// ReportBody.classList.toggle("dark-mode");

// const skillItem = document.createElement("li");
// skillItem.textContent = skills[0];
// skillsList.appendChild(skillItem);


// let userName = "Mikel";
// const age = 20;

// userName = "Lewis";
// const skills = ["C++", "JavaScript", "CSS"];

// console.log("Bye World");
// console.log(skills.at(1));

// const sum = 10 + 5;
// console.log(sum);
// // console.log(sum, product, "Hello world");

// const firstName = "Jane";
// const lastName = "Doe";
// console.log("Hello " + firstName + " " + lastName);
// console.log("Hello " + firstName , lastName);

// console.log(`Hello, ${firstName} ${lastName}`);

// function greet(name) {
//     return `Hello, ${name} !`;
// };
// console.log(greet("John"));

// const greet1 = function (name) {
//     return `Hello, ${name} !`;
// };

// console.log(greet1("Jane"));

// const greet2 = (name) => `Hello, ${name} !`;

// console.log(greet2("Alex"));

// const greet3 = (name) => {
//     return `Hello, ${name} !` 
// };

// console.log (greet3("Matt"));

// // function square(num) {
// //     return num * num;
// // };

// // const square = (num) => num * num;

// // console.log(square(5));

// console.log(function(num) {
//     return num * num;
// }(5));

// const test = function(a, b) {
//     return a + b;
// }(3,5);

// console.log(test);

// const names = ["Joe", "Jane", "John"];
// const numbers = [1, 2, 3, 4, 5];

// names.forEach((name) => (console.log(name)));
// skills.forEach((skill) => {
//     console.log(skill);
// });

// const squares = numbers.map((num) => num * num);
// console.log(squares);

// const oddNumbers = numbers.filter((num) => num % 2 === 1);
// console.log(oddNumbers);

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// const aFunc = (acc, num) => acc + num;

// const sum2 = numbers.reduce((acc, num) => acc + num , 1 );
// console.log(sum2);

// const firstEven = numbers.find((num) => num % 2 === 0);
// console.log(firstEven);

// numbers.sort((a,b) => a - b);
// console.log(numbers);


// // const aFunc = (num) => num % 2 === '0';


// // const aFunc = (num) => num * num;

// // for (let i = 0; i < names.length; i++){
// //     console.log(names[i]);
// // }



// // let userName = "John";
// // const age = 25;
// // userName = "Jane";
// // const skills = ["HTML", "CSS", "JavaScript"];
// // console.log("hello world");
// // console.log(skills.at(1));
// // const sum = 10 + 5;
// // const product = 10 * 2;
// // console.log(sum, product, "hello world");
// // const firstName = "Jane";
// // const lastName = "Doe";
// // console.log("Hello, " + firstName + " " + lastName);
// // console.log("Hello," , firstName , lastName);
// // console.log(`Hello, ${firstName} ${lastName}`);
// // function greet(name) {
// //     return `Hello, ${name} !`;
// // }
// // console.log(greet("John"));
// // const greet1 = function(name) {
// //     return `Hello, ${name} !`;
// // };
// // console.log(greet1("Jane"));
// // const greet2 = (name) => `Hello, ${name} !`;
// // console.log(greet2("Alex"));
// // const greet3 = (name) =>  {
// //     return `Hello, ${name} !`
// // };
// // console.log(greet3("Matt"));
// // // const square = (num) => num * num;
// // console.log(function(num) {
// //     return num * num;
// // }(5));
// // const test = function(a, b) {
// //     return a + b;
// // }(3,5);
// // console.log(test);