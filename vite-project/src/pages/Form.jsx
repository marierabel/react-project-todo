import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateForm({ quest, setQuest, editMode, id, setActive }) {
  const navigate = useNavigate();
  const emptyForm = {
    task: editMode ? quest[id].task : "",
    completed: editMode ? quest[id].completed : false,
  };

  console.log(editMode);
  const [taskForm, setTaskForm] = useState(emptyForm);

  function handleSubmit(event) {
    event.preventDefault();
    if (taskForm.id) {
      const taskToEditIndex = quest.findIndex((que) => que.id === taskForm.id);

      setTaskForm([
        ...quest.slice(0, taskToEditIndex),
        ...quest.slice(taskToEditIndex + 1),
        taskForm,
      ]);
    } else {
      setQuest([...quest, { ...taskForm, id: (quest.length + 1).toString() }]);
      navigate("/");
      return;
    }
    setTaskForm(emptyForm); // we always reset the form after submission
  }

  function handleChange(event) {
    event.preventDefault();
    const inputEl = event.target;

    setTaskForm({
      ...taskForm,

      [inputEl.name]:
        inputEl.type === "checkbox" ? inputEl.checked : inputEl.value,
    });
  }

  function handleEdit(event) {
    event.preventDefault();

    const taskToEdit = quest.find((_, idx) => idx === id);

    taskForm.id = taskToEdit.id;

    setTaskForm(taskForm);

    setActive(false);

    const newquest = quest.map((item, ind) => (ind === id ? taskForm : item));
    setQuest(newquest);
  }

  return (
    <>
      <div className={editMode ? "form" : "test"}>
        <h1>{!editMode && "Handle your task"}</h1>
        <form method="post" onSubmit={editMode ? handleEdit : handleSubmit}>
          <label htmlFor="task">
            Task
            <input
              type="text"
              name="task"
              id="task"
              onChange={handleChange}
              value={taskForm.task}
            />
          </label>
          <label htmlFor="completed" className="checkbox-wrapper-2">
            <input
              type="checkbox"
              name="completed"
              id="completed"
              onChange={handleChange}
              checked={taskForm.completed}
              className="sc-gJwTLC ikxBAC"
            />
            Done
          </label>
          <input type="submit" value={(editMode ? "Edit" : "Add") + " Task"} />
        </form>
      </div>
    </>
  );
}

export default CreateForm;
