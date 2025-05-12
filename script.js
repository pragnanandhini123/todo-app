document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskValue = taskInput.value;

    if (taskValue !== "") {
        let li = document.createElement('li');
        li.textContent = taskValue;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('task-list').appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
});
