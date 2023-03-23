import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import { useSelector, useDispatch } from "react-redux"
import { calculateTotals } from "./redux/cartSlice"
import Modal from "./components/Modal"

function App() {
  const cartItems = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  )
}
export default App
