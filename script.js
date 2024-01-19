document.addEventListener('DOMContentLoaded', function () {
    const addTaskForm = document.getElementById('add-task-form');

    addTaskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTaskToList(taskText);
            taskInput.value = '';
        }
	});

    function addTaskToList(taskText) {

    }


});
