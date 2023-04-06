const formInput = document.getElementById("form-input");
const formResults = document.getElementById("form-results");

const FirstName = document.getElementById("firstname-input");
const LastName = document.getElementById("lastname-input");
const Email = document.getElementById("email-input");
const Country = document.getElementById("country-input");

inputFields = [FirstName, LastName, Email, Country]


// form submission
formInput.addEventListener("submit", (event) => {
  event.preventDefault();

  inputFields.forEach(field => {
    const textTitle = field.placeholder;
    const textInput= field.value;
    const charCount = textInput.length;
    const wordCount = textInput.split(" ").filter((word) => word !== "").length;
    const reversedText = textInput.split("").reverse().join("");
    const upperCaseText = textInput.toUpperCase();
    const lowerCaseText = textInput.toLowerCase();
  

    formResults.innerHTML += `
    <div>
      <h3>${textTitle}</h3>
      <p>Number of Characters: ${charCount}</p>
      <p>Number of Words: ${wordCount}</p>
      <p>Reversed Text: ${reversedText}</p>
      <p>Uppercase Text: ${upperCaseText}</p>
      <p>Lowercase Text: ${lowerCaseText}</p>
    </div>`
      ;
  })

});




