"use strict";

// sample data - expanded Star Wars characters with varied ages
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Iterate through the characters array and output each character's name to the console using console.log(). Then, dynamically create <li> elements for each character name and append them to the HTML unordered list element with the id "names-list".


const namesList = document.getElementById("names-list");
console.log("--- Exercise 1: All Characters ---");

characters.forEach(char => {
  console.log(char.name);
  const li = document.createElement("li");
  li.textContent = char.name;
  namesList.appendChild(li);
});

// 2. Filter the characters array to find only those characters whose age property is less than 40. Log each filtered character's name to the console. Then, dynamically create <li> elements for each filtered character and append them to the HTML unordered list element with the id "young-characters-list".

const youngList = document.getElementById("young-characters-list");
console.log("--- Exercise 2: Characters Under 40 ---");

const youngCharacters = characters.filter(char => char.age < 40);
youngCharacters.forEach(char => {
  console.log(char.name);
  const li = document.createElement("li");
  li.textContent = `${char.name} (Age: ${char.age})`;
  youngList.appendChild(li);
});

// 3. Build a reusable function that accepts an array of character objects as a parameter. Inside the function, iterate through the array and extract each character's name property. Dynamically generate <li> elements for each name and append them to a target HTML list element. Call this function with the characters array and render the results in the unordered list with id "function-list".


function renderList(array, targetId) {
  const targetElement = document.getElementById(targetId);
  array.forEach(char => {
    const li = document.createElement("li");
    li.textContent = char.name;
    targetElement.appendChild(li);
  });
}
renderList(characters, "function-list");


// 4. Write a function that accepts two parameters: an array of character objects and a numeric age threshold. Inside the function, filter the array to include only characters whose age is below the threshold value. For each filtered character, create an <li> element with their name and append it to the target list. Call this function and render the results in the unordered list with id "age-filter-list".


function renderByAge(array, threshold, targetId) {
  const targetElement = document.getElementById(targetId);
  const filtered = array.filter(char => char.age < threshold);
  filtered.forEach(char => {
    const li = document.createElement("li");
    li.textContent = `${char.name} - ${char.age}`;
    targetElement.appendChild(li);
  });
}
renderByAge(characters, 50, "age-filter-list");


// 5. Enhance your rendering functions from exercises 3 and 4 with error handling logic. Before accessing the name property of each character object, check whether the "name" property exists. If a character object is missing the name property, use console.error() to log a descriptive error message to the console, and dynamically create and display the error message in the HTML div element with id "error-messages".


function renderWithValidation(array, listId, errorId) {
  const listElement = document.getElementById(listId);
  const errorElement = document.getElementById(errorId);

  array.forEach(char => {
    if (char.name) {
      // If name exists, add it to the UI
      const li = document.createElement("li");
      li.textContent = char.name;
      listElement.appendChild(li);
    } else {
      // If name is missing, log the error and show it on the page
      const errorMsg = `Error: Character with ID ${char.id} is missing a name property.`;
      console.error(errorMsg);
      
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = errorMsg;
      errorElement.appendChild(errorDiv);
    }
  });
}
renderWithValidation(characters, "error-handling-list", "error-messages");


// 6. Create a second array called "brokenCharacters" that intentionally contains objects with missing name properties (e.g., objects with only id and age). Pass this broken array to your error-handling functions from exercise 5. Verify that your error handling correctly identifies the missing name properties, logs appropriate error messages to the console, and displays those error messages in the HTML div element with id "broken-array-errors".


const brokenCharacters = [
  { id: 11, name: "Boba Fett", age: 35 },
  { id: 12, age: 20 }, // Missing name
  { id: 13, name: "Lando Calrissian", age: 30 },
  { id: 14, age: 50 }, // Missing name
  { id: 15, name: "Admiral Ackbar", age: 60 }
];

renderWithValidation(brokenCharacters, "broken-array-list", "broken-array-errors");