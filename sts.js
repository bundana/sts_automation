//I added comments so you can modify
//let's cook :D ;D

async function handleRadiosAndTextAreas() {
  // Check and confirm all radios are checked
  const stronglyAgreeRadios = document.querySelectorAll("input[value='5']");
  stronglyAgreeRadios.forEach((radio) => (radio.checked = true));

  // Function to fill textareas

  function generateResponses(question) {
    if (question.includes("like best")) {
      return "What I liked best about the course was the instructor's ability to explain complex concepts in an understandable way. The use of real-world examples made the material more relatable and engaging.";
    } else if (question.includes("improvement")) {
      return "To improve the course, I would suggest incorporating more interactive elements such as group projects or hands-on workshops. This could enhance the practical application of the theoretical concepts learned.";
    } else {
      return "The course was well-structured and informative, providing a comprehensive overview of the subject matter. The teaching methods used were effective in facilitating understanding and encouraging critical thinking.";
    }
  }

  // Handle textareas and check fill

  const textAreaCards = document.querySelectorAll(
    ".card-content textarea[name^='OQ']"
  );

  let filledTextAreas = 0;

  textAreaCards.forEach((textArea) => {
    //get text card and question
    const questionCard = textArea.closest(".card");
    const questionText = questionCard
      .querySelector(".card-title")
      .textContent.trim();

    //Respond and set Text area
    const response = generateResponses(questionText);
    textArea.value = response;
    filledTextAreas++;
  });

  console.log(
    "All questions answered, Hello from Michael! \n This is Michael's way of being Michael :D"
  );

  const submitBtn = document.querySelectorAll("#submitbtn");
  if (submitBtn) {
    const userConfirmation = confirm("Do you want to submit the form?");
    if (userConfirmation) {
      submitBtn.click();
      console.log("Form submitted successfully.");
    } else {
      console.log("Form submission cancelled by user");
    }
  } else {
    console.error("Submit button not found.");
  }

  return {
    radiosChecked: stronglyAgreeRadios.length,
    textAreasFilled: filledTextAreas,
  };
}

//Initiate automation and log response
handleRadiosAndTextAreas().then((result) => {
  console.log("Operation completed successfully.\n", result);
  console.log(
    `Checked ${result.radiosChecked} radio buttons and filled ${result.textAreasFilled} textareas.`
  );
});
