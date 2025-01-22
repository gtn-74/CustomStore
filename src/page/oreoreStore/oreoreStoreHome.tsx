import React from "react";
import "../../styles/home.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import { Link } from "react-router-dom";
import { Context } from "../../Provider/useContextProvider";

export default function OreoreStoreHome() {
  const context = React.useContext(Context);
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
        <button onClick={() => context?.setCount((prev) => prev + 1)}>
          count is {context.count}
        </button>
      </div>
      <Link to="/useSyncExternalStoreEdit">Editページ</Link>
    </>
  );
}
