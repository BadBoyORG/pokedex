import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error404 } from './pages/Error404'
import { LandingPage } from './pages/LadingPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokedex' element={<LandingPage />} />
        <Route path='/error' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}