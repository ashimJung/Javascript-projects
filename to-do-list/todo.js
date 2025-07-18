const add = document.querySelector('.add-btn');
const taskList = document.querySelector('.tasks ul');
const task = document.querySelector('.search-bar');
const countValue = document.querySelector('.count-value');
const error = document.querySelector('.error');

// Display task count
function displayCount(taskCount) {
  countValue.innerHTML = taskCount;
}

// Update task count
function updateCount() {
  const taskItems = taskList.querySelectorAll('li:not(.checked)');
  displayCount(taskItems.length);
  localStorage.setItem('taskNum', taskItems.length);
}

// Save task list to localStorage
function saveData() {
  localStorage.setItem('data', taskList.innerHTML);
  updateCount();
}

// Create a new task
function createTask(taskName, isChecked = false) {
  const li = document.createElement('li');
  if (isChecked) li.classList.add('checked');

  const textSpan = document.createElement('span');
  textSpan.classList.add('useradded-task');
  textSpan.textContent = taskName;
  li.appendChild(textSpan);

  const editBtn = document.createElement('button');
  editBtn.innerHTML = "Edit";

  editBtn.addEventListener('click', () => {
    const existingInput=li.querySelector('input.useradded-task')
    const existingSpan=li.querySelector('span.useradded-task')

    let currentElement=li.querySelector('.useradded-task');

    if (editBtn.innerHTML === 'Edit') {
      
      const input = document.createElement('input');
      input.classList.add('useradded-task')
      input.type = 'text';
      input.value = existingSpan.textContent;
      li.replaceChild(input, existingSpan);
       
      editBtn.innerText = "Save";

      input.addEventListener('keypress', (e) => {
        if (e.key === "Enter") editBtn.click();
      });
    } else {
      const input = li.querySelector('input.useradded-task');
      const newText = input.value.trim();
      if (newText !== '') {
        const newSpan = document.createElement('span');
        newSpan.textContent = newText;
        newSpan.classList.add('useradded-task')
        li.insertBefore(newSpan, input);
        li.removeChild(input);
        editBtn.innerHTML = "Edit";
        saveData();
      }
    }
  });
  li.appendChild(editBtn);

  const delSpan = document.createElement('span');
  delSpan.innerHTML = '&#10005';
  delSpan.addEventListener('click', () => {
    li.remove();
    saveData();
    updateCount();
  });
  li.appendChild(delSpan);

  taskList.appendChild(li);
  saveData();
  updateCount();
}

// Add task from input
add.addEventListener('click', () => {
  const taskName = task.value.trim();
  if (taskName === '') {
    error.style.display = 'block';
    setTimeout(() => error.style.display = 'none', 2000);
    return;
  }
  createTask(taskName);
  task.value = '';
});

// Add on Enter key
task.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') add.click();
});

// Toggle check/uncheck
taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
    updateCount();
  }
});

// Load tasks from storage (recreate DOM)
function showTask() {
  const saved = localStorage.getItem("data");
  if (!saved) return;

  taskList.innerHTML = '';
  const temp = document.createElement('div');
  temp.innerHTML = saved;
  const listItems = temp.querySelectorAll('li');

  listItems.forEach(item => {
    const taskText = item.querySelector('span')?.textContent?.trim() || '';
    const isChecked = item.classList.contains('checked');
    if (taskText) createTask(taskText, isChecked);
  });
}

showTask();



 
   
 
 
