import done from "../assets/true.png";
import todo from "../assets/false.png";

function ListItems({ item, setTask, index, task }) {
  return (
    <div className="card" key={item.task}>
      <p>{item.task}</p>
      <img src={item.completed ? done : todo} alt="" />
      <button
        onClick={() => {
          const newTask = task.filter((_, id) => id !== index);
          setTask(newTask);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItems;
