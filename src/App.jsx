import './App.css'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Competitions from './components/Competitions'
import Competition from './components/Competition'
import NotFound from './components/NotFound'
import CompetitionDetails from './components/CompetitionDetails'

function App() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="competitions">
            <Route index element={<Competitions />} />
            <Route path="competition" element={<Competition />} />
          </Route>
          <Route path="competitionDetails/:id">
            <Route index element={<CompetitionDetails />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
