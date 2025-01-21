import { Route, Routes } from "react-router-dom";
import Edit from "./page/edit";
import Home from "./page/home";
import { ContextProvider } from "./Provider/useContextProvider";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
