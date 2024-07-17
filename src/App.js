import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ListUser from "./componets/ListUser";
import CreateUser from "./componets/CreateUser";
import EditUser from "./componets/EditUser";

function App() {
  return (
    <div className="App">
      <h1>React CRUD operation using PHP API and MySQL</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List User</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
