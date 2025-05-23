function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const ul = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    li.addEventListener('click', function () {
        li.classList.toggle('done');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        ul.removeChild(li);
    });

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = '';
}
