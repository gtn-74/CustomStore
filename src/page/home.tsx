import "../styles/home.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>useContext</p>
        <Link to="/useContextHome">useContextHome</Link>
      </div>
      <div className="card">
        <p>useContext</p>
        <Link to="/reduxHome">ReduxHome</Link>
      </div>
      <div className="card">
        <p>useContext</p>
        <Link to="/useSyncExternalStoreHome">オレオレStoreHome</Link>
      </div>
    </>
  );
}
