let form = document.querySelector("form");
let errorMsg = document.createElement("p");

let fieldset = document.querySelector(".info-input");
const node = document.createTextNode("Passwords do not match");
errorMsg.style.color = "red";
errorMsg.appendChild(node);

form.addEventListener("submit", (e) => {
  const pass1 = document.querySelector("#password");
  const pass2 = document.querySelector("#confirmpass");
  if (pass1 !== pass2) {
    console.log("test");
    e.preventDefault();
    fieldset.appendChild(errorMsg);
    pass1.classList.add("error");
    pass2.classList.add("error");
  }
});
