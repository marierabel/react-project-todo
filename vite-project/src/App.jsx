import "./App.css";
import data from "./tasks.json";
import DashBoard from "./pages/DashBoard";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import CreateForm from "./pages/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [quest, setQuest] = useState(data);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={<DashBoard quest={quest} setQuest={setQuest} />}
        />

        <Route path="/about" Component={AboutPage} />

        <Route
          path="/details/:index"
          element={<ItemDetails quest={quest} setQuest={setQuest} />}
        />

        <Route
          path="/create"
          element={
            <CreateForm quest={quest} setQuest={setQuest} editMode={false} />
          }
        />

        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
