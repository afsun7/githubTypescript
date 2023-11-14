import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container mt-9">
        <Outlet />
      </main>
    </>
  );
}

export default App;
