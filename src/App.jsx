import './App.css'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <>
      <SearchBar />
      <WeatherCard />
      <ErrorMessage />
    </>
  )
}

export default App
