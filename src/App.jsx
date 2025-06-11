import './App.css'
import Business from './components/Business'
import PageBanner from './components/PageBanner'
import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <div>
     <PageBanner />
     <SearchBar />
     
     <div className='results'>
     <BusinessList />
     <BusinessList />
     <BusinessList />
      </div>
    </div>
  )
}

export default App
