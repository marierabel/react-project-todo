import List from "../components/List";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footbar";

function DashBoard({ quest, setQuest }) {
  return (
    <>
      <List quest={quest} setQuest={setQuest} />
    </>
  );
}

export default DashBoard;
