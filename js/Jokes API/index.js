    async function getJoke() {
      try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        document.getElementById("joke").innerHTML = 
          `<strong>${data.setup}</strong><br>${data.punchline}`;
      } catch (error) {
        document.getElementById("joke").textContent = "Oops! Couldn’t fetch a joke 😢";
      }
    }