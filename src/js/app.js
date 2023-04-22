const buttonAddTasks = document.querySelector(".button-add-task");
const inputTasks = document.querySelector(".input-task");
const completeList = document.querySelector(".list-tasks");

let myList = [];

const addNewTasks = () => {
  myList.push({
    task: inputTasks.value,
    completed: false,
  });

  inputTasks.value = "";

  showTasks();
};

const showTasks = () => {
  let newLi = "";

  myList.forEach((item, index) => {
    newLi =
      newLi +
      `
     <li class="task ${item.completed && "done"}">
			<img  src="/src/img/check.svg" alt="task-completed" onclick="taskCompleted(${index})">
				<p>${item.task}</p>
				<img src="/src/img/trash.svg" alt="delete-task" onclick="deleteTask(${index})">
		</li>`;
  });

  completeList.innerHTML = newLi;

  localStorage.setItem("list", JSON.stringify(myList));
};

const taskCompleted = (index) => {
  myList[index].completed = !myList[index].completed;

  showTasks();
};

const deleteTask = (index) => {
  myList.splice(index, 1);

  showTasks();
};

const reloadTasks = () => {
  const localStorageTasks = localStorage.getItem("list");

  if (localStorageTasks) {
    myList = JSON.parse(localStorageTasks);
  }

  showTasks();
};
reloadTasks();
buttonAddTasks.addEventListener("click", addNewTasks);
