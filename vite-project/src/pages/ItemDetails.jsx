import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CreateForm from "./Form";

function ItemDetails({ quest, setQuest }) {
  const [active, setActive] = useState(false);
  const id = useParams();
  console.log(id.index);
  const index = quest.findIndex((que) => que.id === id.index);

  return (
    <>
      <div className="test">
        <p>{quest[index].task}</p>
        <p>{quest[index].completed ? "Completed" : "Not Completed"}</p>
        <button
          onClick={() => {
            setActive(true);
            console.log(id.index);
          }}
        >
          Edit
        </button>
        {active && (
          <CreateForm
            quest={quest}
            setQuest={setQuest}
            editMode={true}
            id={index}
          />
        )}
      </div>
    </>
  );
}

export default ItemDetails;
