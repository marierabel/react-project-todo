import data from "../tasks.json";
import { useState } from "react";
import ListItems from "./ListItems";

function List() {
  const [task, setTask] = useState(data);
  return (
    <>
      <div className="flex">
        {task.map((item, index) => {
          return (
            <ListItems
              item={item}
              setTask={setTask}
              index={index}
              task={task}
            />
          );
        })}
      </div>
    </>
  );
}

export default List;
