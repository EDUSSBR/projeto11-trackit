import { Route, Routes } from "react-router-dom";
import { Shared } from "./components/Shared";
import { HabitsPage } from "./pages/HabitsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { TodaysHabitsPage } from "./pages/TodaysHabitsPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/habitos' element={<Shared><HabitsPage /></Shared>} />
      <Route path='/cadastro' element={<SignUpPage />} />
      <Route path='/hoje' element={<Shared><TodaysHabitsPage /></Shared>} />
      <Route path='/historico' element={<Shared><HistoryPage /></Shared>} />
      <Route path='*' element="404"/> 
    </Routes>
  );
}

export default App;
