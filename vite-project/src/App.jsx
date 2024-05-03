import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footbar";
import List from "./components/List";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <List />
      <Footer />
    </>
  );
}

export default App;
