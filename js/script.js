document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formStatus = document.getElementById("formStatus");
  formStatus.textContent = "Sending...";

  try {
    const response = await fetch("https://4ppe2ag751.execute-api.us-east-2.amazonaws.com/CORSv1/ContactFormHandler", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const responseData = await response.json();

    if (response.ok) {
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "green";
    } else {
      formStatus.textContent = `Error: ${responseData.message}`;
      formStatus.style.color = "red";
      console.error("Error Response:", responseData);
    }
  } catch (error) {
    formStatus.textContent = "An error occurred. Please try again.";
    formStatus.style.color = "red";
    console.error("Network Error:", error);
  }
});

//Test comments for REFRESH V2