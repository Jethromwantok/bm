    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      // Task text
      const span = document.createElement("span");
      span.textContent = taskText;
      span.style.cursor = "pointer";

      // Toggle completed on click
      span.addEventListener("click", function() {
        li.classList.toggle("completed");
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function() {
        li.remove();
      };

      li.appendChild(span);
      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);

      taskInput.value = ""; // Clear input
    }