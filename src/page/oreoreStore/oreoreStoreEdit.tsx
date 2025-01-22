import { Link } from "react-router-dom";
import { Context } from "../../Provider/useContextProvider";
import React from "react";

export default function OreoreStoreEdit() {
  const context = React.useContext(Context);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>ぽちぽち数:{context.count}</p>
      <Link to="/useSyncExternalStoreHome" children={"oreoreStoreHomeに戻るるる"} />
      <br />
      <Link to="/" children={"home"} />
    </div>
  );
}
