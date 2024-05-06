import done from "../assets/true.png";
import todo from "../assets/false.png";
import { Link } from "react-router-dom";

function ListItems({ item, setQuest, index, quest }) {
  return (
    <div className="card">
      <Link to={`/details/${item.id}`} key={item.task}>
        <p>{item.task}</p>
        <img src={item.completed ? done : todo} alt="" />
      </Link>
      <button
        onClick={() => {
          const newTask = quest.filter((_) => _.id !== item.id);
          setQuest(newTask);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItems;
