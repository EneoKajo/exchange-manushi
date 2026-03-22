import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;