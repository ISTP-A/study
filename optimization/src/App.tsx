import { Route, Routes } from "react-router-dom"
import PageDeferredValue from "./pages/deferred-value"
import MainPage from "./pages/menu"

function App() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/deferredvalue" element={<PageDeferredValue />} />
      </Routes>
    </main>
  )
}

export default App