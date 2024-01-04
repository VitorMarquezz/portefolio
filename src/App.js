import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Inicio from "./paginas/Inicio";
import Habilidades from "./paginas/habilidades";
import Projetos from "./paginas/projetos";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="habilidades" element={<Habilidades />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="*" element="Pagina não encontrada" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
