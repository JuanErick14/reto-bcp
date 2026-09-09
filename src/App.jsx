import Header from './components/Header'
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import Form from './components/Form'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="landing-container">
      <Header />
      <main>
        <Banner />
        <Benefits />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default App