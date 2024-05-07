import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CreateForm from "./Form";

function ItemDetails({ quest, setQuest }) {
  const navigate = useNavigate();
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
        {!active && (
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to the list
          </button>
        )}
        {active && (
          <CreateForm
            quest={quest}
            setQuest={setQuest}
            editMode={true}
            id={index}
            setActive={setActive}
          />
        )}
      </div>
    </>
  );
}

export default ItemDetails;
