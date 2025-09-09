    function getJoke() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://official-joke-api.appspot.com/random_joke", true);

      xhr.onload = function() {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          document.getElementById("joke").innerHTML =
            `<strong>${data.setup}</strong><br>${data.punchline}`;
        } else {
          document.getElementById("joke").textContent = "Oops! Couldn’t fetch a joke 😢";
        }
      };

      xhr.onerror = function() {
        document.getElementById("joke").textContent = "Network error occurred 😢";
      };

      xhr.send();
    }