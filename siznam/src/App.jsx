import Layout from "../components/layout/Layout";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Employee from "../components/sidebar/Employee";
import Draft from "../components/sidebar/Draft";

const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "user/bilal"), {
      id: 1,
      name: "bilal",
      age: 29,
    });
  };
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="employee-record" element={<Employee />} />
            <Route path="drafts" element={<Draft />} />
          </Route>
        </Routes>
      </Router> */}
      <div>
        <button onClick={putData}>Put Data</button>
      </div>
    </>
  );
}

export default App;
