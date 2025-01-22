import { Route, Routes } from "react-router-dom";
import UseContextEdit from "./page/useContext/useContextEdit";
import UseContextHome from "./page/useContext/useContextHome";
import { ContextProvider } from "./Provider/useContextProvider";
import Home from "./page/home";
import ReduxHome from "./page/redux/reduxHome";
import ReduxEdit from "./page/redux/reduxEdit";
import OreoreStoreHome from "./page/oreoreStore/oreoreStoreHome";
import OreoreStoreEdit from "./page/oreoreStore/oreoreStoreEdit";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useContextHome" element={<UseContextHome />} />
        <Route path="/useContextEdit" element={<UseContextEdit />} />
        <Route path="/reduxHome" element={<ReduxHome />} />
        <Route path="/reduxEdit" element={<ReduxEdit />} />
        <Route path="/useSyncExternalStoreHome" element={<OreoreStoreHome />} />
        <Route path="/useSyncExternalStoreEdit" element={<OreoreStoreEdit />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
