import Header from './components/Header'
import Trip from './components/Trip'
import TripsData from './data/Data'
import './App.css'

function App() {
  let trips = TripsData.map(trip => <Trip {...trip} />)
  return (
    <div className="App">
      <Header />
      <main className='travel-main'>
        {trips}
      </main>
    </div>
  )
}

export default App
