// Get the input area and button elements
const textInput = document.getElementById("text-input");
const speakButton = document.getElementById("speak-button");
// Add event listener to the button
speakButton.addEventListener("click", () => {
  // Get the text from the input area
  const text = textInput.value.trim();
  // Check if the text is not empty
  if (text) {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(text);
    // Set the language to English
    utterance.lang = "en-US";
    // Set the speech rate to 1 (default)
    utterance.rate = 1;
    // Set the pitch to 1 (default)
    utterance.pitch = 1;

    //speak the text
    window.speechSynthesis.speak(utterance);
    // Clear the input area
    textInput.value = "";
  }
});
