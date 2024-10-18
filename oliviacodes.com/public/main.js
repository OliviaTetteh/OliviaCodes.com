// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  // Example of accessing the root element
  const rootElement = document.getElementById("root");

  // If you have a React app, you would typically render your app here
  if (rootElement) {
    // Assuming you are using React
    // ReactDOM.render(<App />, rootElement);
    rootElement.textContent = "Welcome to Olivia's Portfolio!"; // Placeholder content
  }

  // Add any additional JavaScript functionality as needed
  // Example: Adding an event listener to a button
  const exampleButton = document.getElementById("exampleButton");
  if (exampleButton) {
    exampleButton.addEventListener("click", function() {
      alert("Button clicked!");
    });
  }
});
