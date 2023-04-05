import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobposter from "./Components/Jobposter";
import Serviceworker from "./Components/Serviceworker";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobposter />}>
          <Route index element={<Jobposter />} />
        </Route>
        <Route path="/serviceworker" element={<Serviceworker />} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
