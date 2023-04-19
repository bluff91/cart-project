import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useAppContext } from './context/context'

function App() {
  const { loading } = useAppContext()

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
