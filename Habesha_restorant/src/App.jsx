import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MenuPage from "./Food and Drink/menu-page"
import Home from "./Home page/parent"
function App() {
  return (
    <Router>
      <div >
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
