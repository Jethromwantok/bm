// ...existing code...

// Reminder functionality
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reminder-form');
    const list = document.getElementById('reminders-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = document.getElementById('reminder-text').value;
        const date = document.getElementById('reminder-date').value;
        const time = document.getElementById('reminder-time').value;

        const reminderDiv = document.createElement('div');
        reminderDiv.className = 'reminder';
        reminderDiv.innerHTML = `
            <span class="reminder-text">${text}</span>
            <span class="reminder-datetime">${date} ${time}</span>
        `;
        list.appendChild(reminderDiv);

        form.reset();
    });
});

// ...existing code...