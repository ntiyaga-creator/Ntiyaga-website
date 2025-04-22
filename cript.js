document.getElementById('clickHere').addEventListener('click',function() {
    alert('button clicked');
});
document.getElementById('taskForm').addEventListener('submit',function(e)
{
    e.preventDefault(); //avoid a  page to reload
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText.trim() !== ''){
        addTaskToList(taskText);
        saveTask(taskText);
        taskInput.value=";
    }
});

function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function(){
        const newText = prompt("Change Task:", span.textContent);
        if (newText !== null && newText.trim() !=='');
         span.textContent = newText.trim();
        updatelocalStorage();
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function(){
        li.remove();
        updateLocalStorage();
    };
       
li.appendChild(editBtn);
li.appendChild(deleteBtn);
taskList.appendChild(li);

        
    

