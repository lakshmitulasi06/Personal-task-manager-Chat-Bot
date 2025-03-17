function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if (noteInput.value.trim() === '') {
        alert('Please enter a note.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = noteInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        noteList.removeChild(li);
    };

    li.appendChild(deleteButton);
    noteList.appendChild(li);

    noteInput.value = '';
}

function addEvent() {
    const eventInput = document.getElementById('eventInput');
    const eventList = document.getElementById('eventList');

    if (eventInput.value.trim() === '') {
        alert('Please enter an event.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = eventInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        eventList.removeChild(li);
    };

    li.appendChild(deleteButton);
    eventList.appendChild(li);

    eventInput.value = '';
}

function addReminder() {
    const reminderInput = document.getElementById('reminderInput');
    const reminderList = document.getElementById('reminderList');

    if (reminderInput.value.trim() === '') {
        alert('Please enter a reminder.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = reminderInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        reminderList.removeChild(li);
    };

    li.appendChild(deleteButton);
    reminderList.appendChild(li);

    reminderInput.value = '';
}
