import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./providers";
import { Layout } from "./components";

import {
  Admissions,
  Events,
  Calendar,
  News,
  Contact,
  AtlasQuiz,
} from "./pages";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<></>} />
            <Route path="/admission" element={<Admissions />} />
            <Route path="/atlas-quiz" element={<AtlasQuiz />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<>Not found!</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
