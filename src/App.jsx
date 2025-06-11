import './App.css'
import Business from './components/Business'
import PageBanner from './components/PageBanner'
import BusinessList from './components/BusinessList'
function App() {

  return (
    <div>
     <PageBanner />
     <div className='business'>
     <BusinessList />
     <BusinessList />
     <BusinessList />
      </div>
    </div>
  )
}

export default App
