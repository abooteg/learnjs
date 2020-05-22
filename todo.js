// Массив тестовых задач
const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  // Перебираем начальный массив и создаем объект объектов
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Перечисляем элементы разметки dom
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];
  const showCompleteButton = document.querySelector(".show-complete");
  const showUnCompleteButton = document.querySelector(".show-uncomplete");

  // Вызов функции заполнения DOM
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler); // Навешиваем на событие submit формы обработчик
  listContainer.addEventListener("click", onDeleteHandler);
  listContainer.addEventListener("click", onCompleteHandler);
  showCompleteButton.addEventListener("click", showCompleteButtonHandler);
  showUnCompleteButton.addEventListener("click", showUnCompleteButtonHandler);
  // Создаем фрагмент и добавляем его на страницу
  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Не передан список задач");
      return;
    }
    const fragment = document.createDocumentFragment();
    if (isEmptyTasks(tasksList)) {
      const li = nullListItemTemplate();
      fragment.appendChild(li);
    }
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }
  // Создание шаблона li
  function listItemTemplate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2",
      "taskCompleted"
    );
    if (!completed) {
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Выполнить";
      completeBtn.classList.add("btn", "btn-success", "complete-btn");
      li.classList.remove("taskCompleted");
      li.appendChild(completeBtn);
    }
    li.setAttribute("data-task-id", _id);
    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Task";
    deleteBtn.classList.add("btn", "btn-danger", "delete-btn", "ml-auto");
    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    return li;
  }
  // Создание шаблона для пустого списка задач
  function nullListItemTemplate() {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    const span = document.createElement("span");
    span.textContent = "Список задач пуст";
    span.style.fontWeight = "bold";
    const article = document.createElement("p");
    article.textContent = "Добавьте новую задачу";
    article.classList.add("mt-2", "w-100");
    li.appendChild(span);
    li.appendChild(article);
    return li;
  }
  // Обработка события формы
  function onFormSubmitHandler(e) {
    e.preventDefault(); // Убираем перезагрузку страницы
    if (isEmptyTasks(objOfTasks)) {
      listContainer.lastElementChild.remove();
    }
    const titleValue = inputTitle.value; // Присваиваем переменной значение вводимого title
    const bodyValue = inputBody.value; // Присваиваем переменной значение вводимого body
    if (!titleValue || !bodyValue) {
      alert("Поле не может быть пустым");
      return;
    } //Проверка на пустое поле title или body
    const task = createNewTask(titleValue, bodyValue); // Объявляем переменную для новой задачи и присваиваем результат функции
    const listItem = listItemTemplate(task); // Генерируем по шаблону разметку для новой задачи
    listContainer.insertAdjacentElement("afterbegin", listItem); // Добавляем listitem в разметку
    form.reset(); // сбрасываем значение формы
  }
  // Функция создания новой задачи
  function createNewTask(title, body) {
    const newTask = {
      _id: `task-${Math.random()}`,
      completed: false,
      body,
      title,
    };
    objOfTasks[newTask._id] = newTask; // Добавляем новый объект с содержимым newTask, название объекта _id.
    return { ...newTask }; // возвращаем объект
  }
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы хотите удалить задачу(${title})?`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }
  function completeTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы хотите завершить задачу(${title})?`);
    if (!isConfirm) return isConfirm;
    objOfTasks[id].completed = true;
    return isConfirm;
  }
  function deleteTaskFromHtml(confirm, el) {
    if (!confirm) return;
    el.remove();
  }
  function completeTaskHtml(confirm, el) {
    if (!confirm) return;
    el.parentElement.classList.add("taskCompleted");
  }
  function onDeleteHandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmDeleteTask = deleteTask(id);
      deleteTaskFromHtml(confirmDeleteTask, parent);
      if (isEmptyTasks(objOfTasks)) {
        listContainer.appendChild(nullListItemTemplate());
      }
    }
  }
  function onCompleteHandler({ target }) {
    if (target.classList.contains("complete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmCompleteTask = completeTask(id);
      completeTaskHtml(confirmCompleteTask, target);
      target.remove();
    }
  }
  function showCompleteButtonHandler() {
    listContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    if (isEmptyTasks(objOfTasks)) {
      const li = nullListItemTemplate();
      fragment.appendChild(li);
    }
    Object.values(objOfTasks).forEach((task) => {
      if (task.completed) {
        const li = listItemTemplate(task);
        fragment.appendChild(li);
      }
    });
    listContainer.appendChild(fragment);
  }
  function showUnCompleteButtonHandler() {
    listContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    if (isEmptyTasks(objOfTasks)) {
      const li = nullListItemTemplate();
      fragment.appendChild(li);
    }
    Object.values(objOfTasks).forEach((task) => {
      if (!task.completed) {
        const li = listItemTemplate(task);
        fragment.appendChild(li);
      }
    });
    listContainer.appendChild(fragment);
  }
  function isEmptyTasks(tasks) {
    for (let key in tasks) {
      return false;
    }
    return true;
  }
})(tasks);
