import { Route, Routes } from "react-router-dom";
import { HabitsPage } from "./pages/HabitsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { TodaysHabitsPage } from "./pages/TodaysHabitsPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/habitos' element={<HabitsPage />} />
      <Route path='/cadastro' element={<SignUpPage />} />
      <Route path='/hoje' element={<TodaysHabitsPage />} />
      <Route path='/historico' element={<HistoryPage />} />
      <Route path='*' element="404"/> 
    </Routes>
  );
}

export default App;
