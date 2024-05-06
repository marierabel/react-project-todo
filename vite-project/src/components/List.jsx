import ListItems from "./ListItems";

function List({ quest, setQuest }) {
  return (
    <>
      <div className="flex">
        {quest.map((item, index) => {
          return (
            <ListItems
              item={item}
              setQuest={setQuest}
              index={index}
              quest={quest}
            />
          );
        })}
      </div>
    </>
  );
}

export default List;
