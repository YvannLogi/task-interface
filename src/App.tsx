import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
