import { Route, Routes } from "react-router-dom"
import { PageObjective } from "./pages/objective"
import { PageOrder } from "./pages/order"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageOrder />} />
      <Route path="/objective" element={<PageObjective />} />
    </Routes>
  )
}

export default App
